
[![](https://theeye.io/landpage/images/logo.png)](https://theeye.io)
# Scripts Documentation
## Contents
#### Create a Script
##### [Writing Scripts](#writing-scripts)
##### [Scripts Run As](#scripts-runas)
-------------------

### Create a Script
Scripts can be written directly from a live editor or can be uploaded by dropping files over the _Files & Scripts_' creation window. 
The live editor will recognize the notation language (interpreter) once you name the script file and set an extension (e.g. runme.sh).
Bash, Python, Perl, Node and bat files are recognized, but any script can be executed as long as the interpreter is available in the destination host.

TheEye will carry out the script execution over tasks. Check the [tasks' documentation](/tasks#create-a-script-task) to find out how scripts are used. 

You can also use a script to create a _Monitor_, please take a look at the [monitors' documentation](/monitors#monitor-type-script) to see how scripts are used.

#### [Writing Scripts](write.md)
TheEye will use the output from your scripts to determine whether or not the execution was successful. The last line of the scripts will be parsed looking for a string which represents a `state` or a `json` result object. So it is mandatory to indicate the execution status when writing scripts.

A `state` could be any state or event linked to the task or monitor of this script. Default build-in events are `success` and `failure`.

So if you script ended as expected (success state), you will have to make it print "success" as the last output line of your script. 

> `success`, `normal` and `ok` are valid `success` states.    

> `failure` and `fail` are valid `failure` states.    


## Let's see an example

This is a simple check with success and failure states

```sh

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

If you need to report extra information to the API, you'll have to print the information to the stdout in json format like this


```sh

varUno="value1"
varTwo="value2"

# This will output a valid JSON and will be parsed by TheEye agent
# Manually writing a JSON string is not quite pleasent, we know that and we will improve this in the future
if [ true ]; then
  echo { \"state\":\"success\", \"data\":{ \"val1\":$varTwo, \"val2\":$varUno } }
else
  echo { \"state\":\"failure\", \"data\":{ \"val1\":$varTwo, \"val2\":$varUno } }
fi

```

The JSON output must have a `state` property with a the state value from your script execution, and a `data` property with any extra information you consider, TheEye will show the `data` value in the execution log.

If you need to validate the JSON output of your scripts, you can use this simple nodejs script - there are also nice web sites that can validate JSON for you too. Change it for your case

`test_json.js`

```js

// test.js
var exec = require('child_process').exec;

exec('./test.sh', function(err, stdout, stderr){
    var obj = JSON.parse(stdout);

    // if the stdout string was parsed successfuly the next sentence will give the members number - which is 1
    console.log( obj.data );
});

```

the `test.sh` script looks like this

```sh

#!/bin/bash

state='normal'
POOL='pool'
members=1

# this is valid json when send to stdout
echo { \"state\" : \"$state\" , \"data\" : { \"members\" : $members } }
# this will echo { "state": "normal" , "data" : { "members": 1 } }

```
## Scripts RunAs

### Scripts runs by default in this way:
* on Linux: adding execution permission to the file and including the intepreter Hash in the first line.
* on Windows: setting the interpreter that should use the OS by the file extension.

Script RunAs allows to ejecute the script in a specific way, by using a different binary interpreter or in Linux using sudo.
**Remember that _RunAs_ is part of the _Tasks'_ configuration, as _Tasks_ are responsible for Scripts' execution**. Please check the [Script Task Documentation](/tasks#create-a-script-task) section for further details.

### Notation

The runas text could be any command line combination, using fixed variables, environment settings, 
command or anything that agent user(by default theeye-a) can do within the default shell (usually bash or cmd).
We recommend to keep it simple and short. The only requirement is that the runas has to include the %script% KEYWORD.
This KEYWORD indicates which part of the runas text will be replaced with the script path and its arguments.

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

One case is to run a Nodejs script with a different interpreter version.
To achive that include the full path to the interpreter in the `runas`


```bash
/usr/local/lib/nodejs/v4/bin/node %script%
```

### In Windows

The same aproach to execute custom scripts with unregistered interpreters apply both to Windows and Linux.

You will have to provide the absolute path to script interpreter.

##### Powershell Scripts Execution
To execute a powershell script you must add this line to the "RunAs" tasks' field.
```
powershell.exe -NonInteractive -ExecutionPolicy ByPass -File "%script%"
```

Use this line if you're using arguments in your script. Keep in mind that the filename of the ps1 script must not have white spaces.
```
powershell.exe -NonInteractive -ExecutionPolicy ByPass -File %script%
```

#### Sudo note.

On Windows there are some alternatives to achieve the same result you can get using sudo.
The native way is by using [runas](https://technet.microsoft.com/en-us/library/cc771525(v=ws.10).aspx).
The main important difference is that you should provide the user password at least once.

There are other alternative tools and configurations you will have to find out by yourself.

# Theeye Sample Scripts
+ [Windows Batch](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.bat)
+ [GO](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.go)
+ [NODEJS | Javascript](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.js)
+ [PHP](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.php)
+ [Perl](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.pl)
+ [PowerShell](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.ps1)
+ [PowerShell](https://gist.github.com/theeye-io/ed1f2407b3d3aae90a69af064c3e204a)
+ [Bash](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/examples/example.sh)
