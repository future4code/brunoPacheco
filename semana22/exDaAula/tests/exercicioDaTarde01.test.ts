import { primeiraLetraRecorrente } from "../src/exercicioDaTarde01";

describe("Testing checkRepetition", () => {
    it("Para o input ABCA o resultado deve ser A", () => {
        const result = primeiraLetraRecorrente("ABAC");
        expect(result).toEqual("A");
    })
    it("Para o input BCABA o resultado deve ser B", () => {
        const result = primeiraLetraRecorrente("BCABA");
        expect(result).toEqual("B");
    })
    it("Para o input ABC o resultado deve ser null", () => {
        const result = primeiraLetraRecorrente("ABC");
        expect(result).toEqual("");
    })

});