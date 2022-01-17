-- DropForeignKey
ALTER TABLE "conta_a_pagar" DROP CONSTRAINT "conta_a_pagar_fornecedor_id_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AddForeignKey
ALTER TABLE "conta_a_pagar" ADD CONSTRAINT "conta_a_pagar_fornecedor_id_fkey" FOREIGN KEY ("fornecedor_id") REFERENCES "fornecedor_conta_pagar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
