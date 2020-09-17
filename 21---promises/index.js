let p = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
});

p.then(function(result) {
	console.log(result);
});
console.log('i m here ...');

new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Done!'); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); })

// see https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
// https://davidwalsh.name/promises
function getUserDetail(username) {

	// user in cach
	// promises are very useful for wrapping synchronous code as asynchronous code
	if(false) {
		// Return a promise without the "new" keyword
		return Promise.resolve({username: 'keuss', age: 34});
	}

	// A mock async action using setTimeout (real life : fetch, ...)
	return new Promise(function(resolve, reject) {
		setTimeout(function() { resolve({username: 'keuss', age: 34}); }, 5000);
	});
}

console.log('trying to get user detail ...');
getUserDetail('keuss').then(function (json) {
	console.log('json', json);
});


// --------------------------

function faireQqc() {
  return new Promise((successCallback, failureCallback) => {
    // exécuté de suite (cf. doc MDN)
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Réussite");
    } else {
      failureCallback("Échec");
    }
  })
}

const promise = faireQqc();

promise.then((value) => {
  	console.log(value);
}).catch((err) => {
  	console.log(err);
});

console.log(promise);

// > "C'est fait"
// > [object Promise]
// > "Échec" ou "Réussite"
