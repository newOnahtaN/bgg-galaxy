#!/bin/sh
npm run build
cd ./build
git add .
git commit -m 'push to gh-pages'
git push --force origin master:gh-pages
