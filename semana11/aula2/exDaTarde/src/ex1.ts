/*
    Faça uma função que receba um array de números e retorne um objeto que 
    tenha as seguintes informações: a quantidade de números que há no array,
    a quantidade de números ímpares no array e a soma de todos os elementos 
    do array
*/

const arrayDeNumeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type detalhes = {
    quantidadeDeNumeros: number;
    quantidadeDeNumerosImpares: number;
    somatoriaDeNumeros: number;
}

function exercicio1(arrayDeNumeros: number[]): detalhes {

    let arrayDeNumerosImpares: number[] = [];
    let total: number = 0;

   

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] % 2 !== 0) {
            arrayDeNumerosImpares.push(arrayDeNumeros[i])
        }
    }

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        total = total + arrayDeNumeros[i]
    }
    
    let resposta: detalhes = {
        quantidadeDeNumeros: arrayDeNumeros.length,
        quantidadeDeNumerosImpares: arrayDeNumerosImpares.length,
        somatoriaDeNumeros: total
    };

    return resposta
}

console.log(exercicio1(arrayDeNumeros))




