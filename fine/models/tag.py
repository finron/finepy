# coding: utf-8
'''
    tag.py
    ~~~~~~

'''

from fine import db


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), unique=True)
    weight = db.Column(db.Integer)
    description = db.Column(db.String(140))

    def __init__(self, *args, **kwargs):
        super(Tag, self).__init__(*args, **kwargs)

    def __repr__(self):
        return '<Tag %r>' % self.name

    @staticmethod
    def gen_fake():
        rv = ['Python', 'Linux', 'C',
              'stackoverflow', 'JavaScript', 'Alogrithms',
              'Vim', 'Nginx', 'Flask',
              'SQL', 'Tornado', 'Werkzeug'
              ]
        for i, x in enumerate(rv, 1):
            t = Tag(name=x, weight=i)
            db.session.add(t)
        db.session.commit()

    @classmethod
    def get_one(cls, name):
        return cls.query.filter_by(name=name).first()

    @classmethod
    def is_empty(cls):
        return cls.query.first() is None

    @classmethod
    def get_top_x(cls, count=9):
        return cls.query.order_by(cls
                                  .weight.desc()).limit(count).all()
