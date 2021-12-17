-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "descricao" TEXT,
    "tipo" TEXT,
    "situacao" TEXT,
    "unidade" TEXT,
    "preco" DECIMAL(65,30),
    "precoCusto" DECIMAL(65,30),
    "descricaoCurta" TEXT,
    "descricaoComplementar" TEXT,
    "dataInclusao" TIMESTAMP(3),
    "dataAlteracao" TIMESTAMP(3),
    "imageThumbnail" TEXT,
    "urlVideo" TEXT,
    "nomeFornecedor" TEXT,
    "codigoFabricante" TEXT,
    "marca" TEXT,
    "classFiscal" TEXT,
    "cest" TEXT,
    "origem" INTEGER,
    "idGrupoProduto" INTEGER,
    "linkExterno" TEXT,
    "observacoes" TEXT,
    "grupoProduto" TEXT,
    "garantia" INTEGER,
    "descricaoFornecedor" TEXT,
    "idFabricante" INTEGER,
    "pesoLiq" DECIMAL(65,30),
    "pesoBruto" DECIMAL(65,30),
    "estoqueMinimo" DECIMAL(65,30),
    "estoqueMaximo" DECIMAL(65,30),
    "gtin" TEXT,
    "gtinEmbalagem" TEXT,
    "larguraProduto" DECIMAL(65,30),
    "alturaProduto" DECIMAL(65,30),
    "profundidadeProduto" DECIMAL(65,30),
    "unidadeMedida" TEXT,
    "itensPorCaixa" INTEGER,
    "volumes" INTEGER,
    "localizacao" TEXT,
    "crossdocking" INTEGER,
    "condicao" TEXT,
    "freteGratis" TEXT,
    "producao" TEXT,
    "dataValidade" TIMESTAMP(3),
    "spedTipoItem" TEXT,
    "codigoPai" TEXT,
    "clonarDadosPai" TEXT,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias_no_produto" (
    "produto_id" TEXT NOT NULL,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "categorias_no_produto_pkey" PRIMARY KEY ("produto_id","categoria_id")
);

-- CreateTable
CREATE TABLE "categoria_produto" (
    "id" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "categoria_produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "numero" INTEGER NOT NULL,
    "desconto" DOUBLE PRECISION,
    "observacoes" TEXT,
    "observacaointerna" TEXT,
    "data" TIMESTAMP(3),
    "dataSaida" TIMESTAMP(3),
    "numeroOrdemCompra" TEXT,
    "vendedor" TEXT,
    "valorfrete" DOUBLE PRECISION,
    "outrasdespesas" DOUBLE PRECISION,
    "totalprodutos" DOUBLE PRECISION,
    "totalvenda" DOUBLE PRECISION,
    "situacao" TEXT,
    "loja" TEXT,
    "numeroPedidoLoja" TEXT,
    "tipoIntegracao" TEXT,
    "cliente_id" INTEGER NOT NULL,
    "transportadora_id" TEXT,
    "enderecoEntrega_id" INTEGER,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoPessoa" CHAR,
    "cpfCnpj" TEXT,
    "incricaoEstadual" TEXT,
    "rg" TEXT,
    "contribuinte" CHAR,
    "fone" TEXT,
    "celular" TEXT,
    "email" TEXT,
    "endereco_id" INTEGER NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transportadora" (
    "cnpj" TEXT NOT NULL,
    "nome" TEXT,
    "tipo_frete" TEXT,
    "servico_correios" TEXT,

    CONSTRAINT "transportadora_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "endereco" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cep" TEXT,
    "cidade" TEXT,
    "uf" TEXT,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volume" (
    "id" INTEGER NOT NULL,
    "idServico" INTEGER NOT NULL,
    "idOrigem" TEXT,
    "servico" TEXT,
    "codigoServico" TEXT,
    "codigoRastreamento" TEXT,
    "valorFretePrevisto" DOUBLE PRECISION,
    "remessaNumero" TEXT,
    "remessaDataCriacao" TIMESTAMP(3),
    "dataSaida" TIMESTAMP(3),
    "prazoEntregaPrevisto" TEXT,
    "valorDeclarado" DOUBLE PRECISION,
    "avisoRecebimento" BOOLEAN,
    "maoPropria" BOOLEAN,
    "urlRastreamento" TEXT,
    "pedidoNumero" INTEGER,

    CONSTRAINT "volume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dimensao_do_volume" (
    "id" INTEGER NOT NULL,
    "peso" TEXT,
    "altura" TEXT,
    "largura" TEXT,
    "comprimento" TEXT,
    "diametro" TEXT,
    "volume_id" INTEGER NOT NULL,

    CONSTRAINT "dimensao_do_volume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parcela" (
    "id" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
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
    "valorNota" DOUBLE PRECISION,
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
    "valorunidade" DOUBLE PRECISION,
    "precocusto" DOUBLE PRECISION,
    "descontoItem" DOUBLE PRECISION,
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
CREATE UNIQUE INDEX "dimensao_do_volume_volume_id_key" ON "dimensao_do_volume"("volume_id");

-- CreateIndex
CREATE UNIQUE INDEX "Nota_pedidoNumero_key" ON "Nota"("pedidoNumero");

-- AddForeignKey
ALTER TABLE "categorias_no_produto" ADD CONSTRAINT "categorias_no_produto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categorias_no_produto" ADD CONSTRAINT "categorias_no_produto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categoria_produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_transportadora_id_fkey" FOREIGN KEY ("transportadora_id") REFERENCES "transportadora"("cnpj") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_enderecoEntrega_id_fkey" FOREIGN KEY ("enderecoEntrega_id") REFERENCES "endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "volume" ADD CONSTRAINT "volume_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dimensao_do_volume" ADD CONSTRAINT "dimensao_do_volume_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "volume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcela" ADD CONSTRAINT "parcela_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto_no_pedido" ADD CONSTRAINT "produto_no_pedido_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE SET NULL ON UPDATE CASCADE;
