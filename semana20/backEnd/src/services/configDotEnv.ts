import * as dotenv from "dotenv";

let path:any = `../.env`;

dotenv.config(path);

export const SENHA_FUTURETUBE = process.env.SENHA_FUTURETUBE;

export const JWT_SECRET = process.env.JWT_SECRET;