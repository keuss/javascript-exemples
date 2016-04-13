var pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);
// ------------------------------------
var inventaire = [
  {nom: 'pommes', quantite: 2},
  {nom: 'bananes', quantite: 0},
  {nom: 'cerises', quantite: 5},
];

function trouveCerises(fruit) {
  return fruit.nom === 'cerises';
}

var c = inventaire.find(trouveCerises)
console.log(c);

c.quantite = 10;
console.log(c);
console.log(inventaire)
// ------------------------------------
