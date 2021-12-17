/*
  Warnings:

  - You are about to drop the `dimensao_do_volume` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "dimensao_do_volume" DROP CONSTRAINT "dimensao_do_volume_volume_id_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "volume" ADD COLUMN     "altura" TEXT,
ADD COLUMN     "comprimento" TEXT,
ADD COLUMN     "diametro" TEXT,
ADD COLUMN     "largura" TEXT,
ADD COLUMN     "peso" TEXT;

-- DropTable
DROP TABLE "dimensao_do_volume";
