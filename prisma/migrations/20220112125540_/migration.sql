/*
  Warnings:

  - You are about to drop the `cliente_conta_pagar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "conta_a_receber" DROP CONSTRAINT "conta_a_receber_cliente_id_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- DropTable
DROP TABLE "cliente_conta_pagar";

-- CreateTable
CREATE TABLE "cliente_conta_receber" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "tipoPessoa" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
    "cnpj" TEXT,
    "ie" TEXT,
    "endereco" TEXT,
    "numero" INTEGER,
    "complemento" TEXT,
    "cidade" TEXT,
    "bairro" TEXT,
    "cep" TEXT,
    "uf" TEXT,
    "email" TEXT,
    "fone" TEXT,
    "celular" TEXT,

    CONSTRAINT "cliente_conta_receber_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "conta_a_receber" ADD CONSTRAINT "conta_a_receber_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente_conta_receber"("id") ON DELETE CASCADE ON UPDATE CASCADE;
