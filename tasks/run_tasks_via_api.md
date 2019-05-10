# Via API

For a **Task** to run, internally, a new **Job** is created and added to the queue. If you want to run a **task** you only need to create a **Job** manually and supply the task ID \(and task options\) you want to run.

This is easily done with a POST request to the Job endpoint API.

There are two methods available.

1. Using a user access token \(recommended for tests and quick responses\)

   This method is not recomended since a **user access\_token** gives access to execute task and also to obtain information of **multiple resources of the system**. The access\_token also has an expiration time \(usually one hour\), which makes it unstable to create custom integrations: once expired the integration will no longer work. This method is recommended for testing purposes or to get information.

   ```text
   curl \
   -X POST \
   -H "Accept: application/json" \
   -H "Content-Type=application/json" \
   -b "{"task":"${task_id}","task_arguments":[]}" \
   "https://api.theeye.io/job?access_token=${access_token}&customer=${customer}"
   ```

   > NOTE 1: customer is REQUIRED. can also be included in the body as "customer"  
   > NOTE 2: access token can be provided vía Authorization header \( Authorization: Bearer ${token} \)

2. Using the Task secret key \(recommended\)

   All tasks have a **secret key** which can be used to invoke them directly via API. The secret key provides access to the task it belongs **and only to that task**. **Secret keys** can be revoked any time by just changing them, which makes this the preferred method for it's implicit security.

```text
  curl \
    -X POST \
    -H "Accept: application/json" \
    -H "Content-Type=application/json" \
    -b "{"task":"${task_id}","task_arguments":[]}" \
    "https://api.theeye.io/job/secret/${task_secret_key}?customer=${customer}"
```

## Job API payload \(for task execution\)

Task Execution Payload

```text
{
  // (required)
  task: "task id",
  // (required, can also be provided via query string)
  customer: "customer name",
  // (required only if task has arguments)
  task_arguments: [  ]
}
```

