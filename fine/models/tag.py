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
    note = db.Column(db.String(140))

    def __init__(self, *args, **kwargs):
        super(Tag, self).__init__(*args, **kwargs)

    def __repr__(self):
        return '<Tag %d>' % self.id

    @staticmethod
    def generate_fake():
        rv = ['Python', 'Linux', 'C',
              'stackoverflow', 'JavaScript', 'Alogrithms',
              'Vim', 'Nginx', 'Flask',
              'SQLAlchemy', 'Java', 'jQuery',
              'SQL', 'Tornado', 'Werkzeug'
              ]
        for i, x in enumerate(rv, 1):
            t = Tag.get_one(x)
            if t:
                t.weight += 1
                db.session.commit()
                continue
            t = Tag(name=x, weight=i,
                    note='test'+str(i))
            db.session.add(t)
        db.session.commit()

    @staticmethod
    def get_posts(self):
        ''' Get posts '''
        from .post import PostTag
        posttag = PostTag.query.filter(PostTag.tag_id == self.id).first()
        if posttag:
            return posttag.posts

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
