# Monitors

[![theeye.io](https://theeye.io/img/logo2.png)](https://theeye.io)

## Monitors Documentation

### Contents

* [Stats Monitor](monitors.md#monitor-type-stats)
* [Script Monitor](monitors.md#monitor-type-script)
* [API/Web Check Monitor](monitors.md#monitor-type-api-webcheck)
* [Process Monitor](monitors.md#monitor-type-process)
* [File Monitor](monitors.md#monitor-type-file)
* [Nested Monitor](monitors.md#monitor-type-nested)

### Monitor type: Stats

Checks your Hosts' stats \(health\) and triggers alerts when thresholds are exceeded. You can set your own thresholds from the monitors panel.

![stats monitor](https://raw.githubusercontent.com/patobas/docs/master/monitor_stats.gif)

### Monitor type: Script

Create a script and use the output log to monitor a state when other monitor does not suit your needs. This is an example script to check if a bridge is running.

![script monitor](https://raw.githubusercontent.com/patobas/docs/master/monitor_script.gif)

### Monitor type: API/WEB check

Sends a request to and endpoint and checks for an expected answer. Custom payload and custom expected responses are allowed.

![request monitor](https://raw.githubusercontent.com/patobas/docs/master/web_api.gif)

### Monitor type: Process

Verifies that a process is running \(e.g. daemon\)

![process monitor](https://raw.githubusercontent.com/patobas/docs/master/monitor_process.gif)

### Monitor type: File

A File monitor will upload a file to a server and ensure that the file remains as created in the destination path you provided. Most common use is to push a configuration file. The file can be updated at any time directly from the monitor box.

### Monitor type: Nested

A nested monitor is a special monitor that contains other monitors. This kind of monitor will notify when all the contained monitors needs attention. You can create a nested monitor from the dashboard, using the "+" button.

![nested monitor](.gitbook/assets/nestedmonitors.jpg)

Name your "nested Monitor" or copy an already created one. Add or remove the monitor you'd like to nest.

![nested monitor setup](.gitbook/assets/nestedmonitorssetup.jpg)

