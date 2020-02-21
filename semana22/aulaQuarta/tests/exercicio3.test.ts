import { imprimirArray } from "../src/exercicio3";


describe("Testing sum", () => {
  // calcular a soma dos números inteiros de 0 a n.
  it("Deve retornar 0,1,2,3,4 e 5", () => {
    const array=[0,1,2,3,4,5]
    const result = imprimirArray(array);
    expect(result).toBe(true);
  });
})