/*
  Warnings:

  - You are about to drop the column `codigo` on the `produto_no_pedido` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[codigo]` on the table `produto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `produtoCodigo` to the `produto_no_pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "produto_no_pedido" DROP COLUMN "codigo",
ADD COLUMN     "produtoCodigo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "produto_codigo_key" ON "produto"("codigo");

-- AddForeignKey
ALTER TABLE "produto_no_pedido" ADD CONSTRAINT "produto_no_pedido_produtoCodigo_fkey" FOREIGN KEY ("produtoCodigo") REFERENCES "produto"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
