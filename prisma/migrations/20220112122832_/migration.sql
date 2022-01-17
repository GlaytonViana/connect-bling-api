-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "cliente_conta_pagar" ADD COLUMN     "cnpj" TEXT,
ADD COLUMN     "ie" TEXT;
