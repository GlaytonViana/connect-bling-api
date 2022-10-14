import { Prisma } from '@prisma/client'
import IBlingOrder from '@modules/bling/interfaces/IBlingOrder'

interface IReturn {
    orders: Prisma.PedidoCreateInput[]
}

class FormatBlingOrdersToOrder {
    execute(orders: IBlingOrder[]): IReturn {
        const ordersListToCreate: Prisma.PedidoCreateInput[] = []

        orders.forEach(({ pedido }) => {
            // Transportadora
            let shippingCompany:
                | Prisma.TransportadoraCreateNestedOneWithoutPedidoInput
                | undefined = undefined

            if (pedido.transporte?.transportadora) {
                shippingCompany = {
                    connectOrCreate: {
                        where: {
                            cnpj: pedido.transporte.cnpj,
                        },
                        create: {
                            cnpj: pedido.transporte.cnpj,
                            nome: pedido.transporte.transportadora,
                            tipo_frete: pedido.transporte.tipo_frete,
                        },
                    },
                }
            }

            // Endereço de entrega
            let shippingAddress: Prisma.EnderecoCreateNestedOneWithoutPedidoInput | undefined =
                undefined

            if (pedido.transporte?.enderecoEntrega) {
                shippingAddress = {
                    create: {
                        nome: pedido.transporte.enderecoEntrega.nome,
                        endereco: pedido.transporte.enderecoEntrega.endereco,
                        numero: pedido.transporte.enderecoEntrega.numero,
                        bairro: pedido.transporte.enderecoEntrega.bairro,
                        cep: pedido.transporte.enderecoEntrega.cep,
                        cidade: pedido.transporte.enderecoEntrega.cidade,
                        complemento: pedido.transporte.enderecoEntrega.complemento,
                        uf: pedido.transporte.enderecoEntrega.uf,
                    },
                }
            }

            // Parcelas
            let installments: Prisma.ParcelaCreateNestedManyWithoutPedidoInput | undefined =
                undefined

            if (pedido?.parcelas) {
                installments = {
                    createMany: {
                        data: pedido.parcelas.map(({ parcela }) => ({
                            parcela: Number(parcela.idLancamento),
                            valor: Number(parcela.valor),
                            dataVencimento: new Date(parcela.dataVencimento),
                            obs: parcela.obs,
                            destino: parcela.destino,
                            formaPagamento_id: parcela.forma_pagamento.id,
                            formaPagamentoCodigoFiscal: parcela.forma_pagamento.codigoFiscal,
                            formaPagamentoDescricao: parcela.forma_pagamento.descricao,
                        })),
                    },
                }
            }

            // Volumes
            let packages: Prisma.VolumeCreateNestedManyWithoutPedidoInput | undefined = undefined

            if (pedido.transporte?.volumes) {
                packages = {
                    createMany: {
                        data: pedido.transporte.volumes.map(({ volume }) => ({
                            codigo: Number(volume.id),
                            idServico: Number(volume.idServico),
                            avisoRecebimento: volume.avisoRecebimento,
                            codigoRastreamento: volume.codigoRastreamento,
                            codigoServico: volume.codigoServico,
                            dataSaida: new Date(volume.dataSaida),
                            idOrigem: volume.idOrigem,
                            maoPropria: false,
                            prazoEntregaPrevisto: volume.dataSaida,
                            remessaNumero: volume.remessa?.numero,
                            remessaDataCriacao: volume.remessa?.dataCriacao
                                ? new Date(volume.remessa.dataCriacao)
                                : undefined,
                            servico: volume.servico,
                            urlRastreamento: volume.urlRastreamento,
                            valorDeclarado: Number(volume.valorDeclarado) || null,
                            valorFretePrevisto: Number(volume.valorFretePrevisto),

                            comprimento: volume.dimensoes.comprimento,
                            altura: volume.dimensoes.altura,
                            diametro: volume.dimensoes.diametro,
                            largura: volume.dimensoes.largura,
                            peso: volume.dimensoes.peso,
                        })),
                    },
                }
            }

            ordersListToCreate.push({
                numero: Number(pedido.numero),
                desconto: Number(pedido.desconto) || 0,
                valorfrete: Number(pedido.valorfrete),
                outrasdespesas: Number(pedido.outrasdespesas),
                totalprodutos: Number(pedido.totalprodutos),
                totalvenda: Number(pedido.totalvenda),
                observacoes: pedido.observacoes,
                observacaointerna: pedido.observacaointerna,
                numeroOrdemCompra: pedido.numeroOrdemCompra,
                vendedor: pedido.vendedor,
                situacao: pedido.situacao,
                loja: pedido.loja,
                numeroPedidoLoja: pedido.numeroPedidoLoja,
                tipoIntegracao: pedido.tipoIntegracao,

                data: new Date(pedido.data),
                dataSaida: new Date(pedido.data),
                chaveAcessoNota: pedido.nota?.chaveAcesso || '',

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

                enderecoEntrega: shippingAddress,
                transportadora: shippingCompany,
                parcelas: installments,

                produtos: {
                    createMany: {
                        data: pedido.itens.map(({ item }) => ({
                            codigo: item.codigo,
                            descricao: item.descricao,
                            quantidade: Number(item.quantidade),
                            valorunidade: Number(item.valorunidade),
                            precocusto: Number(item.precocusto),
                            descontoItem: Number(item.descontoItem),
                            un: item.un,
                            pesoBruto: Number(item.pesoBruto),
                            largura: Number(item.largura),
                            altura: Number(item.altura),
                            profundidade: Number(item.profundidade),
                            descricaoDetalhada: item.descricaoDetalhada,
                            unidadeMedida: item.unidadeMedida,
                        })),
                    },
                },

                volume: packages,
            })
        })

        return {
            orders: ordersListToCreate,
        }
    }
}

export default FormatBlingOrdersToOrder
