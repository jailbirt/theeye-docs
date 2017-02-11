//For both Monitors and Tasks We need that your script ends by returning "normal" or "failure". 
// WARNING : check your current path and name to node binary.

var state = 'normal';

 // check state
if( false ) { 
  var state = 'false';
}

console.log( state );

//You can even retrieve more information by sending json formated string.
//I.E
//console.log( JSON.stringify({ state:state, data:{responseTime:responseTime} }) ); 

process.exit;
