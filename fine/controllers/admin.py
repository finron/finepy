# coding: utf-8
'''
    admin.py
    ~~~~~~~~

'''
from datetime import datetime
from flask import (render_template, Blueprint, request,
                   url_for, current_app, redirect)

from fine import db
from fine.models import (Post, User, Tag, Link,
                         Comment)
from fine.lib.util import remove_html_tag

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
        content_summary = remove_html_tag(content)[:140]
        post.title = form.get('post_title', 'None')
        post.body_html = content_summary
        post.body = content
        db.session.add(post)
        db.session.commit()


@bp.route('/admin/post', methods=['GET', 'POST'])
@bp.route('/admin/post/<int:id>', methods=['GET'])
@bp.route('/admin/post/edit/<int:id>', methods=['GET', 'POST'])
def edit_post(id=None):
    if request.method == 'GET':
        if id:
            post = Post.query.get_or_404(id)
            return render_template('admin/post.html', post=post)
        post = Post()
        return render_template('admin/post.html', post=post)
    else:
        form = request.form
        if id:
            post = Post.query.get_or_404(id)
        else:
            post = Post()
        is_privacy = 'privacy' in form

        content = form.get('post_content', 'None')
        post.body = content
        content_summary =  remove_html_tag(content)[:140]
        post.body_html = content_summary
        post.title =form.get('post_title', 'None')
        post.privacy = is_privacy
        post.post_time = datetime.utcnow()
        db.session.add(post)
        db.session.commit()
        return redirect('/admin/posts.html')


@bp.route('/admin/link', methods=['GET', 'POST'])
@bp.route('/admin/link/<int:id>', methods=['GET'])
@bp.route('/admin/link/edit/<int:id>', methods=['GET', 'POST'])
def edit_link(id=None):
    if request.method == 'GET':
        if id:
            link = Link.query.get_or_404(id)
            return render_template('admin/link.html', link=link)
        link = Link()
        return render_template('admin/link.html', link=link)
    else:
        form = request.form
        if id:
            link = Link.query.get_or_404(id)
        else:
            link = Link()
        link.name = form.get('link_name', 'None')
        link.url =  form.get('link_url', 'None')
        try:
            link_weight = int(form.get('link_weight', 1))
        except:
            link_weight = 1
        link.weight = link_weight
        link.note = form.get('link_note', 'None')
        db.session.add(link)
        db.session.commit()
        return render_template('admin/links.html',
                               tab_menu='links')


@bp.route('/admin/posts', methods=['GET', 'POST'])
def posts():
    page = request.args.get('page', 1, type=int)
    query = Post.query
    pagination = query.order_by(Post.post_time.desc()).paginate(
        page, per_page=current_app.config['FINEPY_POSTS_PER_PAGE'],
        error_out=False)
    posts = pagination.items
    return render_template('admin/posts.html', posts=posts,
                           pagination=pagination,
                           tab_menu='posts')


@bp.route('/admin/comments', methods=['GET', 'POST'])
def comments():
    return ""


@bp.route('/admin/users', methods=['GET', 'POST'])
def users():
    return ""


@bp.route('/admin/links', methods=['GET', 'POST'])
def links():
    page = request.args.get('page', 1, type=int)
    query = Link.query
    pagination = query.order_by(Link.weight.desc()).paginate(
        page, per_page=current_app.config['FINEPY_POSTS_PER_PAGE'],
        error_out=False)
    links = pagination.items
    return render_template('admin/links.html', links=links,
                           pagination=pagination,
                           tab_menu='links')


@bp.route('/admin/logs', methods=['GET', 'POST'])
def logs():
    return ""


@bp.route('/admin/settings', methods=['GET', 'POST'])
def settings():
    return ""

@bp.route('/admin/', methods=['GET', 'POST'])
def search():
    return ""
