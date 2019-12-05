/*
    Faça uma função que receba um array de números e retorne um objeto que
    tenha as seguintes informações: a quantidade de números que há no array,
    a quantidade de números ímpares no array e a soma de todos os elementos
    do array
*/
var arrayDeNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function exercicio1(arrayDeNumeros) {
    var arrayDeNumerosImpares = [];
    var total = 0;
    for (var i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] % 2 !== 0) {
            arrayDeNumerosImpares.push(arrayDeNumeros[i]);
        }
    }
    for (var i = 0; i < arrayDeNumeros.length; i++) {
        total = total + arrayDeNumeros[i];
    }
    var resposta = {
        quantidadeDeNumeros: arrayDeNumeros.length,
        quantidadeDeNumerosImpares: arrayDeNumerosImpares.length,
        somatoriaDeNumeros: total
    };
    return resposta;
}
console.log(exercicio1(arrayDeNumeros));
