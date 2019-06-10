# Theeye Integrations

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## Elastic Search Kibana (ELK stack)
TheEye logs

Events and actions performed by users and resources are constantly being saved and in some cases also notified.
The records are saved in _ElasticSearch_ by the _Supervisor_ for further analysis through _Kibana_ (Web UI).

https://kibana.theeye.io

### Data sent to ELK by Event
Every event that is logged in ELK can be identified by common fields as:
- Date and time
- Hostname
- Organization (Customer)
- Operation (e.g. CRUD)
- Index (event type description)

Data is consistenly organized in different indexes (tasks, monitors, hosts, file and agent).

#### Events that are actually stored

##### CRUD Events
Every time a CRUD action is performed (POST, PUT, DELETE) a record is saved as described herunder:

The signature matches to API-crud, where API is the endpoint name that has the notification (data injection) implemented.
For example, you'll find a _monitor_ action in ELK data as a monitor-crud topic.

##### Non-CRUD Events
This events can be identified as follows:

- agent-version: every time the agent version is updated.
- host-stats: every time host-status is updated**
- monitor-execution: every time the agent sends an update for a monitor execution **
- monitor-state: every time a monitor status changes (failure, recovery, stop, change-file) **
- triggered-webhook: every time a webhook is played **
- task-execution: every time a task is played
- task-result: every time a task excution ends


###### Configuration

Topics configuration:

```json
{
   "monitor":{
      "crud":"monitor-crud",
      "execution":"monitor-execution",
      "state":"monitor-state"
   },
   "script":{
      "crud":"script-crud"
   },
   "agent":{
      "version":"agent-version"
   },
   "file":{
      "crud":"file-crud"
   },
   "hostgroup":{
      "crud":"provisioning-crud"
   },
   "host":{
      "integrations":{
         "crud":"host-integrations-crud"
      },
      "crud":"host-crud",
      "state":"host-state",
      "processes":"host-processes",
      "stats":"host-stats",
      "registered":"host-registered"
   },
   "task":{
      "crud":"task-crud",
      "execution":"task-execution",
      "sent":"task-sent",
      "result":"task-result",
      "cancelation":"task-cancelation",
      "terminate":"task-terminate"
   },
   "workflow":{
      "execution":"workflow-execution"
   },
   "job":{
      "crud":"job-crud"
   },
   "webhook":{
      "crud":"webhook-crud",
      "triggered":"webhook-triggered"
   },
   "scheduler":{
      "crud":"scheduler-crud"
   }
}
```


### Notifications

Every CRUD event previously described is also notified as prefered by the user.
