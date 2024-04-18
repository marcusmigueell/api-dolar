import { Injectable } from "@nestjs/common"
import { AxiosInstance } from "axios"
import { CurrentDolarDTO } from "./dto/current-dolar.dto"
import axios from "axios"
import * as https from "https"

@Injectable()
export class ExternalApiService {

    private _api: AxiosInstance

    private createAgent(): https.Agent {
        return new https.Agent({ rejectUnauthorized: false })
    }

    CreateApi(url: string) {

        this._api = axios.create({
            baseURL: url,
            withCredentials: true,
            httpsAgent: this.createAgent(),
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    async CurrentDolar(resource: string): Promise<CurrentDolarDTO> {
        return await this._api.get(resource)
            .then(res => { return res.data.USDBRL })
            .catch(() => { return undefined })
    }
}