new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});

// https://javascript.info/promise-chaining
// The initial promise resolves in 1 second (*),
// Then the .then handler is called (**).
// The value that it returns is passed to the next .then handler (***)
// …and so on.
