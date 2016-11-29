#!/usr/bin/env python
# -*- coding: utf-8 -*-
''' 
    celery_worker
    ~~~~~~~~~~~~~

    Celery Integerate with flask'''

import os
from fine import celery, create_app

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
app.app_context().push()
