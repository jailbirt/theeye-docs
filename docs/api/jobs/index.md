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

