/*
Crie uma aplicação Node que recebe uma string representado uma operação e dois 
valores e retorna o resultado da operação selecionada utilizando os 2 valores 
fornecidos.
*/

const operator = process.argv[2]
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);


if ((firstNumber && secondNumber)||(firstNumber || secondNumber) === "") {
    console.log("Era esperado receber um parâmetro ")
} else {
    const sub = firstNumber - secondNumber;
    const add = firstNumber + secondNumber;
    const mult = firstNumber * secondNumber;
    const div = firstNumber / secondNumber;

    switch (operator) {
        case 'sub':
            return console.log(`A subtração de ${firstNumber} menos ${secondNumber} é igual a ${sub}`);
        case 'add':
            return console.log(`A soma de ${firstNumber} mais ${secondNumber} é igual a ${add}`);
        case 'mult':
            return console.log(`A multiplicação de ${firstNumber} multiplicado por  ${secondNumber} é igual a ${mult}`);
        case 'div':
            return console.log(`A divisão de ${firstNumber} dividido por  ${secondNumber} é igual a ${div}`);
        default:
            return console.log('Essa operação ão é válida!')
    }
}







