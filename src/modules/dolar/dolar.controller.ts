import { Body, Controller, Get, Post } from "@nestjs/common"
import { DolarService } from "./dolar.service"
import { ApiResponse } from "@nestjs/swagger"
import { CompraEVendaDTO } from "./dto/compra-e-venda.dto"
import { CompraEVenda } from "./models/compra-e-venda.entity"

@Controller("/api/v1/Dolar")
export class DolarController {

    constructor(
        private readonly dolarService: DolarService
    ) {}

    @Get("/Cotacao")
    async Cotacao() {
        return await this.dolarService.Cotacao()
    }

    @Post("/CompraEVenda")
    @ApiResponse({ status: 200, description: "Success", type: CompraEVenda })
    @ApiResponse({ status: 500, description: "Server Error" })
    async CreateDadosParaCompraEVenda(@Body() compraEVenda: CompraEVendaDTO) {
        return await this.dolarService.CreateDadosParaCompraEVenda(compraEVenda)
    }
}