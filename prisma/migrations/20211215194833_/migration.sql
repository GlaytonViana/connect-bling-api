/*
  Warnings:

  - You are about to drop the column `produtoCodigo` on the `produto_no_pedido` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "produto_no_pedido" DROP CONSTRAINT "produto_no_pedido_produtoCodigo_fkey";

-- DropIndex
DROP INDEX "produto_codigo_key";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "produto_no_pedido" DROP COLUMN "produtoCodigo",
ADD COLUMN     "codigo" TEXT;
