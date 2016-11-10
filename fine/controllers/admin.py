# coding: utf-8
'''
    admin.py
    ~~~~~~~~

'''

from flask import (render_template, Blueprint, request,
                   url_for, current_app)

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


@bp.route('/admin/posts', methods=['GET', 'POST'])
def posts():
    page = request.args.get('page', 1, type=int)
    query = Post.query
    pagination = query.order_by(Post.post_time.desc()).paginate(
        page, per_page=current_app.config['FINEPY_POSTS_PER_PAGE'],
        error_out=False)
    posts = pagination.items
    return render_template('admin/posts.html', posts=posts,
                           pagination=pagination)

@bp.route('/admin/comments', methods=['GET', 'POST'])
def comments():
    return ""


@bp.route('/admin/users', methods=['GET', 'POST'])
def users():
    return ""


@bp.route('/admin/links', methods=['GET', 'POST'])
def links():
    return ""


@bp.route('/admin/logs', methods=['GET', 'POST'])
def logs():
    return ""


@bp.route('/admin/settings', methods=['GET', 'POST'])
def settings():
    return ""

@bp.route('/admin/', methods=['GET', 'POST'])
def search():
    return ""
