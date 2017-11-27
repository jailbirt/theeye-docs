[![](https://theeye.io/landpage/images/logo.png)](https://theeye.io)

![](https://github.com/patobas/docs/blob/master/eye.png)

# Contents
#### [What is TheEye?](#what-is-theeye-1)
#### [First Steps](#first-steps-1)
  * ##### [Agent Installation](#agent-installation-1)
  * ##### [Create your first resource](#create-your-first-resource-1)

## [Resources](#resources-1)
### Scripts

+ [Writing Scripts](https://github.com/theeye-io-team/theeye-docs/tree/master/scripts/write.md)

+ [Scripts RunAs](https://github.com/theeye-io-team/theeye-docs/tree/master/scripts/runas.md)

+ [Samples](https://github.com/theeye-io-team/theeye-docs/tree/master/scripts)

+ [Integrations](https://github.com/theeye-io-team/theeye-docs/tree/master/integrations)

## Other Tools
#### TheEye-CLI
+ [CLI Util](https://github.com/theeye-io-team/theeye-docs/tree/master/cli)
+ [Build Agent Binary](https://github.com/theeye-io-team/theeye-docs/tree/master/agent/binary_build.md)
----



### What is TheEye
    * A remote server managament and a monitoring tool (Devops)
    * A server provision tool
    * A task manager (with scheduler)
    * A Workflow creation tool (IFTTT)
    * A technical repository
    * An integration platform
    * A Real time support tool
    
    
If you want start from the scratch, there's a native integration with ELK and Docker: 
[TheEye MindMap](https://atlas.mindmup.com/2017/11/5fa49fd0c43311e7b5da733708907222/theeye_functional_mindmap_es/index.html)


### First Steps
To start using ThEye you will need:
1. A user account. To get an user: https://theeye.io/register
2. Install an agent on each server you would like to perform actions.
3. Create yor first resource from TheEye Web.

Once you've activated your user, you'll see the Dasboard view like this:
![](https://github.com/theeye-io/theeye-docs/blob/master/images/FirstTimeLogin.jpg)

#### Agent Installation
If it is the first time you access TheEye Website, access the link in the monitors panel where says "Click HERE to get the step by step instructions to install the Agent on Linux and Windows operating systems", otherwise go to "settings" in the left menu and get to the "installation" section.

+ Linux:

![](https://github.com/patobas/docs/blob/master/install_agent.gif)


+ Windows:

#### Create your first resource

### Resources

#### Monitors

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
