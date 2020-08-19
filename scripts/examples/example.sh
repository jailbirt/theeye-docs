#!/usr/bin/env bash

## For both Monitors and Tasks We need that your script ends by returning "normal" or "failure". 
STATE="success"

# run your command. this will generate output , but we will only parse the last line
echo "Hello World"

# change state if needed.
# print state. last line of this script will be the $STATE value
if [ $? -ne 0 ]; then STATE="failure"; fi
echo $STATE

#
# You can also generate aditional output by sending json valid string.
# An array in the data property is required when you need to output the inputs for the next task
# 
# I.E :
# echo "{\"state\":\"$STATE\",\"data\":[\"arg1\",\"arg2\",\"arg3\"]}"
# 
# Alternative 
# MYJSON=$(echo $1 | base64 -d)
# echo "$MYJSON"
