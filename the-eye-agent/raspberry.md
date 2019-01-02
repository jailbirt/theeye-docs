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

instalar con apt. el paquete build-essential es necesario para que funcione la instalacin de algunos paquetes de npm
```bash
apt-get install -y nodejs
apt-get install -y build-essential
```

con esto debería quedar instalado node. para chequearlo

```
$ npm -v
6.4.1
$ node -v
v8.14.0
```

## Configuración del servicio

una vez instalado, configuramos el servicio para que inicie el agente cada vez que prendas y apagues la rasp.

crear el archivo `/etc/systemd/system/theeye-agent.service`.
copiar y pegar el contenido del siguiente archivo [etc_systemd_system_theeye-agent.service](etc_systemd_system_theeye-agent.service)

crear el archivo `/etc/init.d/theeye-agent` .
luego copiar y pegar el contenido de este link [etc_init.d_theeye-agent](etc_init.d_theeye-agent)

