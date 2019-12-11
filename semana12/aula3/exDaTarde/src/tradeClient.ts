import { Trade } from "./trade";
import { Client } from "./client";

export class TradeClient extends Trade implements Client {
    clientName: string;
    clientNumber: number;
    consumedEnergy: number;

    constructor(name: string, cnpj: string, cep: string, clientName: string, clientNumber: number, consumedEnergy: number) {
        super(name, cnpj, cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }

    public calculateBill(): number {
        const Total: number = this.consumedEnergy * 0.53
        return Total
    }

}