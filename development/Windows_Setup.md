# Setup a Windows Environment for Development

## oneapp-server and oneapp-web

### Install the Following Software

Installers for the software can be found in https://github.com/newjersey/dhs-oneapp-software if you are unable to access the internet on your development machine.

* Git
  * Git for Windows
  * GitHub Desktop
  * GitLFS
* Node
  * Make sure when running the installer, you specify to install optional dependencies.
* Yarn
  * Node must be installed first
* VSCode

Restart. Node and Yarn install PATH dependencies that will not be available until after a restart.

### Clone the Repository

1. Open GitHub Desktop and clone the `newjersey/dhs-oneapp` repository.
   1. This will prompt you to login to your GitHub account
2. When GitHub Desktop asks you about initializing GitLFS, you should proceed with initializing GitLFS

### Open the Project in VSCode

1. Open VSCode
2. Under the Start section, select Open Folder
3. Open the folder where GitHub stored the cloned repository (should be `Documents/GitHub/dhs-oneapp`)
4. Open a Terminal prompt (Terminal > New Terminal)
5. If you have a internet proxy, run the following commands (replace with your real proxy information):
   1. `yarn config set "strict-ssl" false`
   2. `yarn config set proxy http://0.0.0.0:8080`
   3. `yarn config set https-proxy http://0.0.0.0:8080`

### Setup oneapp-server & oneapp-web

Follow these directions if you have admin rights and are not going through a restrictive internet proxy.

1. In the terminal prompt, run `yarn install`
2. Wait for all of the modules to download and install
3. Change the directory: `cd oneapp-server`
4. Start the oneapp-server in development mode: `yarn live`
5. Verify the server starts up without error (there will be more to do to get it functioning, but it should start at this step)

## oneapp-database

If you have admin access on your machine, and have the ability to install Docker, running the database in Docker will make development easier.

1. Follow the directions in the newjersey/dhs-oneapp-database repository to install Docker.
2. Start a local version of the database with `yarn start`