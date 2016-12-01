# coding:utf-8

"""
    post.py
    ~~~~~~~
    Post Model

"""

from datetime import datetime
from markdown import markdown
from random import seed, randint

import bleach
import forgery_py

from flask import url_for,flash
from fine import db
from .tag import Tag
from .user import User
from fine.exceptions import ValidationError


class PostTag(db.Model):
    '''Post Tag many to many relationship'''

    __tablename__ = 'post_tag'
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer)
    tag_id = db.Column(db.Integer)
    tags = db.relationship('Tag', foreign_keys=[tag_id],
                           primaryjoin='PostTag.tag_id == Tag.id',
                           backref='post_tags', lazy='joined')
    posts = db.relationship('Post', foreign_keys=[post_id],
                            primaryjoin='PostTag.post_id == Post.id',
                            backref='post_tags', lazy='joined')

    # def get_post(self):
    #     post = Post.query.filter(Post.id==self.post_id).first()
    #     return post

    # def get_tags(self):
    #     post = self.get_post()
    #     if post:
    #         post.tags

    # def get_tag(self):
    #     tag = Tag.query.filter(Tag.id == self.tag_id).first()
    #     return tag

    # def get_posts(self):
    #     tag = self.get_tag()
    #     if tag:
    #         tag.posts


class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128))
    body = db.Column(db.Text)
    body_html = db.Column(db.Text)
    post_time = db.Column(db.DateTime, default=datetime.utcnow)
    # FK users.id
    author_id = db.Column(db.Integer)
    author = db.relationship('User',
                             foreign_keys=[author_id],
                             primaryjoin='Post.author_id == User.id',
                             backref='posts')
    deleted = db.Column(db.Boolean, default=False)
    allow_comment = db.Column(db.Boolean, default=True)
    privacy = db.Column(db.Boolean, default=False)

    def __init__(self, *args, **kwargs):
        super(Post, self).__init__(*args, **kwargs)

    def __repr__(self):
        return '<Post {%d}>'.format(self.id)


    def get_tags(self):
        ''' Get tags'''
        # select tags.* from tags
        # left join post_tag on tags.id = post_tag.tag_id 
        # where post_tag.post_id = self.id
        tags = Tag.query.join(
            PostTag, Tag.id==PostTag.tag_id).filter(
                PostTag.post_id == self.id).all()
        return tags

    @staticmethod
    def generate_fake(count=50):
        from .comment import Comment
        seed()
        u_query = User.query
        t_query = Tag.query
        user_count = u_query.count()
        tag_count = t_query.count()
        if not user_count:
            user_count = 1

        for i in xrange(count):
            u = u_query.offset(randint(0, user_count-1)).first()
            if u:
                author_id = u.id
            p = Post(title=forgery_py.lorem_ipsum.title(),
                     body=forgery_py.lorem_ipsum.sentences(randint(1, 50)),
                     post_time=forgery_py.date.date(True),
                     author_id=author_id)
            db.session.add(p)
            # add tags
            for t_i in xrange(randint(1, 5)):
                tag = t_query.offset(randint(0, tag_count-1)).first()
                tag_id = tag.id
                p_t = PostTag(post_id=p.id, tag_id=tag_id)
                db.session.add(p_t)
            # add comments
            c_count = randint(1, 42)
            Comment.generate_fake(p.id, c_count)
        db.session.commit()

    @staticmethod
    def on_changed_body(target, value, oldvalue, initiator):
        allowed_tags = ['a', 'abbr', 'acronym', 'b', 'blockquote', 'code',
                        'em', 'i', 'li', 'ol', 'pre', 'strong', 'ul',
                        'h1', 'h2', 'h3', 'p']
        target.body_html = bleach.linkify(bleach.clean(
            markdown(value, output_format='html'),
            tags=allowed_tags, strip=True))

    def to_json(self):
        json_post = {
            'url': url_for('api.get_post', id=self.id, _external=True),
            'body': self.body,
            'body_html': self.body_html,
            'post_time': self.post_time,
            'author': url_for('api.get_user', id=self.author_id,
                              _external=True),
            'comments': url_for('api.get_post_comments', id=self.id,
                                _external=True),
            'comment_count': self.comments.count()
        }
        return json_post

    @staticmethod
    def from_json(json_post):
        body = json_post.get('body')
        if body is None or body == '':
            raise ValidationError('post must have a body')
        return Post(body=body)

    @classmethod
    def get_page(cls, offset, limit, **kwargs):
        query = cls.query
        for key in kwargs:
            query = query.filter(cls.__dict__[key] == kwargs[key])

        query = query.order_by(cls.post_id.desc())
        return query.limit(limit).offset(offset).all()

    def delete(self):
        ''' Delete post'''
        # delete comments first
        # delete minus tags first or delete tag when zero??
        # delete post
        from .comment import Comment
        post_id = self.id
        Comment.query.filter_by(post_id=post_id).delete()
        db.session.commit()

        tags = self.get_tags()
        if tags:
            for tag in tags:
                tag.weight -= 1
                if tag.weight <= 0:
                    db.session.delete(tag)
                    db.session.commit()
                    continue
                db.session.commit()

                # delete post_tag row
                post_tag = self.post_tags
                if not post_tag:
                    continue
                for p_t in post_tag:
                    db.session.delete(p_t)
                    db.session.commit()
        db.session.delete(self)
        db.session.commit()


db.event.listen(Post.body, 'set', Post.on_changed_body)
