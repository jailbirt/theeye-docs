/*
   It requieres that your script ends by returning "normal" or "failure" as value. 
   You can retrieve even more information by sending json formatted string. 

   sample code :
   echo '{"state":"normal","data":"the data"}'
 */

// WARNING : check your current path and name to node binary.
// could be node or nodejs.

var NORMAL_STATE = 'normal';
var FAILURE_STATE = 'failure';

/**
 * check the resource state via 
 *
 */
if( true ) { 
  var resourceState = NORMAL_STATE;
} else {
  var resourceState = FAILURE_STATE;
}

console.log( resourceState );

process.exit;
