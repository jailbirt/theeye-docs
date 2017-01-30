#!/usr/bin/env bash
## For both Monitors and Tasks We need that your script ends by returning "normal" or "failure". 
STATE="normal"
# run your command
echo "Hello World"
#change state if its need it. 
#print state.
if [ $? -ne 0 ];then STATE="failure"; fi
echo $STATE
## You can retrieve even more information by sending json formatted string. 
## 
## I.E :
## echo '{"'$STATE'":"normal","data":{ "name1":"value1", "name2":"value2" }}'
