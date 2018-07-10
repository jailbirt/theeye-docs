[![theeye.io](https://theeye.io/img/logo2.png)](https://theeye.io)

# Contents
TheEye logs

Events and actions performed by users and resources are constantly being saved and in some cases also notified.
The records are saved in _ElasticSearch_ by the _Supervisor_ for further analysis through _Kibana_ (Web UI).

https://kibana.theeye.io

ElasticSearch stack

## Data sent to ELK by Event
Every event that is logged in ELK can be identified by common fields as:
- Date and time
- Hostname
- Organization (Customer)
- Operation (e.g. CRUD)
- Topic (event type description)

#### Events that are actually stored

##### CRUD Events
Every time a CRUD action is performed (POST, PUT, DELETE) a record is saved as described herunder:

The signature matches to API-crud, where API is the endpoint name that has the notification (data injection) implemented.
For example, you'll find a _monitor_ action in ELK data as a monitor-crud topic.

##### Non-CRUD Events
This events can be identified as the following topics:

- agent-version: every time the agent version is updated.
- host-stats: every time host-status is updated**
- monitor-execution: every time the agent sends an update for a monitor execution **
- monitor-state: every time a monitor status changes (failure, recovery, stop, change-file) **
- triggered-webhook: every time a webhook is played **
- task-execution: every time a task is played
- task-result: every time a task excution ends


###### Configuration

Topics configuration:

>"agent": {
>  "version": "agent-version"
>},
>"host": {
>  "stats": "host-stats",
>},
>"monitor": {
>  "crud": "monitor-crud",
>  "execution": "monitor-execution",
>  "state": "monitor-state",
>},
>"script": {
>  "crud": "script-crud"
>},
>"file": {
>  "crud": "file-crud"
>},
>"hostgroup": {
>  "crud": "provisioning-crud",
>},
>"host": {
>  "crud": "host-crud",
>  "stats": "host-stats"
>},
>"task": {
>  "crud": "task-crud"
>},
>"job": {
>  "crud": "job-crud"
>},
>"webhook": {
>  "crud": "webhook-crud",
>  "triggered": "triggered-webhook"
>}


### Notifications

Every CRUD event previously described is also notified as prefered by the user.
