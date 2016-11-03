# coding:utf-8
"""
    comment.py
    ~~~~~~~~~~
"""
from datetime import datetime
from markdown import markdown
import bleach
from fine.exceptions import ValidationError
from fine import db


class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text)
    body_html = db.Column(db.Text)
    create_time = db.Column(db.DateTime, default=datetime.utcnow)
    deleted = db.Column(db.Boolean)
    # FK users.id 
    # TODO allowed asynmonous user or not
    author_id = db.Column(db.Integer)
    author_email = db.Column(db.String(64))
    author_url = db.Column(db.String(256))
    author_ip = db.Column(db.String(20))
    # FK posts.id
    post_id = db.Column(db.Integer)
    # FK comments.id
    # comment_id = db.Column(db.Integer)

    def __init__(self, *args, **kwargs):
        super(Comment, self).__init__(*args, **kwargs)

    def __repr__(self):
        return '<Comment %r>' % self.body

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
