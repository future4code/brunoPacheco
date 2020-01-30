export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private birth_date:string,
        private picture:string
    ) { }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }

    public getBirthDate():string {
        return this.birth_date
    }

    public getPicture():string {
        return this.picture
    }

}