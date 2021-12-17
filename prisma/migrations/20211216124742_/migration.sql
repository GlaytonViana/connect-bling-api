/*
  Warnings:

  - You are about to drop the column `pedidoNumero` on the `dimensao_do_volume` table. All the data in the column will be lost.
  - The primary key for the `volume` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[volume_id]` on the table `dimensao_do_volume` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `volume` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dimensao_do_volume" DROP CONSTRAINT "dimensao_do_volume_volume_id_pedidoNumero_fkey";

-- DropIndex
DROP INDEX "dimensao_do_volume_volume_id_pedidoNumero_unique";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
CREATE SEQUENCE "dimensao_do_volume_id_seq";
ALTER TABLE "dimensao_do_volume" DROP COLUMN "pedidoNumero",
ALTER COLUMN "id" SET DEFAULT nextval('dimensao_do_volume_id_seq');
ALTER SEQUENCE "dimensao_do_volume_id_seq" OWNED BY "dimensao_do_volume"."id";

-- AlterTable
CREATE SEQUENCE "volume_id_seq";
ALTER TABLE "volume" DROP CONSTRAINT "volume_pkey",
ADD COLUMN     "codigo" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('volume_id_seq'),
ADD CONSTRAINT "volume_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE "volume_id_seq" OWNED BY "volume"."id";

-- CreateIndex
CREATE UNIQUE INDEX "dimensao_do_volume_volume_id_key" ON "dimensao_do_volume"("volume_id");

-- AddForeignKey
ALTER TABLE "dimensao_do_volume" ADD CONSTRAINT "dimensao_do_volume_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
