import { Module } from "@nestjs/common"
import { DolarController } from "./dolar.controller"
import { DolarService } from "./dolar.service"
import { ExternalApiModule } from "../external-api/external-api.module"
import { ExternalApiService } from "../external-api/external-api.service"

@Module({
    imports: [ExternalApiModule],
    controllers: [DolarController],
    providers: [
        DolarService, 
        ExternalApiService]
})

export class DolarModule {}