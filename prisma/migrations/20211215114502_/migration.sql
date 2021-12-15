-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- CreateTable
CREATE TABLE "parcela" (
    "id" INTEGER NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "dataVencimento" TIMESTAMP(3) NOT NULL,
    "obs" TEXT,
    "destino" TEXT,
    "formaPagamento_id" TEXT NOT NULL,
    "formaPagamentoDescricao" TEXT,
    "formaPagamentoCodigoFiscal" TEXT,
    "pedidoNumero" INTEGER,

    CONSTRAINT "parcela_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nota" (
    "numero" TEXT NOT NULL,
    "serie" TEXT,
    "dataEmissao" TIMESTAMP(3),
    "situacao" INTEGER,
    "valorNota" MONEY,
    "chaveAcesso" TEXT,
    "pedidoNumero" INTEGER NOT NULL,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "produto_no_pedido" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT,
    "descricao" TEXT,
    "quantidade" DECIMAL(65,30),
    "valorunidade" MONEY,
    "precocusto" MONEY,
    "descontoItem" MONEY,
    "un" TEXT,
    "pesoBruto" DECIMAL(65,30),
    "largura" DECIMAL(65,30),
    "altura" DECIMAL(65,30),
    "profundidade" DECIMAL(65,30),
    "unidadeMedida" TEXT,
    "descricaoDetalhada" TEXT,
    "pedidoNumero" INTEGER,

    CONSTRAINT "produto_no_pedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nota_pedidoNumero_key" ON "Nota"("pedidoNumero");

-- AddForeignKey
ALTER TABLE "parcela" ADD CONSTRAINT "parcela_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto_no_pedido" ADD CONSTRAINT "produto_no_pedido_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE SET NULL ON UPDATE CASCADE;
