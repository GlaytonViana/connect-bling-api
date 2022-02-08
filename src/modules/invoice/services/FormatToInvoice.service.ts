import { Prisma } from '@prisma/client'
import { IBlingInvoice } from '@modules/bling/providers/BlingAPI'

class FormatToInvoice {
    execute(invoices: IBlingInvoice[]) {
        const formattedInvoices = invoices.map(({ notafiscal }): Prisma.NotaFiscalCreateInput => {
            let cliente: Prisma.ClienteNotaCreateNestedOneWithoutNotaFiscalInput | undefined =
                undefined

            if (notafiscal.cliente) {
                cliente = {
                    connectOrCreate: {
                        where: {
                            cnpj: notafiscal.cliente.cnpj,
                        },
                        create: {
                            nome: notafiscal.cliente.nome,
                            cnpj: notafiscal.cliente.cnpj,
                            ie: notafiscal.cliente.ie,
                            rg: notafiscal.cliente.rg,
                            endereco: notafiscal.cliente.endereco,
                            numero: notafiscal.cliente.numero,
                            complemento: notafiscal.cliente.complemento,
                            cidade: notafiscal.cliente.cidade,
                            bairro: notafiscal.cliente.bairro,
                            cep: notafiscal.cliente.cep,
                            uf: notafiscal.cliente.uf,
                            email: notafiscal.cliente.email,
                            fone: notafiscal.cliente.fone,
                        },
                    },
                }
            }

            let transportadora:
                | Prisma.TransportadoraCreateNestedOneWithoutNotaFiscalInput
                | undefined = undefined

            if (notafiscal.transporte?.transportadora) {
                transportadora = {
                    connectOrCreate: {
                        where: {
                            cnpj: notafiscal.transporte.cnpj,
                        },
                        create: {
                            cnpj: notafiscal.transporte.cnpj,
                            nome: notafiscal.transporte.transportadora,
                            tipo_frete: notafiscal.transporte.tipo_frete,
                        },
                    },
                }
            }

            return {
                id: notafiscal.id,
                serie: notafiscal.serie,
                numero: notafiscal.numero,
                loja: notafiscal.loja,
                numeroPedidoLoja: notafiscal.numeroPedidoLoja || '',
                tipo: notafiscal.tipo,
                situacao: notafiscal.situacao,
                contato: notafiscal.contato,
                cnpj: notafiscal.cnpj,
                vendedor: notafiscal.vendedor,
                dataEmissao: new Date(notafiscal.dataEmissao),
                valorNota: Number(notafiscal.valorNota),
                chaveAcesso: notafiscal.chaveAcesso || '',
                xml: notafiscal.xml || '',
                linkDanfe: notafiscal.linkDanfe || '',
                linkPdf: notafiscal.linkPdf || '',
                cliente,
                transportadora,
            }
        })

        return formattedInvoices
    }
}

export default FormatToInvoice
