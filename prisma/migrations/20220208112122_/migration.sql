-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "nota_fiscal" ALTER COLUMN "chaveAcesso" DROP NOT NULL;
