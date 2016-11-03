# coding:utf-8

from flask import render_template, Blueprint, request
from flask.ext.login import login_required, current_user

from fine.models import Post

bp = Blueprint('post', __name__)


@bp.route('/post/')
def post():
    '''Blog page'''
    return render_template('post.html')

@bp.route('/tags/<tag_name>')
def tag(tag_name):
    '''Show posts by Tag'''
    return render_template('post.html', tag_name=tag_name)

@bp.route('/search')
def search():
    '''Search the post'''
    return render_template('post.html')
