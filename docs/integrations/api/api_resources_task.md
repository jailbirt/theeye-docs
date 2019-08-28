# API for Tasks

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## API URL for Task

URL: `https://supervisor.theeye.io/task?access_token={token}&customer={organization_name}`


## Examples

### Tasks

*Task execution timeout*

The default execution timeout for tasks is 10 minutes.

Now it's not possible to change the timeout via API. To modify the timeout for a task contact us.



### List all

*Resquest*
```bash
customer="customer"
token="integrationToken"

curl -sS "https://supervisor.theeye.io/$customer/task?access_token=$token"
```

### Search task id by name

*Request*
```bash
customer="customer"
token="integrationToken"
taskName="HelloWorld Task"

curl -sS "https://supervisor.theeye.io/$customer/task?access_token=$token" | jq -r --arg name "$taskName" '.[] | select(.name==$name) | {"name": .name, "id": .id, "hostname": .hostname}' | jq -s '.'
```

*Response*
Returns a json array with tasks, id and hostname:
```json
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

### List and timeout
(Timeout = null) means that the timeout is set to default (10 minutes).

```bash
#!/bin/bash

customer=$1
access_token=$2
supervisor=$3
if [ $3 == "" ];then supervisor='https://supervisor.theeye.io' ; fi
if [ $# -ne 3 ];then echo "missing parameters" ; exit ; fi

data=$(curl -s ${supervisor}/${customer}/task?access_token=${access_token})

echo "${data}" | jq -j '.[] | "id: ", .id, "\ttask: ", .name, "\ttimeout: ", .timeout, "\n"'
```


## Run task by id

For a **Task** to run, internally, a new **Job** is created and added to the queue. If you want to run a **task** you only need to create a **Job** manually and supply the task ID \(and task options\) you want to run.

Note that in this example we are executing a task with no arguments, task_arguments is an empty array.
To execute a task with arguments, provide the list of ordered arguments in the "task_arguments" parameter.
Each argument must be a valid JSON escaped string.

This is easily done with a POST request to the Job endpoint API.

There are two methods available.

### 1. Using Integration Token (beta)

Integration Tokens can be obtained only by admin users.

Accessing to the web interfaz *Menu > Settings > Credentials > Integration Tokens*.


#### **Request:**

```bash
task_id=""
access_token=""
customer=""

curl \
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -b "{\"task\":\"${task_id}\",\"task_arguments\":[]}" \
  "https://supervisor.theeye.io/job?access_token=${access_token}&customer=${customer}"
```

   > NOTE 1: customer is REQUIRED. can also be included in the body as "customer"  
   > NOTE 2: access token can be provided vía Authorization header \( Authorization: Bearer ${token} \)


#### **Response:**

```json
{
  "task_arguments_values": [],
  "_type": "ScriptJob",
  "output": null,
  "creation_date": "2019-05-15T16:23:56.393Z",
  "last_update": "2019-05-15T16:23:56.403Z",
  "task": {
    "id": "************************",
    "task_arguments": [],
    "output_parameters": []
  },
  "task_id": "************************",
  "host_id": "************************",
  "host": {
    "enable": true,
    "_id": "************************",
    "customer_name": "demo",
    "customer_id": "************************",
    "creation_date": "2018-10-05T12:15:48.875Z",
    "last_update": "2019-05-15T16:23:54.932Z",
    "hostname": "************************",
    "ip": "127.0.0.1",
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
    "id": "************************"
  },
  "name": "testing task",
  "lifecycle": "ready",
  "state": "in_progress",
  "customer_id": "************************",
  "customer_name": "demo",
  "user_id": "************************",
  "user": {
    "id": "************************",
    "username": "************************",
    "email": "info+************************@theeye.io"
  },
  "notify": true,
  "origin": "user",
  "script_id": "************************",
  "script_runas": "",
  "id": "************************"
}
```

The API response is a new created job. We can save the job id and use it later to query the job status.
In this example the id is "************************"

### 2. Using the Task secret key. Integration Feature \(recommended\)

   All tasks have a **secret key** which can be used to invoke them directly via API. The secret key provides access to the task it belongs **and only to that task**. **Secret keys** can be revoked any time by just changing them, which makes this the preferred method for it's implicit security.

#### **Request:**


```bash
   task_id=""
   task_secret_key=""
   customer=""

   curl \
      --request POST \
      --header "Accept: application/json" \
      --header "Content-Type: application/json" \
      --data "{\"customer\":\"${customer}\",\"task\":\"${task_id}\",\"task_arguments\":[]}" \
      "https://supervisor.theeye.io/job/secret/${task_secret_key}"
```

#### HTML Button

This technique could be combined with an HTML form to generate an action button. This results very handy when it is needed to perform actions from email bodies or static web pages.

```html
<html>
  <div>
    <form action="http://api.theeye.io/job/secret/b9d0b89439866987e818d5299ba61df0a32ccb38d81d996f46b9ce7af0720058" method="POST">
      <input type="hidden" name="customer" value="organization_name">
      <input type="hidden" name="task" value="5c49157cdb340a4d0444195a">
      <input type="hidden" name="task_arguments[]" value="arg1">
      <input type="submit" value="ACEPTO">
    </form>
  </div>
</html>

```

You can also invoke a **Workflow** using its **secret key**.

#### **Request:**

```bash
workflow_id=""
workflow_secret_key=""
customer=""

curl \
   --request POST \
   --header "Accept: application/json" \
   --header "Content-Type: application/json" \
   --data "{\"customer\":\"${customer}\",\"task_arguments\":[]}" \
   "https://supervisor.theeye.io/workflows/${workflow_id}/secret/${workflow_secret_key}/job"
```

#### HTML Button

And also, build an HTML form for the same purposes.

```html
<html>
<div>
 <form action="http://api.theeye.io/workflows/5d5ee18e809501000fb1435b/secret/b9d0b89439866987e818d5299ba61df0a32bbb38d81d996f46b9ce7af0720058" method="POST">
   <input type="hidden" name="customer" value="organization_name">
   <input type="hidden" name="task_arguments[]" value="arg1">
   <input type="submit" value="ACEPTO">
 </form>
</div>
</html>

```

### 3. Query job status

Once the job is created we can query it's status using the ID of the job. we can also fetch all the jobs and then filter the response.

#### **Request:**


```bash
task_id=”5cdc3d1c40f0bb000f8e9682”
access_token=""
customer=""
curl -sS 'https://supervisor.theeye.io/$customer/job/$task_id?access_token=$token' | jq -r .
```

#### **Response:**


```json
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


## Job API payload \(for task execution\)

Task Execution Payload

```javascript
{
  // (required)
  task: "task id",
  // (required only if task has arguments)
  task_arguments: []
}
```
