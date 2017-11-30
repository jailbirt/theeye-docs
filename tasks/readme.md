[![](https://theeye.io/landpage/images/logo.png)](https://theeye.io)
# Tasks Documentation
## Contents
#### Create and modify tasks
##### [Script Task](#script-task-linked-to-an-event)
##### [Webhook or HTTP Request Task](#create-an-endpoint-api-web-task)
#### [Task Management and Scheduler](#schedule-a-task)
-------------------------------------

### Create and modify tasks
Creating a task is simple, just go to the tasks section in the left "hamburger" menu, and click on "+ create New Task", select the task category from _Outgoing Webhook/HTTP Request_ and _Script_ and start writing your task.
A task can be modified directly from the tasks' panel in the Dashboard or you can go to the tasks page in the left menu, and click the edit button over the task row.

#### Script task. Linked to an event.
Use the quick input mode
![](/images/quickinputtask.jpg)
or click on "advanced options" for further features.
![](/images/advancedoptionstask.jpg)

+ Copy Task: select an already created task as template
+ Name: name your task
+ Host: select the host where the task will run
+ Script: select the script to be executed by the task
+ Run As: write down any extra command needed for user impersonification
+ More Info: describe your task. What does it do, what's the expected output after execution
+ Tags: tag your task so you can find quickly through the application.
+ ACL's: select who can view your task (what can be done with the task depends on the user role)
+ Trigger on: If the task is part of a workflow, select what triggers the task.
+ Grace Time: enter the time TheEye should wait before cancelling the task execucion. No wait / Cancelation can be selected which leaves the responsibility of cancelling the task to the user.
+ Script Arguments: If the script played by the task is meant to receive parameters you can set them from here. Mind the order as it will be used by the script. _Fixed_, _options_, and _input_ arguments are allowed. _Input_ and _options_ arguments will be asked to the user for execution. _Fixed_ arguments will not be displayed to the user at execution time.

#### Create an endpoint API/WEB task.

### Schedule a task.

You can use the task scheduler to create and manage tasks that TheEye will carry out automatically at the times you specify.
To view or perform an operation, go to the _Tasks_ section and click on the scheduler icon.

![](https://github.com/patobas/docs/blob/master/schedule.gif)
