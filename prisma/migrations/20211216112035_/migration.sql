-- DropForeignKey
ALTER TABLE "Nota" DROP CONSTRAINT "Nota_pedidoNumero_fkey";

-- DropForeignKey
ALTER TABLE "cliente" DROP CONSTRAINT "cliente_endereco_id_fkey";

-- DropForeignKey
ALTER TABLE "dimensao_do_volume" DROP CONSTRAINT "dimensao_do_volume_volume_id_fkey";

-- DropForeignKey
ALTER TABLE "parcela" DROP CONSTRAINT "parcela_pedidoNumero_fkey";

-- DropForeignKey
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_enderecoEntrega_id_fkey";

-- DropForeignKey
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_transportadora_id_fkey";

-- DropForeignKey
ALTER TABLE "produto_no_pedido" DROP CONSTRAINT "produto_no_pedido_pedidoNumero_fkey";

-- DropForeignKey
ALTER TABLE "volume" DROP CONSTRAINT "volume_pedidoNumero_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_transportadora_id_fkey" FOREIGN KEY ("transportadora_id") REFERENCES "transportadora"("cnpj") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_enderecoEntrega_id_fkey" FOREIGN KEY ("enderecoEntrega_id") REFERENCES "endereco"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "endereco"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume" ADD CONSTRAINT "volume_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dimensao_do_volume" ADD CONSTRAINT "dimensao_do_volume_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "volume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcela" ADD CONSTRAINT "parcela_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto_no_pedido" ADD CONSTRAINT "produto_no_pedido_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE CASCADE ON UPDATE CASCADE;
