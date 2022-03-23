import { Prisma } from '@prisma/client'
import { IBlingBillsToPay } from '@modules/bling/providers/BlingAPI'

class FormatBillsToPayService {
    execute(billsToPay: IBlingBillsToPay[]): Prisma.ContaPagarCreateInput[] {
        const billsToPayFormatted: Prisma.ContaPagarCreateInput[] = billsToPay.map(
            ({
                contapagar: {
                    id,
                    situacao,
                    dataEmissao,
                    vencimentoOriginal,
                    vencimento,
                    competencia,
                    nroDocumento,
                    valor,
                    saldo,
                    historico,
                    categoria,
                    portador,
                    ocorrencia,
                    fornecedor,
                    idFormaPagamento,
                },
            }) => {
                return {
                    id,
                    situacao,
                    dataEmissao: new Date(dataEmissao),
                    vencimentoOriginal: new Date(vencimentoOriginal),
                    vencimento: new Date(vencimento),
                    competencia: new Date(competencia),
                    nroDocumento,
                    valor: Number(valor) || 0,
                    saldo: Number(saldo) || 0,
                    historico,
                    categoria,
                    portador,
                    ocorrencia,
                    idFormaPagamento: idFormaPagamento ? parseInt(idFormaPagamento) : undefined,

                    fornecedor: {
                        create: {
                            nome: fornecedor.nome,
                            tipoPessoa: fornecedor.tipoPessoa,
                            cnpj: fornecedor?.cnpj,
                            ie: fornecedor?.ie,
                            cpf: fornecedor?.cpf,
                            rg: fornecedor?.rg,
                            endereco: fornecedor.endereco,
                            numero: Number(fornecedor.numero) || undefined,
                            complemento: fornecedor.complemento,
                            cidade: fornecedor.cidade,
                            bairro: fornecedor.bairro,
                            cep: fornecedor.cep,
                            uf: fornecedor.uf,
                            email: fornecedor.email,
                            fone: fornecedor.fone,
                            celular: fornecedor.celular,
                        },
                    },
                }
            },
        )

        return billsToPayFormatted
    }
}

export default FormatBillsToPayService
