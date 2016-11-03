# coding: utf-8
'''
    link.py
    ~~~~~~~

'''

import csv
import os.path

from fine import db
from fine import basedir

class Link(db.Model):
    __tablename__ =  "links"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(42))
    url = db.Column(db.String(200))
    weight = db.Column(db.Integer)
    note = db.Column(db.String(140))

    @staticmethod
    def gen_fake(count=50):
        '''Generate fake links for test'''
        data_file = os.path.join(basedir, 'test/data/links.csv')
        if os.path.exists(data_file):
            with open(data_file) as f:
                reader = csv.DictReader(f)
                for line in reader:
                    l_name = unicode(line['name'], encoding='utf-8')
                    l_url = line['url']
                    l_weight = line['weight']
                    l_note = unicode(line['note'] or '', encoding='utf-8')
                    l = Link(name=l_name, url=l_url, weight=l_weight, note=l_note)
                    db.session.add(l)
                db.session.commit()
