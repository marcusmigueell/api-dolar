import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CompraEVenda } from "./models/compra-e-venda.entity"
import { DolarController } from "./dolar.controller"
import { DolarService } from "./dolar.service"
import { ExternalApiModule } from "../external-api/external-api.module"
import { ExternalApiService } from "../external-api/external-api.service"

@Module({
    imports: [
        ExternalApiModule, 
        TypeOrmModule.forFeature([
            CompraEVenda
        ])
    ],
    controllers: [DolarController],
    providers: [
        DolarService, 
        ExternalApiService]
})

export class DolarModule {}