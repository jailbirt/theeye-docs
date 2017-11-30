 esto es todo lo que se esta mandando desde el supervisor a elasticsearch.
También se usa para el envío de notificaciones y para la generación de eventos para el workflow. También se usa en los eventos que llegan por socket para actualizar la interfaz. Es automático y por eso admite pocas modificaciones en la lógica.

Los que son CRUD se generan en cada endpoint cuando se hace POST , PUT o DELETE.
El formato es API-crud (donde API es el nombre de cada endpoint que tiene esto implementado)

En su mayoría solo se están usando para elasticsearch. Pero se van a ir usando para todo. Detallo acá en que momento se genera cada uno.

Los que tienen ** revisar si tienen formato homogéneo o crud duplicado

agent-version: cuando se actualiza la versión de un agente
host-stats: cada vez que llega update de stats de hosts **
monitor-execution: cuando el agente manda update de ejecución de un monitor **
monitor-state: cuando un monitor cambia de estado falla, recover, stop, change(file) **
triggered-webhook: cuando se ejecuta un webhook **

Estos son los topics que están en el config. 

"agent": { 
  "version": "agent-version"
},
"host": {
  "stats": "host-stats",
},
"monitor": {
  "crud": "monitor-crud",
  "execution": "monitor-execution",
  "state": "monitor-state",
},
"script": {
  "crud": "script-crud"
},
"file": {
  "crud": "file-crud"
},
"hostgroup": {
  "crud": "provisioning-crud",
},
"host": {
  "crud": "host-crud",
  "stats": "host-stats"
},
"task": {
  "crud": "task-crud"
},
"job": {
  "crud": "job-crud"
},
"webhook": {
  "crud": "webhook-crud",
  "triggered": "triggered-webhook"
}

task-execution cuando arranca
task-result cuando termina

todo lo que es "algo-crud" es update en la db , se va a dispara para todos lados , en principio para notifications (acá se decide a quien y como mandar esta) , socket y elk.

para mas cosas particulares de elk hacemos el submit puntual , como el de task-execution, el task-restult o las stats o cosas así
esta duplicado en algunos , pq llega el puntual  y además el crud automático después del udpate/replace/create en la db
el puntual lo pongo a manopla como antes para elk , los otros ya están puestos en casi todo lo que hace cosas en la db y de a poco los tengo que ir mandando para las notificaciones. 
4 hours ago via web   Notified 2 people   Applaud  Delete
facundo gonzalezfacundo gonzalez
los puntuales de ELK son los que estan arriba , en el primer comentario y además se sumaron

task-execution , cuando se ejecuta la task
task-result , cuando el agente termina y actualiza el resultado
