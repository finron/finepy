# coding: utf-8
'''
    admin.py
    ~~~~~~~~

'''
from datetime import datetime
from flask import (render_template, Blueprint, request,
                   url_for, current_app, redirect)
from flask_login import login_required

from fine import db
from fine.models import (Post, PostTag, User, Tag, Link,
                         Comment)
from fine.lib.util import remove_html_tag
from fine.lib.decorators import admin_required

bp = Blueprint('admin', __name__)


@bp.route('/admin', methods=['GET', 'POST', 'PUT'])
@login_required
@admin_required
def index():
    if request.method == 'GET':
        post = Post()
        return render_template('admin/index.html', post=post,
                               tabmenu='posts')
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
@login_required
@admin_required
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
        tagname_list = form.get('post_tags', '')
        post_id = post.id
        t_query = Tag.query
        pt_query = PostTag.query
        for tagname in tagname_list.split(','):
            # import pdb; pdb.set_trace()
            tagname = tagname.strip()
            if not tagname:
                continue
            if post.has_tag(tagname):
                continue
            tag = t_query.filter(Tag.name==tagname).first()
            if tag:
                tag_id = tag.id
            else:
                tag = Tag(name=tagname)
                db.session.add(tag)
                db.session.commit()
                tag_id = tag.id
            if not tag.weight:
                tag.weight = 0
            tag.weight += 1

            pt = PostTag(post_id=post_id,
                         tag_id=tag_id)
            db.session.add(pt)
            db.session.commit()


        content = form.get('post_content', 'None')
        post.body = content
        content_summary =  remove_html_tag(content)[:140]
        post.body_html = content_summary
        post.title =form.get('post_title', 'None')
        post.privacy = is_privacy
        post.post_time = datetime.utcnow()
        db.session.add(post)
        db.session.commit()
        return redirect('/admin/posts')

@bp.route('/admin/link', methods=['GET', 'POST'])
@bp.route('/admin/link/<int:id>', methods=['GET'])
@bp.route('/admin/link/edit/<int:id>', methods=['GET', 'POST'])
@login_required
@admin_required
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
@login_required
@admin_required
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
@login_required
@admin_required
def comments():
    return ""


@bp.route('/admin/users', methods=['GET', 'POST'])
@login_required
@admin_required
def users():
    page = request.args.get('page', 1, type=int)
    query = User.query
    pagination = query.order_by(User.id.asc()).paginate(
        page, per_page=current_app.config['FINEPY_POSTS_PER_PAGE'],
        error_out=False)
    users = pagination.items
    return render_template('admin/users.html', users=users,
                           pagination=pagination,
                           tab_menu='users')


@bp.route('/admin/links', methods=['GET', 'POST'])
@login_required
@admin_required
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


@bp.route('/admin/user', methods=['GET', 'POST'])
@bp.route('/admin/user/<int:id>', methods=['GET'])
@bp.route('/admin/user/edit/<int:id>', methods=['GET', 'POST'])
@login_required
@admin_required
def edit_user(id=None):
    if request.method == 'GET':
        if id:
            user = User.query.get_or_404(id)
            return render_template('admin/user.html', user=user)
        user = User()
        return render_template('admin/user.html', user=user)
    else:
        form = request.form
        if id:
            user = User.query.get_or_404(id)
        else:
            user = User()
        user.username = form.get('username', 'None')
        user.email = form.get('email', 'None')
        user.name = form.get('name')
        user.confirmed = 'confirmed' in  form
        user.avatar_hash = user.gravatar()
        db.session.add(user)
        db.session.commit()
        return render_template('admin/users.html',
                               tab_menu='users')


@bp.route('/admin/logs', methods=['GET', 'POST'])
@login_required
@admin_required
def logs():
    return ""


@bp.route('/admin/settings', methods=['GET', 'POST'])
@login_required
@admin_required
def settings():
    return ""

@bp.route('/admin/', methods=['GET', 'POST'])
@login_required
@admin_required
def search():
    return ""

