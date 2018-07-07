# The Eye

## Introduction

**The Eye** works as an _automation platform_. Depending on your use case it can be both an _automation platform as a service_ or an _automation service platform,_. You may use it as:

* A remote server management and a monitoring tool \(Devops\)
* A server provisioning tool
* A task manager \(with scheduler\)
* A Workflow creation tool \(IFTTT\)
* A technical knowledge base repository
* An integration and automation platform
* A Real time support tool

It allows you to **monitor** and manage **resources**, launch and **schedule** **tasks**, write and/or upload **scripts**, build **workflows** through a series of **task** results or even **trigger** specific **tasks** or **workflows** as a response to one of your **monitor events**. All this is done from the web interface or the mobile app.

The **bolded keywords** in the above paragraph are all core concepts of The Eye.

## Domain vocabulary

The Eye consists on a **_core platform_** process running in a HA infrastructure. The **_core platform_** receives only **_agent_** and **_client_** connections.

An **_agent_** is an autonomous software installed on a **_user_** **_host_**. The **_agent_** keeps the **_host_** status and health updated (aka: **_host monitor_**) on the **_core platform_**. It will periodically retrieve any **_tasks_** the **_core platform_** could have pending for it. The **_agent_** will also report back to the **_core platform_** when it finishes a given **_task_**.

A **_client_** is any means capable of connecting to the **_core platform_** through a secure protocol and gain access with valid credentials. The Eye provides a web UI as it's main **_client_**, but alternative connection mechanisms can be implemented and any of them would fall under the **_client_** category.

A **_host_** is any instance, server or machine the **_user_** wants to **_monitor_** or control. The **_host_** must have internet access, the **_agent_** installed and configured and be able to reach the **_core platform_**.

A **_user_** is any valid identification registered on the **_core platform_**. Active **_users_** have a unique email address and are responsible for their own passwords to be strong and secure.

Once a **_user_** registers, a unique key/secret pair is assigned to his/her account. This key/secret pair must be used to configure any **_agent_** installed by the **_user_** so the **_core platform_** can secure the encrypted communication between the **_host_**, the **_client_** and the **_core platform_** itself.

**_Tasks_** are, well, **_tasks_**. They are the means of the **_core platform_** to instruct **_agents_** to execute **_scripts_** and routines. When a **_user_** creates a **_task_** the **_core platform_** stores any **_scripts_** and/or options for the **_task_** and assigns it to the **_host_**. **_Tasks_** can be launched, **_scheduled_** for one time or periodic execution, or even be **_triggered_** by some **_monitor event_** or **_workflow_**.

The **_user_** can upload or write **_scripts_**. **_Scripts_** are stored on the **_core platform_** and provided to the **_agent_** when a **_task_** needs to be executed.

A **_monitor event_** is...

A **_trigger_** is what happens when...

A **_workflow_** consists in a...
