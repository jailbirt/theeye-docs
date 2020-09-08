# Run Tasks with Arguments

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

| Method | Path | Description | ACL |
| ----- | ----- | ----- | ----- |
| POST  | /job/secret/${secret} | [application/json](#example-1) | user |
| POST  | /job/secret/${secret} | [application/x-www-form-urlencoded](#example-2) | user |
| POST  | /job/secret/${secret} | [querystring](#example-3) | user |


#### Example 1
##### application/json

```bash
secret=$SECRET_ID
task=$TASK_ID
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}?customer=${customer}&task=${task}" \
  --header 'Content-Type: application/json' \
  --data '{"task_arguments":["arg1","arg2"]}'

```
#### Example 2
##### application/x-www-form-urlencoded

```bash
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
#### Example 3
##### querystring 

```bash

secret=$SECRET_ID
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
task=$TASK_ID

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}?customer=${customer}&task=${task}&task_arguments\[\]=arg1&task_arguments\[\]=arg2"

```

