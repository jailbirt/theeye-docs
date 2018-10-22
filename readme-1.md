# What is The Eye

[![theeye.io](https://theeye.io/img/logo2.png)](https://theeye.io)

## Content

* [What is TheEye?](readme-1.md#what-is-theeye)
* [First Steps](readme-1.md#first-steps)
  * [Quick Start](readme-1.md#quick-start)
  * [Bot Installation](the-eye-agent/installation.md)
  * [Check your first resource](readme-1.md#check-your-first-resource)
* [User Management](readme-1.md#users)
* Organization
* [Integrations](https://github.com/theeye-io/theeye-docs/tree/2f190a3ad234ff94c05da22e1127c8d522191558/integrations/README.md)
* Resources
  * Indicators
  * [Monitors](readme-1.md#monitors)
  * [Tasks](readme-1.md#tasks)
  * [Templates](templates.md)
  * [Webhooks](readme-1.md#webhooks)
  * [Scripts](readme-1.md#scripts)
* [Workflow](readme-1.md#workflow)
* Other Tools
  * [TheEye\_Cli Util](workflows/cli-util.md)
  * [Build Bot Binary](https://github.com/theeye-io/theeye-docs/tree/2f190a3ad234ff94c05da22e1127c8d522191558/binary_build.md)
  * [Bot Docs](https://github.com/theeye-io/theeye-docs/tree/2f190a3ad234ff94c05da22e1127c8d522191558/agent/README.md)

### What is TheEye

* A remote server managament and a monitoring tool \(Devops\)
* A server provisioning tool
* A task manager \(with scheduler\)
* A Workflow creation tool \(IFTTT\)
* A technical repository
* An integration and automation platform
* A Real time support tool

If you want start from the scratch, there's a native integration with ELK and Docker. Check this out [TheEye MindMap](https://atlas.mindmup.com/2017/11/7f1f2fb0d53611e7a974c121a32f69bf/theeye_functional_mindmap_es/index.html)

### First Steps

To start using TheEye you will need to:

1. Have a user account. If you don't have one go to _\*\*_[https://theeye.io/register](https://theeye.io/register) and create one.
2. Start the self-provided Bot or Install [one ](the-eye-agent/installation.md#manual-instalation-from-sources-binary-for-your-platform-is-not-available)on each server you would like to perform actions or automate from.
3. Create your first resource from TheEye Web.

Once you've activated your user account, you'll see this Dashboard after login:

![first time login](.gitbook/assets/firsttimelogin.jpg)

The Tutorial will guide you through the installation process of a [Bot](the-eye-agent/installation.md) and will show you how to create a task.

In case you don't want to follow the tutorial, you can install the Bots on your own following instructions from Settings-&gt;Installer in the side menu.

![settings](.gitbook/assets/settings-1.jpg)

#### Quick start

Launch the self provided Bot, and begin automating processes.

![Settings Menu \(Installer\)](.gitbook/assets/startbot.jpg)

### **Bot Installation** 

#### **\(You can skip this section if you're using the self-provided Bot\)**

If it is the first time you access TheEye Website, click the link in the monitors panel where says _"Click HERE to get the step by step instructions to install the Bot on Linux and Windows operating systems"_, otherwise go to _Settings_ in the left menu and get to the _Installation_ section. Installation instructions are provided for Linux and Windows systems.

* Linux:

![linux install](.gitbook/assets/linuxagentinstall-1.jpg)

* Windows:

![windows install](.gitbook/assets/windowsagentinstall-1.jpg)

* Docker

![docker install](.gitbook/assets/dockeragentinstall.jpg)

After each agent installation a new monitor is shown up in the Dashboard.

For detailed installation information check the [Bot:install document](the-eye-agent/installation.md)

#### Check your first resource

Check the Dashboard view after login, you should see "All up and running" in the monitors panel.

#### Users

TheEye provides six different user roles. You can create users on the go with the appropiate role. See the [Users Management Documentation](user-management/) for more details.

### Resources

TheEye provides a way to store technical knowledge in Resources that become usable in many different aspects. Each resource is explained hereunder.

#### Monitors

A monitor is used to check services' or resources' status. You can use this status information to take actions \(e.g. run a task, send notification\). You can always customize the time between checks.

There are five kind of monitors you can set up from TheEye: Stats, Script, API/Web Check, Process and File. Check the [Monitors Documentation](https://github.com/theeye-io/theeye-docs/tree/2f190a3ad234ff94c05da22e1127c8d522191558/monitors/README.md) for more details.

* Monitors will notify for events as desired. Check the Users ACLs' section for [Notifications](readme-1.md)

#### Tasks

A task is an action that can be performed or executed on demand. You can also use the task scheduler to create and manage tasks that TheEye will carry out automatically at the times you specify. Check the [Tasks Documentation](tasks/) for more details.

#### Scripts

You can write scripts directly from TheEye web to your servers or you can create scripts to be used as API Calls or monitors. Check the [Scripts Documentation](scripts/) for more details.

#### Templates \(Provisioning\)

One of the main advantages brought by TheEye is the fact that all your technical stuff is stashed at the moment it is created \(scripts, tasks, monitors\). Provisioning allows you to reuse your stuff for other servers in the same way a template works. To reuse all the resources created for a server, go to _Templates_ in the left menu, select your source host in the _base template_ input box, set a name for the template and select your destination hosts in the _Hosts to add to the template_ input box. All the resources from your source host will now be available on your destination hosts. Templates can be exported to be used on other organizations, in the same way they can be imported. Check the Templates Documentation for more details.

![template](https://raw.githubusercontent.com/patobas/docs/master/template.gif)

#### Webhooks

A webhook can be used to perform an action when an event occurs on other website. When that event occurs, the source site makes an HTTP request to the URL configured for the webhook.

To create a webhook \(incoming webhook\), just go to the _Webhooks_ section left menu, and click on "_+ new Incoming webhook_". Name it and save it. Once you have saved it, expand it, by clicking over the webhook box, you'll be able to see the URL assigned to the webhook.

![webhook expanded](https://raw.githubusercontent.com/theeye-io/theeye-docs/master/images/webhookexpanded.jpg)

The webhook you created can be used as a trigger for other resources \(e.g. You can set the webhook to be the trigger of a task\) as shown hereunder.

![webhook](https://raw.githubusercontent.com/patobas/docs/master/webhook.gif)

### Workflow

Workflow connects your tasks together to automate complex or dependent processes.

Which trigger would you like to use? You can start a workflow directly with a play button or you can use monitors or tasks as triggers.

Check the [Workflow Documentation](workflows/) for more details.

