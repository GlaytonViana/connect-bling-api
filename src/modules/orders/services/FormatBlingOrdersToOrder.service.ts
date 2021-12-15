import { Prisma } from '@database/prisma/prisma-client-js'
import { IBlingOrder } from '@modules/bling/providers/BlingAPI'

interface IReturn {
    orders: Prisma.PedidoCreateInput[]
}

class FormatBlingOrdersToOrder {
    execute(orders: IBlingOrder[]): IReturn {
        const ordersListToCreate: Prisma.PedidoCreateInput[] = []

        orders.forEach(({ pedido }) => {
            let shippingCompany: Prisma.TransportadoraCreateInput | null = null

            if (pedido.transporte.cnpj) {
                shippingCompany = {
                    cnpj: '',
                    nome: '',
                    tipo_frete: '',
                }
            }

            if (pedido.transporte.transportadora)
                ordersListToCreate.push({
                    numero: Number(pedido.numero),
                    desconto: Number(pedido.desconto),
                    observacoes: pedido.observacoes,
                    observacaointerna: pedido.observacaointerna,
                    numeroOrdemCompra: pedido.numeroOrdemCompra,
                    vendedor: pedido.vendedor,
                    valorfrete: Number(pedido.valorfrete),
                    outrasdespesas: Number(pedido.outrasdespesas),
                    totalprodutos: Number(pedido.totalprodutos),
                    totalvenda: Number(pedido.totalvenda),
                    situacao: pedido.situacao,
                    loja: pedido.loja,
                    numeroPedidoLoja: pedido.numeroPedidoLoja,
                    tipoIntegracao: pedido.tipoIntegracao,

                    data: new Date(pedido.data),
                    dataSaida: new Date(pedido.data),

                    cliente: {
                        connectOrCreate: {
                            where: {
                                id: Number(pedido.cliente.id),
                            },
                            create: {
                                id: Number(pedido.cliente.id),
                                nome: pedido.cliente.nome,
                                celular: pedido.cliente.celular,
                                contribuinte: '',
                                cpfCnpj: pedido.cliente.cnpj,
                                email: pedido.cliente.email,
                                fone: pedido.cliente.fone,
                                incricaoEstadual: pedido.cliente.ie,
                                rg: pedido.cliente.rg,
                                tipoPessoa: '',
                                endereco: {
                                    create: {
                                        nome: `${pedido.cliente.nome} :: Endereço Cliente`,
                                        endereco: pedido.cliente.endereco,
                                        numero: pedido.cliente.numero,
                                        complemento: pedido.cliente.complemento,
                                        bairro: pedido.cliente.bairro,
                                        cidade: pedido.cliente.cidade,
                                        uf: pedido.cliente.uf,
                                        cep: pedido.cliente.cep,
                                    },
                                },
                            },
                        },
                    },

                    enderecoEntrega: {
                        create: {
                            nome: pedido.transporte.enderecoEntrega.bairro,
                            endereco: pedido.transporte.enderecoEntrega.bairro,
                            numero: pedido.transporte.enderecoEntrega.bairro,
                            bairro: pedido.transporte.enderecoEntrega.bairro,
                            cep: pedido.transporte.enderecoEntrega.bairro,
                            cidade: pedido.transporte.enderecoEntrega.bairro,
                            complemento: pedido.transporte.enderecoEntrega.bairro,
                            uf: pedido.transporte.enderecoEntrega.bairro,
                        },
                    },
                })
        })

        return {
            orders: ordersListToCreate,
        }
    }
}

export default FormatBlingOrdersToOrder
