
# Oracle DB

## Dev Environment - Mac

### Homebrew

Install the Oracle drivers...

```bash
brew install InstantClientTap/instantclient/instantclient-basic
```

## Dev Environment - Ubuntu

### Setup using Docker 

#### Install docker (if you don't have it)

First, setup docker. The instructions for Ubuntu 20 are [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

TLDR;

```bash

sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce

# Setup daemon
sudo systemctl status docker

# (optional) add user to docker so you can run docker without sudo
# Log out and back in after
sudo usermod -aG docker ${USER}


```

#### Setup Docker container

See [here](https://github.com/wnameless/docker-oracle-xe-11g)

```bash

# Build container
git clone https://github.com/wnameless/docker-oracle-xe-11g.git
cd docker-oracle-xe-11g
docker build -t wnameless/oracle-xe-11g .

# Install container
docker pull wnameless/oracle-xe-11g-r2


```

#### Run container

See [here](https://github.com/wnameless/docker-oracle-xe-11g)

```bash

# Create and start container (allowing remote access)
docker run --name oracle11 -d -p 49161:1521 -e ORACLE_ALLOW_REMOTE=true wnameless/oracle-xe-11g-r2

# Create user/tablespace if this is the first time
# https://stackoverflow.com/questions/18403125/how-to-create-a-new-schema-new-user-in-oracle-database-11g

# Thereafer, to just run
docker start oracle11

```

#### Setup on Mac

https://oracle.github.io/node-oracledb/INSTALL.html#instosx

#### Notes

```bash

# List our images
docker images

# Remove image
docker rmi oracle11

# List all containers
docker ps

# Logs
docker logs oracle11

# Stats
docker stats oracle11

```