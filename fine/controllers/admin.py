# coding: utf-8
'''
    admin.py
    ~~~~~~~~

'''

from flask import render_template, Blueprint

bp = Blueprint('admin', __name__)


@bp.route('/admin')
def index():
    render_template('index.html')
