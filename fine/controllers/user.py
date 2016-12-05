# -*- coding: utf-8 -*-
'''OAuth logic'''

from flask import (render_template, Blueprint, flash, redirect,
                   url_for)
from flask_login import login_user, current_user
from fine.lib.oauth import OAuthBase
from fine import db
from fine.models import User

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
        db.session.add(user)
        db.session.commit()
    login_user(user, True)
    return redirect(url_for('front.index'))
