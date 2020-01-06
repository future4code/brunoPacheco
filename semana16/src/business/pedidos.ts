export class Pedidos {
    constructor(
        private id:string,
        private nomeDoCliente:string,
        private emailDoCliente:string,
        private orderDate:Date,
        private methodPayment:string,
        private size:string,
        private paper:string,
        private typeBorder:string,
        private borderSize:string
    ){}


}