# OneApp API

## Contributing & Versioning

We follow the semantic versioning convention, when you commit do so in the following manner;

```
git commit -m "fix: JIRA-1234 Fixed bug on foo"
git commit -m "feat: JIRA-2345 Adds new Widget"
git commit -m "chore: JIRA-3456 Updated README"
git commit -m 'feat: JIRA-4567 Added new theme
```

We use [standard_version](https://github.com/conventional-changelog/standard-version) to automate versioning and release notes.

Simply run `yarn run release` to bump the version number appropriately and generate release notes. Run `git push --follow-tags origin master` to publish.

## Ubuntu Setup

### Server Setup

```bash

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install build-essential -y

# Node JS (v12)
# See https://github.com/nodesource/distributions/blob/master/README.md
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Nginx 
sudo apt-get install nginx -y
sudo service nginx start

# Yarn (https://legacy.yarnpkg.com/en/docs/install/#debian-stable)
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update -y
sudo apt install yarn -y

# Color terminal!
# Uncomment #force_color_prompt=yes in ~/.bashrc
# save then execute source ~/.bashrc

# SSL from certbot (if needed)
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update -y
sudo apt-get install python-certbot-nginx -y
sudo certbot --nginx

# Install some dev dependencies
sudo apt-get install -y node-gyp

# User forever or pm2
sudo npm install -g forever
yarn global add pm2

# Let pm2 rotate logs and setup
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 1K
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:rotateInterval '*/1 * * * *' 
```

### Local (Mac) Setup

#### SSL

To run localhost in SSL, create a cert manually
```bash

# Install letsencrpts cert bot, if you don't have it already
brew install letsencrypt

# Manually create cert
sudo certbot certonly --manual

```

### Nginx Setup (v2.x)
 
```bash

server {

    server_name <url>;

    root <location>;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
        # Some basic cache-control for static files to be sent to the browser
        expires max;
        add_header Pragma public;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
    }


}

```
