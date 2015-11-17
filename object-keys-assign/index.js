var o = JSON.parse('{ "fruits": [ { "name": "Apple" }, { "name": "Banana" } ], "desc": "some fruits" }');

o.fruits[1].name;
o.desc;

var copie = Object.assign({}, o, {desc: "des fruits"});
console.log(JSON.stringify(copie));