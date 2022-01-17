-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "tipoPessoa" SET DATA TYPE CHAR,
ALTER COLUMN "contribuinte" SET DATA TYPE CHAR;

-- CreateTable
CREATE TABLE "conta_a_receber" (
    "id" TEXT NOT NULL,
    "situacao" TEXT,
    "dataEmissao" TIMESTAMP(3),
    "vencimentoOriginal" TIMESTAMP(3),
    "vencimento" TIMESTAMP(3),
    "competencia" TIMESTAMP(3),
    "nroDocumento" TEXT,
    "valor" TEXT,
    "saldo" TEXT,
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
CREATE TABLE "cliente_conta_pagar" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "cpf" TEXT,
    "tipoPessoa" TEXT,
    "rg" TEXT,
    "endereco" TEXT,
    "numero" INTEGER NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT,
    "bairro" TEXT,
    "cep" TEXT,
    "uf" TEXT,
    "email" TEXT,
    "fone" TEXT,
    "celular" TEXT,

    CONSTRAINT "cliente_conta_pagar_pkey" PRIMARY KEY ("id")
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
    "valor" TEXT,
    "saldo" TEXT,
    "historico" TEXT,
    "categoria" TEXT,
    "idFormaPagamento" TEXT,
    "portador" TEXT,
    "linkBoleto" TEXT,
    "vendedor" TEXT,
    "ocorrencia" TEXT,
    "fornecedor_id" INTEGER NOT NULL,

    CONSTRAINT "conta_a_pagar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fornecedor_conta_pagar" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "cnpj" TEXT,
    "tipoPessoa" TEXT,
    "ie" TEXT,
    "endereco" TEXT,
    "numero" TEXT,
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

-- AddForeignKey
ALTER TABLE "conta_a_receber" ADD CONSTRAINT "conta_a_receber_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente_conta_pagar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conta_a_pagar" ADD CONSTRAINT "conta_a_pagar_fornecedor_id_fkey" FOREIGN KEY ("fornecedor_id") REFERENCES "fornecedor_conta_pagar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
