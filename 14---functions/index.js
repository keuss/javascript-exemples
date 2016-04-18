function eat (food) {
  return food + ' tasted really good.';
}
console.log(eat('bananas'));
// ---------------------------------
var id = 1;

function ActionType(name) {
  function type(){}
  type.id = id++;
  type._name = name;
  type.toString = function() { return `${type._name} - ${type.id}`; };
  console.log(type);
  console.log(type.id);
  console.log(type._name);

  return type;
}

ActionType.create = function(){
  return [].slice.call(arguments).reduce((obj, name) => {
    obj[name] = ActionType(name);
    return obj;
  }, {});
};

const types = ActionType.create(
  'CHANGE_ROUTE',
  'ROUTE_CHANGED'
)

console.log('types', types);

// ---------------------------------
// ES6

// <=> var route = (url) => (param) => url + '/' + param
var route = (url) => {
	return (param) => url + '/' + param
}
// google.fr/yo
console.log(route('google.fr')('yo'))


// ---------------------------------
http://www.sitepoint.com/call-javascript-function-string-without-using-eval/
http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string

// function name and parameters to pass
function runMe(p1, p2) {
  console.log(`runMe with p1:${p1} and p2:${p2}`);
}
var fnstring = "runMe";
var fnparams = [1, 2, 3];

// find object
var fn = window[fnstring];

// is object a function?
if (typeof fn === "function") fn.apply(window, ['yo', 'keuss']);
