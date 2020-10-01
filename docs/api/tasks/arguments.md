[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

# Tasks Arguments

_____

## Task and Workflows. API execution

There are alternatives to directly execute tasks and workflows vía API.

Check the following Documentation Sections


[Run Task and Workflow using Integration Secret (recomended)](/api/tasks/#using-task-secret-key-integration-feature-40recommended41)

[Run Task and Workflow using Integration Token (beta)](/api/tasks/#api-integration-tokens)

___

## Providing Arguments, variations


### application/json

```shell
secret=$SECRET_ID
task=$TASK_ID
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}?customer=${customer}&task=${task}" \
  --header 'Content-Type: application/json' \
  --data '{"task_arguments":["arg1","arg2"]}'

```

### application/x-www-form-urlencoded

```shell
secret=$SECRET_ID
task=$TASK_ID
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}?customer=${customer}&task=${task}" \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode task_arguments="arg1" \
  --data-urlencode task_arguments="arg2"
  --data-urlencode task_arguments="arg3"

```

### querystring 

#### Variation 1

```shell

secret=$SECRET_ID
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
task=$TASK_ID

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}?customer=${customer}&task=${task}&task_arguments\[\]=arg1&task_arguments\[\]=arg2"

```

#### Variation 2


```shell

secret=$SECRET_ID
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
task=$TASK_ID

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}" \
  --data-urlencode "task=${task}" \
  --data-urlencode "customer=${customer}" \
  --data-urlencode "task_arguments[]=${arg1}" \
  --data-urlencode "task_arguments[]=${arg2}" 

```
