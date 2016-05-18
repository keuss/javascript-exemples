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

var tab = ['yo', 'ya', undefined, "", "4", 5]
console.log(tab.join(' - '))
console.log(tab.filter(n => n && n.length > 0).join(' - '))
// yo - ya -  -  - 4 - 5
// yo - ya - 4
// ------------------------------------
