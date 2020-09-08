# Tasks with Arguments

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## Using Webhooks

Webhook are usefull to expose tasks and workflows via API endpoint.
Using webhooks you can share links to your tasks. Then, simply removing the Webhook, you can revoke the remote access to the Task.

When the Task has arguments, you need to provide the arguments for the task via the webhook request.

Asuming that your webhook is a trigger of a task with 4 arguments, this is a sample bash script with curl to execute the task:

| Method | Path | Description | ACL |
| ----- | ----- | ----- | ----- |
| POST  | /${customer}/webhook/${id}| [Send Arguments](#example-1)  | user |
| POST  | /${customer}/webhook/${id}?| [Send Arguments with JSON](#example-2)  | user |


#### Example 1
##### Send Arguments 

```bash

# this params should be changed to use your webhook.
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
id=$ID_WEBHOOK
secret=$SECRET


url="https://supervisor.theeye.io/${customer}/webhook/${id}?trigger/secret/${secret}"
method='POST'
contentType='Content-Type: application/json'
arguments='["my","name","is","test"]'

curl -i -sS \
  --request "${method}" \
  --header "${contentType}" \
  --data "${arguments}" \
  --url "${url}"

```

Sometimes, it is necessary to send complex JSON data structures to the tasks.
In that case, to avoid manually JSON encoding/decoding, we can use a temporary file.

#### Example 2
##### Send Arguments with JSON
```bash


# this params should be changed to use your webhook.
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
id=$ID_WEBHOOK
secret=$SECRET

url="https://supervisor.theeye.io/${customer}/webhook/${id}?trigger/secret/${secret}"
method='POST'
contentType='Content-Type: application/json'

date=$(date --rfc-3339=seconds | sed 's/ /T/')

# we are using heredoc to create the JSON file as arguments.
cat << JSON > ./payload.json
[
  "test arguments",
  {
    "prop1":"val1",
    "prop2":"val2"
  },
  "${date}",
  "another argument"
]
JSON

curl -i -sS \
  --request "${method}" \
  --header "${contentType}" \
  --data @payload.json \
  --url "${url}"

```

Remember that the indexes of the JSON array we has define in the example, will be mapped to each argument of the triggered task.

To simplify the handling of arguments within the script of the triggered task, the API will try to turn every index of the received JSON Array into plain text. But the argument number 2 of the sample array, could not be converted to plain string, since it is a complex JSON structure, and will be received in the triggered task as JSON.

**JSON strings, unlike simple strings, are surrounded by double quotes.**

```shell

string='theeye'

jsonString='"theeye"'

```

Here we provide a sample script for the receiver task, that uses argument 2 and parse the JSON to obtain .prop1 key. To achive this in bash shell we use jq command


```shell

#!/bin/bash

echo ${2} | jq '.prop1'

echo [ $(echo ${2} | jq -c '.') ]

```

## Task and Workflows. API execution

There are alternatives to directly execute tasks and workflows vía API.

Check the following Documentation Sections


[Run Task and Workflow using Integration Secret (recomended)](/api/tasks/#using-task-secret-key-integration-feature-40recommended41)

[Run Task and Workflow using Integration Token (beta)](/api/tasks/#using-api-integration-token-beta)
