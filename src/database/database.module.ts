import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DataSourceOptions } from "typeorm"
import { config } from "dotenv"
import * as path from "path"

config()

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB),
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE,
    extra: process.env.DATABASE_SSL === "true"
        ? {
            ssl: { rejectUnauthorized: false },
            sslmode: "require"
        }
        : {
            ssl: false
        },
    entities: [path.resolve(__dirname, "../modules/*/models/*{.js,.ts}")]
}

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: async () => {
            return {
                ...dataSourceOptions
            }
        }
    })]
})

export class DatabaseModule {}