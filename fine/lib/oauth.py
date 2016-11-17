# -*- coding: utf-8 -*-
'''
oauth.py
~~~~~~~~

    Third Party Login Util
    eg: GitHub, weibo
    '''

from rauth import OAuth2Service
from flask import  (current_app, url_for, request, redirect,
                    session)


class OAuthBase(object):
    '''OAuth base class'''

    providers = None

    def __init__(self, provider_name):
        self.provider_name = provider_name
        credentails = current_app.config['OAUTH_CREDENTIALS'][provider_name]
        self.app_id = credentails['id']
        self.app_secret = credentails['secret']

    def authorize(self):
        pass

    def callback(self):
        pass

    def get_callback_url(self):
        return url_for('user.oauth_callback', provider=self.provider_name,
                       _external=True)

    @classmethod
    def get_provider(self, provider_name):
        if self.providers is None:
            self.providers = {}
            for provider_cls in self.__subclasses__():
                provider = provider_cls()
                self.providers[provider.provider_name] = provider
        return self.providers[provider_name]

class OAuthGitHub(OAuthBase):
    '''GitHub OAuth login'''

    def __init__(self):
        super(OAuthGitHub, self).__init__('github')
        self.service = OAuth2Service(
            name='github',
            client_id=self.app_id,
            client_secret=self.app_secret,
            authorize_url='https://github.com/login/oauth/authorize',
            access_token_url='https://github.com/login/oauth/access_token',
            base_url='https://api.github.com/'
        )

    def authorize(self):
        return redirect(self.service.get_authorize_url(
            scope='user:email',
            response_type='code',
            redirect_uri=self.get_callback_url())
        )

    def callback(self):
        if 'code' not in request.args:
            return None, None, None
        redirect_uri = self.get_callback_url()
        data = {'code': request.args['code'],
                'redirect_uri': redirect_uri,
                'scope':'user:email'}
        oauth_session = self.service.get_auth_session(data=data)
        user_info = oauth_session.get('user').json()
        return ('github$' + str(user_info['id']),
                user_info.get('login'),
                user_info.get('email')
        )
