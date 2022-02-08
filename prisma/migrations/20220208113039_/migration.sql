-- DropForeignKey
ALTER TABLE "nota_fiscal" DROP CONSTRAINT "nota_fiscal_clienteNotaCnpj_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "nota_fiscal" ALTER COLUMN "clienteNotaCnpj" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "nota_fiscal" ADD CONSTRAINT "nota_fiscal_clienteNotaCnpj_fkey" FOREIGN KEY ("clienteNotaCnpj") REFERENCES "cliente_nota"("cnpj") ON DELETE SET NULL ON UPDATE CASCADE;
