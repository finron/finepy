# coding:utf-8
from flask import (render_template, Blueprint, request,
                   redirect, url_for, current_app,
                   flash, session)
from flask.ext.login import login_required, current_user
from sqlalchemy import func
from fine import db
from fine.models import Post, PostTag, Tag, Comment, User

bp = Blueprint('post', __name__)


@bp.route('/post/<int:id>', methods=['GET', 'POST'])
def post(id):
    '''Blog show page'''
    post = Post.query.get_or_404(id)
    if request.method == 'GET':
        page = request.args.get('page', 1, type=int)
        per_page = current_app.config['FINEPY_COMMENTS_PER_PAGE']
        if page == 0:
            page = (len(post.comments) - 1) / per_page + 1
        pagination = Comment.query.filter(Comment.post_id==post.id).order_by(
            Comment.create_time.asc()).paginate(
                page=page,
                per_page=per_page,
                error_out=False)
        comments = pagination.items
        return render_template('post.html', post=post,
                           comments=comments,
                           pagination=pagination)
    elif request.method == 'POST':
        form = request.form
        comment = Comment()
        comment.body = form['comment']
        comment.nickname = form['nickname']
        comment.email = form['email']
        comment.avatar_hash = comment.gravatar()
        comment.post_id = post.id
        if current_user and current_user.is_active:
            user = current_user._get_current_object()
            comment.nickname = user.name
            comment.email = user.email
            comment.user_id = user.id
        db.session.add(comment)
        db.session.commit()
        commentor = {'body': comment.body,
                     'email': comment.email,
                     'nickname': comment.nickname}
        session['commentor'] = commentor
        flash(u'评论成功')
        return redirect(url_for('.post', id=post.id, page=0))

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
    per_page = current_app.config['FINEPY_POSTS_PER_PAGE']
    pagination = query.join(PostTag,
        PostTag.post_id==Post.id).filter(
            PostTag.tag_id==tag_id).order_by(
                Post.id.desc()).paginate(
                    page, per_page=per_page,
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
