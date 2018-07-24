# Run Tasks via API

Every time a Task is executed a new Job is added to the queue.
To execute Tasks you need to create a Job for this Task.
For doing that perform a POST request to the Job API.

There are two methods available.

1. Using a user access token.

This method is not recomended since user access_token give access to execute task and also to obtain information of multiple resources of the system. 
Also the access_token has an expiration time (usually one hour). This is not handy to create custom integrations.
Only use this method for testing or to get information. 

```
curl 
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type=application/json" \
  -b "{"task":"${task_id}","task_arguments":[]}" \
  "https://api.theeye.io/job?access_token=${access_token}&customer=${customer}"
```

> NOTE 1: customer is REQUIRED. can also be included in the body as "customer"    
> NOTE 2: access token can be provided vía Authorization header ( Authorization: Bearer ${token} )    

2. Using the Task secret key (recommended)

All tasks has a secret key to invoke it directly via API.
The secret gives the posibility to provide direct access to specific tasks only.
Access to tasks can be revoked any time by changing the secret key 


```
curl 
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type=application/json" \
  -b "{"task":"${task_id}","task_arguments":[]}" \
  "https://api.theeye.io/job/secret/${task_secret_key}?access_token=${access_token}&customer=${customer}"
```

## Job API payload (for task execution)

Task Execution Payload 
```
{
  task: "task id", (required)
  customer: "customer name", (can also be provided via query string)
  task_arguments: [
    {
      order: "argument numerical order",
      value: "this execution value"
    }
  ] (required, if task has arguments)
}
```
