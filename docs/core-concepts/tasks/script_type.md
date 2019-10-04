# Script Task

##  Runtime Information

During runtime, you can access basic information of the job being executed via environment variables.
The information is JSON encoded. All the environment variables belonging to theeye runtime are prefixed with THEEYE_ keyword

### THEEYE_JOB

Contains information of the current job.

| Name | Type | Description |
| ---  | --- | --- |
| id | string | the id of the job. you can fetch the API with it |
| task_id | string | task definition id. can fetch the API with it |

### THEEYE_JOB_USER

| Name | Type | Description |
| ---  | --- | --- |
| id | string | the user id |
| email | string | the user email |

### THEEYE_JOB_WORKFLOW

When Tasks belongs to Workflows, this constains information of the Workflow.

| Name | Type | Description |
| ---  | --- | --- |
| id | string | the workflow schema id |
| job_id | string | the workflow job execution instance |
