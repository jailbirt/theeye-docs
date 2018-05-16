[![](https://theeye.io/landpage/images/logo.png)](https://theeye.io)

# Monitors Documentation
### Contents
#### [Stats Monitor](#monitor-type-stats)
#### [Script Monitor](#monitor-type-script)
#### [API/Web Check Monitor](#monitor-type-api-webcheck)
#### [Process Monitor](#monitor-type-process)
#### [File Monitor](#monitor-type-file)
#### [Nested Monitor](#monitor-type-nested)
------------------------------

##### Monitor type: Stats

Checks your Hosts' stats (health) and triggers alerts when thresholds are exceeded.
You can set your own thresholds from the monitors panel.

![](https://github.com/patobas/docs/blob/master/monitor_stats.gif)

##### Monitor type: Script

Create a script and use the output log to monitor a state when other monitor does not suit your needs.
This is an example script to check if a bridge is running.

![](https://github.com/patobas/docs/blob/master/monitor_script.gif)


##### Monitor type: API/WEB check

Sends a request to and endpoint and checks for an expected answer.
Custom payload and custom expected responses are allowed.

![](https://github.com/patobas/docs/blob/master/web_api.gif)


##### Monitor type: Process

Verifies that a process is running (e.g. daemon)

![](https://github.com/patobas/docs/blob/master/monitor_process.gif)

##### Monitor type: File

A File monitor will upload a file to a server and ensure that the file remains as created in the destination path you provided.
Most common use is to push a configuration file. The file can be updated at any time directly from the monitor box.

##### Monitor type: Nested
A nested monitor is a special monitor that contains other monitors. This kind of monitor will notify when all the contained monitors needs attention.
You can create a nested monitor from the dashboard, using the "+" button. 

![](/images/NestedMonitors.jpg)
