/*
  Warnings:

  - The `desconto` column on the `pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "pedido" DROP COLUMN "desconto",
ADD COLUMN     "desconto" DOUBLE PRECISION,
ALTER COLUMN "observacoes" DROP NOT NULL,
ALTER COLUMN "observacaointerna" DROP NOT NULL,
ALTER COLUMN "data" DROP NOT NULL,
ALTER COLUMN "numeroOrdemCompra" DROP NOT NULL,
ALTER COLUMN "vendedor" DROP NOT NULL,
ALTER COLUMN "valorfrete" DROP NOT NULL,
ALTER COLUMN "outrasdespesas" DROP NOT NULL,
ALTER COLUMN "totalprodutos" DROP NOT NULL,
ALTER COLUMN "totalvenda" DROP NOT NULL,
ALTER COLUMN "situacao" DROP NOT NULL,
ALTER COLUMN "dataSaida" DROP NOT NULL,
ALTER COLUMN "loja" DROP NOT NULL,
ALTER COLUMN "numeroPedidoLoja" DROP NOT NULL,
ALTER COLUMN "tipoIntegracao" DROP NOT NULL;
