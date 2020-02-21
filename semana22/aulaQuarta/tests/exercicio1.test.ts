
import { itemA, itemB } from "../src/exercicio1";

describe("Testing crescente item", () => {
  // Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente.
  it("Deve imprimir 0,1,2,3,4,5", () => {
    const array = [0, 1, 2, 3, 4, 5];
    const result = itemA(5);
    expect(result).toEqual(array);
  });

  it("Deve imprimir 5,4,3,2,1,0", () => {
    //Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente.
    const array = [5, 4, 3, 2, 1, 0];
    const result = itemB(5);
    expect(result).toEqual(array);
  })
})