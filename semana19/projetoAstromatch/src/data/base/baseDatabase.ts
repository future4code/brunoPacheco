import knex from "knex"

export abstract class BaseDatabase {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: "ec2-3-84-38-207.compute-1.amazonaws.com",
            user: "bruno",
            password: process.env.SENHA_ASTROMATCH,
            database: "dbaBruno"
        }
    });
}