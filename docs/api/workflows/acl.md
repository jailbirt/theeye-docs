[![theeye.io](../../images/logo-theeye-theOeye-logo2.png)](https://theeye.io/en/index.html)

# Workflow API - ACL

____

## API Paths

| Method | Path  | Description | ACL       | 
| -----  | ----- | -----       | -----     | 
| GET   | /workflows/${id}/acl | [Get ACL                        ](#GET) | manager | 
| PUT   | /workflows/${id}/acl | [Replace ACL. New array required](#PUT) | manager | 
| PATCH | /workflows/${id}/acl | [Update. Add or remove          ](#PATCH) | manager | 
| DELETE| /workflows/${id}/acl | [Remove all ACL. Empty          ](#DELETE) | manager | 

-----

## Examples

### GET

```

curl 'http://127.0.0.1:60080/workflows/609926e23c6c9a58b7793de9/acl?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTk5ZGE0M2EwZTBiNTYyYTNlZWIwNTcyIiwiaWF0IjoxNjIxMzUwMzAyLCJleHAiOjE2MjEzNjExMDJ9.D-U5r4uRYR7AOssprnm2f6XBQRu0v9VBL7pkR_IcNNs'

```

### PUT

```

curl -X PUT \
   'http://127.0.0.1:60080/workflows/609926e23c6c9a58b7793de9/acl?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWVmNDlmZjk5MzY4MTQ0YWJlMWQ3NWQ3IiwiaWF0IjoxNTkzMDkwMDQxLCJleHAiOjE1OTMxMDA4NDF9.weUACAPs17lBqYVoUwh8EgK06ZhMahk6eDPbqgtAwRM' \
  --header 'content-type: application/json' \
  --data '{"users":["maitu"]}'

```

### PATCH

```

curl -X PATCH \
   'http://127.0.0.1:60080/workflows/609926e23c6c9a58b7793de9/acl?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWVmNDlmZjk5MzY4MTQ0YWJlMWQ3NWQ3IiwiaWF0IjoxNTkzMDkwMDQxLCJleHAiOjE1OTMxMDA4NDF9.weUACAPs17lBqYVoUwh8EgK06ZhMahk6eDPbqgtAwRM' \
   --header 'content-type: application/json' \
   --data '{"users":["manager","maitu"],"action":"add"}'

```

### DELETE


```

curl -X DELETE 'http://127.0.0.1:60080/workflows/609926e23c6c9a58b7793de9/acl?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWVmNDlmZjk5MzY4MTQ0YWJlMWQ3NWQ3IiwiaWF0IjoxNTkzMDkwMDQxLCJleHAiOjE1OTMxMDA4NDF9.weUACAPs17lBqYVoUwh8EgK06ZhMahk6eDPbqgtAwRM'

```

