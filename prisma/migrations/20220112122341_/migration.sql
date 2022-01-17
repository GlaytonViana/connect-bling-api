/*
  Warnings:

  - The `valor` column on the `conta_a_receber` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `saldo` column on the `conta_a_receber` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "conta_a_receber" DROP COLUMN "valor",
ADD COLUMN     "valor" DOUBLE PRECISION,
DROP COLUMN "saldo",
ADD COLUMN     "saldo" DOUBLE PRECISION;
