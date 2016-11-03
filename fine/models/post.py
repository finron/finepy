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

from flask import url_for
from fine import db
from .tag import Tag
from .user import User
from .comment import Comment
from fine.exceptions import ValidationError


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
    # ForeignKey tags.id
    tag_id = db.Column(db.Integer)
    tags = db.relationship('Tag', foreign_keys=[tag_id],
                           primaryjoin='Post.tag_id == Tag.id',
                           backref='posts')

    def __init__(self, *args, **kwargs):
        super(Post, self).__init__(*args, **kwargs)

    def __repr__(self):
        return '<Post {%r}>'.format(self.title)

    @staticmethod
    def generate_fake(count=50):

        seed()
        u_query = User.query
        t_query = Tag.query
        user_count = u_query.count()
        tag_count = t_query.count()
        if not user_count:
            user_count = 1

        for i in xrange(count):
            u = u_query.offset(randint(0, user_count-1)).first()
            tag = t_query.offset(randint(0, tag_count-1)).first().id
            tags = t_query.offset(randint(0, tag_count-1)).first()
            p = Post(title=forgery_py.lorem_ipsum.title(),
                     body=forgery_py.lorem_ipsum.sentences(randint(1, 5)),
                     post_time=forgery_py.date.date(True),
                     author=u, tags=tags, tag_id=tag)
            db.session.add(p)
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

db.event.listen(Post.body, 'set', Post.on_changed_body)
