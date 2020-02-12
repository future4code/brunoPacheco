export class ApiRouter {
    public static async handleRoute(path: string, event: any): Promise<any> {
        switch (path) {
            case "signup":
                return {
                    message: "primeira rota"
                };
            case "login":
                return {
                    message: "segunda rota"
                };
            case "updatepassword":
                return {
                    message: "terceira rota"
                };
            default:
                throw new Error("Rota não existe");
        }
    }
}