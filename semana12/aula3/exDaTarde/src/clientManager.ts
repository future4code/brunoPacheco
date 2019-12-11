import { Client } from "./client";

export class ClientManager {
    clients:Client[]

    constructor(){
        this.clients=[]
    }

    addClient(client:Client){
        this.clients.push(client)
    }
}