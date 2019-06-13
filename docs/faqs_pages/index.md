# TheEye FAQ

[![theeye.io](../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

This page provides help with the most common questions about TheEye.

You can also search all TheEye's help pages using the search box to the right, or browse the Nav menu or the Help directory.

# FAQs from ours users about:

## Varios

### Como consultar estado de monitor / indicador / ejecutar tarea o wf.


## AWS

### Restarts en ECS/Fargate:
TODO, falta esta receta

Las metric expuestas por ECS/Fargate no poseen actualmente conteo de restart.
ECS solo envía a cloudwatch el uso de cpu, mem de cada cluster/service. Por otro lado de la api de ECS se pueden extraer estos datos de cada cluster/service por ejemplo:

 
```
{
  "status": "ACTIVE",
  "statistics": [],
  "tags": [],
  "clusterName": "jenkins-slave-comafi",
  "registeredContainerInstancesCount": 1,
  "pendingTasksCount": 1,
  "runningTasksCount": 0,
  "activeServicesCount": 0,
  "clusterArn": "arn:aws:ecs:us-east-1:104455529394:cluster/jenkins-slave-comafi"
}
```

Además se puede consultar toda la información de deployments, containers, events, etc.

#### Monitor ejemplo: "ECS clusters status monitor"
TODO, falta esta receta

Les arme un monitor de ejemplo que chequea en todos los clusters ECS y alerta cuando encuentra uno con pendingTasksCount > 0 por más de 3 checks (con un check cada 90s).

Este monitor les sirve para encontrar rápido por ejemplo: cuando un cluster no terminó correctamente un deployment y quedó trabado intentando iniciar un nuevo container.

El monitor pasa por todos los clusters sean fargate o ecs, avisame si querés le puedo agregar un filter para mostrar solo fargate.

Les voy armando otro monitor de ejemplo para alertar cuando el uso de cpu/mem de un cluster supera cierto limite y se los paso.


## Resources


### Task

#### cómo pasar parámetros entre tareas

### Monitors

#### Monitor enviando alertas duplicadas
Te quería consultar por una alerta (Monitor Estado) que se disparó 3 veces en un minuto si está puesto que revise la disponibilidad cada 30 seg.?. Además, si está en alerta el monitor porque sigue avisando? No debería esperar a estar normal para volver a notificar una falla?

Esto puede ocurrir porque el monitor se estuvo ejecutando por un tiempo mayor a la frecuencia de chequeo del monitor (en este caso 30s)

En las últimas lineas del log se puede observar un curl que se ejecutó por casi 120s
 
  0     0    0     0    0     0      0      0 --:--:--  0:01:53 --:--:--     0
curl: (56) Recv failure: Connection reset by peer
Failure
               
Les recomiendo que si van a correr el monitor con frecuencia de 30s le agreguen un timeout < a 30s para asegurarse que termine su ejecución antes que entre en queue el siguiente chequeo. 
Para esto pueden agregar al comando curl: -m 10 (espera de 10s).
De esta forma deberían evitar esos casos de repetición de las alertas.


### Scripts

#### Cambié el script de un monitor/tarea y se modificó en todos los que referenciaban a ese script.

si vos cambias un script y varios tienen asociado ese script, lo cambias para todos.
si querés hacer un "fork" entonces creas uno nuevo
sigue la lógica de cambios en un solo lugar.
entonces vos podes tener 20 monitores o tareas que solo se diferencian de los argumentos y usan el mismo script, de esa forma mantenes un solo script


