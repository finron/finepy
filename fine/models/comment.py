# coding:utf-8
"""
    comment.py
    ~~~~~~~~~~
"""
import hashlib
from flask import request
from datetime import datetime
from markdown import markdown
import bleach
from fine.exceptions import ValidationError
from fine.models import User
from fine import db


class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(64))
    email = db.Column(db.String(64))
    ipaddr = db.Column(db.String(20))
    body = db.Column(db.Text)
    body_html = db.Column(db.Text)
    create_time = db.Column(db.DateTime, default=datetime.utcnow)
    deleted = db.Column(db.Boolean)
    user_id = db.Column(db.Integer)
    # FK posts.id
    post_id = db.Column(db.Integer)
    post = db.relationship('Post', foreign_keys=[post_id],
                           primaryjoin='Comment.post_id == Post.id',
                           backref='comments')

    # ref to comments.id
    comment_id = db.Column(db.Integer)
    avatar_hash = db.Column(db.String(32))

    def __init__(self, *args, **kwargs):
        super(Comment, self).__init__(*args, **kwargs)

    def __repr__(self):
        return '<Comment %r>' % self.body

    def gravatar(self, size=24, default='identicon', rating='g'):
        """Generate avatar

        #TODO maybe changed to https://github.com/maethor/avatar-generator
        """
        user = self.get_user();
        if user:
            return user.gravatar()
        if request.is_secure:
            url = 'https://secure.gravatar.com/avatar'
        else:
            url = 'http://cn.gravatar.com/avatar'
        hash = self.avatar_hash or hashlib.md5(
            self.email.encode('utf-8')).hexdigest()
        return '{url}/{hash}?s={size}&d={default}&r={rating}'.format(
            url=url, hash=hash, size=size, default=default, rating=rating)

    def get_user(self):
        if self.user_id:
            user = User.get_id(self.user_id)
            return user

    def get_ref_comment(self):
        '''Get source comment info when comment on comment'''
        if self.comment_id:
            ref_comment = Comment.query.filter(
                Comment.id==self.comment_id).first()
            return ref_comment


    @staticmethod
    def on_changed_body(target, value, oldvalue, initiator):
        allowed_tags = ['a', 'abbr', 'acronym', 'b', 'code', 'em', 'i',
                        'strong']
        target.body_html = bleach.linkify(bleach.clean(
            markdown(value, output_format='html'),
            tags=allowed_tags, strip=True))

    def to_json(self):
        json_comment = {
            'url': url_for('api.get_comment', id=self.id, _external=True),
            'post': url_for('api.get_post', id=self.post_id, _external=True),
            'body': self.body,
            'body_html': self.body_html,
            'create_time': self.create_time,
            'author': url_for('api.get_user', id = self.author_id,
                              _external=True),
        }
        return json_comment

    @staticmethod
    def from_json(json_comment):
        body = json_comment.get('body')
        if body is None or body =='':
            raise ValidationError('comment must have body')
        return Comment(body=body)

db.event.listen(Comment.body, 'set', Comment.on_changed_body)
