-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- CreateTable
CREATE TABLE "forma_de_pagamento" (
    "codigo" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "forma_de_pagamento_pkey" PRIMARY KEY ("codigo")
);
