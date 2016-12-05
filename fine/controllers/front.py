#!/usr/bin/env python
# coding: utf-8
'''
    front.py
    ~~~~~~~~~~~

'''

import os
import json
import urllib
from datetime import datetime
from flask import (
    request, jsonify, g, abort, render_template, flash, current_app,
    redirect, url_for, session, Blueprint)
from sqlalchemy import or_
from flask.ext.login import (
    login_user, logout_user, login_required, current_user)
from fine import db, csrf
from fine.models import (Post, Comment, User, Link,
                         Role, Permission, Tag)
from fine.email import send_email

bp = Blueprint('front', __name__)


@bp.route('/')
def index():
    '''Home'''

    # import pdb; pdb.set_trace()
    page = request.args.get('page', 1, type=int)
    query = Post.query
    pagination = query.order_by(Post.post_time.desc()).paginate(
        page, per_page=current_app.config['FINEPY_POSTS_PER_PAGE'],
        error_out=False)
    posts = pagination.items
    return render_template('index.html', posts=posts,
                           pagination=pagination)


@bp.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'GET':
        if 'username' in session:
            return redirect(url_for('.index'))
        return render_template('signin.html')
    elif request.method == 'POST':
        #TODO email or name both valid
        name_email = request.form['email']
        password = request.form['password']
        if not name_email.strip() or not password:
            flash(u'用户名/邮箱/密码错误')
            return redirect('signin.html')

        user = User.query.filter(or_(User.email==name_email,
                                        User.username==name_email)).first()
        if user and user.verify_password(password):
            remember_me = request.form.get('remeber-me')
            login_user(user, remember_me)
            return redirect(request.args.get('next') or url_for('.index'))
        flash(u'用户名密码错误')
        return render_template('signin.html')


@bp.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'GET':
        if 'username' in session:
            return redirect(url_for('.index'))
        return render_template('signup.html')
    elif request.method == 'POST':
        # import pdb; pdb.set_trace()
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        if not username.strip() or not email.strip() or not password:
            flash(u'名称/邮箱/密码空')
            return redirect('signup.html')

        user = User.query.filter(or_(User.email==email,
                                        User.username==username)).first()
        if user:
            flash(u'用户名已存在或邮箱已注册')
            return redirect(url_for('.signin'))
        if username == os.environ.get('FINEPY_ADMIN'):
            role_id = Role.query.filter(Role.name=='Admin').first().id
        else:
            role_id = Role.query.filter(Role.name=='User').first().id
        user = User(email=email, username=username,
                    password=password, role_id=role_id)
        db.session.add(user)
        db.session.commit()
        token = user.generate_confirmation_token()
        send_email(user.email, u'finepy.com 注册确认',
                   'auth/email/confirm', user=user, token=token)
        flash(u'注册确认邮件已发送到你邮箱')
        return redirect(url_for('.unconfirmed'))

@bp.route('/confirm/<token>')
@login_required
def confirm(token):
    if current_user.confirmed:
        return redirect(url_for('.index'))
    if current_user.confirm(token):
        flash(u'已验证邮箱，谢谢')
    else:
        flash(u'验证邮箱链箱无效或已失效')
    return redirect(url_for('.index'))


@bp.route('/confirm')
@login_required
def resend_confirmation():
    token = current_user.generate_confirmation_token()
    # send_email(current_user.email, u'确认邮件',
    send_email(current_user.email, u'确认邮件',
               'auth/email/confirm', user=current_user, token=token)
    flash(u'新的确认邮件已发送到你邮箱')
    return redirect(url_for('.index'))


@bp.route('/unconfirmed')
@login_required
def unconfirmed():
    if current_user.is_anonymous or current_user.confirmed:
        return redirect(url_for('.index'))
    return render_template('auth/unconfirmed.html')


@bp.route('/signout')
@login_required
def signout():
    logout_user()
    flash(u'你已退出')
    return redirect(url_for('.index'))


@bp.route('/links')
def links():
   l_items = Link.query.order_by(Link.weight.desc()).all()
   return render_template('links.html', links=l_items)
