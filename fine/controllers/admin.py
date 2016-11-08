# coding: utf-8
'''
    admin.py
    ~~~~~~~~

'''

from flask import (render_template, Blueprint, request,
                   url_for)

from fine import db
from fine.models.post import Post

bp = Blueprint('admin', __name__)


@bp.route('/admin', methods=['GET', 'POST', 'PUT'])
def index():
    if request.method == 'GET':
        post = Post()
        return render_template('admin/index.html', post=post)
    elif request.method == 'POST':
        form = request.form
        post = Post()
        content = form.get('post_content', 'None')
        import pdb; pdb.set_trace()
        content_summary = content[:320]

        post.title = form.get('post_title', 'None')
        post.body_html = content_summary
        post.body = content
        db.session.add(post)
        db.session.commit()
        return render_template('admin/index.html', post=post)
