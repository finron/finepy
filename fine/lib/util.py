import re

def remove_html_tag(html_snapt, tag='pre'):
    '''Remove named tag in html snapt'''
    if not tag:
        return html_snapt
    # pattern = re.compile(r'<('+ tag + ')>.*</(\1)>', re.DOTALL)
    pattern = atch=re.compile(r'<(pre)>(.*?)</\1>', re.DOTALL)
    rv = pattern.sub('',  html_snapt)
    return rv
