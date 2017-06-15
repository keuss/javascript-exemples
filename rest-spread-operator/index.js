// taken from : http://www.smartdevnow.com/2017/06/02/es6-restspread-operator-usage/?utm_content=bufferb829d&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

const one = { a: 1, b: 2 };
const two = { c: 3, d: 4 };
const three = { ...one, ...two };

console.log(three);

// Then pull off a specific property
const { d, ...thing } = three;
console.log(d);
console.log(thing); //{ a: 1, b: 2, c: 3 }

let state = { 1: 'hello', 2: 'welcome' };
let action = { type: 'add', id: 3, payload: 'goodbye' };


function reducer(state, action) {
  switch(action.type) {
    case 'add':
      return { ...state, [action.id]: action.payload };
      break;
    case 'remove':
      const {[action.id]: _, ...rest } = state;
      return rest;
      break;
  }
}

console.log(reducer(state, action)); //{ '1': 'hello', '2': 'welcome', '3': 'goodbye' }

console.log(reducer(state, { type: 'remove', id: '2' })); //{ '1': 'hello' }
