type IPurchaseRequestItem = {
    codigo: string
    codigofornecedor: string
    descricao: string
    un: string
    qtde: number
    valor: number
}

type IPurchaseRequestShippongCompany = {
    transportador: string
    freteporconta: string
    qtdvolumes: number
    frete: number
}

type IPurchaseRequestProvider = {
    id: string
    nome: string
    tipopessoa: string
    cpfcnpj: string
    ie: string
    rg: string
    contribuinte: string
    endereco: string
    endereconro: string
    complemento: string
    bairro: string
    cep: string
    cidade: string
    uf: string
    fone: string
    celular: string
    email: string
}

type IPurchaseRequestCategory = {
    id: number
    descricao: string
}

export default interface IPurchaseRequest {
    pedidocompra: {
        numeropedido: string
        datacompra: string
        dataprevista: string
        ordemcompra: string
        desconto: string
        observacoes: string
        observacaointerna: string
        fornecedor: IPurchaseRequestProvider
        itens: {
            item: IPurchaseRequestItem
        }[]
        transporte: IPurchaseRequestShippongCompany
        categoria: IPurchaseRequestCategory
    }
}
