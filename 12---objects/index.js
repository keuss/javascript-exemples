var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2,
};

console.log(pizza);

//----------------------------------
const groupe = {
  reference: {
    codeAfc: 588,
    numeroClient: 45471,
    typeActivite: "D",
    natureContrat: "GPD",
    codeDevise: "EUR  "
  },
  referenceAcheteur: {
    codeAcheteur: 1970645,
    devise: "EUR",
    afcach: 588
  },
  siren: 410140057,
  limiteCredit: 2500000,
  encoursGlobal: 92248.56,
  encourga: 92248.56,
  indsuspd: "N",
  indstop: "N"

}


const acheteur = {
  id: 13516,
  name: "acheteur toto"
}

console.log(Object.assign({}, acheteur, { groupe }));



/*
{ id: 13516,
name: 'acheteur toto',
groupe: {
    reference: {
      codeAfc: 588,
      numeroClient: 45471,
      typeActivite: 'D',
      natureContrat: 'GPD',
      codeDevise: 'EUR  '
    },
    referenceAcheteur: { codeAcheteur: 1970645, devise: 'EUR', afcach: 588 },
    siren: 410140057,
    limiteCredit: 2500000,
    encoursGlobal: 92248.56,
    encourga: 92248.56,
    indsuspd: 'N',
    indstop: 'N'
  }
}
*/
