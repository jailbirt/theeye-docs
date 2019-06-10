# Integration through API

[![theeye.io](/images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## Method

### Webhook

A task can be triggered by an incoming webhook. To create a new incoming webhook just click in the left "hamburger" menu, and click on "webhooks" - “new incoming webhook”.
Type the name of the new webhook, click save.

Once it's created you can click on the icon on the left to copy the curl example.

Check the [Webhooks Documentation](/core-concepts/webhooks/) for more details.


### Access token

Variables:
**customer**: organization name

**access token**: menu => settings => credentials => Integration Tokens

**List all tasks**
```curl -sS 'https://supervisor.theeye.io/$customer/task?access_token=$accesstoken'```

**Search task id by name**

```
taskName="Task name"
curl -sS 'https://supervisor.theeye.io/$customer/task?access_token=$accesstoken' | jq -r --arg name "$taskName" '.[] | select(.name==$name) | {"name": .name, "id": .id, "hostname": .hostname}' | jq -s '.'
```

Returns a json array with tasks, id and hostname:

```
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

**Task execution timeout**

The default execution timeout for tasks is 10 minutes.

**List tasks and timeout.** 
(Timeout = null) means that the timeout is set to default (10 minutes).

```
#!/bin/bash                                                                                                                                                                  
  
customer=$1
access_token=$2
supervisor=$3
if [ $3 == "" ];then supervisor='https://supervisor.theeye.io' ; fi
if [ $# -ne 3 ];then echo "missing parameters" ; exit ; fi

data=$(curl -s ${supervisor}/${customer}/task?access_token=${access_token})

echo "${data}" | jq -j '.[] | "id: ", .id, "\ttask: ", .name, "\ttimeout: ", .timeout, "\n"'
```

**Set Task execution timeout**

Now it's not possible to change the timeout via API. To modify the timeout for a task contact us.


