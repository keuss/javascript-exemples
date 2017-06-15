var food = {
  id: 'foodId',
  types: 'only pizza'
};

console.log(food.types);
let food2 = {[food.id]: 'fruits'};
console.log(food2); //{ foodId: 'fruits' }
console.log(food2.foodId); //fruits
