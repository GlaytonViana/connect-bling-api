/*
  Warnings:

  - You are about to drop the `Loja` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- DropTable
DROP TABLE "Loja";

-- CreateTable
CREATE TABLE "loja" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,

    CONSTRAINT "loja_pkey" PRIMARY KEY ("id")
);
