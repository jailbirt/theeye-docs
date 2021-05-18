[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

# Tasks API - ACL

____

## API Paths

| Method | Path  | Description | ACL       | 
| -----  | ----- | -----       | -----     | 
| GET   | /task/${id}/acl | [Get ACL                        ](#GET) | manager | 
| PUT   | /task/${id}/acl | [Replace ACL. New array required](#PUT) | manager | 
| PATCH | /task/${id}/acl | [Update. Add or remove          ](#PATCH) | manager | 
| DELETE| /task/${id}/acl | [Remove all ACL. Empty          ](#DELETE) | manager | 

-----

## Examples

### GET

```
curl 'http://127.0.0.1:60080/task/5f68878b76724e2d1b431e89/acl?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTk5ZGE0M2EwZTBiNTYyYTNlZWIwNTcyIiwiaWF0IjoxNjIxMzUwMzAyLCJleHAiOjE2MjEzNjExMDJ9.D-U5r4uRYR7AOssprnm2f6XBQRu0v9VBL7pkR_IcNNs'
```

### PUT

```
curl -X PUT \
  'http://127.0.0.1:60080/task/5f68878b76724e2d1b431e89/acl?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWVmNDlmZjk5MzY4MTQ0YWJlMWQ3NWQ3IiwiaWF0IjoxNTkzMDkwMDQxLCJleHAiOjE1OTMxMDA4NDF9.weUACAPs17lBqYVoUwh8EgK06ZhMahk6eDPbqgtAwRM' \
  --header 'content-type: application/json' \
  --data '{"users":[]}'
```

### PATCH

```
curl -X PATCH \
  'http://127.0.0.1:60080/task/5f68878b76724e2d1b431e89/acl?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWVmNDlmZjk5MzY4MTQ0YWJlMWQ3NWQ3IiwiaWF0IjoxNTkzMDkwMDQxLCJleHAiOjE1OTMxMDA4NDF9.weUACAPs17lBqYVoUwh8EgK06ZhMahk6eDPbqgtAwRM' \
  --header 'content-type: application/json' \
  --data '{"users":["manager"],"action":"add"}'
```

### DELETE

```
curl -X DELETE 'http://127.0.0.1:60080/task/5f68878b76724e2d1b431e89/acl?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWVmNDlmZjk5MzY4MTQ0YWJlMWQ3NWQ3IiwiaWF0IjoxNTkzMDkwMDQxLCJleHAiOjE1OTMxMDA4NDF9.weUACAPs17lBqYVoUwh8EgK06ZhMahk6eDPbqgtAwRM'

```
