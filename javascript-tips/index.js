// Example from :
// http://www.kochan.io/javascript/javascript-idioms.html and
// http://javascriptissexy.com/12-simple-yet-powerful-javascript-tips/

// Assigning default values ----------------------------------------------------
function foo(opts) {
  var msg = opts.message || 'Hello world!'
  console.log(msg)
}

// instead of
function foo(opts) {
  var msg = opts.message ? opts.message : 'Hello world!'
  console.log(msg)
}


// Converting to array if not already ------------------------------------------
var totallyArray = [].concat(value)

//instead of
var totallyArray = value instanceof Array ? value : [value]
