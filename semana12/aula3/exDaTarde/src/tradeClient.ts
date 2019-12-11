import { Trade } from "./trade";

export class TradeClient extends Trade implements Trade {
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