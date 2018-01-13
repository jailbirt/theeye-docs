

# TheEye Agent.


## Linux How To

At this moment the supported distributions by the instalation script are (we are working in a binary distribution)

> ubuntu   
> debian   
> centos   
> redhat   
> fedora   


## Windows Installer.

To get the last version of the Windows installer , please contact us.
We will provide you a installer of the last versión for you platform.

### Prerequisites

First, go to [TheEye Web Site](https://theeye.io) and create and account.
After you receive you account credential , singin and go to the profile page.
There you will found the agent credentials and the installation program.

To install the agent you will only need the installation script or programm provided for your platform and operating system distribution.
If you need to debug o manually install the agent, keep reading.

## Manual Instalation from sources (binary for your platform is not available)

### Before Start

+ Is not mandatory, but your will get more benefits if you install the agent with admin privileges.   
+ [NodeJS](https://nodejs.org/en/) ( minimal v0.12 or higher. v6 recomended )    
+ NPM (part of the node toolkit. version 3 or higher)    

This how to was writen in Linux. If your platoform can run NodeJS, then you can go ahead and try to install the agente. Please, contact us if you need any support.

### Step 1.

create a directory to contain the agent. eg.      

```sh
mkdir /opt/theeye-agent
```

download the sources (lastest - production version).    

```sh
cd /opt/; git clone https://github.com/interactar/theeye-agent
```

### Step 2.

create a configuration file using the default empty template

```sh
mkdir /etc/theeye; cp /opt/theeye-agent/misc/theeye/theeye.conf /etc/theeye/theeye.conf
```

### Step 3.

setup the configuration file

OPTIONAL. get the agent version and update the config file with it. The will be reported from the web panel

```sh
git describe
```

This is the configuration file. You would get the values to fill in from the [Web](https://theeye.io/profile)

```sh
#!/bin/bash
# export all vars hereunder
set -a
THEEYE_SUPERVISOR_CLIENT_ID=''
THEEYE_SUPERVISOR_CLIENT_SECRET=''
THEEYE_SUPERVISOR_CLIENT_CUSTOMER=''

# were to put the downloaded scripts
THEEYE_AGENT_SCRIPT_PATH='/opt/theeye-agent/scripts'

# log level. do not change to log only errors.
# use * only for debug , or the log file will fill very fast
THEEYE_AGENT_DEBUG='eye:*:error'

# you probably want this to be reported.
# if you download the source get the version with `git describe`
THEEYE_AGENT_VERSION=''

# this is the theeye api url.
THEEYE_SUPERVISOR_API_URL=''

# if you need a proxy it is time to set it
#http_proxy=""
#https_proxy=""

# Environment
NODE_ENV='production'
```

### Step 4.

install dependencies.

```sh
cd /opt/theeye; npm install
```

### Step 5.
run the agent.

```sh
cd /opt/theeye; ./run.sh
```

## Optional Arguments.

optional arguments are passsed via shell environment.

`THEEYE_CLIENT_HOSTNAME='myawesomehost.com' ./run.sh`

if you want to use any option as a default settings, you can set it in the config file.


### More Options.

to set a custom hostname. this will be used to register the agent and the host agains the api. hostname-customer combination **MUST** be unique.

> THEEYE_CLIENT_HOSTNAME='the_hostname_you_want'


### Offline Installation

### Step 1.

download the sources (https://s3.amazonaws.com/theeye.agent/linux/theeye-agent64.tar.gz).    

```sh
cd /opt/; sudo tar -xvf ./theeye-agent64.tar.gz
```

### Step 2.

create a configuration file using the default empty template

```sh
mkdir /etc/theeye; cp /opt/theeye-agent/misc/theeye/theeye.conf /etc/theeye/theeye.conf
```




