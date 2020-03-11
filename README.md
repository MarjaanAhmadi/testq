
# Q-Center

## Requirements

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system(Kazoo).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone git@git.respina.net:monster-ui/qcenter.git   
or

    $ https://git.respina.net/monster-ui/qcenter.git
    
then
   
    $ cd PROJECT
    $ npm install

### Configure app

Copy `.env.example` to `.env` then edit it with the url where you have setup:

- backend api
- oauth like endpoint for auth
- development

Install dependencies that exist in package.json using this command

    $ npm install

Or if you have yarn use this

    $ yarn install

## Start & watch

    $ npm start 
    $ yarn start


## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

### `pre-commit` (≃ `npm test`)

This hook will just ensure you will commit something not broken bye pruning npm packages not in the `package.json` & eventually reinstall missings/not correctly removed packages.
Then it will try a production build.

---

## Languages & tools

### HTML

- [React-bootstrap](https://react-bootstrap.github.io/) for some templating.

### JavaScript

- [React-^16.10.1](http://facebook.github.io/react) is used.
- [React-Redux-^7.1.1](https://react-redux.js.org/) is used.
- [React-Router-dom-^5.1.2](https://reacttraining.com/react-router/web/guides/quick-start/) is used.



## Deployment

### ACDC Installation

##### Note: All versions should be stable 

#### Start module Queue

    $ sup crossbar_maintenance start_module cb_queues
    
#### Start module User

    $ sup crossbar_maintenance start_module cb_users
    
#### Start module Agent
    
    $ sup crossbar_maintenance start_module cb_agents

### Install app

    $ git clone git@git.respina.net:monster-ui/qcenter.git   
    
   or
   
    $ git clone https://git.respina.net/monster-ui/qcenter.git
   then
   
    $ git checkout nexfon-develop
    $ git pull
    $ cd qcenter
    $ npm install
    
### Configure app
    
Copy `.env.example` to `.env` then edit it with the url where you have setup:
    
    - backend api
    - oauth like endpoint for auth
    - development
    
### Build app

    $ npm run build
    $ gulp
    $ mv production qcenter
    $ scp -r qcenter $<production-dest>



## Authors

* [Marjaan Ahmadi](https://marjanahmadi.ir)

