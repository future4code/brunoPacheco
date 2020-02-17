import { primeiraLetraRecorrente } from "../src/exercicioDaTarde01";

describe("Testing checkRepetition", () => {
    it("Na palavra ABCA, pega a primeira letra recorrente, no caso A", () => {
        const result = primeiraLetraRecorrente("ABAC");
        expect(result).toBe("A");
    })

});