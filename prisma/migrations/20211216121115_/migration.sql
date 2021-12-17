/*
  Warnings:

  - The primary key for the `volume` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[volume_id,pedidoNumero]` on the table `dimensao_do_volume` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pedidoNumero` to the `dimensao_do_volume` table without a default value. This is not possible if the table is not empty.
  - Made the column `pedidoNumero` on table `volume` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "dimensao_do_volume" DROP CONSTRAINT "dimensao_do_volume_volume_id_fkey";

-- DropIndex
DROP INDEX "dimensao_do_volume_volume_id_key";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "dimensao_do_volume" ADD COLUMN     "pedidoNumero" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "volume" DROP CONSTRAINT "volume_pkey",
ALTER COLUMN "pedidoNumero" SET NOT NULL,
ADD CONSTRAINT "volume_pkey" PRIMARY KEY ("id", "pedidoNumero");

-- CreateIndex
CREATE UNIQUE INDEX "dimensao_do_volume_volume_id_pedidoNumero_unique" ON "dimensao_do_volume"("volume_id", "pedidoNumero");

-- AddForeignKey
ALTER TABLE "dimensao_do_volume" ADD CONSTRAINT "dimensao_do_volume_volume_id_pedidoNumero_fkey" FOREIGN KEY ("volume_id", "pedidoNumero") REFERENCES "volume"("id", "pedidoNumero") ON DELETE CASCADE ON UPDATE CASCADE;
