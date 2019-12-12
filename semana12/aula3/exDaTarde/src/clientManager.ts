import { Client } from "./client";

export class ClientManager {
    clients: Client[]

    constructor() {
        this.clients = []
    }

    addClient(client: Client) {
        this.clients.push(client)
    }

    getClientsQuantity(): number {
        const totalDeClientes:number=this.clients.length
        return totalDeClientes
    }

    printClientBills():string {
        return ""
    }
}