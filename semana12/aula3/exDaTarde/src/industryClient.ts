import { Industry } from "./industry";
import { Client } from "./client";

export class IndustryClient extends Industry implements Client {
    clientName: string;
    clientNumber: number;
    consumedEnergy: number;

    constructor(industryName: string, industryNumber: string, cep: string, clientName: string, clientNumber: number, consumedEnergy: number) {
        super(industryName, industryNumber, cep)
        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
    }

    public calculateBill() {
        const total = this.consumedEnergy*0.45 + 10000
        return total
    }
}