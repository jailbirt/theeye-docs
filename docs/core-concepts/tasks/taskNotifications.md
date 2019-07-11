# Notifications outside of TheEye:

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## How to work with task and notifications

The toolkit allows you to streamline the flow of notifications and trigger them.
The notifications sent can have different origins:
- A task by script, you can send your output paramters, as an input in a notification task.
- A task of type input, allows an operator to load the parameters of the msg that will receive the notification task.
- You can also build workflow to measure, to generate personalized notifications:
- in different stages
- to different teams
- and with different reports

* If you need assistance, check with the support team to receive advice on the design of the best possible workflow for your project *

### Sample tasks for sending notifications

#### Types of tasks: Notification

*This type of task is responsible for sending messages*

* **Name**: name your task
* **Subject**: message subject
* **Send email**: if the function is activated, the notification will be sent by email
    * **Email body**: Complete with the email body. This field is only visible if the sending of email is enabled.
* **Send desktop notification**: if the function is activated, the notification will be sent by desktop notification
* **Tags**: tag your task so you can find quickly through the application.
* *Advanced Options*
    * **Copy Task**: select an already created task as template
    * **Description**: a description
    * **Trigger on \(**_**Triggered by**_**\)**: If the task is part of a workflow, select what triggers the task. The task will be triggered by the resource you selected here.
    * **ACL's**: select who can view your task \(what can be done with the task depends on the user role\)

*Example:* 
You can download the following sample recipe right now to integrate into your workflow
[Task type: notification](../../assets/recipes/task_type-notification-send_notification.json)

#### Types of tasks: Input

*This type of task is responsible for request parameters from an operator.*

Check the [Task input](/core-concepts/tasks/) for more details.

*Example:* 
You can download the following sample recipe right now to integrate into your workflow
[Task type: Input](../../assets/recipes/task_type-input-send_notification.json)

#### Types of tasks: Scripts

*This type of task is responsible for execute processes and functions, and finally deliver reports. The format of the output parameters allows the integration with the task type notification.*

Check the [Task scripts](/core-concepts/tasks/) for more details.

*Example:* 
You can download the following sample recipe right now to integrate into your workflow
[Task type: Scripts](../../assets/recipes/task_type-script-send_notification.json)

### Sample tasks for sending notifications

**Create a workflow**

- task A: notification script
    - [Task type: Scripts](../../assets/recipes/task_type-script-send_notification.json)
- state: success
- Task B: task notification
    - [Task type: notification](../../assets/recipes/task_type-notification-send_notification.json)

![dashboard_workflow_script_and_notification](../../images/dashboard_workflow_script_and_notification-00.png)

![dashboard_workflow_script_and_notification](../../images/dashboard_workflow_script_and_notification-01.png)

**Run a workflow**

![dashboard_workflow_script_and_notification](../../images/dashboard_workflow_script_and_notification.png)

