import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { CompraEVendaDTO } from "./dto/compra-e-venda.dto"
import { CompraEVenda } from "./models/compra-e-venda.entity"
import { ExternalApiService } from "../external-api/external-api.service"

@Injectable()
export class DolarService {

    constructor(
        @InjectRepository(CompraEVenda)
        private readonly compraEVendaRepository: Repository<CompraEVenda>,
        private readonly externalApiService: ExternalApiService
    ) {}

    async Cotacao() {
        this.externalApiService.CreateApi(process.env.BASE_URL)
        return await this.externalApiService.CurrentDolar("json/last/USD-BRL")
    }

    async CreateDadosParaCompraEVenda(compraEVendaDTO: CompraEVendaDTO) {
        const compraEVenda = this.compraEVendaRepository.create(compraEVendaDTO)
        return this.compraEVendaRepository.save(compraEVenda)
    }
}