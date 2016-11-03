# coding: utf-8

from fabric.api import run, cd, prefix


def restart():
    """Restart the development env"""
    with cd('/www/finepy'):
        with prefix('source venv/bin/activate'):
            run('sudo venv/bin/supervisorctl restart finepy')


if __name__ == "__main__":
    restart()
