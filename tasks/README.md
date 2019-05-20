# Tasks

[![theeye.io](https://theeye.io/img/logo2.png)](https://theeye.io)

## Tasks Documentation

### Contents

* Create and modify tasks
  * [Approval Task](./#approval-task)
  * [Input Task](./#input-task)
  * [Script Task](./#create-a-script-task)
  * [Webhook or HTTP Request Task](./#create-an-endpoint-apiweb-task)
* [Task Management and Scheduler](./#schedule-a-task)
* Run task via API
  * [Webhook method](./#webhook-method)
  * [Using Access token](./#using-access-token)


### Create and modify tasks

Creating a task is simple, just go to the tasks section in the left "hamburger" menu, and click on "+ create New Task", select the task category from _Outgoing Webhook/HTTP Request_ and _Script_ and start writing your task. A task can be modified directly from the tasks' panel in the Dashboard or you can go to the tasks page in the left menu, and click the edit button over the task row.

You can also create tasks from the dashboard by clicking on the "+" button: 

![](../.gitbook/assets/newtaskdashboard.png)

### Approval Task

Approval tasks handle approval requests in workflows. As breakpoints do, an approval task will pause the workflow execution until it is approved or rejected. Many approvers can be selected, only one approval is needed to continue workflow actions.

### Input Task

An input task is a special task commonly used to start workflows. When executed, the input parameters will be submitted directly to the next chained task in the workflow.

### Script task.

Use the quick input mode  or click on "advanced options" for further features. 

![Script Task - advanced options](../.gitbook/assets/advancedoptionstask.jpg)

* **Copy Task**: select an already created task as template
* **Name**: name your task
* **Host**: select the host where the script will run
* **Script**: select the script to be executed by the task
* **Run As**: write down any extra command needed for user impersonification
* **More Info**: describe your task. What does it do, what's the expected output after execution
* **Tags**: tag your task so you can find quickly through the application.
* **ACL's**: select who can view your task \(what can be done with the task depends on the user role\)
* **Trigger on \(**_**Triggered by**_**\)**: If the task is part of a workflow, select what triggers the task. The task will be triggered by the resource you selected here.
* **Grace Time**: enter the time period TheEye should wait before running the task. _No wait / Cancelation_ can be selected which means the task will run inmediately after triggered. \(only applicable for triggered tasks\). **To cancel the task execution during the grace period, go to tasks panel, expand the task and delete the schedule created by the trigger.**
* **Script Arguments**: If the script played by the task is meant to receive parameters you can set them from here. Mind the order as it will be used by the script. _Fixed_, _options_, and _input_ arguments are allowed. _Input_ and _options_ arguments will be asked to the user for execution. _Fixed_ arguments will not be displayed to the user at execution time.

### Outgoing Webhook/HTTP Request Task.

Select _Outgoing Webhook/HTTP Request_ on "+ create New Task" dialog to create tasks based on HTTP requests. 

![](../.gitbook/assets/webrequesttask.jpg)

The main difference between a _Script_ task relies on:

* **URL**: This is the endpoint URL for the request. If GET or POST method is used, the querystring must be provided \(E.g. [https://www.mysite.com?foo=foo&bar=bar](https://www.mysite.com?foo=foo&bar=bar)\)
* **Method**:  HTTP method \(GET, POST, PUT, DELETE, etc\)
* **JSON Body**: Only JSON data is accepted as a request body, if checked, the next _Request Body_ field will be used.
* **Request Body**: Provide the JSON data to be used as the request body.
* **Use HTTP Compression**: HTTP Compression flag.
* **Req. Timeout**:  The time to wait for response before considering the request has failed.
* **Success Status Code**: The HTTP code expected at response to consider it successful. Ref. [https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
* **Success Pattern**:  Expected HTTP body response. You can write plain HTML code or you can use a _Regular Expression_.

### Schedule a task.

You can use the task scheduler to create and manage tasks that TheEye will carry out automatically at the times you specify. To view or perform an operation, go to the _Tasks_ section and click on the scheduler icon.

Or Just schedule it from the Dasboard as shown here below

![Dashboard - Task Menu](../.gitbook/assets/image%20%288%29.png)

Your new schedule will be shown when the task row is expanded:

![](../.gitbook/assets/image%20%286%29.png)

### Export and Import Tasks

Inside TheEye community you will hear that other people had already solved or automated typical common problems using the platform. When this automation was performed by a task, you will be able to import the solution or on the other hand export and share the tasks you have created.

To export a task recipe, go to the task, click on the context menu, and then click on the "export recipe" icon as shown here:

![Dashboard - Task Export](../.gitbook/assets/image%20%283%29.png)

  






![Script Task Creation Modal](../.gitbook/assets/quickinputtask.jpg)

![](https://github.com/patobas/docs/blob/master/schedule.gif)

## Run task via API

### Webhook method

A task can be triggered by an incoming webhook. To create a new incoming webhook just click in the left "hamburger" menu, and click on "webhooks" - “new incoming webhook”.
Type the name of the new webhook, click save.

Once it's created you can click on the icon on the left to copy the curl example.

### Using access token

Variables:
**customer**: organization name

**access token**: menu => settings => credentials => Integration Tokens

**List all tasks**
```curl -sS 'https://supervisor.theeye.io/$customer/task?access_token=$accesstoken'```

**Search task id by name**

```
taskName="Task name"
curl -sS 'https://supervisor.theeye.io/$customer/task?access_token=$accesstoken' | jq -r --arg name "$taskName" '.[] | select(.name==$name) | {"name": .name, "id": .id, "hostname": .hostname}' | jq -s '.'
```

Returns a json array with tasks, id and hostname:

```
[
  {
    "name": "Get IP Address",
    "id": "5b1c65ee3c32bb1100c2920a",
    "hostname": "Apache3"
  },
  {
    "name": "Get IP Address",
    "id": "5b1c65ee3c32bb1100c29210",
    "hostname": "Apache1"
  },
  {
    "name": "Get IP Address",
    "id": "5b1c65efd421031000213bb8",
    "hostname": "Apache4"
  },
  {
    "name": "Get IP Address",
    "id": "5b1c65efd421031000213bc6",
    "hostname": "Apache2"
  }
]
```

### Run task via API using task id


Note that in this example we are executing a task with no arguments, task_arguments is an empty array.
To execute a task with arguments, provide the list of ordered arguments in the "task_arguments" parameter.
Each argument must be a valid JSON escaped string.


**Example:**

```bash
task_id="5b1c65ee3c32bb1100c2920a"
customer="demo"
access_token="foo"

curl \
-X POST \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d "{\"task\":\"${task_id}\",\"task_arguments\":[]}" \
"https://supervisor.theeye.io/job?access_token=${access_token}&customer=${customer}"
```

**Response:**

```bash
{
  "task_arguments_values": [],
  "_type": "ScriptJob",
  "output": null,
  "creation_date": "2019-05-15T16:23:56.393Z",
  "last_update": "2019-05-15T16:23:56.403Z",
  "task": {
    "id": "5cdb424d7dbdc0000fd3112a",
    "task_arguments": [],
    "output_parameters": []
  },
  "task_id": "5cdb424d7dbdc0000fd3112a",
  "host_id": "5bb755f42f78660012bdd9a6",
  "host": {
    "enable": true,
    "_id": "5bb755f42f78660012bdd9a6",
    "customer_name": "demo",
    "customer_id": "5562573181a2334537425eaf",
    "creation_date": "2018-10-05T12:15:48.875Z",
    "last_update": "2019-05-15T16:23:54.932Z",
    "hostname": "demo",
    "ip": "172.17.0.15",
    "os_name": "Linux",
    "os_version": "4.15.0-22-generic",
    "agent_version": "v0.15.2",
    "integrations": {
      "ngrok": {
        "active": false,
        "url": "",
        "last_job": null,
        "last_job_id": "",
        "last_update": "2018-10-05T12:15:48.877Z"
      }
    },
    "id": "5bb755f42f78660012bdd9a6"
  },
  "name": "testing task",
  "lifecycle": "ready",
  "state": "in_progress",
  "customer_id": "5562573181a2334537425eaf",
  "customer_name": "demo",
  "user_id": "5bf81d18ca5e7e000f80f8ef",
  "user": {
    "id": "5bf81d18ca5e7e000f80f8ef",
    "username": "demo_d38d7c97f0cb9429b31533def69431f560624f44",
    "email": "info+b96fcba81b8182356365f6c66163f4d69d898d67@theeye.io"
  },
  "notify": true,
  "origin": "user",
  "script_id": "5b8d45f31a047f12005fdb61",
  "script_runas": "",
  "id": "5cdc3d1c40f0bb000f8e9682"
}
```

The API response is a new created job. We can save the job id and use it later to query the job status.
In this example the id is "5cdc3d1c40f0bb000f8e9682"

**Query job status:**

Once the job is created we can query it's status using the ID of the job. we can also fetch all the jobs and then filter the response.


```
task_id=”5cdc3d1c40f0bb000f8e9682”
curl -sS 'https://supervisor.theeye.io/$customer/job/$task_id?access_token=$accesstoken' | jq -r .

Response:

{
  "task_arguments_values": [],
  "_type": "ScriptJob",
  "result": {
    "code": 0,
    "log": "\nnormal\n",
    "lastline": "normal",
    "signal": null,
    "killed": false,
    "times": {
      "seconds": 0,
      "nanoseconds": 7156981
    }
  },
  "output": null,
  "creation_date": "2019-05-15T15:55:30.914Z",
  "last_update": "2019-05-15T15:55:38.194Z",
  "task": {
    "id": "5cdb424d7dbdc0000fd3112a",
    "task_arguments": [],
    "output_parameters": []
  },
  "task_id": "5cdb424d7dbdc0000fd3112a",
  "host_id": "5bb755f42f78660012bdd9a6",
  "host": "5bb755f42f78660012bdd9a6",
  "name": "testing task",
  "lifecycle": "finished",
  "state": "normal",
  "customer_id": "5562573181a2334537425eaf",
  "customer_name": "demo",
  "user_id": "5bf81d18ca5e7e000f80f8ef",
  "user": {
    "id": "5bf81d18ca5e7e000f80f8ef",
    "username": "demo_d38d7c97f0cb9429b31533def69431f560624f44",
    "email": "info+b96fcba81b8182356365f6c66163f4d69d898d67@theeye.io"
  },
  "notify": true,
  "origin": "user",
  "script_id": "5b8d45f31a047f12005fdb61",
  "script_runas": "",
  "trigger_name": "success",
  "id": "5cdc367240f0bb000f8e9653"
}
```
