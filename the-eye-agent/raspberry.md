# Instalación y configuración del agente en Raspberry (Debian)

para que funcione el agente en raspberry es necesario instalar node y descargar el código fuente desde github.

## Instalación de Node JS

primero instalar node. todos los comandos están siendo ejecutados como si fuera root.

la lista de comandos en orden sería la siguiente

obtener root

```bash
sudo su -
```

es conveniente actualizar el sistema de la rasp

```bash
apt full-upgrade -y
```

descargar y configurar node para ser instalado
```bash
curl -sL https://deb.nodesource.com/setup_8.x | bash -
```

instalar con apt.
el paquete build-essential es necesario para que funcione la instalacin de algunos paquetes de npm.
git lo vamos a necesitar mas adelante para descargar el código fuente del agente.

```bash
apt-get install -y nodejs
apt-get install -y build-essential git
```

con esto debería quedar instalado node. para chequearlo

```
$ npm -v
6.4.1
$ node -v
v8.14.0
```

## Instalación del agente

Para ello necesitamos instalar el comando git.
Vamos a instalar el agente en el directorio `/opt/theeye-agent`


```bash
cd /opt
git clone https://github.com/theeye-io/theeye-agent.git
cd ./theeye-agent
```

corremos el instalador para que descargue las dependencias

```
npm install
```

con esto ya quedaría instalado el agente y listo para funcionar.

### crear archivo de configuracin del agente.

primero hay que ingresar a la interfaz web de theeye [app.theeye.io](app.theeye.io) y luego ingresar al siguiente link para obtener las credenciales de acceso.

[link a credentials.json](https://app.theeye.io/api/agent/credentials)

ese archivo contiene las credenciales que necesita el agente para poder conectarse al sistema y funcionar.

creamos el archivo de configuración

```
mkdir /etc/theeye
cp /opt/theeye-agent/misc/theeye.conf /etc/theeye
vim /etc/theeye/theeye.conf
```

el archivo de configuración tiene el siguiente contenido.
los siguientes valores hay que extraerlos del archivo de credenciales

> THEEYE_SUPERVISOR_CLIENT_ID    
> THEEYE_SUPERVISOR_CLIENT_SECRET     
> THEEYE_SUPERVISOR_CLIENT_CUSTOMER       
> THEEYE_SUPERVISOR_API_URL      

el resto de los valores no es necesario modificarlos. para mas info ver [Instalación Manual del Agente](https://github.com/theeye-io/theeye-docs/blob/master/the-eye-agent/installation.md#step-3)

```
#!/bin/bash
# SAMPLE LINUX CONFIGURATION FILE
set -a
THEEYE_SUPERVISOR_CLIENT_ID='ring'
THEEYE_SUPERVISOR_CLIENT_SECRET='sauron'
THEEYE_SUPERVISOR_CLIENT_CUSTOMER='golum'
THEEYE_AGENT_SCRIPT_PATH='/tmp/'
THEEYE_AGENT_DEBUG='*eye:error*'
THEEYE_AGENT_BINARIES_PATH='/opt/theeye-agent/bin'
THEEYE_SUPERVISOR_API_URL='http://127.0.0.1:60080'
#THEEYE_CLIENT_HOSTNAME=customHostname
NODE_ENV='customer'
http_proxy=''
https_proxy=''

```


## Configuración del servicio

una vez instalado, configuramos un servicio para que inicie el agente cada vez que prendas y apagues la rasp.

crear el archivo `/etc/systemd/system/theeye-agent.service`.
copiar y pegar el contenido del siguiente archivo [etc_systemd_system_theeye-agent.service](etc_systemd_system_theeye-agent.service)

crear el archivo `/etc/init.d/theeye-agent` .
luego copiar y pegar el contenido de este link [etc_init.d_theeye-agent](etc_init.d_theeye-agent)

