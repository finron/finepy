# coding:utf-8

from flask import (render_template, Blueprint, request,
                   redirect, url_for, current_app)
from flask.ext.login import login_required, current_user
from sqlalchemy import func

from fine.models import Post, Tag

bp = Blueprint('post', __name__)


@bp.route('/post/')
def post():
    '''Blog page'''
    return render_template('post.html')


@bp.route('/tags/<tag_name>')
def tag(tag_name):
    if tag_name:
        tag_name = tag_name.lower()
    tag = Tag.query.filter(func.lower(Tag.name)==tag_name).first()
    if not tag:
        return redirect(url_for('front.index'))
    tag_id = tag.id
    page = request.args.get('page', 1, type=int)
    query = Post.query
    pagination = query.filter(
        Post.tag_id==tag_id).order_by(Post.post_time.desc()).paginate(
        page, per_page=current_app.config['FINEPY_POSTS_PER_PAGE'],
        error_out=False)
    posts = pagination.items
    return render_template('index.html', posts=posts,
                           pagination=pagination)


@bp.route('/tags')
def taglist():
   tag_items = Tag.query.order_by(Tag.weight.desc()).all()
   return render_template('tags.html', tags=tag_items)


@bp.route('/search')
def search():
    '''Search the post'''
    return render_template('post.html')
