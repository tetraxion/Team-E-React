#! /usr/bin/bash
git pull --no-rebase
git add .
git commit -am "note Push: `date +'%d-%m %H:%M'` "
git push
