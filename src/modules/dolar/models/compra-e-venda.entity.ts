import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"
import { randomUUID } from "node:crypto"

@Entity("CompraEVenda")
export class CompraEVenda {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "float" })
    dolar_below: number

    @Column({ type: "float" })
    dolar_above: number

    @CreateDateColumn({ type: "timestamp" })
    create_at: Date

    @CreateDateColumn({ type: "timestamp" })
    update_at: Date

    @BeforeInsert()
    generatedId() {
        if(this.id)
            return

        this.id = randomUUID()
    }
}