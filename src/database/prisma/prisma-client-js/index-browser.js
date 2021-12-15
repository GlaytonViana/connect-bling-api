
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.6.0
 * Query Engine version: dc520b92b1ebb2d28dc3161f9f82e875bd35d727
 */
Prisma.prismaVersion = {
  client: "3.6.0",
  engine: "dc520b92b1ebb2d28dc3161f9f82e875bd35d727"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ProdutoScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  tipo: 'tipo',
  situacao: 'situacao',
  unidade: 'unidade',
  preco: 'preco',
  precoCusto: 'precoCusto',
  descricaoCurta: 'descricaoCurta',
  descricaoComplementar: 'descricaoComplementar',
  dataInclusao: 'dataInclusao',
  dataAlteracao: 'dataAlteracao',
  imageThumbnail: 'imageThumbnail',
  urlVideo: 'urlVideo',
  nomeFornecedor: 'nomeFornecedor',
  codigoFabricante: 'codigoFabricante',
  marca: 'marca',
  classFiscal: 'classFiscal',
  cest: 'cest',
  origem: 'origem',
  idGrupoProduto: 'idGrupoProduto',
  linkExterno: 'linkExterno',
  observacoes: 'observacoes',
  grupoProduto: 'grupoProduto',
  garantia: 'garantia',
  descricaoFornecedor: 'descricaoFornecedor',
  idFabricante: 'idFabricante',
  pesoLiq: 'pesoLiq',
  pesoBruto: 'pesoBruto',
  estoqueMinimo: 'estoqueMinimo',
  estoqueMaximo: 'estoqueMaximo',
  gtin: 'gtin',
  gtinEmbalagem: 'gtinEmbalagem',
  larguraProduto: 'larguraProduto',
  alturaProduto: 'alturaProduto',
  profundidadeProduto: 'profundidadeProduto',
  unidadeMedida: 'unidadeMedida',
  itensPorCaixa: 'itensPorCaixa',
  volumes: 'volumes',
  localizacao: 'localizacao',
  crossdocking: 'crossdocking',
  condicao: 'condicao',
  freteGratis: 'freteGratis',
  producao: 'producao',
  dataValidade: 'dataValidade',
  spedTipoItem: 'spedTipoItem',
  codigoPai: 'codigoPai',
  clonarDadosPai: 'clonarDadosPai'
});

exports.Prisma.CategoriasNoProdutoScalarFieldEnum = makeEnum({
  produto_id: 'produto_id',
  categoria_id: 'categoria_id'
});

exports.Prisma.CategoriaProdutoScalarFieldEnum = makeEnum({
  id: 'id',
  descricao: 'descricao'
});

exports.Prisma.PedidoScalarFieldEnum = makeEnum({
  numero: 'numero',
  desconto: 'desconto',
  observacoes: 'observacoes',
  observacaointerna: 'observacaointerna',
  data: 'data',
  dataSaida: 'dataSaida',
  numeroOrdemCompra: 'numeroOrdemCompra',
  vendedor: 'vendedor',
  valorfrete: 'valorfrete',
  outrasdespesas: 'outrasdespesas',
  totalprodutos: 'totalprodutos',
  totalvenda: 'totalvenda',
  situacao: 'situacao',
  loja: 'loja',
  numeroPedidoLoja: 'numeroPedidoLoja',
  tipoIntegracao: 'tipoIntegracao',
  cliente_id: 'cliente_id',
  transportadora_id: 'transportadora_id',
  enderecoEntrega_id: 'enderecoEntrega_id'
});

exports.Prisma.ClienteScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  tipoPessoa: 'tipoPessoa',
  cpfCnpj: 'cpfCnpj',
  incricaoEstadual: 'incricaoEstadual',
  rg: 'rg',
  contribuinte: 'contribuinte',
  fone: 'fone',
  celular: 'celular',
  email: 'email',
  endereco_id: 'endereco_id'
});

exports.Prisma.TransportadoraScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  cnpj: 'cnpj',
  tipo_frete: 'tipo_frete',
  servico_correios: 'servico_correios'
});

exports.Prisma.EnderecoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  endereco: 'endereco',
  numero: 'numero',
  complemento: 'complemento',
  bairro: 'bairro',
  cep: 'cep',
  cidade: 'cidade',
  uf: 'uf'
});

exports.Prisma.VolumeScalarFieldEnum = makeEnum({
  id: 'id',
  idServico: 'idServico',
  idOrigem: 'idOrigem',
  servico: 'servico',
  codigoServico: 'codigoServico',
  codigoRastreamento: 'codigoRastreamento',
  valorFretePrevisto: 'valorFretePrevisto',
  remessaNumero: 'remessaNumero',
  remessaDataCriacao: 'remessaDataCriacao',
  dataSaida: 'dataSaida',
  prazoEntregaPrevisto: 'prazoEntregaPrevisto',
  valorDeclarado: 'valorDeclarado',
  avisoRecebimento: 'avisoRecebimento',
  maoPropria: 'maoPropria',
  urlRastreamento: 'urlRastreamento',
  pedidoNumero: 'pedidoNumero'
});

exports.Prisma.DimensaoScalarFieldEnum = makeEnum({
  id: 'id',
  peso: 'peso',
  altura: 'altura',
  largura: 'largura',
  comprimento: 'comprimento',
  diametro: 'diametro',
  volume_id: 'volume_id'
});

exports.Prisma.ParcelaScalarFieldEnum = makeEnum({
  id: 'id',
  valor: 'valor',
  dataVencimento: 'dataVencimento',
  obs: 'obs',
  destino: 'destino',
  formaPagamento_id: 'formaPagamento_id',
  formaPagamentoDescricao: 'formaPagamentoDescricao',
  formaPagamentoCodigoFiscal: 'formaPagamentoCodigoFiscal',
  pedidoNumero: 'pedidoNumero'
});

exports.Prisma.NotaScalarFieldEnum = makeEnum({
  numero: 'numero',
  serie: 'serie',
  dataEmissao: 'dataEmissao',
  situacao: 'situacao',
  valorNota: 'valorNota',
  chaveAcesso: 'chaveAcesso',
  pedidoNumero: 'pedidoNumero'
});

exports.Prisma.ProdutoNoPedidoScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  descricao: 'descricao',
  quantidade: 'quantidade',
  valorunidade: 'valorunidade',
  precocusto: 'precocusto',
  descontoItem: 'descontoItem',
  un: 'un',
  pesoBruto: 'pesoBruto',
  largura: 'largura',
  altura: 'altura',
  profundidade: 'profundidade',
  unidadeMedida: 'unidadeMedida',
  descricaoDetalhada: 'descricaoDetalhada',
  pedidoNumero: 'pedidoNumero'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  Produto: 'Produto',
  CategoriasNoProduto: 'CategoriasNoProduto',
  CategoriaProduto: 'CategoriaProduto',
  Pedido: 'Pedido',
  Cliente: 'Cliente',
  Transportadora: 'Transportadora',
  Endereco: 'Endereco',
  Volume: 'Volume',
  Dimensao: 'Dimensao',
  Parcela: 'Parcela',
  Nota: 'Nota',
  ProdutoNoPedido: 'ProdutoNoPedido'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
