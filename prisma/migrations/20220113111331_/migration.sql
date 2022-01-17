-- DropForeignKey
ALTER TABLE "categorias_no_produto" DROP CONSTRAINT "categorias_no_produto_categoria_id_fkey";

-- DropForeignKey
ALTER TABLE "categorias_no_produto" DROP CONSTRAINT "categorias_no_produto_produto_id_fkey";

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- AddForeignKey
ALTER TABLE "categorias_no_produto" ADD CONSTRAINT "categorias_no_produto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categorias_no_produto" ADD CONSTRAINT "categorias_no_produto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categoria_produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
