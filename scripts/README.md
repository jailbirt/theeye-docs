# Scripts

[![theeye.io](https://theeye.io/img/logo2.png)](https://theeye.io)

## Contents

* [Create a Script](https://github.com/theeye-io/theeye-docs/tree/b1a4582d36b3d5ffdd57440032c656c275f9bce5/scripts/scripts.md#create-a-script)
  * [Writing Scripts](https://github.com/theeye-io/theeye-docs/tree/b1a4582d36b3d5ffdd57440032c656c275f9bce5/scripts/scripts.md#writing-scripts)
* [Scripts Run As](https://github.com/theeye-io/theeye-docs/tree/b1a4582d36b3d5ffdd57440032c656c275f9bce5/scripts/scripts.md#scripts-runas)
  * [Notation](https://github.com/theeye-io/theeye-docs/tree/b1a4582d36b3d5ffdd57440032c656c275f9bce5/scripts/scripts.md#notation)
  * [In Linux](https://github.com/theeye-io/theeye-docs/tree/b1a4582d36b3d5ffdd57440032c656c275f9bce5/scripts/scripts.md#in-linux)
  * [In Windows](https://github.com/theeye-io/theeye-docs/tree/b1a4582d36b3d5ffdd57440032c656c275f9bce5/scripts/scripts.md#in-windows)

## Create a Script

Scripts can be written directly from a live editor or can be uploaded by dropping files over the _Files & Scripts_' creation window. The live editor will recognize the notation language \(interpreter\) once you name the script file and set an extension \(e.g. runme.sh\). Bash, Python, Perl, Node and bat files are recognized, but any script can be executed as long as the interpreter is available in the destination host.

TheEye will carry out the script execution over tasks. Check the [tasks' documentation](../tasks/#create-a-script-task) to find out how scripts are used.

You can also use a script to create a _Monitor_, please take a look at the [monitors' documentation](../monitors.md#monitor-type-script) to see how scripts are used.

### Writing Scripts

TheEye will use the output from your scripts to determine whether or not the execution was successful. The last line of the scripts will be parsed looking for a string which represents a `state` or a `json` result object. So it is mandatory to indicate the execution status when writing scripts.

A `state` could be any state or event linked to the task or monitor of this script. Default build-in events are `success` and `failure`.

So if you script ended as expected \(success state\), you will have to make it print "success" as the last output line of your script.

* `success`, `normal` and `ok` are accepted `success` states.
* `failure` and `fail` are accepted `failure` states.

### Passing Arguments in Workflow.

There are different ways of passing arguments from monitor to task and from task to task.


#### Monitor to Task

In this case the state is always required or a failure will be assumed. There are two options to provide output:

* The first option is to print a JSON formatted string with two properties: state and data. data must be an array with the arguments list that need to be provided to the next triggered task in the workflow. Each index of the array will be mapped in order to each argument of the triggered task.

```bash

# do your things here...
if [ true ]; then
  echo { \"state\":\"success\", \"data\": [ \"val1\", \"val2\" ] }
else
  echo { \"state\":\"failure\", \"data\": [ \"val1\", \"val2\" ] }
fi

```

* The second option is similar to the first one, but we use an object in the data property instead of an array. The difference is that the object will be passsed untouch as the firt argument of the next task.

```bash

# do your things here...
if [ true ]; then
  echo { \"state\":\"success\", \"data\":{ \"val1\":$varTwo, \"val2\":$varUno }  }
else
  echo { \"state\":\"failure\" }
fi

```

#### Task to Task

This scenario is the same as the previous, but as the state is not explicitly required and can be ignored, the output is quite more simple. In task the output state is always "success", unless a "failure" is provided to stop the workflow.

Output can be an array (each index will be mapped to each argument of the triggered task):

```
  echo [\"arg1\",\"arg2\",\"arg3\"]
```

or an object (that will be the first argument of the triggered task):

```
  echo { \"val1\": $varTwo, \"val2\": $varUno }

```

#### Limitations.

The only detected limitation so far is the size of the string used as output. Dependeding on the operating system, the output buffer varies. Be aware that if the string exceded the output buffer, some characters can be lost, a json error will be arise (due to parsing errors) and the output of the monitor/task will be a failure. This situation can be detected analizing the output of the monitor or task.

#### Example

This is a simple check with `success` and `failure` states

```bash
# Some commands and checks here
# ...
# And at the end of the script...

if [ $check == true ]; then
  echo "success"
  exit
else
  echo "failure"
  exit
fi

# or you can keep doing more things, you can control the flow of your script and end it anytime
echo "success"
```

If you need to report extra information to the API, you'll have to print the information to the `stdout` in json format like this

```bash
varUno="value1"
varTwo="value2"

# This will output a valid JSON and will be parsed by TheEye agent
# Manually writing a JSON string is not quite pleasant, we know that and we will improve this in the future
if [ true ]; then
  echo { \"state\":\"success\", \"data\":{ \"val1\":$varTwo, \"val2\":$varUno } }
else
  echo { \"state\":\"failure\", \"data\":{ \"val1\":$varTwo, \"val2\":$varUno } }
fi
```

The JSON output must have a `state` property with a the state value from your script execution, and a `data` property with any extra information you consider, TheEye will show the `data` value in the execution log.

If you need to validate the JSON output of your scripts, you can use this simple nodejs script - there are also nice web sites that can validate JSON for you too. Change it for your case

`test_json.js`:

```javascript
// test.js
var exec = require('child_process').exec;

exec('./test.sh', function(err, stdout, stderr){
    var obj = JSON.parse(stdout);

    // if the stdout string was parsed successfuly the next sentence will give the members number - which is 1
    console.log( obj.data );
});
```

the `test.sh` script looks like this

```bash
#!/bin/bash

state='normal'
POOL='pool'
members=1

# this is valid json when send to stdout
echo { \"state\" : \"$state\" , \"data\" : { \"members\" : $members } }
# this will echo { "state": "normal" , "data" : { "members": 1 } }
```

## Scripts RunAs

Scripts run by default...

* Linux: adding execution permission to the file and including the interpreter [shebang](https://en.wikipedia.org/wiki/Shebang_%28Unix%29) in the first line.
* Windows: setting the interpreter that should use the OS by the file extension.

Script RunAs allows to execute the script in a specific way, by using a different binary interpreter or in Linux using sudo. **Remember that** _**RunAs**_ **is part of the** _**Tasks'**_ **configuration, as** _**Tasks**_ **are responsible for Scripts' execution**. Please check the [Script Task Documentation](https://github.com/theeye-io/theeye-docs/tree/b1a4582d36b3d5ffdd57440032c656c275f9bce5/scripts/tasks.md#create-a-script-task) section for further details.

### Notation

The runas text could be any command line combination, using fixed variables, environment settings, command or anything that agent user\(by default theeye-a\) can do within the default shell \(usually bash or cmd\). We recommend to keep it simple and short. The only requirement is that the runas has to include the %script% KEYWORD. This KEYWORD indicates which part of the runas text will be replaced with the script path and its arguments.

### In Linux

#### SUDO

To run the script using sudo, use one of the following runas syntax

1.

```bash
sudo -u user -c "%script%" # (remember to add the " or the arguments won't be visible by the script)
```

2.

```bash
sudo -u user $(%script%)
```

#### Custom binaries

Some times is required to run the script with a binary which is not registered in the global or user paths.

One case is to run a Nodejs script with a different interpreter version. To achive that include the full path to the interpreter in the `runas`

```bash
/usr/local/lib/nodejs/v4/bin/node %script%
```

### In Windows

The same aproach to execute custom scripts with unregistered interpreters apply both to Windows and Linux.

You will have to provide the absolute path to script interpreter.

#### Powershell Scripts Execution

To execute a powershell script you must add this line to the "RunAs" tasks' field.

```text
powershell.exe -NonInteractive -ExecutionPolicy ByPass -File "%script%"
```

Use this line if you're using arguments in your script. Keep in mind that the filename of the ps1 script must not have white spaces.

```text
powershell.exe -NonInteractive -ExecutionPolicy ByPass -File %script%
```

#### Sudo note.

On Windows there are some alternatives to achieve the same result you can get using sudo. The native way is by using \[runas\]\([https://technet.microsoft.com/en-us/library/cc771525\(v=ws.10\).aspx](https://technet.microsoft.com/en-us/library/cc771525%28v=ws.10%29.aspx)\). The main important difference is that you should provide the user password at least once.

There are other alternative tools and configurations you will have to find out by yourself.

### Theeye Sample Scripts

* [Windows Batch](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.bat)
* [GO](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.go)
* [NODEJS \| Javascript](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.js)
* [PHP](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.php)
* [Perl](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.pl)
* [PowerShell](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.ps1)
* [PowerShell](https://gist.github.com/theeye-io/ed1f2407b3d3aae90a69af064c3e204a)
* [Bash](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.sh)

