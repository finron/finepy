#!/usr/bin/env python
# coding:utf-8

import os

from flask import Flask, url_for, render_template, current_app
from markupsafe import Markup
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.login import LoginManager
from flask.ext.wtf import CsrfProtect
from flask.ext.moment import Moment
from flask.ext.mail import Mail
from celery import Celery
from config import Config, config, basedir

db = SQLAlchemy()
login_manager = LoginManager()
login_manager.session_protection = 'strong'
login_manager.login_view = 'front.signin'
moment = Moment()
mail = Mail()
csrf = CsrfProtect()
celery = Celery(__name__, broker=Config.CELERY_BROKER_URL)

def create_app(config_name='default'):
    app = Flask(__name__)

    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    mail.init_app(app)
    db.init_app(app)
    moment.init_app(app)
    csrf.init_app(app)
    celery.conf.update(app.config)

    before_req(app)
    login_manager.init_app(app)

    register_routes(app)

    register_jinja(app)

    return app

def before_req(app):
    '''Init request context'''
    @app.before_first_request
    def create_db():
        db.create_all()

    @app.before_request
    def init_tags():
        from .models.tag import Tag
        if Tag.is_empty():
            Tag.gen_fake()
        from flask import g
        taglist = Tag.get_top_x()
        g.sidebar = {'taglist': taglist}

    @app.errorhandler(404)
    def page_not_found(error):
        return render_template('404.html'), 404

def register_routes(app):
    """Map the http url to func"""
    from . import controllers
    from flask.blueprints import Blueprint

    for module in _import_module_from_package(controllers):
        bp = getattr(module, 'bp')
        if bp and isinstance(bp, Blueprint):
            app.register_blueprint(bp)


def register_jinja(app):
    """Init jinja environ"""

    def static(filename):
        """Generate the static url"""
        return url_for('static', filename=filename)

    def js(path):
        '''Generate script tag'''
        return Markup("<script type='text/javascript' src='%s'></script>"
            % static(path))

    def css(path):
        '''Generate link tag'''
        return Markup("<link rel='stylesheet' href='%s'>" % static(path))

    def ternary(value, x, y):
        """Ternary operator simulator
        Use This filter in templates::

            {{ is_worked | ternary('Yes', 'No') }}

        works as the following code in other language

            is_worked ? 'Yes' : 'No'
        """
        if value:
            return x
        else:
            return y

    app.jinja_env.globals.update({
        'static': static,
        'js': js,
        'css': css
    })
    app.jinja_env.filters.update({
        "ternary": ternary
    })


def _import_module_from_package(package):
    import pkgutil

    modules = []
    for importer, modname, ispkg in pkgutil.iter_modules(package.__path__,
                                        prefix=package.__name__ + "."):
        modules.append(__import__(modname, fromlist="dummy"))
    return modules
app = create_app()
