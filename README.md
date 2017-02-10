# Quản Lý Điểm Học Viên

[![Build Status](https://travis-ci.org/tienthanh2509/isc-group-2-frontend.svg?branch=master)](https://travis-ci.org/tienthanh2509/isc-group-2-frontend) [![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)  

# Before play
```bash
# Install nodejs && ruby
## Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs ruby
## Windows
#https://nodejs.org/en/download/
#http://rubyinstaller.org/downloads/

# Install Bower, Grunt, Sass
npm install -g bower grunt
gem install sass

# Warning! Make sure you have private key before clone using ssh else try https instead
# Sign your commit with GPG keys
git clone git@github.com:tienthanh2509/isc-group-2-frontend.git

```

# How to play :)
```bash
cd isc-group-2-frontend

# Install npm dependencies
npm install
# Install bower dependencies
bower install

# Grunt task "grunt watch" if needed!
# Available task: default, css, js, clean, copy
grunt

# Run nodejs express server | Use PORT env for custom listening port
node app.js

```
