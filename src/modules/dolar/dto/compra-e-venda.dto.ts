import { ApiProperty } from "@nestjs/swagger"

export class CompraEVendaDTO {
    
    @ApiProperty()
    dolar_below: number

    @ApiProperty()
    dolar_above: number
}