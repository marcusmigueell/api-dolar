import { Module } from "@nestjs/common"
import { DolarModule } from "./modules/dolar/dolar.module"
import { DatabaseModule } from "./database/database.module"
import { ExternalApiModule } from "./modules/external-api/external-api.module"

@Module({
    imports: [DolarModule, DatabaseModule, ExternalApiModule]
})

export class AppModule {}