# Integration through API

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)



## Enable access to APIs

### Integration Tokens
An Access Token is a credential that can be used by an application to access an API. Access Tokens can be either an opaque string or a JSON web token. They inform the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the scope that has been granted.

To verify that access to the APIs has been enabled:
- Log in to TheEye Administration Console.
- You must use an administrator account.
     - On the main page of the administration console, go to setting then to credentials. You can see the list of "Integration Tokens".

![dashboard_settings_credentials](../../images/dashboard_setting_credentials.png)

## Tasks;

*Task execution timeout*

The default execution timeout for tasks is 10 minutes.

Now it's not possible to change the timeout via API. To modify the timeout for a task contact us.



### list all...

*Resquest*
```bash
customer="lastranikos"
accesstoken="25011765c0a7f2ca03559c39f141a2afe306e6f1"

curl -sS "https://supervisor.theeye.io/$customer/task?access_token=$accesstoken"
```

### search task id by name

*Request*
```bash
customer="lastranikos"
accesstoken="25011765c0a7f2ca03559c39f141a2afe306e6f1"
taskName="HelloWorld Task"

curl -sS "https://supervisor.theeye.io/$customer/task?access_token=$accesstoken" | jq -r --arg name "$taskName" '.[] | select(.name==$name) | {"name": .name, "id": .id, "hostname": .hostname}' | jq -s '.'
```

*Response*
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


