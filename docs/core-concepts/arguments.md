
# Arguments

## Tasks and Workflows

## Webhooks

Webhook are usefull to expose tasks via API endpoint.
Using webhook you can share links to your tasks. Then, access can be revoked by removing the Webhook.

To invoke the tasks via webhooks you need to provide the arguments.

Asuming that your webhook triggers the execution of a task with 4 arguments, this is a sample script bash script with curl:

```shell

# this params should be changed to use your webhook.
customer='yourCustomerName'
webhookId='webhookId'
webhookSecret='webhookSecret'

url='https://supervisor.theeye.io/${customer}/webhook/${webhookId}/trigger/secret/${webhookSecret}'
method='POST'
contentType='Content-Type: application/json'
arguments='["my","name","is","test"]'

curl -i -sS \
  --request "${method}" \
  --header "${contentType}" \
  --data "${arguments}" \
  "${url}"

```

Most of the time, arguments are not simple strings. Lets say you have to invoke a task with a complex JSON as argument.

```shell

# this params should be changed to use your webhook.
customer='yourCustomerName'
webhookId='webhookId'
webhookSecret='webhookSecret'

url='https://supervisor.theeye.io/${customer}/webhook/${webhookId}/trigger/secret/${webhookSecret}'
method='POST'
contentType='Content-Type: application/json'

date=$(date --rfc-3339=seconds | sed 's/ /T/')

# we are using heredoc to create the JSON file as arguments.
cat << JSON > ./payload.json
[
  "test arguments",
  {"prop1":"val1","prop2":"val2"},
  "${date}",
  "another argument"
]
JSON

curl -i -sS \
  --request "${method}" \
  --header "${contentType}" \
  --data @payload.json \
  "${url}"

```
