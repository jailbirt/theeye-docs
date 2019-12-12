# API for Monitors

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## API URL for Monitors

URL: `https://supervisor.theeye.io/monitor?access_token={token}&customer={organization_name}`


## Examples
### List monitors

###Variables:
  **customer**: organization name

  **access token**: menu => settings => credentials => Integration Tokens

### Request example:

```bash
  customer=""
  access_token=""

  curl -sS https://supervisor.theeye.io/${customer}/monitor?access_token=${access_token}
```
#### **Search monitor by name**

```bash
  customer=""
  access_token=""
  monName="demo"

  curl -sS https://supervisor.theeye.io/${customer}/monitor?access_token=${access_token} | \
    jq -r --arg name "$monName" '.[] | select(.name==$name) | {"name": .name, "id": .id, "state": .resource.state}' | jq -s '.'
```

#### **Show bot stats**

```bash
customer=""
access_token=""
botName="demo"

curl -sS https://supervisor.theeye.io/${customer}/monitor?access_token=${access_token} | \
jq -r --arg name "$botName" '.[] | select((.name==$name) and (.type=="dstat")) | {"name": .name, "id": .id, "stats": .resource.last_event.data}' | jq -s '.'
```

### **Response example:**

```json
[
  {
    "name": "demo",
    "id": "5bb755f42f78660012bdd9af",
    "stats": {
      "cpu": 3,
      "mem": 36.73548113271163,
      "cache": 4.689083037753453,
      "disk": [
        {
          "name": "xvda2",
          "value": 84.84461326890819
        }
      ]
    }
  }
]
```


