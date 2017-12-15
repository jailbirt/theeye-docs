
[![](https://theeye.io/landpage/images/logo.png)](https://theeye.io)
# Scripts Documentation
## Contents
#### Create a Script
### Writing Scripts
### Scripts Run As
-------------------

### Create a Script
Scripts can be written directly from a live editor or can be uploaded by dropping files over the _Files & Scripts_' creation window. 
The live editor will recognize the notation language (interpreter) once you name the script file and set an extension (e.g. runme.sh).
Bash, Python, Perl, Node and bat files are recognized, but any script can be executed as long as the interpreter is available in the destination host.
TheEye will carry out the script execution over tasks. Check this [tasks' documentation](/tasks/#create-a-script-task) to find out how scripts are used. 
You can also use a script to create a _Monitor_, please take a look at the monitors documentation to see how scripts are used.

#### [Writing Scripts](write.md)
TheEye will use the output from your scripts to determine whether or not the execution was successful. The last line of the scripts will be parsed looking for a string which represents a `state` or a `json` result object. So it is mandatory to indicate the execution status when writing scripts.

A `state` could be any state or event linked to the task or monitor of this script. Default build-in events are `success` and `failure`.

So if you script ended as expected (success state), you will have to make it print "success" as the last output line of your script. 

> `success`, `normal` and `ok` are valid `success` states.    

> `failure` and `fail` are valid `failure` states.    


## Let's see an example

This is a simple check with success and failure states

```sh

# Some comands and checks here

# ...

# And at the end of the script...

if [ $check == true ]; then
  echo "success"
  exit
else
  echo "failure"
  exit
fi

# or you can keep doing more things, you can control the flow of your script and end it when anytime
echo "success"
```

If you need to report extra information to the api, you have to send the information to stdout in json format like this


```sh

varUno="value1"
varTwo="value2"

# This will output valid JSON and will be parsed by the agent
# Write JSON by hand is ugly, we will improve this in the feature
if [ true ]; then
  echo { \"state\":\"success\", \"data\":{ \"val1\":$varTwo, \"val2\":$varUno } }
else
  echo { \"state\":\"failure\", \"data\":{ \"val1\":$varTwo, \"val2\":$varUno } }
fi

```

The JSON output needs to include a `state` property with the final state of your script, and a `data` property with any extra information you want to send to the api.


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
#### [Scripts RunAs](runas.md)

# Theeye Sample Scripts
+ [Windows Batch](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/example.bat)
+ [GO](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/example.go)
+ [NODEJS | Javascript](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/example.js)
+ [PHP](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/example.php)
+ [Perl](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/example.pl)
+ [PowerShell](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/example.ps1)
+ [Bash](https://github.com/theeye-io-team/theeye-docs/blob/master/scripts/example.sh)
