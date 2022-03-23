import { Prisma } from '@prisma/client'
import { IBlingBillsToReceive } from '@modules/bling/providers/BlingAPI'

class FormatBillsToReceiveService {
    execute(billsToReceive: IBlingBillsToReceive[]): Prisma.ContaReceberCreateInput[] {
        const billsToReceiveFormatted: Prisma.ContaReceberCreateInput[] = billsToReceive.map(
            ({
                contaReceber: {
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
                    idFormaPagamento,
                    portador,
                    linkBoleto,
                    vendedor,
                    ocorrencia,
                    cliente,
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
                    idFormaPagamento: idFormaPagamento ? parseInt(idFormaPagamento) : undefined,
                    portador,
                    linkBoleto,
                    vendedor,
                    ocorrencia,

                    cliente: {
                        create: {
                            nome: cliente.nome,
                            tipoPessoa: cliente.tipoPessoa,
                            cnpj: cliente?.cnpj,
                            ie: cliente?.ie,
                            cpf: cliente?.cpf,
                            rg: cliente?.rg,
                            endereco: cliente.endereco,
                            numero: Number(cliente.numero) || undefined,
                            complemento: cliente.complemento,
                            cidade: cliente.cidade,
                            bairro: cliente.bairro,
                            cep: cliente.cep,
                            uf: cliente.uf,
                            email: cliente.email,
                            fone: cliente.fone,
                            celular: cliente.celular,
                        },
                    },
                }
            },
        )

        return billsToReceiveFormatted
    }
}

export default FormatBillsToReceiveService
