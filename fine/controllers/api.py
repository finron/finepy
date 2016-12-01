# -*- coding: utf-8 -*-
'''
    api.py
    ~~~~~~
    Restful api for ajax
'''
from flask import Blueprint, request, jsonify

from fine import db, csrf
from fine.models import (User, Post,
                         Link, Comment)

bp = Blueprint('api', __name__)

@csrf.exempt
@bp.route('/api/links/delete', methods=['POST'])
def links_delete():
    removelist = request.json
    l_query = Link.query
    for item in removelist:
        link = l_query.filter(Link.id == int(item)).first()
        if link:
            db.session.delete(link)
            db.session.commit()
    return jsonify(success=True,
                   message="success")


@csrf.exempt
@bp.route('/api/comments/delete', methods=['POST'])
def comments_delete():
    removelist = request.json
    q = Comment.query
    for item in removelist:
        comment = q.filter(Comment.id == int(item)).first()
        if comment:
            db.session.delete(comment)
            db.session.commit()
    return jsonify(success=True,
                   message="success")


@csrf.exempt
@bp.route('/api/posts/delete', methods=['POST'])
def posts_delete():
    removelist = request.json
    q = Post.query
    for item in removelist:
        post = q.filter(Post.id == int(item)).first()
        if post:
            post.delete()
    return jsonify(success=True,
                   message="success")
