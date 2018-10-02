// https://github.com/lukehoban/es6features#arrows
console.log('\narrows -----------\n');
fct = (a,b) => a + b;
console.log(fct('bar', 'foo'));

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

// https://github.com/lukehoban/es6features#classes
console.log('\nclasses -----------\n');

// https://github.com/lukehoban/es6features#let--const
console.log('\nlet--const -----------\n');
const MYCONST = "const";
// unknown: "MYCONST" is read-only
//MYCONST = "impossible !";

// https://github.com/lukehoban/es6features#enhanced-object-literals
console.log('\nenhanced-object-literals -----------\n');

let myPropName = 'name';
let obj = {
    [myPropName]: 'Bob',
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
console.log('obj', obj);

// https://github.com/lukehoban/es6features#template-strings
console.log('\ntemplate-strings -----------\n');

let myName = 'Bob', time = 'today';
console.log(`Hello ${myName}, how are you ${time}?`);

let a = 'yoo';
console.log(`${a.length > 3 ? a + 'YO' : a + 'YA'} Bob !`);

// http://putaindecode.io/fr/articles/js/es2015/object-assign/
console.log('\nobject-assign -----------\n');
const o1 = { x: 1 };
const o2 = { y: 2 };
const o = Object.assign({}, o1, o2);
console.log("o", o);
Object.assign(o, { o1 });
console.log("o", o);
Object.assign(o, { o1, o2 });
console.log("o", o);


// https://github.com/lukehoban/es6features#destructuring
// https://github.com/lukehoban/es6features#default--rest--spread
// taken from : http://www.smartdevnow.com/2017/06/02/es6-restspread-operator-usage/?utm_content=bufferb829d&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
console.log('\ndestructuring-rest-spread -----------\n');

//destructuring
const prop = { bar: 'bar', moo: 'moo', foo: 'foo' };
const { bar, foo } = prop;
console.log(bar);
console.log(foo);

const one = { a: 1, b: 2 };
const two = { c: 3, d: 4 };
const three = { ...one, ...two };

console.log(three);

// Then pull off a specific property
const { d, ...thing } = three;
console.log(d);
console.log(thing); //{ a: 1, b: 2, c: 3 }

