# -*- coding: utf-8 -*-
'''OAuth logic'''

from flask import (render_template, Blueprint, flash, redirect,
                   url_for, current_app, request)
from flask_login import login_user, current_user
from fine.lib.oauth import OAuthBase
from fine import db
from fine.models import (User, Permission,
                         Post, Comment, Tag)
from config import Config

bp = Blueprint('user', __name__)


@bp.route('/auth/<provider>')
def oauth_authorize(provider):
    if not current_user.is_anonymous:
        return redirect(url_for('front.index'))
    oauth = OAuthBase.get_provider(provider)
    return oauth.authorize()


@bp.route('/auth/callback/<provider>')
def oauth_callback(provider):
    if not current_user.is_anonymous:
        return redirect(url_for('front.index'))
    oauth = OAuthBase.get_provider(provider)
    social_id, username, email = oauth.callback()
    if social_id is None:
        flash(u'Third Oauth callback result is Nont,Authentication failed.')
        return redirect(url_for('front.index'))
    user = User.query.filter_by(social_id=social_id).first()
    if not user:
        user = User(social_id=social_id, username=username, email=email)
        if user.is_admin():
            user.role_id = Permission.ADMIN
        db.session.add(user)
        db.session.commit()
    elif user.is_admin():
            user.role_id = Permission.ADMIN
            db.session.commit()
    login_user(user, True)
    return redirect(url_for('front.index'))

@bp.route('/user/<user_name>/posts')
@bp.route('/user/<user_name>')
def user_home(user_name):
    return user_util(user_name)


@bp.route('/user/<user_name>/comments')
def user_comments(user_name):
    return user_util(user_name, type='comments')


def user_util(user_name, type='posts'):
    ''' User's posts or comments route helper method'''
    user = User.query.filter(User.username==user_name).first()
    if not user:
        flash(u'用户不存在')
        return redirect(url_for('front.index'))

    user_id = user.id
    page = request.args.get('page', 1, type=int)

    pagination = None

    if type == 'posts':
        query = Post.query.filter(Post.author_id==user_id)
        pagination = query.order_by(Post.post_time.desc()).paginate(
            page, per_page=current_app.config['FINEPY_POSTS_PER_PAGE'],
            error_out=False)
        posts = pagination.items
    else:
        posts = None

    if type == 'comments':
        pagination = Comment.query.filter(
            Comment.user_id==user_id).order_by(
                Comment.create_time.desc()).paginate(
                    page,
                    per_page=current_app.config['FINEPY_COMMENTS_PER_PAGE'],
                    error_out=False)
        comments = pagination.items
    else:
        comments = None
    return render_template('user/'+ type + '.html',
                           user_name=user_name,
                           posts=posts,
                           pagination=pagination,
                           comments=comments)
