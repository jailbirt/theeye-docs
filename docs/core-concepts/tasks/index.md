
# Tasks Documentation

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## Create and modify tasks

Creating a task is simple, just go to the tasks section in the left "hamburger" menu, and click on "+ create New Task", select the task category from _Outgoing Webhook/HTTP Request_ and _Script_ and start writing your task. A task can be modified directly from the tasks' panel in the Dashboard or you can go to the tasks page in the left menu, and click the edit button over the task row.

You can also create tasks from the dashboard by clicking on the "+" button: 

![](https://github.com/theeye-io/documents_docs/blob/master/docs/UpdateDocTheEye/Task1_vAlpha.jpg)

### Types of tasks:

#### Script:
Use the quick input mode  or click on "advanced options" for further features. 

![Script Task - advanced options](https://github.com/theeye-io/documents_docs/blob/master/docs/UpdateDocTheEye/Task2_vAlpha.jpg)

* **Name**: name your task.
* **Bots**: One or more bots can be selected
* **Script**: select the script to be executed by the task
* **Tags**: tag your task so you can find quickly through the application.
![Script Task - advanced options](https://github.com/theeye-io/documents_docs/blob/master/docs/UpdateDocTheEye/TaskArguments3_vAlpha.jpg)
* **Add Arguments**: If you need to add input values in the Script, enter here and choose the options you need.
    * **Fixed Value** : We use an already predefined value, used in all executions.
    * **Text Input**: We use an already predefined value used in all executions. It receives a value, always requested when executing        the task.
    * **Options Selection**: Choose between a set of predefined values.
    * **Remote Options**:It Allows to choose a set of values, obtained from a file hosted from an external cloud (with public                access) and also reads JSON files.
    * **Date Options**:It allows to enter to a type date parameter.
    * **File Inputs**: Also to enter to a file type parameter and saves it on bot.
    
* **Copy Task**: select an already created task as template.
* **Run As**: write down any extra command needed for user impersonification.
* **Description**:
* **ACL's**: select who can view your task \(what can be done with the task depends on the user role\).
* **Triggered by**:Select a task, monitor or webhook event that will trigger this task automagically.
* **Trigger on-hold time**:If you select to Trigger with an event, you can choose a grace time to delay the execution of this action and    have some time to cancel it via email if necessary.
* **Execution Timeout**:How much time to wait for the server's response before giving up. Default timeout is 5 seconds.


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


![](https://github.com/theeye-io/documents_docs/blob/master/docs/UpdateDocTheEye/scheduletask.gif)
## Export and Import Tasks

Inside TheEye community you will hear that other people had already solved or automated typical common problems using the platform. When this automation was performed by a task, you will be able to import the solution or on the other hand export and share the tasks you have created.

To export a task recipe, go to the task, click on the context menu, and then click on the "export recipe" icon as shown here:

![Dashboard - Task Export](https://github.com/theeye-io/documents_docs/blob/master/docs/UpdateDocTheEye/ExportTask.jpg)

![Script Task Creation Modal](https://github.com/theeye-io/documents_docs/blob/master/docs/UpdateDocTheEye/ExportTask2.jpg)




## Integration through API

Check the [Integration through API documentation](/integrations/api/) for more details.
