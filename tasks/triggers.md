---
description: Trigger tasks using events from other resoures
---

# Task Triggers

You can launch tasks in different ways. On one hand you can play them directly using the play button. On the other hand you can use triggers. Tasks are also started by Workflows.

### Tasks triggered by other tasks

When Tasks are triggered by other tasks, the output of the triggering task can be used as input as well. The key is to match trigger output with triggered input.

In this example we use Task "Get Stalled Transaction" to trigger "Execute Transaction". The transaction number is passed over tasks.

Tasks"Execute Transaction" expects a transaction number and is triggered by "Get Stalled Transaction". The task configuration is shown below.

![Task: Execute Transaction](../.gitbook/assets/image%20%288%29.png)

When "Get Stalled Transaction" tasks finishes running, then "Execute Transaction" is launched. The output from "Get Stalled Transaction" is then used. 

![&quot;Get Stalled Transaction&quot; output ](../.gitbook/assets/taskexecution.jpg)













### Tasks triggered by Monitors



### Tasks triggered by Workflows

Workflows triggers the task that is set as Starting Task, as shown below.

![](../.gitbook/assets/image%20%283%29.png)

 

