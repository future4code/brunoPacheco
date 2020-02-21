import { soma } from "../src/exercicio2";


describe("Testing sum", () => {
  // calcular a soma dos números inteiros de 0 a n.
  it("Deve retornar 15", () => {
    const result = soma(5);
    expect(result).toEqual(15);
  });
})