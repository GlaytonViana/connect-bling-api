/*
  Warnings:

  - The primary key for the `transportadora` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `transportadora` table. All the data in the column will be lost.
  - Made the column `cnpj` on table `transportadora` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_transportadora_id_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "pedido" ALTER COLUMN "transportadora_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "transportadora" DROP CONSTRAINT "transportadora_pkey",
DROP COLUMN "id",
ALTER COLUMN "cnpj" SET NOT NULL,
ADD CONSTRAINT "transportadora_pkey" PRIMARY KEY ("cnpj");

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_transportadora_id_fkey" FOREIGN KEY ("transportadora_id") REFERENCES "transportadora"("cnpj") ON DELETE SET NULL ON UPDATE CASCADE;
