# Jobs

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## API URL for Jobs

### API V1 URL

Consider replacing the `${customer}` keyword with your organization name

`https://supervisor.theeye.io/${customer}/job?access_token=${token}`

| Method | Path | Description | ACL |
| ----- | ----- | ----- | ----- |
| GET  | /${customer}/job/${id} | [Get job by id](#example-1)                | viewer |
| GET  | /${customer}/job       | Get all jobs | viewer |
| PUT  | /${customer}/job/${id} | Finish a job, update execution status | *agent |
| POST | /${customer}/job | Create a new job instance | user | task id |
| GET  | /${customer}/job/${id}/lifecycle | Get job lifecycle | user |
| PUT  | /${customer}/job/${id}/cancel | Cancel job | user |

### API V2 URL

`https://supervisor.theeye.io/job?access_token={token}&customer={organization_name}`

| Method | Path | Description | ACL |
| ----- | ----- | ----- | ----- |
| POST | /job | Create a new job instance | user |
| POST | /job/secret/:secret | Create a new job instance using the task secret key | anonymous |
| DELETE | /job/finished | Delete completed jobs history | admin |
| PUT  | /job/${id}/approve | Approve Approval job | viewer |
| PUT  | /job/${id}/reject | Reject Approval job | viewer |
| PUT  | /job/${id}/input | Submit script job input | user |

### Sample API Usage

NodeJS Api helper: <a target="_black" href="https://github.com/theeye-io/recipes/tree/master/api/jobs">Fetch and Cancel jobs using TheEye API</a>

## EXAMPLES

#### **Example 1**

```bash
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
token=$THEEYE_ACCESS_TOKEN
id=$1

curl -sS --request GET "https://supervisor.theeye.io/${customer}/job/${id}?access_token=${token}"
```


#### **Get all jobs of specific task**
```bash
access_token=$THEEYE_ACCESS_TOKEN
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
task_id=$1

echo "using: $customer"

curl -sS "https://supervisor.theeye.io/${customer}/job?access_token=${access_token}&where\[task_id\]=${task_id}&include\[state\]=1&include\[creation_date\]=1&include\[lifecycle\]=1"
```

#### **Get job lifecycle**

```bash
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
token=$THEEYE_ACCESS_TOKEN
id=$1

curl -sS --request GET "https://supervisor.theeye.io/${customer}/job/${id}/lifecycle?access_token=${token}"
```

#### **Cancel Job**

```bash
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
token=$THEEYE_ACCESS_TOKEN
id=$1

curl -sS --request PUT "https://supervisor.theeye.io/${customer}/job/${id}/cancel?access_token=${token}"
```


#### **Cancel Job**

```bash
access_token=$THEEYE_ACCESS_TOKEN
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
task_id=$1

echo "using: $customer"

curl -sS  --request DELETE "https://supervisor.theeye.io/${customer}/job?access_token=${access_token}&where\[task_id\]=${task_id}"
```


#### **Approve Approval job**

```bash
customer=$(echo ${THEEYE_ORGANIZATION_NAME} | jq -r '.')
token="${THEEYE_ACCESS_TOKEN}"
id="${1}"

curl -X PUT "https://supervisor.theeye.io/${customer}/job/${id}/approve?access_token=${token}"
```

#### **Create a new job instance using the task secret key**

```bash
task="${1}"
secret="${2}"
customer=$(echo ${THEEYE_ORGANIZATION_NAME} | jq -r '.')

curl -i -sS -X POST "https://supervisor.theeye.io/job/secret/${secret}" \
  --header 'Content-Type: application/json' \
  --data '{"customer":"'${customer}'","task":"'${task}'","task_arguments":["'${PDF}'","'${Imagen}'","'${Link a XLS}'","'${Link Web}'","'${Una página externa}'"]}'
```

#### **Reject Approval job**

```bash
customer=$(echo ${THEEYE_ORGANIZATION_NAME} | jq -r '.')
token="${THEEYE_ACCESS_TOKEN}"
id="${1}"

curl -X PUT "https://supervisor.theeye.io/${customer}/job/${id}/reject?access_token=${token}"
```

#### **Submit script job input**

```bash
customer=$(echo ${THEEYE_ORGANIZATION_NAME} | jq -r '.')
token="${THEEYE_ACCESS_TOKEN}"
id="${1}"

curl -X PUT "https://supervisor.theeye.io/${customer}/job/${id}/input?access_token=${token}"
```
