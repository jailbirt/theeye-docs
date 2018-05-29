# Workflow Documentation
Workflow connects your tasks together to automate things.

### Workflow Creation

Create a new workflow from the dashboard by clicking the "+" button:

![](/images/workflow1.jpg)

Name your workflow and select a trigger (Task or monitor). In this example the trigger is a scrapper monitor that will report failure when the "transaction API" is down.

![](/images/workflow2.jpg)

Add an event to connect tasks, by clicking "Add Event". The examples shows how the success event of task "Get Pending Transactions" will execute the task "Execute Pending Transactions" by passing all the pending transactions to it.

![](/images/workflow5.jpg)

Workflow graph is drawn. Select your starting task and confirm to save the workflow.

![](/images/workflow4.jpg)

Once the workflow is confirmed you'll see it in the dashboard as shown hereunder.

![](/images/workflow6.jpg)

