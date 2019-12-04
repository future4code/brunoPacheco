const diaAtual = new Date();
const natal = new Date('12/25/2019');

console.log(diaAtual.toDateString());
console.log(natal.toDateString());

const dias = Math.floor((natal - diaAtual) / 1000 / 60 / 60 / 24);

console.log(`Faltam ${dias} dias para o natal`); 