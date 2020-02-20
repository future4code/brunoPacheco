export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private birthDate: string,
        private photo: string
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

    public getBirthDate(): string {
        return this.birthDate
    }

    public getPhoto(): string {
        return this.photo
    }

}