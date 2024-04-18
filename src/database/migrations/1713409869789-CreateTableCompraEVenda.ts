import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCompraEVenda1713409869789 implements MigrationInterface {

    private tableName: string = "CompraEVenda"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "dolar_below",
                    type: "float"
                },
                {
                    name: "dolar_above",
                    type: "float"
                },
                {
                    name: "create_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "update_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName)
    }
}
