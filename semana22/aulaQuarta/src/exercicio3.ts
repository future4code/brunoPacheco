//Escreva uma função recursiva que consiga imprimir todos os elementos de um array

export function imprimirArray(array:number[]):boolean{
    array=[0,1,2,3,4,5]

    for(let i:number=0;i<array.length;i++){
        console.log(i)
    }
    return true
}