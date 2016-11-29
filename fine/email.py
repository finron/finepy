# -*- coding: utf-8 -*-
'''
    email.py
    ~~~~~~~~

    Send email helper
'''

from flask import current_app, render_template
from flask.ext.mail import Message

from fine import celery, mail


@celery.task
def send_async_email(msg):
    mail.send(msg)


def send_email(to, subject, template, **kwargs):
    app = current_app._get_current_object()
    sender=app.config['FINEPY_MAIL_SENDER']
    msg = Message(app.config['FINEPY_MAIL_SUBJECT_PREFIX'] + ' ' + subject,
                  sender=sender, recipients=[to])

    msg.body = render_template(template + '.txt', **kwargs)
    msg.html = render_template(template + '.html', **kwargs)
    send_async_email.delay(msg)
