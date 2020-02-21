//Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n.

export function soma(number: number): number {
    let lastNumber:number=0;
    for (let i: number = 0; i <= number; i++) {
        lastNumber = lastNumber + (i);
    }

    return lastNumber;
}
