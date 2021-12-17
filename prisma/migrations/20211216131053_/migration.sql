/*
  Warnings:

  - You are about to alter the column `preco` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `precoCusto` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `pesoLiq` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `pesoBruto` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `estoqueMinimo` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `estoqueMaximo` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `larguraProduto` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `alturaProduto` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `profundidadeProduto` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `quantidade` on the `produto_no_pedido` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `pesoBruto` on the `produto_no_pedido` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `largura` on the `produto_no_pedido` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `altura` on the `produto_no_pedido` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `profundidade` on the `produto_no_pedido` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to drop the `Nota` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Nota" DROP CONSTRAINT "Nota_pedidoNumero_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "produto" ALTER COLUMN "preco" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "precoCusto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "pesoLiq" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "pesoBruto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "estoqueMinimo" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "estoqueMaximo" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "larguraProduto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "alturaProduto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "profundidadeProduto" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "produto_no_pedido" ALTER COLUMN "quantidade" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "pesoBruto" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "largura" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "altura" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "profundidade" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "Nota";

-- CreateTable
CREATE TABLE "nota" (
    "numero" TEXT NOT NULL,
    "serie" TEXT,
    "dataEmissao" TIMESTAMP(3),
    "situacao" INTEGER,
    "valorNota" DOUBLE PRECISION,
    "chaveAcesso" TEXT,
    "pedidoNumero" INTEGER NOT NULL,

    CONSTRAINT "nota_pkey" PRIMARY KEY ("numero")
);

-- CreateIndex
CREATE UNIQUE INDEX "nota_pedidoNumero_key" ON "nota"("pedidoNumero");

-- AddForeignKey
ALTER TABLE "nota" ADD CONSTRAINT "nota_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE CASCADE ON UPDATE CASCADE;
