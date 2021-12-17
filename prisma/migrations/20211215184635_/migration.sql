/*
  Warnings:

  - The primary key for the `parcela` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `pedidoNumero` on table `parcela` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "parcela" DROP CONSTRAINT "parcela_pedidoNumero_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "parcela" DROP CONSTRAINT "parcela_pkey",
ALTER COLUMN "pedidoNumero" SET NOT NULL,
ADD CONSTRAINT "parcela_pkey" PRIMARY KEY ("id", "pedidoNumero");

-- AddForeignKey
ALTER TABLE "parcela" ADD CONSTRAINT "parcela_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;
