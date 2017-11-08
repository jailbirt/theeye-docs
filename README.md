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

Theeye es una herramienta Devops que permite armar un control remoto con indicadores/semasforos (monitores) y acciones (tareas) customs para tomar acciones en tiempo real y desde la libertad del celular. 
También sirve para disminuir tareas de soporte, poder pasar la posta a un compañero y hacer felices a los micro managers.

Theeye es un orquestador que sirve para: monitorear, ejecutar acciones, armar workflows, provisionar equipos y programar tareas. 
Theeye es un IFTTT / Zapier para Devops.

Como monitor, Theeye es superado por Zabbix o por M/Monit, ya que por ejemplo no cuenta con soporte nativo para snmp.
En cuanto a provisioning, cheff o ansible también son superiores. Nuestro enfoque es ser una plataforma integradora. 
Sí ya tenes tu monitoring armado con cloudwatch y new-relic y tu provisioning con cheff,  solo los indicadores importantes pueden estar en theeye, junto con las acciones. 
Si estas empezando de cero y querés hacer todo desde theeye, tenemos una integración nativa con la suit de ELK y Docker, con lo cual es muy sencillo.

<iframe src="https://atlas.mindmup.com/2017/11/5fa49fd0c43311e7b5da733708907222/theeye_functional_mindmap_es/index.html" width="1800" height="900"> ></iframe>

El primer paso es la instalación de un agente para que comience a reportar:

# Instalación de Agentes

+ Para instalar en Linux, lo hacemos de la siguiente manera:

![](https://github.com/patobas/docs/blob/master/install_agent.gif)

+ [Build Agent Binary](https://github.com/theeye-io-team/theeye-docs/tree/master/agent/binary_build.md)


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


# SCRIPTS
Creación de script: 

![](https://github.com/patobas/docs/blob/master/script.gif)



# Templates

![](https://github.com/patobas/docs/blob/master/template.gif)

Los templates, en este caso llamados "Provisoning", los usamos para asignar las tareas ya creadas en un host a un nuevo equipo.
Luego a la derencha donde tenemos las tasks, las vemos duplicadas pero porque apunta a diferentes servidores.


# Webhooks
Un incoming webhook es una forma de acceder desde otro sistema, a su vez genera un link que al llamar la instrucción puede ejecutarla, si es que está vinculada a una tarea (o serie de tareas)

Las tareas se pueden ejecutar con trigger on y eso arma el Workflow.

![](https://github.com/patobas/docs/blob/master/webhook.gif)


# Workflow

Un Workflow nos sirve para ver como está la estructura de las tareas, cómo se realizan y cuál es su orden correlativo.
Por ej una tarea simple de un reinicio de servicio, el Workflow lo veremos de la siguiente manera:

![](https://github.com/patobas/docs/blob/master/workflow.gif)


En cambio un Workflow del tipo Webhook, lo veremos totalmente diferente:


![](https://github.com/patobas/docs/blob/master/webhook_workflow.png)
