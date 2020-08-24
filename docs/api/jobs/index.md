# Jobs

[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

## API URL for Jobs

### API V1 URL

Consider replacing the `${customer}` keyword with your organization name

`https://supervisor.theeye.io/${customer}/job?access_token=${token}`

| Method | Path | Description | ACL |
| ----- | ----- | ----- | ----- |
| GET  | /${customer}/job/${id} | Get job by id                | viewer |
| GET  | /${customer}/job       | Get all the jobs information | viewer |
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

#### **Get Job by id**

```bash
customer=$(echo $THEEYE_ORGANIZATION_NAME | jq -r '.')
token=$THEEYE_ACCESS_TOKEN
id=$!

curl -sS --request GET "https://supervisor.theeye.io/${customer}/job/${id}?access_token=${token}"
```


#### **Get all jobs by id**
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
id="5eff3019f3707500121284a8"

curl -sS --request PUT "https://supervisor.theeye.io/${customer}/job/${id}/cancel?access_token=${token}"
```

