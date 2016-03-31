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
