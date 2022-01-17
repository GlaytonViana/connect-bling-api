/*
  Warnings:

  - You are about to drop the column `idFormaPagamento` on the `conta_a_pagar` table. All the data in the column will be lost.
  - You are about to drop the column `linkBoleto` on the `conta_a_pagar` table. All the data in the column will be lost.
  - You are about to drop the column `vendedor` on the `conta_a_pagar` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "conta_a_pagar" DROP COLUMN "idFormaPagamento",
DROP COLUMN "linkBoleto",
DROP COLUMN "vendedor";
