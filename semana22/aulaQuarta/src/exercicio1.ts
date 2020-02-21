import { INSPECT_MAX_BYTES } from "buffer"

/*
Escreva uma função recursiva que:

a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente.
b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente.
*/

export function itemA(number:number): number[]{
  let array:number[]=[];
  for(let i:number=0;i<=number;i++){
    array.push(i)
  }
  return array;
}

export function itemB(number:number): number[]{
  let array:number[]=[];
  for(let i:number=number;i>=0;i--){
    array.push(i)
  }
  return array;
}

itemB(5);

