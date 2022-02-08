-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "descricao" TEXT,
    "tipo" TEXT,
    "situacao" TEXT,
    "unidade" TEXT,
    "preco" DOUBLE PRECISION,
    "precoCusto" DOUBLE PRECISION,
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
    "pesoLiq" DOUBLE PRECISION,
    "pesoBruto" DOUBLE PRECISION,
    "estoqueMinimo" DOUBLE PRECISION,
    "estoqueMaximo" DOUBLE PRECISION,
    "gtin" TEXT,
    "gtinEmbalagem" TEXT,
    "larguraProduto" DOUBLE PRECISION,
    "alturaProduto" DOUBLE PRECISION,
    "profundidadeProduto" DOUBLE PRECISION,
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
    "id" SERIAL NOT NULL,
    "codigo" INTEGER NOT NULL,
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
    "peso" TEXT,
    "altura" TEXT,
    "largura" TEXT,
    "comprimento" TEXT,
    "diametro" TEXT,
    "pedidoNumero" INTEGER NOT NULL,

    CONSTRAINT "volume_pkey" PRIMARY KEY ("id")
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
    "pedidoNumero" INTEGER NOT NULL,

    CONSTRAINT "parcela_pkey" PRIMARY KEY ("id","pedidoNumero")
);

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

-- CreateTable
CREATE TABLE "produto_no_pedido" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT,
    "descricao" TEXT,
    "quantidade" DOUBLE PRECISION,
    "valorunidade" DOUBLE PRECISION,
    "precocusto" DOUBLE PRECISION,
    "descontoItem" DOUBLE PRECISION,
    "un" TEXT,
    "pesoBruto" DOUBLE PRECISION,
    "largura" DOUBLE PRECISION,
    "altura" DOUBLE PRECISION,
    "profundidade" DOUBLE PRECISION,
    "unidadeMedida" TEXT,
    "descricaoDetalhada" TEXT,
    "pedidoNumero" INTEGER,

    CONSTRAINT "produto_no_pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conta_a_receber" (
    "id" TEXT NOT NULL,
    "situacao" TEXT,
    "dataEmissao" TIMESTAMP(3),
    "vencimentoOriginal" TIMESTAMP(3),
    "vencimento" TIMESTAMP(3),
    "competencia" TIMESTAMP(3),
    "nroDocumento" TEXT,
    "valor" DOUBLE PRECISION,
    "saldo" DOUBLE PRECISION,
    "historico" TEXT,
    "categoria" TEXT,
    "idFormaPagamento" TEXT,
    "portador" TEXT,
    "linkBoleto" TEXT,
    "vendedor" TEXT,
    "ocorrencia" TEXT,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "conta_a_receber_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "conta_a_pagar" (
    "id" TEXT NOT NULL,
    "situacao" TEXT,
    "dataEmissao" TIMESTAMP(3),
    "vencimentoOriginal" TIMESTAMP(3),
    "vencimento" TIMESTAMP(3),
    "competencia" TIMESTAMP(3),
    "nroDocumento" TEXT,
    "valor" DOUBLE PRECISION,
    "saldo" DOUBLE PRECISION,
    "historico" TEXT,
    "categoria" TEXT,
    "portador" TEXT,
    "ocorrencia" TEXT,
    "fornecedor_id" INTEGER NOT NULL,

    CONSTRAINT "conta_a_pagar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fornecedor_conta_pagar" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "tipoPessoa" TEXT,
    "cnpj" TEXT,
    "ie" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
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

    CONSTRAINT "fornecedor_conta_pagar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nota_fiscal" (
    "id" TEXT NOT NULL,
    "serie" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "loja" TEXT NOT NULL,
    "numeroPedidoLoja" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "vendedor" TEXT NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL,
    "valorNota" DOUBLE PRECISION NOT NULL,
    "chaveAcesso" TEXT NOT NULL,
    "xml" TEXT,
    "linkDanfe" TEXT,
    "linkPdf" TEXT,
    "transportadoraCnpj" TEXT,
    "clienteNotaCnpj" TEXT NOT NULL,

    CONSTRAINT "nota_fiscal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente_nota" (
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "ie" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fone" TEXT NOT NULL,

    CONSTRAINT "cliente_nota_pkey" PRIMARY KEY ("cnpj")
);

-- CreateIndex
CREATE UNIQUE INDEX "nota_pedidoNumero_key" ON "nota"("pedidoNumero");

-- AddForeignKey
ALTER TABLE "categorias_no_produto" ADD CONSTRAINT "categorias_no_produto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categorias_no_produto" ADD CONSTRAINT "categorias_no_produto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categoria_produto"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

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
ALTER TABLE "parcela" ADD CONSTRAINT "parcela_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nota" ADD CONSTRAINT "nota_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto_no_pedido" ADD CONSTRAINT "produto_no_pedido_pedidoNumero_fkey" FOREIGN KEY ("pedidoNumero") REFERENCES "pedido"("numero") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conta_a_receber" ADD CONSTRAINT "conta_a_receber_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente_conta_receber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conta_a_pagar" ADD CONSTRAINT "conta_a_pagar_fornecedor_id_fkey" FOREIGN KEY ("fornecedor_id") REFERENCES "fornecedor_conta_pagar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nota_fiscal" ADD CONSTRAINT "nota_fiscal_transportadoraCnpj_fkey" FOREIGN KEY ("transportadoraCnpj") REFERENCES "transportadora"("cnpj") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nota_fiscal" ADD CONSTRAINT "nota_fiscal_clienteNotaCnpj_fkey" FOREIGN KEY ("clienteNotaCnpj") REFERENCES "cliente_nota"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
