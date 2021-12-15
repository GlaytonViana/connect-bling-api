import axios, { AxiosInstance } from 'axios'

export interface IBlingProduct {
    produto: {
        id: string
        codigo: string
        descricao: string
        tipo: 'S' | 'P' | 'N'
        situacao: 'Ativo' | 'Inativo'
        unidade?: 'PC' | 'UN' | 'CX'
        preco: string
        precoCusto: string
        descricaoCurta: string
        descricaoComplementar: string
        dataInclusao: string
        dataAlteracao: string
        imageThumbnail?: string
        urlVideo?: string
        nomeFornecedor: string
        codigoFabricante: string
        marca?: string
        class_fiscal?: string
        cest?: string
        origem?: string
        idGrupoProduto?: string
        linkExterno?: string
        observacoes?: string
        grupoProduto?: string
        garantia: string
        descricaoFornecedor: string
        idFabricante: string
        categoria?: {
            id: string
            descricao: string
        }
        pesoLiq: string
        pesoBruto: string
        estoqueMinimo: string
        estoqueMaximo: string
        gtin?: string
        gtinEmbalagem?: string
        larguraProduto: string
        alturaProduto: string
        profundidadeProduto: string
        unidadeMedida: 'Metros' | 'Centímetros' | 'Milímetros'
        itensPorCaixa: number
        volumes: number
        localizacao?: string
        crossdocking: string
        condicao: 'Não especificado' | 'Novo' | 'Usado'
        freteGratis: 'N' | 'S'
        producao: 'T' | 'P'
        dataValidade: string
        spedTipoItem?: string
        produtoLoja: {
            idProdutoLoja: string
            preco: {
                preco: number
                precoPromocional: string
            }
            dataInclusao: string
            dataAlteracao: string
        }
        estoqueAtual: number
        depositos: {
            deposito: {
                id: string
                nome: string
                saldo: number
                desconsiderar: 'S' | 'N'
                saldoVirtual: number
            }
        }[]
        variacoes?: [
            variacao: {
                nome: string
                codigo: string
            },
        ]
        clonarDadosPai?: string
        codigoPai?: string
    }
}

export interface IBlingOrder {
    pedido: {
        desconto: string
        observacoes: string
        observacaointerna: string
        data: string
        numero: string
        numeroOrdemCompra: string
        vendedor: string
        valorfrete: string
        outrasdespesas: string
        totalprodutos: string
        totalvenda: string
        situacao: string
        dataSaida: string
        loja: string
        numeroPedidoLoja: string
        tipoIntegracao: string
        cliente: {
            id: string
            nome: string
            cnpj: string
            ie: string | null
            rg: string
            endereco: string
            numero: string
            complemento: string
            cidade: string
            bairro: string
            cep: string
            uf: string
            email: string
            celular: string
            fone: string
        }
        nota: {
            serie: string
            numero: string
            dataEmissao: string
            situacao: string
            valorNota: string
            chaveAcesso: string
        }
        transporte: {
            transportadora: string
            cnpj: string
            tipo_frete: string
            qtde_volumes: string
            enderecoEntrega: {
                nome: string
                endereco: string
                numero: string
                complemento: string
                cidade: string
                bairro: string
                cep: string
                uf: string
            }
            volumes: {
                volume: {
                    id: string
                    idServico: string
                    idOrigem: string
                    servico: string
                    codigoServico: string
                    codigoRastreamento: string
                    valorFretePrevisto: string
                    remessa?: string
                    dataSaida: string
                    prazoEntregaPrevisto: string
                    valorDeclarado: string
                    avisoRecebimento: boolean
                    maoPropria: boolean
                    dimensoes: {
                        peso: string
                        altura: string
                        largura: string
                        comprimento: string
                        diametro: string
                    }
                    urlRastreamento: string
                }
            }[]
            servico_correios: string
        }
        itens: {
            item: {
                codigo: string
                descricao: string
                quantidade: number
                valorunidade: number
                precocusto: number
                descontoItem: number
                un: string
                pesoBruto?: number
                largura?: number
                altura?: number
                profundidade?: number
                descricaoDetalhada?: string
                unidadeMedida: string
                gtin?: string
            }
        }[]
        parcelas: {
            parcela: {
                idLancamento: string
                valor: string
                dataVencimento: string
                obs?: string
                destino: string
                forma_pagamento: {
                    id: string
                    descricao: string
                    codigoFiscal: string
                }
            }
        }[]
    }
}

export default class BlingAPI {
    private api: AxiosInstance

    constructor() {
        this.api = axios.create({
            baseURL: 'https://bling.com.br/Api/v2',
            responseType: 'json',
            params: {
                apikey: 'c36e785d6010de1e1504df69faef90942ae6daa0fd1a25f93fc293034d090e3fa43af124',
            },
        })
    }

    async call<T>(endpoint: string): Promise<T[]> {
        let list: T[] = []
        let page = 1
        let statusResponse = true

        do {
            const { data } = await this.api.get(`/${endpoint}/page=${page}/json/`)

            if (data.retorno.erros !== undefined) {
                statusResponse = false
            } else {
                list = [...list, ...data.retorno[endpoint]]
            }
            page++

            await new Promise(resolve => setTimeout(resolve, 400))
        } while (statusResponse)

        return list
    }

    async getProducts() {
        const products = await this.call<IBlingProduct>('produtos')
        return products
    }

    async getOrders() {
        const orders = await this.call<IBlingOrder>('pedidos')
        return orders
    }
}
