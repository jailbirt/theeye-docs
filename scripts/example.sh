## It requieres that your script ends by returning "normal" or "failure" as value. 
## You can retrieve even more information by sending json formatted string. 
## 
## sample code :
## echo '{"state":"normal","data":"the data"}'
## 

#!/usr/bin/env bash

NORMAL_STATE="normal";
FAILURE_STATE="failure";

# run resource state and verify
# sample
# echoed string will be used as the resource state
result="1"
if [ "$result" == "1" ];
then
  echo "$NORMAL_STATE"
else
  echo "$FAILURE_STATE"
fi

#
# if you need to register extra data, use this format
#
state='failure'
idx1='val1'
idx2='val2'

printf '{"state":"%s","data":{ "idx1":"%s", "idx2":"%s" }}' "$state" "$idx1" "$idx2"
#
# also unix command result state is stored, 0 for success
exit 0
