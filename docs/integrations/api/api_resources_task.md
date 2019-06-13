# API for Tasks

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## API URL for Task

URL: `https://supervisor.theeye.io/task?access_token={token}&customer={organization_name}`


## Examples

### Tasks;

*Task execution timeout*

The default execution timeout for tasks is 10 minutes.

Now it's not possible to change the timeout via API. To modify the timeout for a task contact us.



### list all...

*Resquest*
```bash
customer="customer"
token="integrationToken"

curl -sS "https://supervisor.theeye.io/$customer/task?access_token=$token"
```

### search task id by name

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

### list and timeout
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


