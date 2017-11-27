[![](https://theeye.io/landpage/images/logo.png)](https://theeye.io)

# Contents
#### [What is TheEye?](#what-is-theeye-1)
#### [First Steps](#first-steps-1)
  * ##### [Agent Installation](#agent-installation-1)
  * ##### [Check your first resource](#check-your-first-resource-1)

## [Resources](#resources-1)
### Monitors
### Tasks
### Webhooks
### Provisioning
### Users
### Organization
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
If it is the first time you access TheEye Website, click the link in the monitors panel where says "Click HERE to get the step by step instructions to install the Agent on Linux and Windows operating systems", otherwise go to "settings" in the left menu and get to the "installation" section.

+ Linux:

![](https://github.com/patobas/docs/blob/master/install_agent.gif)


+ Windows:

![](https://github.com/theeye-io/theeye-docs/blob/master/images/WindowsAgentInstall.gif)


#### Check your first resource
Check the Dashboard view after login, you should see "All up and running" in the monitors panel.


### Resources

#### Monitors
A monitor is used to check services' or resources' status. You can use this status information to take actions (e.g. run a task, send notification).
You can always customize the time between checks.

There're five kind of monitors you can set up from TheEye.

+ Stats

Checks your Hosts' stats (health) and triggers alerts when thresholds are exceeded.
You can set your own thresholds.

![](https://github.com/patobas/docs/blob/master/monitor_stats.gif)

+ Script

Create a script and use the output log to monitor a state when other monitor does not suit your needs.
This is an example script to check if a bridge is running.

![](https://github.com/patobas/docs/blob/master/monitor_script.gif)


+ API/WEB check

Sends a request to and endpoint and checks for an expected answer.
Custom payload and custom expected responses are allowed.

![](https://github.com/patobas/docs/blob/master/web_api.gif)


+ Monitor - Process

Verifies that a process is running (e.g. daemon)

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
