#!/usr/bin/env python
# coding:utf-8
"""
    permission.py
    ~~~~~~~~~~~~~
    Permissions and Role

"""

from fine import db


class Permission(object):
    READ_POST = 0x01
    WRITE_POST = 0x02
    DELETE_POST = 0x04
    FOLLOW = 0X08
    COMMENT = 0X10
    EDIT_COMMENT = 0x20
    DELETE_COMMENT = 0x40
    ADMIN = 0x7f


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    default = db.Column(db.Boolean, default=False, index=True)
    permissions = db.Column(db.Integer)

    @staticmethod
    def insert_roles():
        roles = {
            'User': (Permission.WRITE_POST |
                     Permission.COMMENT |
                     Permission.FOLLOW, True),
            'Moderator': (Permission.WRITE_POST |
                          Permission.DELETE_POST |
                          Permission.FOLLOW |
                          Permission.COMMENT |
                          Permission.EDIT_COMMENT |
                          Permission.DELETE_COMMENT, False),
            'Admin': (0xff, False)
        }

        for r in roles:
            role = Role.query.filter_by(name=r).first()
            if role is None:
                role = Role(name=r)
            role.permissions = roles[r][0]
            role.default = roles[r][1]
            db.session.add(role)
        db.session.commit()

    def __repr__(self):
        return '<Role %d>' % self.id


