import { Prisma } from '@prisma/client'
import { IBlingOrder } from '@modules/bling/providers/BlingAPI'

interface IReturn {
    orders: Prisma.PedidoCreateInput[]
}

class FormatBlingOrdersToOrder {
    execute(orders: IBlingOrder[]): IReturn {
        const ordersListToCreate: Prisma.PedidoCreateInput[] = []

        orders.forEach(({ pedido }) => {
            ordersListToCreate.push({
                numero: Number(pedido.numero),
                desconto: pedido.desconto,
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
                                    nome: `${pedido.cliente.nome} :: Endereço`,
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
                        bairro: '',
                        cep: '',
                        cidade: '',
                        complemento: '',
                        nome: '',
                        numero: '',
                        uf: '',
                        endereco: '',
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
