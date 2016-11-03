#coding: utf-8
import os
basedir = os.path.abspath(os.path.dirname(__file__))


def init_env():
    '''Init the secret environ args'''

    env_file = os.path.join(basedir, '.env')
    if os.path.exists(env_file):
        print('Importing environment from .env...')
        for line in open(env_file):
            var = line.strip().split('=')
            if len(var) == 2:
                os.environ[var[0]] = var[1]

class Config():
    '''Init app config'''
    init_env()
    SECRET_KEY = (os.environ.get('SECRET_KEY') or
        '\x81<\x0f\x00^\x9a3X/\xd4\xfe\x05\xf5'
        '\xd5c\x9brg\xc0\xe9\x8a(\xc4\x11')

    SSL_DISABLE = False
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_RECORD_QUERIES = True
    MAIL_SERVER = 'smtp.sina.com'
    MAIL_PORT = 25
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False

    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    FINEPY_MAIL_SUBJECT_PREFIX = '[finepy.com]'
    FINEPY_MAIL_SENDER = os.environ.get('FINEPY_MAIL_SENDER')
    FINEPY_ADMIN = os.environ.get('FINEPY_ADMIN')
    # FINE_ADMIN 为 第一个Admin的 用户名默认finron
    FINE_ADMIN = os.environ.get('FINE_ADMIN')
    MAIL_DEFAULT_SENDER = os.getenv('MAIL_DEFAULT_SENDER')
    FINEPY_POSTS_PER_PAGE = 10
    FINEPY_FOLLOWERS_PER_PAGE = 30
    FINEPY_COMMENTS_PER_PAGE = 30
    FINEPY_SLOW_DB_QUERY_TIME = 0.5

    SQLALCHEMY_TRACK_MODIFICATIONS = True
    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')


class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('TEST_DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data-test.sqlite')
    WTF_CSRF_ENABLED = False


class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data.sqlite')

    @classmethod
    def init_app(cls, app):
        Config.init_app(app)

        # email errors to the administrators
        import logging
        from logging.handlers import SMTPHandler
        credentials = None
        secure = None
        if getattr(cls, 'MAIL_USERNAME', None) is not None:
            credentials = (cls.MAIL_USERNAME, cls.MAIL_PASSWORD)
            if getattr(cls, 'MAIL_USE_TLS', None):
                secure = ()
        mail_handler = SMTPHandler(
            mailhost=(cls.MAIL_SERVER, cls.MAIL_PORT),
            fromaddr=cls.FINEPY_MAIL_SENDER,
            toaddrs=[cls.FINEPY_ADMIN],
            subject=cls.FINEPY_MAIL_SUBJECT_PREFIX + ' Application Error',
            credentials=credentials,
            secure=secure)
        mail_handler.setLevel(logging.ERROR)
        app.logger.addHandler(mail_handler)


class LinuxConfig(ProductionConfig):
    @classmethod
    def init_app(cls, app):
        ProductionConfig.init_app(app)

        # log to syslog
        import logging
        from logging.handlers import SysLogHandler
        syslog_handler = SysLogHandler()
        syslog_handler.setLevel(logging.WARNING)
        app.logger.addHandler(syslog_handler)


class ForgeConfig(LinuxConfig):
    """Mysql database"""
    FINEPY_MYSQL_UP = os.environ.get('FINEPY_MYSQL_UP') or ''
    DB_SUFFIX = os.environ.get('FINEPY_MYSQL_SUFFIX') or 'test'
    SQLALCHEMY_DATABASE_URL = 'mysql://' + FINEPY_MYSQL_UP + \
        '@localhost/finedb' + DB_SUFFIX


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'linux': LinuxConfig,

    'default': DevelopmentConfig
}
