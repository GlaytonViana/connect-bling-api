import IPurchaseRequests from '@modules/bling/interfaces/IPurchaseRequests'
import prisma from '@shared/prisma'

interface IFormatBlingPurchaseRequestsServiceParams {
    purchaseRequests: IPurchaseRequests[]
}

export default class FormatBlingPurchaseRequestsService {
    async execute({ purchaseRequests }: IFormatBlingPurchaseRequestsServiceParams) {
        // Apagar pedidos de compra existentes
        await prisma.pedidoDeCompra.deleteMany({})

        for (const {
            pedidocompra: {
                datacompra,
                dataprevista,
                numeropedido,
                observacaointerna,
                observacoes,
                desconto,
                ordemcompra,
                fornecedor,
                categoria,
                itens,
            },
        } of purchaseRequests) {
            // Cadastrar primeiro os produtos
            const productsId: string[] = []

            for (const { item } of itens) {
                const existProduct = await prisma.produto.findFirst({
                    where: {
                        codigo: item.codigo,
                    },
                })

                if (!existProduct) {
                    console.log(item)
                    throw new Error()
                }

                productsId.push(existProduct.id)
            }

            // Formatacao
            const dataPrevistaFormatada = dataprevista === '' ? undefined : new Date(dataprevista)

            await prisma.pedidoDeCompra.create({
                data: {
                    datacompra: new Date(datacompra),
                    dataprevista: dataPrevistaFormatada,
                    numeropedido: Number(numeropedido),
                    observacaointerna,
                    observacoes,
                    desconto: Number(desconto),
                    ordemcompra: Number(ordemcompra),
                    fornecedor: {
                        connectOrCreate: {
                            where: {
                                id: Number(fornecedor.id),
                            },
                            create: {
                                id: Number(fornecedor.id),
                                ie: Number(fornecedor.ie),
                                bairro: fornecedor.bairro,
                                celular: fornecedor.celular,
                                cep: fornecedor.cep,
                                cidade: fornecedor.cidade,
                                complemento: fornecedor.complemento,
                                contribuinte: fornecedor.contribuinte,
                                cpfcnpj: fornecedor.cpfcnpj,
                                email: fornecedor.email,
                                endereco: fornecedor.endereco,
                                endereconro: fornecedor.endereconro,
                                fone: fornecedor.fone,
                                nome: fornecedor.nome,
                                rg: fornecedor.rg,
                                tipopessoa: fornecedor.tipopessoa,
                                uf: fornecedor.uf,
                            },
                        },
                    },
                    categoria: {
                        connectOrCreate: {
                            where: {
                                id: categoria.id,
                            },
                            create: {
                                id: categoria.id,
                                descricao: categoria.descricao,
                            },
                        },
                    },
                    produtosNoPedidoDeCompra: {
                        createMany: {
                            data: productsId.map(product => ({ produtoId: product })),
                        },
                    },
                },
            })
        }

        return
    }
}
