import { Controller, Get } from "@nestjs/common"
import { DolarService } from "./dolar.service"

@Controller("/api/v1/Dolar")
export class DolarController {

    constructor(
        private readonly dolarService: DolarService
    ) {}

    @Get("/Cotacao")
    async Cotacao() {
        return await this.dolarService.Cotacao()
    }
}