type IOrderClient = {
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

type IOrderInvoice = {
    serie: string
    numero: string
    dataEmissao: string
    situacao: string
    valorNota: string
    chaveAcesso: string
}

type IVolumeShipment = {
    numero: string
    dataCriacao: string
}

type IVolumeDimension = {
    peso: string
    altura: string
    largura: string
    comprimento: string
    diametro: string
}

type IOrderShippmentAddress = {
    nome: string
    endereco: string
    numero: string
    complemento: string
    cidade: string
    bairro: string
    cep: string
    uf: string
}

type IOrderItem = {
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
}

type IOrderParcel = {
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
}

interface IOrderVolume {
    volume: {
        id: string
        idServico: string
        idOrigem: string
        servico: string
        codigoServico: string
        codigoRastreamento: string
        valorFretePrevisto: string
        remessa?: IVolumeShipment
        dataSaida: string
        prazoEntregaPrevisto: string
        valorDeclarado: string
        avisoRecebimento: boolean
        maoPropria: boolean
        dimensoes: IVolumeDimension
        urlRastreamento: string
    }
}

interface IOrderTranportation {
    transportadora?: string
    cnpj: string
    tipo_frete?: string
    qtde_volumes?: string
    enderecoEntrega: IOrderShippmentAddress
    volumes: IOrderVolume[]
    servico_correios: string
}

export default interface IBlingOrder {
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
        cliente: IOrderClient
        nota: IOrderInvoice
        transporte: IOrderTranportation
        itens: IOrderItem[]
        parcelas?: IOrderParcel[]
    }
}
