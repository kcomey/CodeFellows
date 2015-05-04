#!/bin/bash
sudo npm update -g npm
sudo npm init
sudo npm install grunt --save-dev
sudo npm install grunt-simple-mocha --save-dev
sudo npm install grunt-contrib-jshint --save-dev
sudo npm install chai --save-dev
sudo npm install mocha --save-dev
sudo npm install grunt-jscs --save-dev

sudo echo "node_modules" > .gitignore
mkdir test
mkdir src
cp ~/CodeFellows/ProjectSetup/test_template.js test/test.js
cp ~/CodeFellows/ProjectSetup/Gruntfile.js src/Gruntfile.js


