/*
  Warnings:

  - The `valor` column on the `conta_a_pagar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `saldo` column on the `conta_a_pagar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `numero` column on the `fornecedor_conta_pagar` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "conta_a_pagar" DROP COLUMN "valor",
ADD COLUMN     "valor" DOUBLE PRECISION,
DROP COLUMN "saldo",
ADD COLUMN     "saldo" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "fornecedor_conta_pagar" ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "rg" TEXT,
DROP COLUMN "numero",
ADD COLUMN     "numero" INTEGER;
