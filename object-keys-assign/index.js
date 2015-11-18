var o = JSON.parse('{ "fruits": [ { "name": "Apple" }, { "name": "Banana" } ], "desc": "some fruits" }');

o.fruits[1].name;
o.desc;

var copie = Object.assign({}, o, {desc: "des fruits"});
console.log(JSON.stringify(copie));


var orange = {
    name : 'orange of course !',
    alertCustom : function (param) {
        alert(param + ' '+ this.name); 
    }
};

console.log(orange.alertCustom('Alert for'));
orange['name'] == orange.name