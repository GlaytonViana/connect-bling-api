-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- CreateTable
CREATE TABLE "Loja" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,

    CONSTRAINT "Loja_pkey" PRIMARY KEY ("id")
);
