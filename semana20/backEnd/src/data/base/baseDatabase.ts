import knex from "knex"

export abstract class BaseDatabase {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: "",
            user: "bruno",
            password: process.env.SENHA_FUTURETUBE,
            database: "dbaBruno"
        }
    });
}