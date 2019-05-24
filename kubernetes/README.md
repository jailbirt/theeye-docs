# Kubernetes manififests

[![theeye.io](https://theeye.io/img/logo2.png)](https://theeye.io)

## Theeye agent manifests examples


* [DaemonSet](https://github.com/theeye-io-team/theeye-docs/blob/master/kubernetes/examples/theeye-agent-daemonset.yml)

Ensures that all nodes in the cluster run a copy of theeye-agent. Allows monitoring of all hosts in the kubernetes cluster(cpu, mem, disk), run tasks.
Each new host added to the cluster will have a copy of theeye-agent.

* [Deployment](https://github.com/theeye-io-team/theeye-docs/blob/master/kubernetes/examples/theeye-agent-deploy.yaml)

Creates a single copy of theeye-agent in the cluster. Allows to execute monitors/tasks that require connection to endpoints only accessible from within the kubernetes cluster.

* [Secrets](https://github.com/theeye-io-team/theeye-docs/blob/master/kubernetes/examples/theeye-agent-credentials.yaml)

Creates a single copy of theeye-agent in the cluster. Allows to execute monitors/tasks that require connection to endpoints only accessible from within the kubernetes cluster.

* Environmental Variables                                                                                                                                                    

Required environmental variables to run the agent:

```
NODE_ENV = 'production'                                                                                                                                                      
THEEYE_SUPERVISOR_CLIENT_ID = get it from: menu => settings => credentials => clientID
THEEYE_SUPERVISOR_CLIENT_SECRET = get it from: menu => settings => credentials => client secret
THEEYE_SUPERVISOR_CLIENT_CUSTOMER = get it from: menu => settings => credentials => customer

#API_URL SAAS
THEEYE_SUPERVISOR_API_URL = 'https://supervisor.theeye.io'

#API_URL INHOUSE
THEEYE_SUPERVISOR_API_URL='http://HOST:60080'
```
