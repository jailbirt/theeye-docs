# Run Tasks with Arguments

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## application/json

```shell
secret=''
customer=''
task=''

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}?customer=${customer}&task=${task}" \
  --header 'Content-Type: application/json' \
  --data '{"task_arguments":["arg1","arg2"]}'
```

## application/x-www-form-urlencoded

```shell
secret=''
customer=''
task=''

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}?customer=${customer}&task=${task}" \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode task_arguments="arg1" \
  --data-urlencode task_arguments="arg2"

```

## querystring 

```shell

secret=''
customer=''
task=''

curl -i -sS \
  --request POST \
  --url "https://supervisor.theeye.io/job/secret/${secret}?customer=${customer}&task=${task}&task_arguments\[\]=arg1&task_arguments\[\]=arg2"

```

