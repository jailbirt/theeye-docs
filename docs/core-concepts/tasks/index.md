# Tasks Documentation

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## Create and modify tasks

Creating a task is simple, just go to the tasks section in the left "hamburger" menu, and click on "+ create New Task", select the task category from _Outgoing Webhook/HTTP Request_ and _Script_ and start writing your task. A task can be modified directly from the tasks' panel in the Dashboard or you can go to the tasks page in the left menu, and click the edit button over the task row.

You can also create tasks from the dashboard by clicking on the "+" button: 

![](../../images/newTaskDashboard.png)

### Types of tasks:

#### Script:

Use the quick input mode  or click on "advanced options" for further features. 

![Script Task - advanced options](../../images/advancedoptionstask.jpg)

* **Name**: name your task
* **Bots**: One or more bots can be selected
* **Script**: select the script to be executed by the task
* **Tags**: tag your task so you can find quickly through the application.
* **Add Arguments**: If you need to add input values in the Script, enter here and choose the options you need.
    * **Fixed Value** : We use an already predefined value, used in all executions.
    * **Text Input**: We use an already predefined value used in all executions. It receives a value, always requested when executing        the task.
    * **Options Selection**: Choose between a set of predefined values.
    * **Remote Options**:It Allows to choose a set of values, obtained from a file hosted from an external cloud (with public                access) and also reads JSON files.
    * **Date Options**:It allows to enter to a type date parameter.
    * **File Inputs**: Also to enter to a file type parameter and saves it on bot.
    
* **Copy Task**: select an already created task as template

* **Host**: select the host where the script will run

* **Run As**: write down any extra command needed for user impersonification
* **More Info**: describe your task. What does it do, what's the expected output after execution

* **ACL's**: select who can view your task \(what can be done with the task depends on the user role\)
* **Trigger on \(**_**Triggered by**_**\)**: If the task is part of a workflow, select what triggers the task. The task will be triggered by the resource you selected here.
* **Grace Time**: enter the time period TheEye should wait before running the task. _No wait / Cancelation_ can be selected which means the task will run inmediately after triggered. \(only applicable for triggered tasks\). **To cancel the task execution during the grace period, go to tasks panel, expand the task and delete the schedule created by the trigger.**
* **Script Arguments**: If the script played by the task is meant to receive parameters you can set them from here. Mind the order as it will be used by the script. _Fixed_, _options_, and _input_ arguments are allowed. _Input_ and _options_ arguments will be asked to the user for execution. _Fixed_ arguments will not be displayed to the user at execution time.

#### Webhooks or HTTP Request

Check the [Webhooks](/core-concepts/webhooks/) for more details.

#### Approval:

Approval tasks handle approval requests in workflows. As breakpoints do, an approval task will pause the workflow execution until it is approved or rejected. Many approvers can be selected, only one approval is needed to continue workflow actions.

#### Input:

An input task is a special task commonly used to start workflows. When executed, the input parameters will be submitted directly to the next chained task in the workflow.

#### Notification:

Check the [Task Notifications](/core-concepts/tasks/taskNotifications) for more details.

## Schedule a task.

You can use the task scheduler to create and manage tasks that TheEye will carry out automatically at the times you specify. To view or perform an operation, go to the _Tasks_ section and click on the scheduler icon.

Or Just schedule it from the Dasboard as shown here below

![Dashboard - Task Menu](../../images/image-08.png)

Your new schedule will be shown when the task row is expanded:

![](../../images/image-06.png)

![](../../images/schedule.gif)

## Export and Import Tasks

Inside TheEye community you will hear that other people had already solved or automated typical common problems using the platform. When this automation was performed by a task, you will be able to import the solution or on the other hand export and share the tasks you have created.

To export a task recipe, go to the task, click on the context menu, and then click on the "export recipe" icon as shown here:

![Dashboard - Task Export](../../images/image-03.png)

![Script Task Creation Modal](../../images/quickinputtask.jpg)




## Integration through API

Check the [Integration through API documentation](/integrations/api/) for more details.
