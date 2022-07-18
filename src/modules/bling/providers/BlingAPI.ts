import axios, { AxiosInstance } from 'axios'
import IBlingOrder from '../interfaces/IBlingOrder'
import IPurchaseRequest from '../interfaces/IPurchaseRequests'

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

export interface IBlingBillsToReceive {
    contaReceber: {
        id: string
        situacao: string
        dataEmissao: string
        vencimentoOriginal: string
        vencimento: string
        competencia: string
        nroDocumento: string
        valor: string
        saldo: string
        historico: string
        categoria: string
        idFormaPagamento: string
        portador: string
        linkBoleto: string
        vendedor: string
        pagamento: any
        ocorrencia: string
        cliente: {
            idContato: string
            nome: string
            tipoPessoa: string
            cnpj?: string
            ie?: string
            cpf?: string
            rg?: string
            endereco: string
            numero: string
            complemento: string
            cidade: string
            bairro: string
            cep: string
            uf: string
            email: string
            fone: string
            celular: string
        }
    }
}

export interface IBlingBillsToPay {
    contapagar: {
        id: string
        situacao: string
        dataEmissao: string
        vencimentoOriginal: string
        vencimento: string
        competencia: string
        nroDocumento: string
        valor: string
        saldo: string
        historico: string
        categoria: string
        portador: string
        idFormaPagamento: string
        ocorrencia: string
        fornecedor: {
            idContato: string
            nome: string
            tipoPessoa: string
            cnpj?: string
            ie?: string
            cpf?: string
            rg?: string
            endereco: string
            numero: string
            complemento: string
            cidade: string
            bairro: string
            cep: string
            uf: string
            email: string
            fone: string
            celular: string
        }
    }
}

export interface IBlingInvoice {
    notafiscal: {
        id: string
        serie: string
        numero: string
        loja: string
        numeroPedidoLoja?: string
        tipo: string
        situacao: string
        contato: string
        cnpj: string
        vendedor: string
        dataEmissao: string
        valorNota: string
        chaveAcesso: string
        xml: string
        linkDanfe: string
        linkPdf: string

        transporte: {
            transportadora: string
            cnpj: string
            tipo_frete: string
        }

        cliente: {
            nome: string
            cnpj: string
            ie: string
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
    }
}
export interface IBlingPaymentMethod {
    formapagamento: {
        id: string
        descricao: string
        codigoFiscal: string
        padrao: string
        situacao: string
        fixa: string
    }
}

interface ICallParams {
    endpoint: string
    filters?: string[]
}

interface IGetBill {
    filtersBillToReceive: string[]
    filtersBillToPay: string[]
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

    async call<T>({ endpoint, filters }: ICallParams): Promise<T[]> {
        let list: T[] = []
        let page = 1
        let statusResponse = true

        let stringFilter = filters?.join('&') || ''

        do {
            const { data } = await this.api.get(`/${endpoint}/page=${page}/json/`, {
                params: {
                    filters: stringFilter,
                },
            })

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

    async getProducts(filters: string[]) {
        this.api.interceptors.request.use(
            function (config) {
                config.params = { ...config.params, estoque: 'S' }
                return config
            },
            function (error) {
                return Promise.reject(error)
            },
        )

        const products = await this.call<IBlingProduct>({
            endpoint: 'produtos',
            filters,
        })
        return products
    }

    async getOrders(filters: string[]) {
        const orders = await this.call<IBlingOrder>({ endpoint: 'pedidos', filters })
        return orders
    }

    async getBills({
        filtersBillToReceive,
        filtersBillToPay,
    }: IGetBill): Promise<[IBlingBillsToReceive[], IBlingBillsToPay[]]> {
        const billsToReceive = await this.call<IBlingBillsToReceive>({
            endpoint: 'contasreceber',
            filters: filtersBillToReceive,
        })
        const billsToPay = await this.call<IBlingBillsToPay>({
            endpoint: 'contaspagar',
            filters: filtersBillToPay,
        })
        return [billsToReceive, billsToPay]
    }

    async getInvoices(filters: string[]) {
        const invoices = await this.call<IBlingInvoice>({ endpoint: 'notasfiscais', filters })
        return invoices
    }

    async getPaymentMethods(filters: string[]) {
        const paymentMethods = await this.call<IBlingPaymentMethod>({
            endpoint: 'formaspagamento',
            filters,
        })
        return paymentMethods
    }

    async getPurchaseRequests(filters: string[]) {
        const purchaseRequests = await this.call<[IPurchaseRequest]>({
            endpoint: 'pedidoscompra',
            filters,
        })

        return purchaseRequests
    }
}
