# Workflows

Workflow connects your tasks together to automate complex or dependent processes.

## Workflow Creation

Create a new workflow from the dashboard by clicking the "+" button:

![](../.gitbook/assets/workflow1.jpg)

Name your workflow and select a trigger \(Task or monitor\). In this example the trigger is a scrapper monitor that will report failure when the "transaction API" is down.

![](../.gitbook/assets/workflow2.jpg)

Add an event to connect tasks, by clicking "Add Event". The examples shows how the success event of task "Get Pending Transactions" will execute the task "Execute Pending Transactions" by passing all the pending transactions to it.

![](../.gitbook/assets/workflow5.jpg)

Workflow graph is drawn. Select your starting task and confirm to save the workflow.

![](../.gitbook/assets/workflow4.jpg)

Once the workflow is confirmed you'll see it in the dashboard as shown hereunder.

![](../.gitbook/assets/workflow6.jpg)

