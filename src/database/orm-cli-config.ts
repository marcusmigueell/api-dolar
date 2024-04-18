import { DataSource } from "typeorm"
import { config } from "dotenv"
import "reflect-metadata"
import * as path from "path"

config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB),
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE,
    entities: [path.resolve(__dirname, "../modules/*/models/*{.js,.ts}")],
    migrations: [__dirname + "/migrations/*{.js,.ts}"]
})