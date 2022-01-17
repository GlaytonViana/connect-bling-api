-- DropForeignKey
ALTER TABLE "conta_a_receber" DROP CONSTRAINT "conta_a_receber_cliente_id_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AddForeignKey
ALTER TABLE "conta_a_receber" ADD CONSTRAINT "conta_a_receber_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente_conta_pagar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
