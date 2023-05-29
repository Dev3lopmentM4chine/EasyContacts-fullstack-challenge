import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTypePhoneNumberColmn1685328672260 implements MigrationInterface {
    name = 'AlterTypePhoneNumberColmn1685328672260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293" UNIQUE ("phoneNumber")`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_4e47a45a83eaebee77a193b5b7e"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_4e47a45a83eaebee77a193b5b7e" UNIQUE ("phoneNumber")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_4e47a45a83eaebee77a193b5b7e"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_4e47a45a83eaebee77a193b5b7e" UNIQUE ("phoneNumber")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_1e3d0240b49c40521aaeb953293" UNIQUE ("phoneNumber")`);
    }

}
