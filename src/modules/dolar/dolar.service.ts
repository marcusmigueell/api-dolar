import { Injectable } from "@nestjs/common"
import { ExternalApiService } from "../external-api/external-api.service"

@Injectable()
export class DolarService {

    constructor(
        private readonly externalApiService: ExternalApiService
    ) {}

    async Cotacao() {
        this.externalApiService.CreateApi(process.env.BASE_URL)
        return await this.externalApiService.CurrentDolar("json/last/USD-BRL")
    }
}