# API for Monitors

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## API URL for Monitors

URL: `https://supervisor.theeye.io/monitor?access_token={token}&customer={organization_name}`


## Examples
### List monitors

###Variables:
  **customer**: organization name

  **access token**: menu => settings => credentials => Integration Tokens

### Request example:

```bash
  customer=""
  access_token=""

  curl -sS https://supervisor.theeye.io/${customer}/monitor?access_token=${access_token}
```
#### **Search monitor by name**

```bash
  customer=""
  access_token=""
  monName="demo"

  curl -sS https://supervisor.theeye.io/${customer}/monitor?access_token=${access_token} | \
    jq -r --arg name "$monName" '.[] | select(.name==$name) | {"name": .name, "id": .id, "state": .resource.state}' | jq -s '.'
```

#### **Show bot stats**

```bash
customer=""
access_token=""
botName="demo"

curl -sS https://supervisor.theeye.io/${customer}/monitor?access_token=${access_token} | \
jq -r --arg name "$botName" '.[] | select((.name==$name) and (.type=="dstat")) | {"name": .name, "id": .id, "stats": .resource.last_event.data}' | jq -s '.'
```

### **Response example:**

```json
[
  {
    "name": "demo",
    "id": "5bb755f42f78660012bdd9af",
    "stats": {
      "cpu": 3,
      "mem": 36.73548113271163,
      "cache": 4.689083037753453,
      "disk": [
        {
          "name": "xvda2",
          "value": 84.84461326890819
        }
      ]
    }
  }
]
```


## Run task by id

For a **Task** to run, internally, a new **Job** is created and added to the queue. If you want to run a **task** you only need to create a **Job** manually and supply the task ID \(and task options\) you want to run.

Note that in this example we are executing a task with no arguments, task_arguments is an empty array.
To execute a task with arguments, provide the list of ordered arguments in the "task_arguments" parameter.
Each argument must be a valid JSON escaped string.

This is easily done with a POST request to the Job endpoint API.

There are two methods available.

### 1. Using a user access token \(recommended for tests and quick responses\)

   This method is not recomended since a **user access\_token** gives access to execute task and also to obtain information of **multiple resources of the system**. The access\_token also has an expiration time \(usually one hour\), which makes it unstable to create custom integrations: once expired the integration will no longer work. This method is recommended for testing purposes or to get information.

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

### 2. Using the Task secret key \(recommended\)

   All tasks have a **secret key** which can be used to invoke them directly via API. The secret key provides access to the task it belongs **and only to that task**. **Secret keys** can be revoked any time by just changing them, which makes this the preferred method for it's implicit security.

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
      "https://supervisor.theeye.io/job/secret/${task_secret_key}?customer=${customer}"
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

```text
{
  // (required)
  task: "task id",
  // (required only if task has arguments)
  task_arguments: []
}
```

