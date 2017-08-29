[![](https://theeye.io/landpage/images/logo.png)](https://theeye.io)

![](https://github.com/patobas/docs/blob/master/eye.png)

# Contents

### TheEye-CLI

+ [CLI Util](https://github.com/theeye-io-team/theeye-docs/tree/master/cli)

### Scripts

+ [Writing Scripts](https://github.com/theeye-io-team/theeye-docs/tree/master/scripts/write.md)

+ [Scripts RunAs](https://github.com/theeye-io-team/theeye-docs/tree/master/scripts/runas.md)

+ [Samples](https://github.com/theeye-io-team/theeye-docs/tree/master/scripts)

+ [Integrations](https://github.com/theeye-io-team/theeye-docs/tree/master/integrations)

----

Theeye es una herramienta Devops que permite armar un control remoto con indicadores (monitores) y acciones (tareas) customs para que vos o a quién le pases la posta pueda, de forma rápida, tomar acciones en tiempo real y desde la libertad del celular. 
También sirve para disminuir tareas de soportepasar la posta a un compañero o jefe pesado.

Theeye es un orquestador que sirve para: monitorear, ejecutar acciones, armar workflows, provisionar equipos y programar tareas. 
Theeye es un IFTTT / Zapier para Devops.

Como monitor, Theeye es superado por Zabbix o por M/Monit, ya que por ejemplo no cuenta con soporte nativo para snmp.
En cuanto a provisioning, cheff o ansible también son superiores. Nuestro enfoque es ser una plataforma integradora. 
Sí ya tenes tu monitoring armado con cloudwatch y new-relic y tu provisioning con cheff,  solo los indicadores importantes pueden estar en theeye, junto con las acciones. 
Si estas empezando de cero y querés hacer todo desde theeye, tenemos una integración nativa con la suit de ELK y Docker, con lo cual es muy sencillo.


Para crear un script lo hacemos de la siguiente manera: 

![](https://github.com/patobas/docs/blob/master/script.gif)




# Monitor

Existen cinco tipo de monitores
Nos sirve para controlar los servicios de nuestros equipos


+ Stats

Nos ofrece la posibilidad de modificar los umbrales de monitoreo de 
las estadísticas de los equipos (Host Stats Monitor) y que nos alerte cuando alcanza 
y/o supera dicho umbral.

![](https://github.com/patobas/docs/blob/master/monitor_stats.gif)

+ Script

Lo podemos usar para monitorear hosts, servicios, scripts, etc. 
Como en el siguiente ejemplo, verificamos si un bridge está levantado y funcionando.

![](https://github.com/patobas/docs/blob/master/monitor_script.gif)


+ API/WEB check

Chequea el endpoint web con el payload y se puede machear string o 200/404/500

![](https://github.com/patobas/docs/blob/master/web_api.gif)


+ Monitor - Proceso

Verifica el funcionamiento correcto de un proceso, binario, servicio. Por ej: Apache, mysql, etc.

![](https://github.com/patobas/docs/blob/master/monitor_process.gif)


# Tareas

+ Crear una tarea de tipo script. Se puede concatenar con eventos.

![](https://github.com/patobas/docs/blob/master/task-script.gif)


+ Crear una tarea de tipo endpoint API/WEB. le pega a una web/api.

[GIF]


+ Tareas Programadas (Schedule)

Las tareas se pueden programar, y en "Schedule View" se pueden ver todas las tareas que están armadas
para que se ejecuten automáticamente, ya sea tareas de backup, reinicio de servicios, etc.

![](https://github.com/patobas/docs/blob/master/schedule.gif)


+ TheEye-Agent. Instalación

+ Para instalar en Linux, lo hacemos de la siguiente manera:

![](https://github.com/patobas/docs/blob/master/install_agent.gif)

+ [Build Agent Binary](https://github.com/theeye-io-team/theeye-docs/tree/master/agent/binary_build.md)

# Templates

[GIF]

# Webhooks
+ Forma de acceder desde otro sistema, genera un link que al pegarle puede ejecutar una tarea si está vinculada.

[GIF]
