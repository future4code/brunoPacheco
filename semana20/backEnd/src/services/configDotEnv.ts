import * as dotenv from "dotenv";

let path:any = `../.env`;

dotenv.config(path);

export const SENHA_FUTURETUBE_DBA = process.env.SENHA_FUTURETUBE_DBA;

export const JWT_SECRET = process.env.JWT_SECRET;