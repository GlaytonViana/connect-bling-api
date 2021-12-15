
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Produto
 * 
 */
export type Produto = {
  id: string
  codigo: string
  descricao: string | null
  tipo: string | null
  situacao: string | null
  unidade: string | null
  preco: Prisma.Decimal | null
  precoCusto: Prisma.Decimal | null
  descricaoCurta: string | null
  descricaoComplementar: string | null
  dataInclusao: Date | null
  dataAlteracao: Date | null
  imageThumbnail: string | null
  urlVideo: string | null
  nomeFornecedor: string | null
  codigoFabricante: string | null
  marca: string | null
  classFiscal: string | null
  cest: string | null
  origem: number | null
  idGrupoProduto: number | null
  linkExterno: string | null
  observacoes: string | null
  grupoProduto: string | null
  garantia: number | null
  descricaoFornecedor: string | null
  idFabricante: number | null
  pesoLiq: Prisma.Decimal | null
  pesoBruto: Prisma.Decimal | null
  estoqueMinimo: Prisma.Decimal | null
  estoqueMaximo: Prisma.Decimal | null
  gtin: string | null
  gtinEmbalagem: string | null
  larguraProduto: Prisma.Decimal | null
  alturaProduto: Prisma.Decimal | null
  profundidadeProduto: Prisma.Decimal | null
  unidadeMedida: string | null
  itensPorCaixa: number | null
  volumes: number | null
  localizacao: string | null
  crossdocking: number | null
  condicao: string | null
  freteGratis: string | null
  producao: string | null
  dataValidade: Date | null
  spedTipoItem: string | null
  codigoPai: string | null
  clonarDadosPai: string | null
}

/**
 * Model CategoriasNoProduto
 * 
 */
export type CategoriasNoProduto = {
  produto_id: string
  categoria_id: number
}

/**
 * Model CategoriaProduto
 * 
 */
export type CategoriaProduto = {
  id: number
  descricao: string
}

/**
 * Model Pedido
 * 
 */
export type Pedido = {
  numero: number
  desconto: number | null
  observacoes: string | null
  observacaointerna: string | null
  data: Date | null
  dataSaida: Date | null
  numeroOrdemCompra: string | null
  vendedor: string | null
  valorfrete: number | null
  outrasdespesas: number | null
  totalprodutos: number | null
  totalvenda: number | null
  situacao: string | null
  loja: string | null
  numeroPedidoLoja: string | null
  tipoIntegracao: string | null
  cliente_id: number
  transportadora_id: string | null
  enderecoEntrega_id: number | null
}

/**
 * Model Cliente
 * 
 */
export type Cliente = {
  id: number
  nome: string
  tipoPessoa: string | null
  cpfCnpj: string | null
  incricaoEstadual: string | null
  rg: string | null
  contribuinte: string | null
  fone: string | null
  celular: string | null
  email: string | null
  endereco_id: number
}

/**
 * Model Transportadora
 * 
 */
export type Transportadora = {
  cnpj: string
  nome: string | null
  tipo_frete: string | null
  servico_correios: string | null
}

/**
 * Model Endereco
 * 
 */
export type Endereco = {
  id: number
  nome: string | null
  endereco: string | null
  numero: string | null
  complemento: string | null
  bairro: string | null
  cep: string | null
  cidade: string | null
  uf: string | null
}

/**
 * Model Volume
 * 
 */
export type Volume = {
  id: number
  idServico: number
  idOrigem: string | null
  servico: string | null
  codigoServico: string | null
  codigoRastreamento: string | null
  valorFretePrevisto: number | null
  remessaNumero: string | null
  remessaDataCriacao: Date | null
  dataSaida: Date | null
  prazoEntregaPrevisto: string | null
  valorDeclarado: number | null
  avisoRecebimento: boolean | null
  maoPropria: boolean | null
  urlRastreamento: string | null
  pedidoNumero: number | null
}

/**
 * Model Dimensao
 * 
 */
export type Dimensao = {
  id: number
  peso: string | null
  altura: string | null
  largura: string | null
  comprimento: string | null
  diametro: string | null
  volume_id: number
}

/**
 * Model Parcela
 * 
 */
export type Parcela = {
  id: number
  valor: Prisma.Decimal
  dataVencimento: Date
  obs: string | null
  destino: string | null
  formaPagamento_id: string
  formaPagamentoDescricao: string | null
  formaPagamentoCodigoFiscal: string | null
  pedidoNumero: number | null
}

/**
 * Model Nota
 * 
 */
export type Nota = {
  numero: string
  serie: string | null
  dataEmissao: Date | null
  situacao: number | null
  valorNota: Prisma.Decimal | null
  chaveAcesso: string | null
  pedidoNumero: number
}

/**
 * Model ProdutoNoPedido
 * 
 */
export type ProdutoNoPedido = {
  id: number
  codigo: string | null
  descricao: string | null
  quantidade: Prisma.Decimal | null
  valorunidade: Prisma.Decimal | null
  precocusto: Prisma.Decimal | null
  descontoItem: Prisma.Decimal | null
  un: string | null
  pesoBruto: Prisma.Decimal | null
  largura: Prisma.Decimal | null
  altura: Prisma.Decimal | null
  profundidade: Prisma.Decimal | null
  unidadeMedida: string | null
  descricaoDetalhada: string | null
  pedidoNumero: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Produtos
 * const produtos = await prisma.produto.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Produtos
   * const produtos = await prisma.produto.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<GlobalReject>;

  /**
   * `prisma.categoriasNoProduto`: Exposes CRUD operations for the **CategoriasNoProduto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriasNoProdutos
    * const categoriasNoProdutos = await prisma.categoriasNoProduto.findMany()
    * ```
    */
  get categoriasNoProduto(): Prisma.CategoriasNoProdutoDelegate<GlobalReject>;

  /**
   * `prisma.categoriaProduto`: Exposes CRUD operations for the **CategoriaProduto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriaProdutos
    * const categoriaProdutos = await prisma.categoriaProduto.findMany()
    * ```
    */
  get categoriaProduto(): Prisma.CategoriaProdutoDelegate<GlobalReject>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<GlobalReject>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<GlobalReject>;

  /**
   * `prisma.transportadora`: Exposes CRUD operations for the **Transportadora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transportadoras
    * const transportadoras = await prisma.transportadora.findMany()
    * ```
    */
  get transportadora(): Prisma.TransportadoraDelegate<GlobalReject>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<GlobalReject>;

  /**
   * `prisma.volume`: Exposes CRUD operations for the **Volume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volumes
    * const volumes = await prisma.volume.findMany()
    * ```
    */
  get volume(): Prisma.VolumeDelegate<GlobalReject>;

  /**
   * `prisma.dimensao`: Exposes CRUD operations for the **Dimensao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dimensaos
    * const dimensaos = await prisma.dimensao.findMany()
    * ```
    */
  get dimensao(): Prisma.DimensaoDelegate<GlobalReject>;

  /**
   * `prisma.parcela`: Exposes CRUD operations for the **Parcela** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcelas
    * const parcelas = await prisma.parcela.findMany()
    * ```
    */
  get parcela(): Prisma.ParcelaDelegate<GlobalReject>;

  /**
   * `prisma.nota`: Exposes CRUD operations for the **Nota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notas
    * const notas = await prisma.nota.findMany()
    * ```
    */
  get nota(): Prisma.NotaDelegate<GlobalReject>;

  /**
   * `prisma.produtoNoPedido`: Exposes CRUD operations for the **ProdutoNoPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProdutoNoPedidos
    * const produtoNoPedidos = await prisma.produtoNoPedido.findMany()
    * ```
    */
  get produtoNoPedido(): Prisma.ProdutoNoPedidoDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.6.0
   * Query Engine version: dc520b92b1ebb2d28dc3161f9f82e875bd35d727
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProdutoCountOutputType
   */


  export type ProdutoCountOutputType = {
    categorias: number
  }

  export type ProdutoCountOutputTypeSelect = {
    categorias?: boolean
  }

  export type ProdutoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProdutoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProdutoCountOutputType
    : S extends undefined
    ? never
    : S extends ProdutoCountOutputTypeArgs
    ?'include' extends U
    ? ProdutoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ProdutoCountOutputType ?ProdutoCountOutputType [P]
  : 
     never
  } 
    : ProdutoCountOutputType
  : ProdutoCountOutputType




  // Custom InputTypes

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     * 
    **/
    select?: ProdutoCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoriaProdutoCountOutputType
   */


  export type CategoriaProdutoCountOutputType = {
    produtos: number
  }

  export type CategoriaProdutoCountOutputTypeSelect = {
    produtos?: boolean
  }

  export type CategoriaProdutoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CategoriaProdutoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CategoriaProdutoCountOutputType
    : S extends undefined
    ? never
    : S extends CategoriaProdutoCountOutputTypeArgs
    ?'include' extends U
    ? CategoriaProdutoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CategoriaProdutoCountOutputType ?CategoriaProdutoCountOutputType [P]
  : 
     never
  } 
    : CategoriaProdutoCountOutputType
  : CategoriaProdutoCountOutputType




  // Custom InputTypes

  /**
   * CategoriaProdutoCountOutputType without action
   */
  export type CategoriaProdutoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProdutoCountOutputType
     * 
    **/
    select?: CategoriaProdutoCountOutputTypeSelect | null
  }



  /**
   * Count Type PedidoCountOutputType
   */


  export type PedidoCountOutputType = {
    volume: number
    parcelas: number
    produtos: number
  }

  export type PedidoCountOutputTypeSelect = {
    volume?: boolean
    parcelas?: boolean
    produtos?: boolean
  }

  export type PedidoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PedidoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PedidoCountOutputType
    : S extends undefined
    ? never
    : S extends PedidoCountOutputTypeArgs
    ?'include' extends U
    ? PedidoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PedidoCountOutputType ?PedidoCountOutputType [P]
  : 
     never
  } 
    : PedidoCountOutputType
  : PedidoCountOutputType




  // Custom InputTypes

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     * 
    **/
    select?: PedidoCountOutputTypeSelect | null
  }



  /**
   * Count Type ClienteCountOutputType
   */


  export type ClienteCountOutputType = {
    pedido: number
  }

  export type ClienteCountOutputTypeSelect = {
    pedido?: boolean
  }

  export type ClienteCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ClienteCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ClienteCountOutputType
    : S extends undefined
    ? never
    : S extends ClienteCountOutputTypeArgs
    ?'include' extends U
    ? ClienteCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ClienteCountOutputType ?ClienteCountOutputType [P]
  : 
     never
  } 
    : ClienteCountOutputType
  : ClienteCountOutputType




  // Custom InputTypes

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     * 
    **/
    select?: ClienteCountOutputTypeSelect | null
  }



  /**
   * Count Type TransportadoraCountOutputType
   */


  export type TransportadoraCountOutputType = {
    pedido: number
  }

  export type TransportadoraCountOutputTypeSelect = {
    pedido?: boolean
  }

  export type TransportadoraCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TransportadoraCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TransportadoraCountOutputType
    : S extends undefined
    ? never
    : S extends TransportadoraCountOutputTypeArgs
    ?'include' extends U
    ? TransportadoraCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TransportadoraCountOutputType ?TransportadoraCountOutputType [P]
  : 
     never
  } 
    : TransportadoraCountOutputType
  : TransportadoraCountOutputType




  // Custom InputTypes

  /**
   * TransportadoraCountOutputType without action
   */
  export type TransportadoraCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TransportadoraCountOutputType
     * 
    **/
    select?: TransportadoraCountOutputTypeSelect | null
  }



  /**
   * Count Type EnderecoCountOutputType
   */


  export type EnderecoCountOutputType = {
    cliente: number
    pedido: number
  }

  export type EnderecoCountOutputTypeSelect = {
    cliente?: boolean
    pedido?: boolean
  }

  export type EnderecoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EnderecoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EnderecoCountOutputType
    : S extends undefined
    ? never
    : S extends EnderecoCountOutputTypeArgs
    ?'include' extends U
    ? EnderecoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof EnderecoCountOutputType ?EnderecoCountOutputType [P]
  : 
     never
  } 
    : EnderecoCountOutputType
  : EnderecoCountOutputType




  // Custom InputTypes

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EnderecoCountOutputType
     * 
    **/
    select?: EnderecoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Produto
   */


  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    preco: Decimal | null
    precoCusto: Decimal | null
    origem: number | null
    idGrupoProduto: number | null
    garantia: number | null
    idFabricante: number | null
    pesoLiq: Decimal | null
    pesoBruto: Decimal | null
    estoqueMinimo: Decimal | null
    estoqueMaximo: Decimal | null
    larguraProduto: Decimal | null
    alturaProduto: Decimal | null
    profundidadeProduto: Decimal | null
    itensPorCaixa: number | null
    volumes: number | null
    crossdocking: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    preco: Decimal | null
    precoCusto: Decimal | null
    origem: number | null
    idGrupoProduto: number | null
    garantia: number | null
    idFabricante: number | null
    pesoLiq: Decimal | null
    pesoBruto: Decimal | null
    estoqueMinimo: Decimal | null
    estoqueMaximo: Decimal | null
    larguraProduto: Decimal | null
    alturaProduto: Decimal | null
    profundidadeProduto: Decimal | null
    itensPorCaixa: number | null
    volumes: number | null
    crossdocking: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    descricao: string | null
    tipo: string | null
    situacao: string | null
    unidade: string | null
    preco: Decimal | null
    precoCusto: Decimal | null
    descricaoCurta: string | null
    descricaoComplementar: string | null
    dataInclusao: Date | null
    dataAlteracao: Date | null
    imageThumbnail: string | null
    urlVideo: string | null
    nomeFornecedor: string | null
    codigoFabricante: string | null
    marca: string | null
    classFiscal: string | null
    cest: string | null
    origem: number | null
    idGrupoProduto: number | null
    linkExterno: string | null
    observacoes: string | null
    grupoProduto: string | null
    garantia: number | null
    descricaoFornecedor: string | null
    idFabricante: number | null
    pesoLiq: Decimal | null
    pesoBruto: Decimal | null
    estoqueMinimo: Decimal | null
    estoqueMaximo: Decimal | null
    gtin: string | null
    gtinEmbalagem: string | null
    larguraProduto: Decimal | null
    alturaProduto: Decimal | null
    profundidadeProduto: Decimal | null
    unidadeMedida: string | null
    itensPorCaixa: number | null
    volumes: number | null
    localizacao: string | null
    crossdocking: number | null
    condicao: string | null
    freteGratis: string | null
    producao: string | null
    dataValidade: Date | null
    spedTipoItem: string | null
    codigoPai: string | null
    clonarDadosPai: string | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    descricao: string | null
    tipo: string | null
    situacao: string | null
    unidade: string | null
    preco: Decimal | null
    precoCusto: Decimal | null
    descricaoCurta: string | null
    descricaoComplementar: string | null
    dataInclusao: Date | null
    dataAlteracao: Date | null
    imageThumbnail: string | null
    urlVideo: string | null
    nomeFornecedor: string | null
    codigoFabricante: string | null
    marca: string | null
    classFiscal: string | null
    cest: string | null
    origem: number | null
    idGrupoProduto: number | null
    linkExterno: string | null
    observacoes: string | null
    grupoProduto: string | null
    garantia: number | null
    descricaoFornecedor: string | null
    idFabricante: number | null
    pesoLiq: Decimal | null
    pesoBruto: Decimal | null
    estoqueMinimo: Decimal | null
    estoqueMaximo: Decimal | null
    gtin: string | null
    gtinEmbalagem: string | null
    larguraProduto: Decimal | null
    alturaProduto: Decimal | null
    profundidadeProduto: Decimal | null
    unidadeMedida: string | null
    itensPorCaixa: number | null
    volumes: number | null
    localizacao: string | null
    crossdocking: number | null
    condicao: string | null
    freteGratis: string | null
    producao: string | null
    dataValidade: Date | null
    spedTipoItem: string | null
    codigoPai: string | null
    clonarDadosPai: string | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    codigo: number
    descricao: number
    tipo: number
    situacao: number
    unidade: number
    preco: number
    precoCusto: number
    descricaoCurta: number
    descricaoComplementar: number
    dataInclusao: number
    dataAlteracao: number
    imageThumbnail: number
    urlVideo: number
    nomeFornecedor: number
    codigoFabricante: number
    marca: number
    classFiscal: number
    cest: number
    origem: number
    idGrupoProduto: number
    linkExterno: number
    observacoes: number
    grupoProduto: number
    garantia: number
    descricaoFornecedor: number
    idFabricante: number
    pesoLiq: number
    pesoBruto: number
    estoqueMinimo: number
    estoqueMaximo: number
    gtin: number
    gtinEmbalagem: number
    larguraProduto: number
    alturaProduto: number
    profundidadeProduto: number
    unidadeMedida: number
    itensPorCaixa: number
    volumes: number
    localizacao: number
    crossdocking: number
    condicao: number
    freteGratis: number
    producao: number
    dataValidade: number
    spedTipoItem: number
    codigoPai: number
    clonarDadosPai: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    preco?: true
    precoCusto?: true
    origem?: true
    idGrupoProduto?: true
    garantia?: true
    idFabricante?: true
    pesoLiq?: true
    pesoBruto?: true
    estoqueMinimo?: true
    estoqueMaximo?: true
    larguraProduto?: true
    alturaProduto?: true
    profundidadeProduto?: true
    itensPorCaixa?: true
    volumes?: true
    crossdocking?: true
  }

  export type ProdutoSumAggregateInputType = {
    preco?: true
    precoCusto?: true
    origem?: true
    idGrupoProduto?: true
    garantia?: true
    idFabricante?: true
    pesoLiq?: true
    pesoBruto?: true
    estoqueMinimo?: true
    estoqueMaximo?: true
    larguraProduto?: true
    alturaProduto?: true
    profundidadeProduto?: true
    itensPorCaixa?: true
    volumes?: true
    crossdocking?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    tipo?: true
    situacao?: true
    unidade?: true
    preco?: true
    precoCusto?: true
    descricaoCurta?: true
    descricaoComplementar?: true
    dataInclusao?: true
    dataAlteracao?: true
    imageThumbnail?: true
    urlVideo?: true
    nomeFornecedor?: true
    codigoFabricante?: true
    marca?: true
    classFiscal?: true
    cest?: true
    origem?: true
    idGrupoProduto?: true
    linkExterno?: true
    observacoes?: true
    grupoProduto?: true
    garantia?: true
    descricaoFornecedor?: true
    idFabricante?: true
    pesoLiq?: true
    pesoBruto?: true
    estoqueMinimo?: true
    estoqueMaximo?: true
    gtin?: true
    gtinEmbalagem?: true
    larguraProduto?: true
    alturaProduto?: true
    profundidadeProduto?: true
    unidadeMedida?: true
    itensPorCaixa?: true
    volumes?: true
    localizacao?: true
    crossdocking?: true
    condicao?: true
    freteGratis?: true
    producao?: true
    dataValidade?: true
    spedTipoItem?: true
    codigoPai?: true
    clonarDadosPai?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    tipo?: true
    situacao?: true
    unidade?: true
    preco?: true
    precoCusto?: true
    descricaoCurta?: true
    descricaoComplementar?: true
    dataInclusao?: true
    dataAlteracao?: true
    imageThumbnail?: true
    urlVideo?: true
    nomeFornecedor?: true
    codigoFabricante?: true
    marca?: true
    classFiscal?: true
    cest?: true
    origem?: true
    idGrupoProduto?: true
    linkExterno?: true
    observacoes?: true
    grupoProduto?: true
    garantia?: true
    descricaoFornecedor?: true
    idFabricante?: true
    pesoLiq?: true
    pesoBruto?: true
    estoqueMinimo?: true
    estoqueMaximo?: true
    gtin?: true
    gtinEmbalagem?: true
    larguraProduto?: true
    alturaProduto?: true
    profundidadeProduto?: true
    unidadeMedida?: true
    itensPorCaixa?: true
    volumes?: true
    localizacao?: true
    crossdocking?: true
    condicao?: true
    freteGratis?: true
    producao?: true
    dataValidade?: true
    spedTipoItem?: true
    codigoPai?: true
    clonarDadosPai?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    tipo?: true
    situacao?: true
    unidade?: true
    preco?: true
    precoCusto?: true
    descricaoCurta?: true
    descricaoComplementar?: true
    dataInclusao?: true
    dataAlteracao?: true
    imageThumbnail?: true
    urlVideo?: true
    nomeFornecedor?: true
    codigoFabricante?: true
    marca?: true
    classFiscal?: true
    cest?: true
    origem?: true
    idGrupoProduto?: true
    linkExterno?: true
    observacoes?: true
    grupoProduto?: true
    garantia?: true
    descricaoFornecedor?: true
    idFabricante?: true
    pesoLiq?: true
    pesoBruto?: true
    estoqueMinimo?: true
    estoqueMaximo?: true
    gtin?: true
    gtinEmbalagem?: true
    larguraProduto?: true
    alturaProduto?: true
    profundidadeProduto?: true
    unidadeMedida?: true
    itensPorCaixa?: true
    volumes?: true
    localizacao?: true
    crossdocking?: true
    condicao?: true
    freteGratis?: true
    producao?: true
    dataValidade?: true
    spedTipoItem?: true
    codigoPai?: true
    clonarDadosPai?: true
    _all?: true
  }

  export type ProdutoAggregateArgs = {
    /**
     * Filter which Produto to aggregate.
     * 
    **/
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs = {
    where?: ProdutoWhereInput
    orderBy?: Enumerable<ProdutoOrderByWithAggregationInput>
    by: Array<ProdutoScalarFieldEnum>
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }


  export type ProdutoGroupByOutputType = {
    id: string
    codigo: string
    descricao: string | null
    tipo: string | null
    situacao: string | null
    unidade: string | null
    preco: Decimal | null
    precoCusto: Decimal | null
    descricaoCurta: string | null
    descricaoComplementar: string | null
    dataInclusao: Date | null
    dataAlteracao: Date | null
    imageThumbnail: string | null
    urlVideo: string | null
    nomeFornecedor: string | null
    codigoFabricante: string | null
    marca: string | null
    classFiscal: string | null
    cest: string | null
    origem: number | null
    idGrupoProduto: number | null
    linkExterno: string | null
    observacoes: string | null
    grupoProduto: string | null
    garantia: number | null
    descricaoFornecedor: string | null
    idFabricante: number | null
    pesoLiq: Decimal | null
    pesoBruto: Decimal | null
    estoqueMinimo: Decimal | null
    estoqueMaximo: Decimal | null
    gtin: string | null
    gtinEmbalagem: string | null
    larguraProduto: Decimal | null
    alturaProduto: Decimal | null
    profundidadeProduto: Decimal | null
    unidadeMedida: string | null
    itensPorCaixa: number | null
    volumes: number | null
    localizacao: string | null
    crossdocking: number | null
    condicao: string | null
    freteGratis: string | null
    producao: string | null
    dataValidade: Date | null
    spedTipoItem: string | null
    codigoPai: string | null
    clonarDadosPai: string | null
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Promise<
    Array<
      PickArray<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect = {
    id?: boolean
    codigo?: boolean
    descricao?: boolean
    tipo?: boolean
    situacao?: boolean
    unidade?: boolean
    preco?: boolean
    precoCusto?: boolean
    descricaoCurta?: boolean
    descricaoComplementar?: boolean
    dataInclusao?: boolean
    dataAlteracao?: boolean
    imageThumbnail?: boolean
    urlVideo?: boolean
    nomeFornecedor?: boolean
    codigoFabricante?: boolean
    marca?: boolean
    classFiscal?: boolean
    cest?: boolean
    origem?: boolean
    idGrupoProduto?: boolean
    linkExterno?: boolean
    observacoes?: boolean
    grupoProduto?: boolean
    garantia?: boolean
    descricaoFornecedor?: boolean
    idFabricante?: boolean
    pesoLiq?: boolean
    pesoBruto?: boolean
    estoqueMinimo?: boolean
    estoqueMaximo?: boolean
    gtin?: boolean
    gtinEmbalagem?: boolean
    larguraProduto?: boolean
    alturaProduto?: boolean
    profundidadeProduto?: boolean
    unidadeMedida?: boolean
    itensPorCaixa?: boolean
    volumes?: boolean
    localizacao?: boolean
    crossdocking?: boolean
    condicao?: boolean
    freteGratis?: boolean
    producao?: boolean
    dataValidade?: boolean
    spedTipoItem?: boolean
    codigoPai?: boolean
    clonarDadosPai?: boolean
    categorias?: boolean | CategoriasNoProdutoFindManyArgs
    _count?: boolean | ProdutoCountOutputTypeArgs
  }

  export type ProdutoInclude = {
    categorias?: boolean | CategoriasNoProdutoFindManyArgs
    _count?: boolean | ProdutoCountOutputTypeArgs
  }

  export type ProdutoGetPayload<
    S extends boolean | null | undefined | ProdutoArgs,
    U = keyof S
      > = S extends true
        ? Produto
    : S extends undefined
    ? never
    : S extends ProdutoArgs | ProdutoFindManyArgs
    ?'include' extends U
    ? Produto  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'categorias'
        ? Array < CategoriasNoProdutoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ProdutoCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Produto ?Produto [P]
  : 
          P extends 'categorias'
        ? Array < CategoriasNoProdutoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ProdutoCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Produto
  : Produto


  type ProdutoCountArgs = Merge<
    Omit<ProdutoFindManyArgs, 'select' | 'include'> & {
      select?: ProdutoCountAggregateInputType | true
    }
  >

  export interface ProdutoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProdutoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProdutoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Produto'> extends True ? CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>> : CheckSelect<T, Prisma__ProdutoClient<Produto | null >, Prisma__ProdutoClient<ProdutoGetPayload<T> | null >>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProdutoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProdutoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Produto'> extends True ? CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>> : CheckSelect<T, Prisma__ProdutoClient<Produto | null >, Prisma__ProdutoClient<ProdutoGetPayload<T> | null >>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProdutoFindManyArgs>(
      args?: SelectSubset<T, ProdutoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Produto>>, PrismaPromise<Array<ProdutoGetPayload<T>>>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
    **/
    create<T extends ProdutoCreateArgs>(
      args: SelectSubset<T, ProdutoCreateArgs>
    ): CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>>

    /**
     * Create many Produtos.
     *     @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     *     @example
     *     // Create many Produtos
     *     const produto = await prisma.produto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProdutoCreateManyArgs>(
      args?: SelectSubset<T, ProdutoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
    **/
    delete<T extends ProdutoDeleteArgs>(
      args: SelectSubset<T, ProdutoDeleteArgs>
    ): CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProdutoUpdateArgs>(
      args: SelectSubset<T, ProdutoUpdateArgs>
    ): CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProdutoDeleteManyArgs>(
      args?: SelectSubset<T, ProdutoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProdutoUpdateManyArgs>(
      args: SelectSubset<T, ProdutoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
    **/
    upsert<T extends ProdutoUpsertArgs>(
      args: SelectSubset<T, ProdutoUpsertArgs>
    ): CheckSelect<T, Prisma__ProdutoClient<Produto>, Prisma__ProdutoClient<ProdutoGetPayload<T>>>

    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProdutoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    categorias<T extends CategoriasNoProdutoFindManyArgs = {}>(args?: Subset<T, CategoriasNoProdutoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CategoriasNoProduto>>, PrismaPromise<Array<CategoriasNoProdutoGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * Throw an Error if a Produto can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Produto to fetch.
     * 
    **/
    where: ProdutoWhereUniqueInput
  }


  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * Throw an Error if a Produto can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Produto to fetch.
     * 
    **/
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     * 
    **/
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     * 
    **/
    distinct?: Enumerable<ProdutoScalarFieldEnum>
  }


  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * Filter, which Produtos to fetch.
     * 
    **/
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     * 
    **/
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProdutoScalarFieldEnum>
  }


  /**
   * Produto create
   */
  export type ProdutoCreateArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * The data needed to create a Produto.
     * 
    **/
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }


  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs = {
    data: Enumerable<ProdutoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Produto update
   */
  export type ProdutoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * The data needed to update a Produto.
     * 
    **/
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     * 
    **/
    where: ProdutoWhereUniqueInput
  }


  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs = {
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    where?: ProdutoWhereInput
  }


  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * The filter to search for the Produto to update in case it exists.
     * 
    **/
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     * 
    **/
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }


  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
    /**
     * Filter which Produto to delete.
     * 
    **/
    where: ProdutoWhereUniqueInput
  }


  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs = {
    where?: ProdutoWhereInput
  }


  /**
   * Produto without action
   */
  export type ProdutoArgs = {
    /**
     * Select specific fields to fetch from the Produto
     * 
    **/
    select?: ProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoInclude | null
  }



  /**
   * Model CategoriasNoProduto
   */


  export type AggregateCategoriasNoProduto = {
    _count: CategoriasNoProdutoCountAggregateOutputType | null
    _avg: CategoriasNoProdutoAvgAggregateOutputType | null
    _sum: CategoriasNoProdutoSumAggregateOutputType | null
    _min: CategoriasNoProdutoMinAggregateOutputType | null
    _max: CategoriasNoProdutoMaxAggregateOutputType | null
  }

  export type CategoriasNoProdutoAvgAggregateOutputType = {
    categoria_id: number | null
  }

  export type CategoriasNoProdutoSumAggregateOutputType = {
    categoria_id: number | null
  }

  export type CategoriasNoProdutoMinAggregateOutputType = {
    produto_id: string | null
    categoria_id: number | null
  }

  export type CategoriasNoProdutoMaxAggregateOutputType = {
    produto_id: string | null
    categoria_id: number | null
  }

  export type CategoriasNoProdutoCountAggregateOutputType = {
    produto_id: number
    categoria_id: number
    _all: number
  }


  export type CategoriasNoProdutoAvgAggregateInputType = {
    categoria_id?: true
  }

  export type CategoriasNoProdutoSumAggregateInputType = {
    categoria_id?: true
  }

  export type CategoriasNoProdutoMinAggregateInputType = {
    produto_id?: true
    categoria_id?: true
  }

  export type CategoriasNoProdutoMaxAggregateInputType = {
    produto_id?: true
    categoria_id?: true
  }

  export type CategoriasNoProdutoCountAggregateInputType = {
    produto_id?: true
    categoria_id?: true
    _all?: true
  }

  export type CategoriasNoProdutoAggregateArgs = {
    /**
     * Filter which CategoriasNoProduto to aggregate.
     * 
    **/
    where?: CategoriasNoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriasNoProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriasNoProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoriasNoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriasNoProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriasNoProdutos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriasNoProdutos
    **/
    _count?: true | CategoriasNoProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasNoProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasNoProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasNoProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasNoProdutoMaxAggregateInputType
  }

  export type GetCategoriasNoProdutoAggregateType<T extends CategoriasNoProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriasNoProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriasNoProduto[P]>
      : GetScalarType<T[P], AggregateCategoriasNoProduto[P]>
  }




  export type CategoriasNoProdutoGroupByArgs = {
    where?: CategoriasNoProdutoWhereInput
    orderBy?: Enumerable<CategoriasNoProdutoOrderByWithAggregationInput>
    by: Array<CategoriasNoProdutoScalarFieldEnum>
    having?: CategoriasNoProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasNoProdutoCountAggregateInputType | true
    _avg?: CategoriasNoProdutoAvgAggregateInputType
    _sum?: CategoriasNoProdutoSumAggregateInputType
    _min?: CategoriasNoProdutoMinAggregateInputType
    _max?: CategoriasNoProdutoMaxAggregateInputType
  }


  export type CategoriasNoProdutoGroupByOutputType = {
    produto_id: string
    categoria_id: number
    _count: CategoriasNoProdutoCountAggregateOutputType | null
    _avg: CategoriasNoProdutoAvgAggregateOutputType | null
    _sum: CategoriasNoProdutoSumAggregateOutputType | null
    _min: CategoriasNoProdutoMinAggregateOutputType | null
    _max: CategoriasNoProdutoMaxAggregateOutputType | null
  }

  type GetCategoriasNoProdutoGroupByPayload<T extends CategoriasNoProdutoGroupByArgs> = Promise<
    Array<
      PickArray<CategoriasNoProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasNoProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasNoProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasNoProdutoGroupByOutputType[P]>
        }
      >
    >


  export type CategoriasNoProdutoSelect = {
    produto_id?: boolean
    produto?: boolean | ProdutoArgs
    categoria_id?: boolean
    categoria?: boolean | CategoriaProdutoArgs
  }

  export type CategoriasNoProdutoInclude = {
    produto?: boolean | ProdutoArgs
    categoria?: boolean | CategoriaProdutoArgs
  }

  export type CategoriasNoProdutoGetPayload<
    S extends boolean | null | undefined | CategoriasNoProdutoArgs,
    U = keyof S
      > = S extends true
        ? CategoriasNoProduto
    : S extends undefined
    ? never
    : S extends CategoriasNoProdutoArgs | CategoriasNoProdutoFindManyArgs
    ?'include' extends U
    ? CategoriasNoProduto  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'produto'
        ? ProdutoGetPayload<S['include'][P]> :
        P extends 'categoria'
        ? CategoriaProdutoGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CategoriasNoProduto ?CategoriasNoProduto [P]
  : 
          P extends 'produto'
        ? ProdutoGetPayload<S['select'][P]> :
        P extends 'categoria'
        ? CategoriaProdutoGetPayload<S['select'][P]> : never
  } 
    : CategoriasNoProduto
  : CategoriasNoProduto


  type CategoriasNoProdutoCountArgs = Merge<
    Omit<CategoriasNoProdutoFindManyArgs, 'select' | 'include'> & {
      select?: CategoriasNoProdutoCountAggregateInputType | true
    }
  >

  export interface CategoriasNoProdutoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CategoriasNoProduto that matches the filter.
     * @param {CategoriasNoProdutoFindUniqueArgs} args - Arguments to find a CategoriasNoProduto
     * @example
     * // Get one CategoriasNoProduto
     * const categoriasNoProduto = await prisma.categoriasNoProduto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriasNoProdutoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoriasNoProdutoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CategoriasNoProduto'> extends True ? CheckSelect<T, Prisma__CategoriasNoProdutoClient<CategoriasNoProduto>, Prisma__CategoriasNoProdutoClient<CategoriasNoProdutoGetPayload<T>>> : CheckSelect<T, Prisma__CategoriasNoProdutoClient<CategoriasNoProduto | null >, Prisma__CategoriasNoProdutoClient<CategoriasNoProdutoGetPayload<T> | null >>

    /**
     * Find the first CategoriasNoProduto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasNoProdutoFindFirstArgs} args - Arguments to find a CategoriasNoProduto
     * @example
     * // Get one CategoriasNoProduto
     * const categoriasNoProduto = await prisma.categoriasNoProduto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriasNoProdutoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoriasNoProdutoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CategoriasNoProduto'> extends True ? CheckSelect<T, Prisma__CategoriasNoProdutoClient<CategoriasNoProduto>, Prisma__CategoriasNoProdutoClient<CategoriasNoProdutoGetPayload<T>>> : CheckSelect<T, Prisma__CategoriasNoProdutoClient<CategoriasNoProduto | null >, Prisma__CategoriasNoProdutoClient<CategoriasNoProdutoGetPayload<T> | null >>

    /**
     * Find zero or more CategoriasNoProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasNoProdutoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriasNoProdutos
     * const categoriasNoProdutos = await prisma.categoriasNoProduto.findMany()
     * 
     * // Get first 10 CategoriasNoProdutos
     * const categoriasNoProdutos = await prisma.categoriasNoProduto.findMany({ take: 10 })
     * 
     * // Only select the `produto_id`
     * const categoriasNoProdutoWithProduto_idOnly = await prisma.categoriasNoProduto.findMany({ select: { produto_id: true } })
     * 
    **/
    findMany<T extends CategoriasNoProdutoFindManyArgs>(
      args?: SelectSubset<T, CategoriasNoProdutoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CategoriasNoProduto>>, PrismaPromise<Array<CategoriasNoProdutoGetPayload<T>>>>

    /**
     * Create a CategoriasNoProduto.
     * @param {CategoriasNoProdutoCreateArgs} args - Arguments to create a CategoriasNoProduto.
     * @example
     * // Create one CategoriasNoProduto
     * const CategoriasNoProduto = await prisma.categoriasNoProduto.create({
     *   data: {
     *     // ... data to create a CategoriasNoProduto
     *   }
     * })
     * 
    **/
    create<T extends CategoriasNoProdutoCreateArgs>(
      args: SelectSubset<T, CategoriasNoProdutoCreateArgs>
    ): CheckSelect<T, Prisma__CategoriasNoProdutoClient<CategoriasNoProduto>, Prisma__CategoriasNoProdutoClient<CategoriasNoProdutoGetPayload<T>>>

    /**
     * Create many CategoriasNoProdutos.
     *     @param {CategoriasNoProdutoCreateManyArgs} args - Arguments to create many CategoriasNoProdutos.
     *     @example
     *     // Create many CategoriasNoProdutos
     *     const categoriasNoProduto = await prisma.categoriasNoProduto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriasNoProdutoCreateManyArgs>(
      args?: SelectSubset<T, CategoriasNoProdutoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriasNoProduto.
     * @param {CategoriasNoProdutoDeleteArgs} args - Arguments to delete one CategoriasNoProduto.
     * @example
     * // Delete one CategoriasNoProduto
     * const CategoriasNoProduto = await prisma.categoriasNoProduto.delete({
     *   where: {
     *     // ... filter to delete one CategoriasNoProduto
     *   }
     * })
     * 
    **/
    delete<T extends CategoriasNoProdutoDeleteArgs>(
      args: SelectSubset<T, CategoriasNoProdutoDeleteArgs>
    ): CheckSelect<T, Prisma__CategoriasNoProdutoClient<CategoriasNoProduto>, Prisma__CategoriasNoProdutoClient<CategoriasNoProdutoGetPayload<T>>>

    /**
     * Update one CategoriasNoProduto.
     * @param {CategoriasNoProdutoUpdateArgs} args - Arguments to update one CategoriasNoProduto.
     * @example
     * // Update one CategoriasNoProduto
     * const categoriasNoProduto = await prisma.categoriasNoProduto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriasNoProdutoUpdateArgs>(
      args: SelectSubset<T, CategoriasNoProdutoUpdateArgs>
    ): CheckSelect<T, Prisma__CategoriasNoProdutoClient<CategoriasNoProduto>, Prisma__CategoriasNoProdutoClient<CategoriasNoProdutoGetPayload<T>>>

    /**
     * Delete zero or more CategoriasNoProdutos.
     * @param {CategoriasNoProdutoDeleteManyArgs} args - Arguments to filter CategoriasNoProdutos to delete.
     * @example
     * // Delete a few CategoriasNoProdutos
     * const { count } = await prisma.categoriasNoProduto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriasNoProdutoDeleteManyArgs>(
      args?: SelectSubset<T, CategoriasNoProdutoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriasNoProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasNoProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriasNoProdutos
     * const categoriasNoProduto = await prisma.categoriasNoProduto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriasNoProdutoUpdateManyArgs>(
      args: SelectSubset<T, CategoriasNoProdutoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriasNoProduto.
     * @param {CategoriasNoProdutoUpsertArgs} args - Arguments to update or create a CategoriasNoProduto.
     * @example
     * // Update or create a CategoriasNoProduto
     * const categoriasNoProduto = await prisma.categoriasNoProduto.upsert({
     *   create: {
     *     // ... data to create a CategoriasNoProduto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriasNoProduto we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriasNoProdutoUpsertArgs>(
      args: SelectSubset<T, CategoriasNoProdutoUpsertArgs>
    ): CheckSelect<T, Prisma__CategoriasNoProdutoClient<CategoriasNoProduto>, Prisma__CategoriasNoProdutoClient<CategoriasNoProdutoGetPayload<T>>>

    /**
     * Count the number of CategoriasNoProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasNoProdutoCountArgs} args - Arguments to filter CategoriasNoProdutos to count.
     * @example
     * // Count the number of CategoriasNoProdutos
     * const count = await prisma.categoriasNoProduto.count({
     *   where: {
     *     // ... the filter for the CategoriasNoProdutos we want to count
     *   }
     * })
    **/
    count<T extends CategoriasNoProdutoCountArgs>(
      args?: Subset<T, CategoriasNoProdutoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasNoProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriasNoProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasNoProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriasNoProdutoAggregateArgs>(args: Subset<T, CategoriasNoProdutoAggregateArgs>): PrismaPromise<GetCategoriasNoProdutoAggregateType<T>>

    /**
     * Group by CategoriasNoProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasNoProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriasNoProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriasNoProdutoGroupByArgs['orderBy'] }
        : { orderBy?: CategoriasNoProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriasNoProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasNoProdutoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriasNoProduto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoriasNoProdutoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    produto<T extends ProdutoArgs = {}>(args?: Subset<T, ProdutoArgs>): CheckSelect<T, Prisma__ProdutoClient<Produto | null >, Prisma__ProdutoClient<ProdutoGetPayload<T> | null >>;

    categoria<T extends CategoriaProdutoArgs = {}>(args?: Subset<T, CategoriaProdutoArgs>): CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto | null >, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CategoriasNoProduto findUnique
   */
  export type CategoriasNoProdutoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the CategoriasNoProduto
     * 
    **/
    select?: CategoriasNoProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriasNoProdutoInclude | null
    /**
     * Throw an Error if a CategoriasNoProduto can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CategoriasNoProduto to fetch.
     * 
    **/
    where: CategoriasNoProdutoWhereUniqueInput
  }


  /**
   * CategoriasNoProduto findFirst
   */
  export type CategoriasNoProdutoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the CategoriasNoProduto
     * 
    **/
    select?: CategoriasNoProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriasNoProdutoInclude | null
    /**
     * Throw an Error if a CategoriasNoProduto can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CategoriasNoProduto to fetch.
     * 
    **/
    where?: CategoriasNoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriasNoProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriasNoProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriasNoProdutos.
     * 
    **/
    cursor?: CategoriasNoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriasNoProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriasNoProdutos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriasNoProdutos.
     * 
    **/
    distinct?: Enumerable<CategoriasNoProdutoScalarFieldEnum>
  }


  /**
   * CategoriasNoProduto findMany
   */
  export type CategoriasNoProdutoFindManyArgs = {
    /**
     * Select specific fields to fetch from the CategoriasNoProduto
     * 
    **/
    select?: CategoriasNoProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriasNoProdutoInclude | null
    /**
     * Filter, which CategoriasNoProdutos to fetch.
     * 
    **/
    where?: CategoriasNoProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriasNoProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriasNoProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriasNoProdutos.
     * 
    **/
    cursor?: CategoriasNoProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriasNoProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriasNoProdutos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoriasNoProdutoScalarFieldEnum>
  }


  /**
   * CategoriasNoProduto create
   */
  export type CategoriasNoProdutoCreateArgs = {
    /**
     * Select specific fields to fetch from the CategoriasNoProduto
     * 
    **/
    select?: CategoriasNoProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriasNoProdutoInclude | null
    /**
     * The data needed to create a CategoriasNoProduto.
     * 
    **/
    data: XOR<CategoriasNoProdutoCreateInput, CategoriasNoProdutoUncheckedCreateInput>
  }


  /**
   * CategoriasNoProduto createMany
   */
  export type CategoriasNoProdutoCreateManyArgs = {
    data: Enumerable<CategoriasNoProdutoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CategoriasNoProduto update
   */
  export type CategoriasNoProdutoUpdateArgs = {
    /**
     * Select specific fields to fetch from the CategoriasNoProduto
     * 
    **/
    select?: CategoriasNoProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriasNoProdutoInclude | null
    /**
     * The data needed to update a CategoriasNoProduto.
     * 
    **/
    data: XOR<CategoriasNoProdutoUpdateInput, CategoriasNoProdutoUncheckedUpdateInput>
    /**
     * Choose, which CategoriasNoProduto to update.
     * 
    **/
    where: CategoriasNoProdutoWhereUniqueInput
  }


  /**
   * CategoriasNoProduto updateMany
   */
  export type CategoriasNoProdutoUpdateManyArgs = {
    data: XOR<CategoriasNoProdutoUpdateManyMutationInput, CategoriasNoProdutoUncheckedUpdateManyInput>
    where?: CategoriasNoProdutoWhereInput
  }


  /**
   * CategoriasNoProduto upsert
   */
  export type CategoriasNoProdutoUpsertArgs = {
    /**
     * Select specific fields to fetch from the CategoriasNoProduto
     * 
    **/
    select?: CategoriasNoProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriasNoProdutoInclude | null
    /**
     * The filter to search for the CategoriasNoProduto to update in case it exists.
     * 
    **/
    where: CategoriasNoProdutoWhereUniqueInput
    /**
     * In case the CategoriasNoProduto found by the `where` argument doesn't exist, create a new CategoriasNoProduto with this data.
     * 
    **/
    create: XOR<CategoriasNoProdutoCreateInput, CategoriasNoProdutoUncheckedCreateInput>
    /**
     * In case the CategoriasNoProduto was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoriasNoProdutoUpdateInput, CategoriasNoProdutoUncheckedUpdateInput>
  }


  /**
   * CategoriasNoProduto delete
   */
  export type CategoriasNoProdutoDeleteArgs = {
    /**
     * Select specific fields to fetch from the CategoriasNoProduto
     * 
    **/
    select?: CategoriasNoProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriasNoProdutoInclude | null
    /**
     * Filter which CategoriasNoProduto to delete.
     * 
    **/
    where: CategoriasNoProdutoWhereUniqueInput
  }


  /**
   * CategoriasNoProduto deleteMany
   */
  export type CategoriasNoProdutoDeleteManyArgs = {
    where?: CategoriasNoProdutoWhereInput
  }


  /**
   * CategoriasNoProduto without action
   */
  export type CategoriasNoProdutoArgs = {
    /**
     * Select specific fields to fetch from the CategoriasNoProduto
     * 
    **/
    select?: CategoriasNoProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriasNoProdutoInclude | null
  }



  /**
   * Model CategoriaProduto
   */


  export type AggregateCategoriaProduto = {
    _count: CategoriaProdutoCountAggregateOutputType | null
    _avg: CategoriaProdutoAvgAggregateOutputType | null
    _sum: CategoriaProdutoSumAggregateOutputType | null
    _min: CategoriaProdutoMinAggregateOutputType | null
    _max: CategoriaProdutoMaxAggregateOutputType | null
  }

  export type CategoriaProdutoAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaProdutoSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaProdutoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type CategoriaProdutoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type CategoriaProdutoCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type CategoriaProdutoAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaProdutoSumAggregateInputType = {
    id?: true
  }

  export type CategoriaProdutoMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type CategoriaProdutoMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type CategoriaProdutoCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaProdutoAggregateArgs = {
    /**
     * Filter which CategoriaProduto to aggregate.
     * 
    **/
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriaProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriaProdutos
    **/
    _count?: true | CategoriaProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaProdutoMaxAggregateInputType
  }

  export type GetCategoriaProdutoAggregateType<T extends CategoriaProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriaProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriaProduto[P]>
      : GetScalarType<T[P], AggregateCategoriaProduto[P]>
  }




  export type CategoriaProdutoGroupByArgs = {
    where?: CategoriaProdutoWhereInput
    orderBy?: Enumerable<CategoriaProdutoOrderByWithAggregationInput>
    by: Array<CategoriaProdutoScalarFieldEnum>
    having?: CategoriaProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaProdutoCountAggregateInputType | true
    _avg?: CategoriaProdutoAvgAggregateInputType
    _sum?: CategoriaProdutoSumAggregateInputType
    _min?: CategoriaProdutoMinAggregateInputType
    _max?: CategoriaProdutoMaxAggregateInputType
  }


  export type CategoriaProdutoGroupByOutputType = {
    id: number
    descricao: string
    _count: CategoriaProdutoCountAggregateOutputType | null
    _avg: CategoriaProdutoAvgAggregateOutputType | null
    _sum: CategoriaProdutoSumAggregateOutputType | null
    _min: CategoriaProdutoMinAggregateOutputType | null
    _max: CategoriaProdutoMaxAggregateOutputType | null
  }

  type GetCategoriaProdutoGroupByPayload<T extends CategoriaProdutoGroupByArgs> = Promise<
    Array<
      PickArray<CategoriaProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaProdutoGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaProdutoSelect = {
    id?: boolean
    descricao?: boolean
    produtos?: boolean | CategoriasNoProdutoFindManyArgs
    _count?: boolean | CategoriaProdutoCountOutputTypeArgs
  }

  export type CategoriaProdutoInclude = {
    produtos?: boolean | CategoriasNoProdutoFindManyArgs
    _count?: boolean | CategoriaProdutoCountOutputTypeArgs
  }

  export type CategoriaProdutoGetPayload<
    S extends boolean | null | undefined | CategoriaProdutoArgs,
    U = keyof S
      > = S extends true
        ? CategoriaProduto
    : S extends undefined
    ? never
    : S extends CategoriaProdutoArgs | CategoriaProdutoFindManyArgs
    ?'include' extends U
    ? CategoriaProduto  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'produtos'
        ? Array < CategoriasNoProdutoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CategoriaProdutoCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CategoriaProduto ?CategoriaProduto [P]
  : 
          P extends 'produtos'
        ? Array < CategoriasNoProdutoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CategoriaProdutoCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : CategoriaProduto
  : CategoriaProduto


  type CategoriaProdutoCountArgs = Merge<
    Omit<CategoriaProdutoFindManyArgs, 'select' | 'include'> & {
      select?: CategoriaProdutoCountAggregateInputType | true
    }
  >

  export interface CategoriaProdutoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CategoriaProduto that matches the filter.
     * @param {CategoriaProdutoFindUniqueArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriaProdutoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoriaProdutoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CategoriaProduto'> extends True ? CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto>, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T>>> : CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto | null >, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T> | null >>

    /**
     * Find the first CategoriaProduto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoFindFirstArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriaProdutoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoriaProdutoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CategoriaProduto'> extends True ? CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto>, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T>>> : CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto | null >, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T> | null >>

    /**
     * Find zero or more CategoriaProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriaProdutos
     * const categoriaProdutos = await prisma.categoriaProduto.findMany()
     * 
     * // Get first 10 CategoriaProdutos
     * const categoriaProdutos = await prisma.categoriaProduto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaProdutoWithIdOnly = await prisma.categoriaProduto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoriaProdutoFindManyArgs>(
      args?: SelectSubset<T, CategoriaProdutoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CategoriaProduto>>, PrismaPromise<Array<CategoriaProdutoGetPayload<T>>>>

    /**
     * Create a CategoriaProduto.
     * @param {CategoriaProdutoCreateArgs} args - Arguments to create a CategoriaProduto.
     * @example
     * // Create one CategoriaProduto
     * const CategoriaProduto = await prisma.categoriaProduto.create({
     *   data: {
     *     // ... data to create a CategoriaProduto
     *   }
     * })
     * 
    **/
    create<T extends CategoriaProdutoCreateArgs>(
      args: SelectSubset<T, CategoriaProdutoCreateArgs>
    ): CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto>, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T>>>

    /**
     * Create many CategoriaProdutos.
     *     @param {CategoriaProdutoCreateManyArgs} args - Arguments to create many CategoriaProdutos.
     *     @example
     *     // Create many CategoriaProdutos
     *     const categoriaProduto = await prisma.categoriaProduto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriaProdutoCreateManyArgs>(
      args?: SelectSubset<T, CategoriaProdutoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriaProduto.
     * @param {CategoriaProdutoDeleteArgs} args - Arguments to delete one CategoriaProduto.
     * @example
     * // Delete one CategoriaProduto
     * const CategoriaProduto = await prisma.categoriaProduto.delete({
     *   where: {
     *     // ... filter to delete one CategoriaProduto
     *   }
     * })
     * 
    **/
    delete<T extends CategoriaProdutoDeleteArgs>(
      args: SelectSubset<T, CategoriaProdutoDeleteArgs>
    ): CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto>, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T>>>

    /**
     * Update one CategoriaProduto.
     * @param {CategoriaProdutoUpdateArgs} args - Arguments to update one CategoriaProduto.
     * @example
     * // Update one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriaProdutoUpdateArgs>(
      args: SelectSubset<T, CategoriaProdutoUpdateArgs>
    ): CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto>, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T>>>

    /**
     * Delete zero or more CategoriaProdutos.
     * @param {CategoriaProdutoDeleteManyArgs} args - Arguments to filter CategoriaProdutos to delete.
     * @example
     * // Delete a few CategoriaProdutos
     * const { count } = await prisma.categoriaProduto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriaProdutoDeleteManyArgs>(
      args?: SelectSubset<T, CategoriaProdutoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriaProdutoUpdateManyArgs>(
      args: SelectSubset<T, CategoriaProdutoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriaProduto.
     * @param {CategoriaProdutoUpsertArgs} args - Arguments to update or create a CategoriaProduto.
     * @example
     * // Update or create a CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.upsert({
     *   create: {
     *     // ... data to create a CategoriaProduto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriaProduto we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriaProdutoUpsertArgs>(
      args: SelectSubset<T, CategoriaProdutoUpsertArgs>
    ): CheckSelect<T, Prisma__CategoriaProdutoClient<CategoriaProduto>, Prisma__CategoriaProdutoClient<CategoriaProdutoGetPayload<T>>>

    /**
     * Count the number of CategoriaProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoCountArgs} args - Arguments to filter CategoriaProdutos to count.
     * @example
     * // Count the number of CategoriaProdutos
     * const count = await prisma.categoriaProduto.count({
     *   where: {
     *     // ... the filter for the CategoriaProdutos we want to count
     *   }
     * })
    **/
    count<T extends CategoriaProdutoCountArgs>(
      args?: Subset<T, CategoriaProdutoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriaProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaProdutoAggregateArgs>(args: Subset<T, CategoriaProdutoAggregateArgs>): PrismaPromise<GetCategoriaProdutoAggregateType<T>>

    /**
     * Group by CategoriaProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaProdutoGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaProdutoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriaProduto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoriaProdutoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    produtos<T extends CategoriasNoProdutoFindManyArgs = {}>(args?: Subset<T, CategoriasNoProdutoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<CategoriasNoProduto>>, PrismaPromise<Array<CategoriasNoProdutoGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CategoriaProduto findUnique
   */
  export type CategoriaProdutoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     * 
    **/
    select?: CategoriaProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriaProdutoInclude | null
    /**
     * Throw an Error if a CategoriaProduto can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CategoriaProduto to fetch.
     * 
    **/
    where: CategoriaProdutoWhereUniqueInput
  }


  /**
   * CategoriaProduto findFirst
   */
  export type CategoriaProdutoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     * 
    **/
    select?: CategoriaProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriaProdutoInclude | null
    /**
     * Throw an Error if a CategoriaProduto can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CategoriaProduto to fetch.
     * 
    **/
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriaProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaProdutos.
     * 
    **/
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaProdutos.
     * 
    **/
    distinct?: Enumerable<CategoriaProdutoScalarFieldEnum>
  }


  /**
   * CategoriaProduto findMany
   */
  export type CategoriaProdutoFindManyArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     * 
    **/
    select?: CategoriaProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriaProdutoInclude | null
    /**
     * Filter, which CategoriaProdutos to fetch.
     * 
    **/
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoriaProdutoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriaProdutos.
     * 
    **/
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoriaProdutoScalarFieldEnum>
  }


  /**
   * CategoriaProduto create
   */
  export type CategoriaProdutoCreateArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     * 
    **/
    select?: CategoriaProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriaProdutoInclude | null
    /**
     * The data needed to create a CategoriaProduto.
     * 
    **/
    data: XOR<CategoriaProdutoCreateInput, CategoriaProdutoUncheckedCreateInput>
  }


  /**
   * CategoriaProduto createMany
   */
  export type CategoriaProdutoCreateManyArgs = {
    data: Enumerable<CategoriaProdutoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CategoriaProduto update
   */
  export type CategoriaProdutoUpdateArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     * 
    **/
    select?: CategoriaProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriaProdutoInclude | null
    /**
     * The data needed to update a CategoriaProduto.
     * 
    **/
    data: XOR<CategoriaProdutoUpdateInput, CategoriaProdutoUncheckedUpdateInput>
    /**
     * Choose, which CategoriaProduto to update.
     * 
    **/
    where: CategoriaProdutoWhereUniqueInput
  }


  /**
   * CategoriaProduto updateMany
   */
  export type CategoriaProdutoUpdateManyArgs = {
    data: XOR<CategoriaProdutoUpdateManyMutationInput, CategoriaProdutoUncheckedUpdateManyInput>
    where?: CategoriaProdutoWhereInput
  }


  /**
   * CategoriaProduto upsert
   */
  export type CategoriaProdutoUpsertArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     * 
    **/
    select?: CategoriaProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriaProdutoInclude | null
    /**
     * The filter to search for the CategoriaProduto to update in case it exists.
     * 
    **/
    where: CategoriaProdutoWhereUniqueInput
    /**
     * In case the CategoriaProduto found by the `where` argument doesn't exist, create a new CategoriaProduto with this data.
     * 
    **/
    create: XOR<CategoriaProdutoCreateInput, CategoriaProdutoUncheckedCreateInput>
    /**
     * In case the CategoriaProduto was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoriaProdutoUpdateInput, CategoriaProdutoUncheckedUpdateInput>
  }


  /**
   * CategoriaProduto delete
   */
  export type CategoriaProdutoDeleteArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     * 
    **/
    select?: CategoriaProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriaProdutoInclude | null
    /**
     * Filter which CategoriaProduto to delete.
     * 
    **/
    where: CategoriaProdutoWhereUniqueInput
  }


  /**
   * CategoriaProduto deleteMany
   */
  export type CategoriaProdutoDeleteManyArgs = {
    where?: CategoriaProdutoWhereInput
  }


  /**
   * CategoriaProduto without action
   */
  export type CategoriaProdutoArgs = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     * 
    **/
    select?: CategoriaProdutoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoriaProdutoInclude | null
  }



  /**
   * Model Pedido
   */


  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    numero: number | null
    desconto: number | null
    valorfrete: number | null
    outrasdespesas: number | null
    totalprodutos: number | null
    totalvenda: number | null
    cliente_id: number | null
    enderecoEntrega_id: number | null
  }

  export type PedidoSumAggregateOutputType = {
    numero: number | null
    desconto: number | null
    valorfrete: number | null
    outrasdespesas: number | null
    totalprodutos: number | null
    totalvenda: number | null
    cliente_id: number | null
    enderecoEntrega_id: number | null
  }

  export type PedidoMinAggregateOutputType = {
    numero: number | null
    desconto: number | null
    observacoes: string | null
    observacaointerna: string | null
    data: Date | null
    dataSaida: Date | null
    numeroOrdemCompra: string | null
    vendedor: string | null
    valorfrete: number | null
    outrasdespesas: number | null
    totalprodutos: number | null
    totalvenda: number | null
    situacao: string | null
    loja: string | null
    numeroPedidoLoja: string | null
    tipoIntegracao: string | null
    cliente_id: number | null
    transportadora_id: string | null
    enderecoEntrega_id: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    numero: number | null
    desconto: number | null
    observacoes: string | null
    observacaointerna: string | null
    data: Date | null
    dataSaida: Date | null
    numeroOrdemCompra: string | null
    vendedor: string | null
    valorfrete: number | null
    outrasdespesas: number | null
    totalprodutos: number | null
    totalvenda: number | null
    situacao: string | null
    loja: string | null
    numeroPedidoLoja: string | null
    tipoIntegracao: string | null
    cliente_id: number | null
    transportadora_id: string | null
    enderecoEntrega_id: number | null
  }

  export type PedidoCountAggregateOutputType = {
    numero: number
    desconto: number
    observacoes: number
    observacaointerna: number
    data: number
    dataSaida: number
    numeroOrdemCompra: number
    vendedor: number
    valorfrete: number
    outrasdespesas: number
    totalprodutos: number
    totalvenda: number
    situacao: number
    loja: number
    numeroPedidoLoja: number
    tipoIntegracao: number
    cliente_id: number
    transportadora_id: number
    enderecoEntrega_id: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    numero?: true
    desconto?: true
    valorfrete?: true
    outrasdespesas?: true
    totalprodutos?: true
    totalvenda?: true
    cliente_id?: true
    enderecoEntrega_id?: true
  }

  export type PedidoSumAggregateInputType = {
    numero?: true
    desconto?: true
    valorfrete?: true
    outrasdespesas?: true
    totalprodutos?: true
    totalvenda?: true
    cliente_id?: true
    enderecoEntrega_id?: true
  }

  export type PedidoMinAggregateInputType = {
    numero?: true
    desconto?: true
    observacoes?: true
    observacaointerna?: true
    data?: true
    dataSaida?: true
    numeroOrdemCompra?: true
    vendedor?: true
    valorfrete?: true
    outrasdespesas?: true
    totalprodutos?: true
    totalvenda?: true
    situacao?: true
    loja?: true
    numeroPedidoLoja?: true
    tipoIntegracao?: true
    cliente_id?: true
    transportadora_id?: true
    enderecoEntrega_id?: true
  }

  export type PedidoMaxAggregateInputType = {
    numero?: true
    desconto?: true
    observacoes?: true
    observacaointerna?: true
    data?: true
    dataSaida?: true
    numeroOrdemCompra?: true
    vendedor?: true
    valorfrete?: true
    outrasdespesas?: true
    totalprodutos?: true
    totalvenda?: true
    situacao?: true
    loja?: true
    numeroPedidoLoja?: true
    tipoIntegracao?: true
    cliente_id?: true
    transportadora_id?: true
    enderecoEntrega_id?: true
  }

  export type PedidoCountAggregateInputType = {
    numero?: true
    desconto?: true
    observacoes?: true
    observacaointerna?: true
    data?: true
    dataSaida?: true
    numeroOrdemCompra?: true
    vendedor?: true
    valorfrete?: true
    outrasdespesas?: true
    totalprodutos?: true
    totalvenda?: true
    situacao?: true
    loja?: true
    numeroPedidoLoja?: true
    tipoIntegracao?: true
    cliente_id?: true
    transportadora_id?: true
    enderecoEntrega_id?: true
    _all?: true
  }

  export type PedidoAggregateArgs = {
    /**
     * Filter which Pedido to aggregate.
     * 
    **/
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     * 
    **/
    orderBy?: Enumerable<PedidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs = {
    where?: PedidoWhereInput
    orderBy?: Enumerable<PedidoOrderByWithAggregationInput>
    by: Array<PedidoScalarFieldEnum>
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }


  export type PedidoGroupByOutputType = {
    numero: number
    desconto: number | null
    observacoes: string | null
    observacaointerna: string | null
    data: Date | null
    dataSaida: Date | null
    numeroOrdemCompra: string | null
    vendedor: string | null
    valorfrete: number | null
    outrasdespesas: number | null
    totalprodutos: number | null
    totalvenda: number | null
    situacao: string | null
    loja: string | null
    numeroPedidoLoja: string | null
    tipoIntegracao: string | null
    cliente_id: number
    transportadora_id: string | null
    enderecoEntrega_id: number | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Promise<
    Array<
      PickArray<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect = {
    numero?: boolean
    desconto?: boolean
    observacoes?: boolean
    observacaointerna?: boolean
    data?: boolean
    dataSaida?: boolean
    numeroOrdemCompra?: boolean
    vendedor?: boolean
    valorfrete?: boolean
    outrasdespesas?: boolean
    totalprodutos?: boolean
    totalvenda?: boolean
    situacao?: boolean
    loja?: boolean
    numeroPedidoLoja?: boolean
    tipoIntegracao?: boolean
    cliente_id?: boolean
    cliente?: boolean | ClienteArgs
    transportadora_id?: boolean
    transportadora?: boolean | TransportadoraArgs
    enderecoEntrega_id?: boolean
    enderecoEntrega?: boolean | EnderecoArgs
    volume?: boolean | VolumeFindManyArgs
    parcelas?: boolean | ParcelaFindManyArgs
    nota?: boolean | NotaArgs
    produtos?: boolean | ProdutoNoPedidoFindManyArgs
    _count?: boolean | PedidoCountOutputTypeArgs
  }

  export type PedidoInclude = {
    cliente?: boolean | ClienteArgs
    transportadora?: boolean | TransportadoraArgs
    enderecoEntrega?: boolean | EnderecoArgs
    volume?: boolean | VolumeFindManyArgs
    parcelas?: boolean | ParcelaFindManyArgs
    nota?: boolean | NotaArgs
    produtos?: boolean | ProdutoNoPedidoFindManyArgs
    _count?: boolean | PedidoCountOutputTypeArgs
  }

  export type PedidoGetPayload<
    S extends boolean | null | undefined | PedidoArgs,
    U = keyof S
      > = S extends true
        ? Pedido
    : S extends undefined
    ? never
    : S extends PedidoArgs | PedidoFindManyArgs
    ?'include' extends U
    ? Pedido  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'cliente'
        ? ClienteGetPayload<S['include'][P]> :
        P extends 'transportadora'
        ? TransportadoraGetPayload<S['include'][P]> | null :
        P extends 'enderecoEntrega'
        ? EnderecoGetPayload<S['include'][P]> | null :
        P extends 'volume'
        ? Array < VolumeGetPayload<S['include'][P]>>  :
        P extends 'parcelas'
        ? Array < ParcelaGetPayload<S['include'][P]>>  :
        P extends 'nota'
        ? NotaGetPayload<S['include'][P]> | null :
        P extends 'produtos'
        ? Array < ProdutoNoPedidoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PedidoCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Pedido ?Pedido [P]
  : 
          P extends 'cliente'
        ? ClienteGetPayload<S['select'][P]> :
        P extends 'transportadora'
        ? TransportadoraGetPayload<S['select'][P]> | null :
        P extends 'enderecoEntrega'
        ? EnderecoGetPayload<S['select'][P]> | null :
        P extends 'volume'
        ? Array < VolumeGetPayload<S['select'][P]>>  :
        P extends 'parcelas'
        ? Array < ParcelaGetPayload<S['select'][P]>>  :
        P extends 'nota'
        ? NotaGetPayload<S['select'][P]> | null :
        P extends 'produtos'
        ? Array < ProdutoNoPedidoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PedidoCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Pedido
  : Pedido


  type PedidoCountArgs = Merge<
    Omit<PedidoFindManyArgs, 'select' | 'include'> & {
      select?: PedidoCountAggregateInputType | true
    }
  >

  export interface PedidoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PedidoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PedidoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pedido'> extends True ? CheckSelect<T, Prisma__PedidoClient<Pedido>, Prisma__PedidoClient<PedidoGetPayload<T>>> : CheckSelect<T, Prisma__PedidoClient<Pedido | null >, Prisma__PedidoClient<PedidoGetPayload<T> | null >>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PedidoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PedidoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pedido'> extends True ? CheckSelect<T, Prisma__PedidoClient<Pedido>, Prisma__PedidoClient<PedidoGetPayload<T>>> : CheckSelect<T, Prisma__PedidoClient<Pedido | null >, Prisma__PedidoClient<PedidoGetPayload<T> | null >>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `numero`
     * const pedidoWithNumeroOnly = await prisma.pedido.findMany({ select: { numero: true } })
     * 
    **/
    findMany<T extends PedidoFindManyArgs>(
      args?: SelectSubset<T, PedidoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Pedido>>, PrismaPromise<Array<PedidoGetPayload<T>>>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
    **/
    create<T extends PedidoCreateArgs>(
      args: SelectSubset<T, PedidoCreateArgs>
    ): CheckSelect<T, Prisma__PedidoClient<Pedido>, Prisma__PedidoClient<PedidoGetPayload<T>>>

    /**
     * Create many Pedidos.
     *     @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     *     @example
     *     // Create many Pedidos
     *     const pedido = await prisma.pedido.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PedidoCreateManyArgs>(
      args?: SelectSubset<T, PedidoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
    **/
    delete<T extends PedidoDeleteArgs>(
      args: SelectSubset<T, PedidoDeleteArgs>
    ): CheckSelect<T, Prisma__PedidoClient<Pedido>, Prisma__PedidoClient<PedidoGetPayload<T>>>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PedidoUpdateArgs>(
      args: SelectSubset<T, PedidoUpdateArgs>
    ): CheckSelect<T, Prisma__PedidoClient<Pedido>, Prisma__PedidoClient<PedidoGetPayload<T>>>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PedidoDeleteManyArgs>(
      args?: SelectSubset<T, PedidoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PedidoUpdateManyArgs>(
      args: SelectSubset<T, PedidoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
    **/
    upsert<T extends PedidoUpsertArgs>(
      args: SelectSubset<T, PedidoUpsertArgs>
    ): CheckSelect<T, Prisma__PedidoClient<Pedido>, Prisma__PedidoClient<PedidoGetPayload<T>>>

    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PedidoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cliente<T extends ClienteArgs = {}>(args?: Subset<T, ClienteArgs>): CheckSelect<T, Prisma__ClienteClient<Cliente | null >, Prisma__ClienteClient<ClienteGetPayload<T> | null >>;

    transportadora<T extends TransportadoraArgs = {}>(args?: Subset<T, TransportadoraArgs>): CheckSelect<T, Prisma__TransportadoraClient<Transportadora | null >, Prisma__TransportadoraClient<TransportadoraGetPayload<T> | null >>;

    enderecoEntrega<T extends EnderecoArgs = {}>(args?: Subset<T, EnderecoArgs>): CheckSelect<T, Prisma__EnderecoClient<Endereco | null >, Prisma__EnderecoClient<EnderecoGetPayload<T> | null >>;

    volume<T extends VolumeFindManyArgs = {}>(args?: Subset<T, VolumeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Volume>>, PrismaPromise<Array<VolumeGetPayload<T>>>>;

    parcelas<T extends ParcelaFindManyArgs = {}>(args?: Subset<T, ParcelaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Parcela>>, PrismaPromise<Array<ParcelaGetPayload<T>>>>;

    nota<T extends NotaArgs = {}>(args?: Subset<T, NotaArgs>): CheckSelect<T, Prisma__NotaClient<Nota | null >, Prisma__NotaClient<NotaGetPayload<T> | null >>;

    produtos<T extends ProdutoNoPedidoFindManyArgs = {}>(args?: Subset<T, ProdutoNoPedidoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ProdutoNoPedido>>, PrismaPromise<Array<ProdutoNoPedidoGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Pedido
     * 
    **/
    select?: PedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PedidoInclude | null
    /**
     * Throw an Error if a Pedido can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Pedido to fetch.
     * 
    **/
    where: PedidoWhereUniqueInput
  }


  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Pedido
     * 
    **/
    select?: PedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PedidoInclude | null
    /**
     * Throw an Error if a Pedido can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Pedido to fetch.
     * 
    **/
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     * 
    **/
    orderBy?: Enumerable<PedidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     * 
    **/
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     * 
    **/
    distinct?: Enumerable<PedidoScalarFieldEnum>
  }


  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Pedido
     * 
    **/
    select?: PedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PedidoInclude | null
    /**
     * Filter, which Pedidos to fetch.
     * 
    **/
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     * 
    **/
    orderBy?: Enumerable<PedidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     * 
    **/
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PedidoScalarFieldEnum>
  }


  /**
   * Pedido create
   */
  export type PedidoCreateArgs = {
    /**
     * Select specific fields to fetch from the Pedido
     * 
    **/
    select?: PedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PedidoInclude | null
    /**
     * The data needed to create a Pedido.
     * 
    **/
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }


  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs = {
    data: Enumerable<PedidoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Pedido update
   */
  export type PedidoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Pedido
     * 
    **/
    select?: PedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PedidoInclude | null
    /**
     * The data needed to update a Pedido.
     * 
    **/
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     * 
    **/
    where: PedidoWhereUniqueInput
  }


  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs = {
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    where?: PedidoWhereInput
  }


  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Pedido
     * 
    **/
    select?: PedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PedidoInclude | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     * 
    **/
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     * 
    **/
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }


  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Pedido
     * 
    **/
    select?: PedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PedidoInclude | null
    /**
     * Filter which Pedido to delete.
     * 
    **/
    where: PedidoWhereUniqueInput
  }


  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs = {
    where?: PedidoWhereInput
  }


  /**
   * Pedido without action
   */
  export type PedidoArgs = {
    /**
     * Select specific fields to fetch from the Pedido
     * 
    **/
    select?: PedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PedidoInclude | null
  }



  /**
   * Model Cliente
   */


  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
    endereco_id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
    endereco_id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipoPessoa: string | null
    cpfCnpj: string | null
    incricaoEstadual: string | null
    rg: string | null
    contribuinte: string | null
    fone: string | null
    celular: string | null
    email: string | null
    endereco_id: number | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipoPessoa: string | null
    cpfCnpj: string | null
    incricaoEstadual: string | null
    rg: string | null
    contribuinte: string | null
    fone: string | null
    celular: string | null
    email: string | null
    endereco_id: number | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    tipoPessoa: number
    cpfCnpj: number
    incricaoEstadual: number
    rg: number
    contribuinte: number
    fone: number
    celular: number
    email: number
    endereco_id: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
    endereco_id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
    endereco_id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    tipoPessoa?: true
    cpfCnpj?: true
    incricaoEstadual?: true
    rg?: true
    contribuinte?: true
    fone?: true
    celular?: true
    email?: true
    endereco_id?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    tipoPessoa?: true
    cpfCnpj?: true
    incricaoEstadual?: true
    rg?: true
    contribuinte?: true
    fone?: true
    celular?: true
    email?: true
    endereco_id?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    tipoPessoa?: true
    cpfCnpj?: true
    incricaoEstadual?: true
    rg?: true
    contribuinte?: true
    fone?: true
    celular?: true
    email?: true
    endereco_id?: true
    _all?: true
  }

  export type ClienteAggregateArgs = {
    /**
     * Filter which Cliente to aggregate.
     * 
    **/
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClienteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs = {
    where?: ClienteWhereInput
    orderBy?: Enumerable<ClienteOrderByWithAggregationInput>
    by: Array<ClienteScalarFieldEnum>
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }


  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    tipoPessoa: string | null
    cpfCnpj: string | null
    incricaoEstadual: string | null
    rg: string | null
    contribuinte: string | null
    fone: string | null
    celular: string | null
    email: string | null
    endereco_id: number
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Promise<
    Array<
      PickArray<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect = {
    id?: boolean
    nome?: boolean
    tipoPessoa?: boolean
    cpfCnpj?: boolean
    incricaoEstadual?: boolean
    rg?: boolean
    contribuinte?: boolean
    fone?: boolean
    celular?: boolean
    email?: boolean
    endereco_id?: boolean
    endereco?: boolean | EnderecoArgs
    pedido?: boolean | PedidoFindManyArgs
    _count?: boolean | ClienteCountOutputTypeArgs
  }

  export type ClienteInclude = {
    endereco?: boolean | EnderecoArgs
    pedido?: boolean | PedidoFindManyArgs
    _count?: boolean | ClienteCountOutputTypeArgs
  }

  export type ClienteGetPayload<
    S extends boolean | null | undefined | ClienteArgs,
    U = keyof S
      > = S extends true
        ? Cliente
    : S extends undefined
    ? never
    : S extends ClienteArgs | ClienteFindManyArgs
    ?'include' extends U
    ? Cliente  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'endereco'
        ? EnderecoGetPayload<S['include'][P]> | null :
        P extends 'pedido'
        ? Array < PedidoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ClienteCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Cliente ?Cliente [P]
  : 
          P extends 'endereco'
        ? EnderecoGetPayload<S['select'][P]> | null :
        P extends 'pedido'
        ? Array < PedidoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ClienteCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Cliente
  : Cliente


  type ClienteCountArgs = Merge<
    Omit<ClienteFindManyArgs, 'select' | 'include'> & {
      select?: ClienteCountAggregateInputType | true
    }
  >

  export interface ClienteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClienteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClienteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cliente'> extends True ? CheckSelect<T, Prisma__ClienteClient<Cliente>, Prisma__ClienteClient<ClienteGetPayload<T>>> : CheckSelect<T, Prisma__ClienteClient<Cliente | null >, Prisma__ClienteClient<ClienteGetPayload<T> | null >>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClienteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClienteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cliente'> extends True ? CheckSelect<T, Prisma__ClienteClient<Cliente>, Prisma__ClienteClient<ClienteGetPayload<T>>> : CheckSelect<T, Prisma__ClienteClient<Cliente | null >, Prisma__ClienteClient<ClienteGetPayload<T> | null >>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClienteFindManyArgs>(
      args?: SelectSubset<T, ClienteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Cliente>>, PrismaPromise<Array<ClienteGetPayload<T>>>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
    **/
    create<T extends ClienteCreateArgs>(
      args: SelectSubset<T, ClienteCreateArgs>
    ): CheckSelect<T, Prisma__ClienteClient<Cliente>, Prisma__ClienteClient<ClienteGetPayload<T>>>

    /**
     * Create many Clientes.
     *     @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     *     @example
     *     // Create many Clientes
     *     const cliente = await prisma.cliente.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClienteCreateManyArgs>(
      args?: SelectSubset<T, ClienteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
    **/
    delete<T extends ClienteDeleteArgs>(
      args: SelectSubset<T, ClienteDeleteArgs>
    ): CheckSelect<T, Prisma__ClienteClient<Cliente>, Prisma__ClienteClient<ClienteGetPayload<T>>>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClienteUpdateArgs>(
      args: SelectSubset<T, ClienteUpdateArgs>
    ): CheckSelect<T, Prisma__ClienteClient<Cliente>, Prisma__ClienteClient<ClienteGetPayload<T>>>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClienteDeleteManyArgs>(
      args?: SelectSubset<T, ClienteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClienteUpdateManyArgs>(
      args: SelectSubset<T, ClienteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
    **/
    upsert<T extends ClienteUpsertArgs>(
      args: SelectSubset<T, ClienteUpsertArgs>
    ): CheckSelect<T, Prisma__ClienteClient<Cliente>, Prisma__ClienteClient<ClienteGetPayload<T>>>

    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClienteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    endereco<T extends EnderecoArgs = {}>(args?: Subset<T, EnderecoArgs>): CheckSelect<T, Prisma__EnderecoClient<Endereco | null >, Prisma__EnderecoClient<EnderecoGetPayload<T> | null >>;

    pedido<T extends PedidoFindManyArgs = {}>(args?: Subset<T, PedidoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Pedido>>, PrismaPromise<Array<PedidoGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Cliente
     * 
    **/
    select?: ClienteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClienteInclude | null
    /**
     * Throw an Error if a Cliente can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Cliente to fetch.
     * 
    **/
    where: ClienteWhereUniqueInput
  }


  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Cliente
     * 
    **/
    select?: ClienteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClienteInclude | null
    /**
     * Throw an Error if a Cliente can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Cliente to fetch.
     * 
    **/
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClienteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     * 
    **/
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     * 
    **/
    distinct?: Enumerable<ClienteScalarFieldEnum>
  }


  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cliente
     * 
    **/
    select?: ClienteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClienteInclude | null
    /**
     * Filter, which Clientes to fetch.
     * 
    **/
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClienteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     * 
    **/
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClienteScalarFieldEnum>
  }


  /**
   * Cliente create
   */
  export type ClienteCreateArgs = {
    /**
     * Select specific fields to fetch from the Cliente
     * 
    **/
    select?: ClienteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClienteInclude | null
    /**
     * The data needed to create a Cliente.
     * 
    **/
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }


  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs = {
    data: Enumerable<ClienteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cliente update
   */
  export type ClienteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cliente
     * 
    **/
    select?: ClienteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClienteInclude | null
    /**
     * The data needed to update a Cliente.
     * 
    **/
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     * 
    **/
    where: ClienteWhereUniqueInput
  }


  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs = {
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    where?: ClienteWhereInput
  }


  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cliente
     * 
    **/
    select?: ClienteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClienteInclude | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     * 
    **/
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     * 
    **/
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }


  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cliente
     * 
    **/
    select?: ClienteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClienteInclude | null
    /**
     * Filter which Cliente to delete.
     * 
    **/
    where: ClienteWhereUniqueInput
  }


  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs = {
    where?: ClienteWhereInput
  }


  /**
   * Cliente without action
   */
  export type ClienteArgs = {
    /**
     * Select specific fields to fetch from the Cliente
     * 
    **/
    select?: ClienteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClienteInclude | null
  }



  /**
   * Model Transportadora
   */


  export type AggregateTransportadora = {
    _count: TransportadoraCountAggregateOutputType | null
    _min: TransportadoraMinAggregateOutputType | null
    _max: TransportadoraMaxAggregateOutputType | null
  }

  export type TransportadoraMinAggregateOutputType = {
    cnpj: string | null
    nome: string | null
    tipo_frete: string | null
    servico_correios: string | null
  }

  export type TransportadoraMaxAggregateOutputType = {
    cnpj: string | null
    nome: string | null
    tipo_frete: string | null
    servico_correios: string | null
  }

  export type TransportadoraCountAggregateOutputType = {
    cnpj: number
    nome: number
    tipo_frete: number
    servico_correios: number
    _all: number
  }


  export type TransportadoraMinAggregateInputType = {
    cnpj?: true
    nome?: true
    tipo_frete?: true
    servico_correios?: true
  }

  export type TransportadoraMaxAggregateInputType = {
    cnpj?: true
    nome?: true
    tipo_frete?: true
    servico_correios?: true
  }

  export type TransportadoraCountAggregateInputType = {
    cnpj?: true
    nome?: true
    tipo_frete?: true
    servico_correios?: true
    _all?: true
  }

  export type TransportadoraAggregateArgs = {
    /**
     * Filter which Transportadora to aggregate.
     * 
    **/
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     * 
    **/
    orderBy?: Enumerable<TransportadoraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transportadoras
    **/
    _count?: true | TransportadoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportadoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportadoraMaxAggregateInputType
  }

  export type GetTransportadoraAggregateType<T extends TransportadoraAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportadora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportadora[P]>
      : GetScalarType<T[P], AggregateTransportadora[P]>
  }




  export type TransportadoraGroupByArgs = {
    where?: TransportadoraWhereInput
    orderBy?: Enumerable<TransportadoraOrderByWithAggregationInput>
    by: Array<TransportadoraScalarFieldEnum>
    having?: TransportadoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportadoraCountAggregateInputType | true
    _min?: TransportadoraMinAggregateInputType
    _max?: TransportadoraMaxAggregateInputType
  }


  export type TransportadoraGroupByOutputType = {
    cnpj: string
    nome: string | null
    tipo_frete: string | null
    servico_correios: string | null
    _count: TransportadoraCountAggregateOutputType | null
    _min: TransportadoraMinAggregateOutputType | null
    _max: TransportadoraMaxAggregateOutputType | null
  }

  type GetTransportadoraGroupByPayload<T extends TransportadoraGroupByArgs> = Promise<
    Array<
      PickArray<TransportadoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportadoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportadoraGroupByOutputType[P]>
            : GetScalarType<T[P], TransportadoraGroupByOutputType[P]>
        }
      >
    >


  export type TransportadoraSelect = {
    cnpj?: boolean
    nome?: boolean
    tipo_frete?: boolean
    servico_correios?: boolean
    pedido?: boolean | PedidoFindManyArgs
    _count?: boolean | TransportadoraCountOutputTypeArgs
  }

  export type TransportadoraInclude = {
    pedido?: boolean | PedidoFindManyArgs
    _count?: boolean | TransportadoraCountOutputTypeArgs
  }

  export type TransportadoraGetPayload<
    S extends boolean | null | undefined | TransportadoraArgs,
    U = keyof S
      > = S extends true
        ? Transportadora
    : S extends undefined
    ? never
    : S extends TransportadoraArgs | TransportadoraFindManyArgs
    ?'include' extends U
    ? Transportadora  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'pedido'
        ? Array < PedidoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? TransportadoraCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Transportadora ?Transportadora [P]
  : 
          P extends 'pedido'
        ? Array < PedidoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? TransportadoraCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Transportadora
  : Transportadora


  type TransportadoraCountArgs = Merge<
    Omit<TransportadoraFindManyArgs, 'select' | 'include'> & {
      select?: TransportadoraCountAggregateInputType | true
    }
  >

  export interface TransportadoraDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Transportadora that matches the filter.
     * @param {TransportadoraFindUniqueArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransportadoraFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TransportadoraFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Transportadora'> extends True ? CheckSelect<T, Prisma__TransportadoraClient<Transportadora>, Prisma__TransportadoraClient<TransportadoraGetPayload<T>>> : CheckSelect<T, Prisma__TransportadoraClient<Transportadora | null >, Prisma__TransportadoraClient<TransportadoraGetPayload<T> | null >>

    /**
     * Find the first Transportadora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraFindFirstArgs} args - Arguments to find a Transportadora
     * @example
     * // Get one Transportadora
     * const transportadora = await prisma.transportadora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransportadoraFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TransportadoraFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Transportadora'> extends True ? CheckSelect<T, Prisma__TransportadoraClient<Transportadora>, Prisma__TransportadoraClient<TransportadoraGetPayload<T>>> : CheckSelect<T, Prisma__TransportadoraClient<Transportadora | null >, Prisma__TransportadoraClient<TransportadoraGetPayload<T> | null >>

    /**
     * Find zero or more Transportadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transportadoras
     * const transportadoras = await prisma.transportadora.findMany()
     * 
     * // Get first 10 Transportadoras
     * const transportadoras = await prisma.transportadora.findMany({ take: 10 })
     * 
     * // Only select the `cnpj`
     * const transportadoraWithCnpjOnly = await prisma.transportadora.findMany({ select: { cnpj: true } })
     * 
    **/
    findMany<T extends TransportadoraFindManyArgs>(
      args?: SelectSubset<T, TransportadoraFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Transportadora>>, PrismaPromise<Array<TransportadoraGetPayload<T>>>>

    /**
     * Create a Transportadora.
     * @param {TransportadoraCreateArgs} args - Arguments to create a Transportadora.
     * @example
     * // Create one Transportadora
     * const Transportadora = await prisma.transportadora.create({
     *   data: {
     *     // ... data to create a Transportadora
     *   }
     * })
     * 
    **/
    create<T extends TransportadoraCreateArgs>(
      args: SelectSubset<T, TransportadoraCreateArgs>
    ): CheckSelect<T, Prisma__TransportadoraClient<Transportadora>, Prisma__TransportadoraClient<TransportadoraGetPayload<T>>>

    /**
     * Create many Transportadoras.
     *     @param {TransportadoraCreateManyArgs} args - Arguments to create many Transportadoras.
     *     @example
     *     // Create many Transportadoras
     *     const transportadora = await prisma.transportadora.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransportadoraCreateManyArgs>(
      args?: SelectSubset<T, TransportadoraCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Transportadora.
     * @param {TransportadoraDeleteArgs} args - Arguments to delete one Transportadora.
     * @example
     * // Delete one Transportadora
     * const Transportadora = await prisma.transportadora.delete({
     *   where: {
     *     // ... filter to delete one Transportadora
     *   }
     * })
     * 
    **/
    delete<T extends TransportadoraDeleteArgs>(
      args: SelectSubset<T, TransportadoraDeleteArgs>
    ): CheckSelect<T, Prisma__TransportadoraClient<Transportadora>, Prisma__TransportadoraClient<TransportadoraGetPayload<T>>>

    /**
     * Update one Transportadora.
     * @param {TransportadoraUpdateArgs} args - Arguments to update one Transportadora.
     * @example
     * // Update one Transportadora
     * const transportadora = await prisma.transportadora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransportadoraUpdateArgs>(
      args: SelectSubset<T, TransportadoraUpdateArgs>
    ): CheckSelect<T, Prisma__TransportadoraClient<Transportadora>, Prisma__TransportadoraClient<TransportadoraGetPayload<T>>>

    /**
     * Delete zero or more Transportadoras.
     * @param {TransportadoraDeleteManyArgs} args - Arguments to filter Transportadoras to delete.
     * @example
     * // Delete a few Transportadoras
     * const { count } = await prisma.transportadora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransportadoraDeleteManyArgs>(
      args?: SelectSubset<T, TransportadoraDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transportadoras
     * const transportadora = await prisma.transportadora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransportadoraUpdateManyArgs>(
      args: SelectSubset<T, TransportadoraUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Transportadora.
     * @param {TransportadoraUpsertArgs} args - Arguments to update or create a Transportadora.
     * @example
     * // Update or create a Transportadora
     * const transportadora = await prisma.transportadora.upsert({
     *   create: {
     *     // ... data to create a Transportadora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transportadora we want to update
     *   }
     * })
    **/
    upsert<T extends TransportadoraUpsertArgs>(
      args: SelectSubset<T, TransportadoraUpsertArgs>
    ): CheckSelect<T, Prisma__TransportadoraClient<Transportadora>, Prisma__TransportadoraClient<TransportadoraGetPayload<T>>>

    /**
     * Count the number of Transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraCountArgs} args - Arguments to filter Transportadoras to count.
     * @example
     * // Count the number of Transportadoras
     * const count = await prisma.transportadora.count({
     *   where: {
     *     // ... the filter for the Transportadoras we want to count
     *   }
     * })
    **/
    count<T extends TransportadoraCountArgs>(
      args?: Subset<T, TransportadoraCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportadoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transportadora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransportadoraAggregateArgs>(args: Subset<T, TransportadoraAggregateArgs>): PrismaPromise<GetTransportadoraAggregateType<T>>

    /**
     * Group by Transportadora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportadoraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransportadoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportadoraGroupByArgs['orderBy'] }
        : { orderBy?: TransportadoraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransportadoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportadoraGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transportadora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TransportadoraClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    pedido<T extends PedidoFindManyArgs = {}>(args?: Subset<T, PedidoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Pedido>>, PrismaPromise<Array<PedidoGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Transportadora findUnique
   */
  export type TransportadoraFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Transportadora
     * 
    **/
    select?: TransportadoraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransportadoraInclude | null
    /**
     * Throw an Error if a Transportadora can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Transportadora to fetch.
     * 
    **/
    where: TransportadoraWhereUniqueInput
  }


  /**
   * Transportadora findFirst
   */
  export type TransportadoraFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Transportadora
     * 
    **/
    select?: TransportadoraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransportadoraInclude | null
    /**
     * Throw an Error if a Transportadora can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Transportadora to fetch.
     * 
    **/
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     * 
    **/
    orderBy?: Enumerable<TransportadoraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportadoras.
     * 
    **/
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportadoras.
     * 
    **/
    distinct?: Enumerable<TransportadoraScalarFieldEnum>
  }


  /**
   * Transportadora findMany
   */
  export type TransportadoraFindManyArgs = {
    /**
     * Select specific fields to fetch from the Transportadora
     * 
    **/
    select?: TransportadoraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransportadoraInclude | null
    /**
     * Filter, which Transportadoras to fetch.
     * 
    **/
    where?: TransportadoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportadoras to fetch.
     * 
    **/
    orderBy?: Enumerable<TransportadoraOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transportadoras.
     * 
    **/
    cursor?: TransportadoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportadoras from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportadoras.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TransportadoraScalarFieldEnum>
  }


  /**
   * Transportadora create
   */
  export type TransportadoraCreateArgs = {
    /**
     * Select specific fields to fetch from the Transportadora
     * 
    **/
    select?: TransportadoraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransportadoraInclude | null
    /**
     * The data needed to create a Transportadora.
     * 
    **/
    data: XOR<TransportadoraCreateInput, TransportadoraUncheckedCreateInput>
  }


  /**
   * Transportadora createMany
   */
  export type TransportadoraCreateManyArgs = {
    data: Enumerable<TransportadoraCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Transportadora update
   */
  export type TransportadoraUpdateArgs = {
    /**
     * Select specific fields to fetch from the Transportadora
     * 
    **/
    select?: TransportadoraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransportadoraInclude | null
    /**
     * The data needed to update a Transportadora.
     * 
    **/
    data: XOR<TransportadoraUpdateInput, TransportadoraUncheckedUpdateInput>
    /**
     * Choose, which Transportadora to update.
     * 
    **/
    where: TransportadoraWhereUniqueInput
  }


  /**
   * Transportadora updateMany
   */
  export type TransportadoraUpdateManyArgs = {
    data: XOR<TransportadoraUpdateManyMutationInput, TransportadoraUncheckedUpdateManyInput>
    where?: TransportadoraWhereInput
  }


  /**
   * Transportadora upsert
   */
  export type TransportadoraUpsertArgs = {
    /**
     * Select specific fields to fetch from the Transportadora
     * 
    **/
    select?: TransportadoraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransportadoraInclude | null
    /**
     * The filter to search for the Transportadora to update in case it exists.
     * 
    **/
    where: TransportadoraWhereUniqueInput
    /**
     * In case the Transportadora found by the `where` argument doesn't exist, create a new Transportadora with this data.
     * 
    **/
    create: XOR<TransportadoraCreateInput, TransportadoraUncheckedCreateInput>
    /**
     * In case the Transportadora was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TransportadoraUpdateInput, TransportadoraUncheckedUpdateInput>
  }


  /**
   * Transportadora delete
   */
  export type TransportadoraDeleteArgs = {
    /**
     * Select specific fields to fetch from the Transportadora
     * 
    **/
    select?: TransportadoraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransportadoraInclude | null
    /**
     * Filter which Transportadora to delete.
     * 
    **/
    where: TransportadoraWhereUniqueInput
  }


  /**
   * Transportadora deleteMany
   */
  export type TransportadoraDeleteManyArgs = {
    where?: TransportadoraWhereInput
  }


  /**
   * Transportadora without action
   */
  export type TransportadoraArgs = {
    /**
     * Select specific fields to fetch from the Transportadora
     * 
    **/
    select?: TransportadoraSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TransportadoraInclude | null
  }



  /**
   * Model Endereco
   */


  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    id: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    id: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cep: string | null
    cidade: string | null
    uf: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cep: string | null
    cidade: string | null
    uf: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    nome: number
    endereco: number
    numero: number
    complemento: number
    bairro: number
    cep: number
    cidade: number
    uf: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    id?: true
  }

  export type EnderecoSumAggregateInputType = {
    id?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    numero?: true
    complemento?: true
    bairro?: true
    cep?: true
    cidade?: true
    uf?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    numero?: true
    complemento?: true
    bairro?: true
    cep?: true
    cidade?: true
    uf?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    numero?: true
    complemento?: true
    bairro?: true
    cep?: true
    cidade?: true
    uf?: true
    _all?: true
  }

  export type EnderecoAggregateArgs = {
    /**
     * Filter which Endereco to aggregate.
     * 
    **/
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     * 
    **/
    orderBy?: Enumerable<EnderecoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs = {
    where?: EnderecoWhereInput
    orderBy?: Enumerable<EnderecoOrderByWithAggregationInput>
    by: Array<EnderecoScalarFieldEnum>
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }


  export type EnderecoGroupByOutputType = {
    id: number
    nome: string | null
    endereco: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cep: string | null
    cidade: string | null
    uf: string | null
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Promise<
    Array<
      PickArray<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect = {
    id?: boolean
    nome?: boolean
    endereco?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cep?: boolean
    cidade?: boolean
    uf?: boolean
    cliente?: boolean | ClienteFindManyArgs
    pedido?: boolean | PedidoFindManyArgs
    _count?: boolean | EnderecoCountOutputTypeArgs
  }

  export type EnderecoInclude = {
    cliente?: boolean | ClienteFindManyArgs
    pedido?: boolean | PedidoFindManyArgs
    _count?: boolean | EnderecoCountOutputTypeArgs
  }

  export type EnderecoGetPayload<
    S extends boolean | null | undefined | EnderecoArgs,
    U = keyof S
      > = S extends true
        ? Endereco
    : S extends undefined
    ? never
    : S extends EnderecoArgs | EnderecoFindManyArgs
    ?'include' extends U
    ? Endereco  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'cliente'
        ? Array < ClienteGetPayload<S['include'][P]>>  :
        P extends 'pedido'
        ? Array < PedidoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? EnderecoCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Endereco ?Endereco [P]
  : 
          P extends 'cliente'
        ? Array < ClienteGetPayload<S['select'][P]>>  :
        P extends 'pedido'
        ? Array < PedidoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? EnderecoCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Endereco
  : Endereco


  type EnderecoCountArgs = Merge<
    Omit<EnderecoFindManyArgs, 'select' | 'include'> & {
      select?: EnderecoCountAggregateInputType | true
    }
  >

  export interface EnderecoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnderecoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EnderecoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Endereco'> extends True ? CheckSelect<T, Prisma__EnderecoClient<Endereco>, Prisma__EnderecoClient<EnderecoGetPayload<T>>> : CheckSelect<T, Prisma__EnderecoClient<Endereco | null >, Prisma__EnderecoClient<EnderecoGetPayload<T> | null >>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnderecoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EnderecoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Endereco'> extends True ? CheckSelect<T, Prisma__EnderecoClient<Endereco>, Prisma__EnderecoClient<EnderecoGetPayload<T>>> : CheckSelect<T, Prisma__EnderecoClient<Endereco | null >, Prisma__EnderecoClient<EnderecoGetPayload<T> | null >>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EnderecoFindManyArgs>(
      args?: SelectSubset<T, EnderecoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Endereco>>, PrismaPromise<Array<EnderecoGetPayload<T>>>>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
    **/
    create<T extends EnderecoCreateArgs>(
      args: SelectSubset<T, EnderecoCreateArgs>
    ): CheckSelect<T, Prisma__EnderecoClient<Endereco>, Prisma__EnderecoClient<EnderecoGetPayload<T>>>

    /**
     * Create many Enderecos.
     *     @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     *     @example
     *     // Create many Enderecos
     *     const endereco = await prisma.endereco.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnderecoCreateManyArgs>(
      args?: SelectSubset<T, EnderecoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
    **/
    delete<T extends EnderecoDeleteArgs>(
      args: SelectSubset<T, EnderecoDeleteArgs>
    ): CheckSelect<T, Prisma__EnderecoClient<Endereco>, Prisma__EnderecoClient<EnderecoGetPayload<T>>>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnderecoUpdateArgs>(
      args: SelectSubset<T, EnderecoUpdateArgs>
    ): CheckSelect<T, Prisma__EnderecoClient<Endereco>, Prisma__EnderecoClient<EnderecoGetPayload<T>>>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnderecoDeleteManyArgs>(
      args?: SelectSubset<T, EnderecoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnderecoUpdateManyArgs>(
      args: SelectSubset<T, EnderecoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
    **/
    upsert<T extends EnderecoUpsertArgs>(
      args: SelectSubset<T, EnderecoUpsertArgs>
    ): CheckSelect<T, Prisma__EnderecoClient<Endereco>, Prisma__EnderecoClient<EnderecoGetPayload<T>>>

    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EnderecoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cliente<T extends ClienteFindManyArgs = {}>(args?: Subset<T, ClienteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Cliente>>, PrismaPromise<Array<ClienteGetPayload<T>>>>;

    pedido<T extends PedidoFindManyArgs = {}>(args?: Subset<T, PedidoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Pedido>>, PrismaPromise<Array<PedidoGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Endereco
     * 
    **/
    select?: EnderecoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnderecoInclude | null
    /**
     * Throw an Error if a Endereco can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Endereco to fetch.
     * 
    **/
    where: EnderecoWhereUniqueInput
  }


  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Endereco
     * 
    **/
    select?: EnderecoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnderecoInclude | null
    /**
     * Throw an Error if a Endereco can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Endereco to fetch.
     * 
    **/
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     * 
    **/
    orderBy?: Enumerable<EnderecoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     * 
    **/
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     * 
    **/
    distinct?: Enumerable<EnderecoScalarFieldEnum>
  }


  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Endereco
     * 
    **/
    select?: EnderecoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnderecoInclude | null
    /**
     * Filter, which Enderecos to fetch.
     * 
    **/
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     * 
    **/
    orderBy?: Enumerable<EnderecoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     * 
    **/
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EnderecoScalarFieldEnum>
  }


  /**
   * Endereco create
   */
  export type EnderecoCreateArgs = {
    /**
     * Select specific fields to fetch from the Endereco
     * 
    **/
    select?: EnderecoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnderecoInclude | null
    /**
     * The data needed to create a Endereco.
     * 
    **/
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }


  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs = {
    data: Enumerable<EnderecoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Endereco
     * 
    **/
    select?: EnderecoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnderecoInclude | null
    /**
     * The data needed to update a Endereco.
     * 
    **/
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     * 
    **/
    where: EnderecoWhereUniqueInput
  }


  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs = {
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    where?: EnderecoWhereInput
  }


  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Endereco
     * 
    **/
    select?: EnderecoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnderecoInclude | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     * 
    **/
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     * 
    **/
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }


  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Endereco
     * 
    **/
    select?: EnderecoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnderecoInclude | null
    /**
     * Filter which Endereco to delete.
     * 
    **/
    where: EnderecoWhereUniqueInput
  }


  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs = {
    where?: EnderecoWhereInput
  }


  /**
   * Endereco without action
   */
  export type EnderecoArgs = {
    /**
     * Select specific fields to fetch from the Endereco
     * 
    **/
    select?: EnderecoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EnderecoInclude | null
  }



  /**
   * Model Volume
   */


  export type AggregateVolume = {
    _count: VolumeCountAggregateOutputType | null
    _avg: VolumeAvgAggregateOutputType | null
    _sum: VolumeSumAggregateOutputType | null
    _min: VolumeMinAggregateOutputType | null
    _max: VolumeMaxAggregateOutputType | null
  }

  export type VolumeAvgAggregateOutputType = {
    id: number | null
    idServico: number | null
    valorFretePrevisto: number | null
    valorDeclarado: number | null
    pedidoNumero: number | null
  }

  export type VolumeSumAggregateOutputType = {
    id: number | null
    idServico: number | null
    valorFretePrevisto: number | null
    valorDeclarado: number | null
    pedidoNumero: number | null
  }

  export type VolumeMinAggregateOutputType = {
    id: number | null
    idServico: number | null
    idOrigem: string | null
    servico: string | null
    codigoServico: string | null
    codigoRastreamento: string | null
    valorFretePrevisto: number | null
    remessaNumero: string | null
    remessaDataCriacao: Date | null
    dataSaida: Date | null
    prazoEntregaPrevisto: string | null
    valorDeclarado: number | null
    avisoRecebimento: boolean | null
    maoPropria: boolean | null
    urlRastreamento: string | null
    pedidoNumero: number | null
  }

  export type VolumeMaxAggregateOutputType = {
    id: number | null
    idServico: number | null
    idOrigem: string | null
    servico: string | null
    codigoServico: string | null
    codigoRastreamento: string | null
    valorFretePrevisto: number | null
    remessaNumero: string | null
    remessaDataCriacao: Date | null
    dataSaida: Date | null
    prazoEntregaPrevisto: string | null
    valorDeclarado: number | null
    avisoRecebimento: boolean | null
    maoPropria: boolean | null
    urlRastreamento: string | null
    pedidoNumero: number | null
  }

  export type VolumeCountAggregateOutputType = {
    id: number
    idServico: number
    idOrigem: number
    servico: number
    codigoServico: number
    codigoRastreamento: number
    valorFretePrevisto: number
    remessaNumero: number
    remessaDataCriacao: number
    dataSaida: number
    prazoEntregaPrevisto: number
    valorDeclarado: number
    avisoRecebimento: number
    maoPropria: number
    urlRastreamento: number
    pedidoNumero: number
    _all: number
  }


  export type VolumeAvgAggregateInputType = {
    id?: true
    idServico?: true
    valorFretePrevisto?: true
    valorDeclarado?: true
    pedidoNumero?: true
  }

  export type VolumeSumAggregateInputType = {
    id?: true
    idServico?: true
    valorFretePrevisto?: true
    valorDeclarado?: true
    pedidoNumero?: true
  }

  export type VolumeMinAggregateInputType = {
    id?: true
    idServico?: true
    idOrigem?: true
    servico?: true
    codigoServico?: true
    codigoRastreamento?: true
    valorFretePrevisto?: true
    remessaNumero?: true
    remessaDataCriacao?: true
    dataSaida?: true
    prazoEntregaPrevisto?: true
    valorDeclarado?: true
    avisoRecebimento?: true
    maoPropria?: true
    urlRastreamento?: true
    pedidoNumero?: true
  }

  export type VolumeMaxAggregateInputType = {
    id?: true
    idServico?: true
    idOrigem?: true
    servico?: true
    codigoServico?: true
    codigoRastreamento?: true
    valorFretePrevisto?: true
    remessaNumero?: true
    remessaDataCriacao?: true
    dataSaida?: true
    prazoEntregaPrevisto?: true
    valorDeclarado?: true
    avisoRecebimento?: true
    maoPropria?: true
    urlRastreamento?: true
    pedidoNumero?: true
  }

  export type VolumeCountAggregateInputType = {
    id?: true
    idServico?: true
    idOrigem?: true
    servico?: true
    codigoServico?: true
    codigoRastreamento?: true
    valorFretePrevisto?: true
    remessaNumero?: true
    remessaDataCriacao?: true
    dataSaida?: true
    prazoEntregaPrevisto?: true
    valorDeclarado?: true
    avisoRecebimento?: true
    maoPropria?: true
    urlRastreamento?: true
    pedidoNumero?: true
    _all?: true
  }

  export type VolumeAggregateArgs = {
    /**
     * Filter which Volume to aggregate.
     * 
    **/
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     * 
    **/
    orderBy?: Enumerable<VolumeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volumes
    **/
    _count?: true | VolumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolumeMaxAggregateInputType
  }

  export type GetVolumeAggregateType<T extends VolumeAggregateArgs> = {
        [P in keyof T & keyof AggregateVolume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolume[P]>
      : GetScalarType<T[P], AggregateVolume[P]>
  }




  export type VolumeGroupByArgs = {
    where?: VolumeWhereInput
    orderBy?: Enumerable<VolumeOrderByWithAggregationInput>
    by: Array<VolumeScalarFieldEnum>
    having?: VolumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolumeCountAggregateInputType | true
    _avg?: VolumeAvgAggregateInputType
    _sum?: VolumeSumAggregateInputType
    _min?: VolumeMinAggregateInputType
    _max?: VolumeMaxAggregateInputType
  }


  export type VolumeGroupByOutputType = {
    id: number
    idServico: number
    idOrigem: string | null
    servico: string | null
    codigoServico: string | null
    codigoRastreamento: string | null
    valorFretePrevisto: number | null
    remessaNumero: string | null
    remessaDataCriacao: Date | null
    dataSaida: Date | null
    prazoEntregaPrevisto: string | null
    valorDeclarado: number | null
    avisoRecebimento: boolean | null
    maoPropria: boolean | null
    urlRastreamento: string | null
    pedidoNumero: number | null
    _count: VolumeCountAggregateOutputType | null
    _avg: VolumeAvgAggregateOutputType | null
    _sum: VolumeSumAggregateOutputType | null
    _min: VolumeMinAggregateOutputType | null
    _max: VolumeMaxAggregateOutputType | null
  }

  type GetVolumeGroupByPayload<T extends VolumeGroupByArgs> = Promise<
    Array<
      PickArray<VolumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolumeGroupByOutputType[P]>
            : GetScalarType<T[P], VolumeGroupByOutputType[P]>
        }
      >
    >


  export type VolumeSelect = {
    id?: boolean
    idServico?: boolean
    idOrigem?: boolean
    servico?: boolean
    codigoServico?: boolean
    codigoRastreamento?: boolean
    valorFretePrevisto?: boolean
    remessaNumero?: boolean
    remessaDataCriacao?: boolean
    dataSaida?: boolean
    prazoEntregaPrevisto?: boolean
    valorDeclarado?: boolean
    avisoRecebimento?: boolean
    maoPropria?: boolean
    urlRastreamento?: boolean
    pedidoNumero?: boolean
    pedido?: boolean | PedidoArgs
    dimensao?: boolean | DimensaoArgs
  }

  export type VolumeInclude = {
    pedido?: boolean | PedidoArgs
    dimensao?: boolean | DimensaoArgs
  }

  export type VolumeGetPayload<
    S extends boolean | null | undefined | VolumeArgs,
    U = keyof S
      > = S extends true
        ? Volume
    : S extends undefined
    ? never
    : S extends VolumeArgs | VolumeFindManyArgs
    ?'include' extends U
    ? Volume  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'pedido'
        ? PedidoGetPayload<S['include'][P]> | null :
        P extends 'dimensao'
        ? DimensaoGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Volume ?Volume [P]
  : 
          P extends 'pedido'
        ? PedidoGetPayload<S['select'][P]> | null :
        P extends 'dimensao'
        ? DimensaoGetPayload<S['select'][P]> | null : never
  } 
    : Volume
  : Volume


  type VolumeCountArgs = Merge<
    Omit<VolumeFindManyArgs, 'select' | 'include'> & {
      select?: VolumeCountAggregateInputType | true
    }
  >

  export interface VolumeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Volume that matches the filter.
     * @param {VolumeFindUniqueArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VolumeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VolumeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Volume'> extends True ? CheckSelect<T, Prisma__VolumeClient<Volume>, Prisma__VolumeClient<VolumeGetPayload<T>>> : CheckSelect<T, Prisma__VolumeClient<Volume | null >, Prisma__VolumeClient<VolumeGetPayload<T> | null >>

    /**
     * Find the first Volume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeFindFirstArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VolumeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VolumeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Volume'> extends True ? CheckSelect<T, Prisma__VolumeClient<Volume>, Prisma__VolumeClient<VolumeGetPayload<T>>> : CheckSelect<T, Prisma__VolumeClient<Volume | null >, Prisma__VolumeClient<VolumeGetPayload<T> | null >>

    /**
     * Find zero or more Volumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volumes
     * const volumes = await prisma.volume.findMany()
     * 
     * // Get first 10 Volumes
     * const volumes = await prisma.volume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volumeWithIdOnly = await prisma.volume.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VolumeFindManyArgs>(
      args?: SelectSubset<T, VolumeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Volume>>, PrismaPromise<Array<VolumeGetPayload<T>>>>

    /**
     * Create a Volume.
     * @param {VolumeCreateArgs} args - Arguments to create a Volume.
     * @example
     * // Create one Volume
     * const Volume = await prisma.volume.create({
     *   data: {
     *     // ... data to create a Volume
     *   }
     * })
     * 
    **/
    create<T extends VolumeCreateArgs>(
      args: SelectSubset<T, VolumeCreateArgs>
    ): CheckSelect<T, Prisma__VolumeClient<Volume>, Prisma__VolumeClient<VolumeGetPayload<T>>>

    /**
     * Create many Volumes.
     *     @param {VolumeCreateManyArgs} args - Arguments to create many Volumes.
     *     @example
     *     // Create many Volumes
     *     const volume = await prisma.volume.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VolumeCreateManyArgs>(
      args?: SelectSubset<T, VolumeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Volume.
     * @param {VolumeDeleteArgs} args - Arguments to delete one Volume.
     * @example
     * // Delete one Volume
     * const Volume = await prisma.volume.delete({
     *   where: {
     *     // ... filter to delete one Volume
     *   }
     * })
     * 
    **/
    delete<T extends VolumeDeleteArgs>(
      args: SelectSubset<T, VolumeDeleteArgs>
    ): CheckSelect<T, Prisma__VolumeClient<Volume>, Prisma__VolumeClient<VolumeGetPayload<T>>>

    /**
     * Update one Volume.
     * @param {VolumeUpdateArgs} args - Arguments to update one Volume.
     * @example
     * // Update one Volume
     * const volume = await prisma.volume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VolumeUpdateArgs>(
      args: SelectSubset<T, VolumeUpdateArgs>
    ): CheckSelect<T, Prisma__VolumeClient<Volume>, Prisma__VolumeClient<VolumeGetPayload<T>>>

    /**
     * Delete zero or more Volumes.
     * @param {VolumeDeleteManyArgs} args - Arguments to filter Volumes to delete.
     * @example
     * // Delete a few Volumes
     * const { count } = await prisma.volume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VolumeDeleteManyArgs>(
      args?: SelectSubset<T, VolumeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volumes
     * const volume = await prisma.volume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VolumeUpdateManyArgs>(
      args: SelectSubset<T, VolumeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Volume.
     * @param {VolumeUpsertArgs} args - Arguments to update or create a Volume.
     * @example
     * // Update or create a Volume
     * const volume = await prisma.volume.upsert({
     *   create: {
     *     // ... data to create a Volume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volume we want to update
     *   }
     * })
    **/
    upsert<T extends VolumeUpsertArgs>(
      args: SelectSubset<T, VolumeUpsertArgs>
    ): CheckSelect<T, Prisma__VolumeClient<Volume>, Prisma__VolumeClient<VolumeGetPayload<T>>>

    /**
     * Count the number of Volumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeCountArgs} args - Arguments to filter Volumes to count.
     * @example
     * // Count the number of Volumes
     * const count = await prisma.volume.count({
     *   where: {
     *     // ... the filter for the Volumes we want to count
     *   }
     * })
    **/
    count<T extends VolumeCountArgs>(
      args?: Subset<T, VolumeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolumeAggregateArgs>(args: Subset<T, VolumeAggregateArgs>): PrismaPromise<GetVolumeAggregateType<T>>

    /**
     * Group by Volume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolumeGroupByArgs['orderBy'] }
        : { orderBy?: VolumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolumeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VolumeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    pedido<T extends PedidoArgs = {}>(args?: Subset<T, PedidoArgs>): CheckSelect<T, Prisma__PedidoClient<Pedido | null >, Prisma__PedidoClient<PedidoGetPayload<T> | null >>;

    dimensao<T extends DimensaoArgs = {}>(args?: Subset<T, DimensaoArgs>): CheckSelect<T, Prisma__DimensaoClient<Dimensao | null >, Prisma__DimensaoClient<DimensaoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Volume findUnique
   */
  export type VolumeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Volume
     * 
    **/
    select?: VolumeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VolumeInclude | null
    /**
     * Throw an Error if a Volume can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Volume to fetch.
     * 
    **/
    where: VolumeWhereUniqueInput
  }


  /**
   * Volume findFirst
   */
  export type VolumeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Volume
     * 
    **/
    select?: VolumeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VolumeInclude | null
    /**
     * Throw an Error if a Volume can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Volume to fetch.
     * 
    **/
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     * 
    **/
    orderBy?: Enumerable<VolumeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volumes.
     * 
    **/
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volumes.
     * 
    **/
    distinct?: Enumerable<VolumeScalarFieldEnum>
  }


  /**
   * Volume findMany
   */
  export type VolumeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Volume
     * 
    **/
    select?: VolumeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VolumeInclude | null
    /**
     * Filter, which Volumes to fetch.
     * 
    **/
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     * 
    **/
    orderBy?: Enumerable<VolumeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volumes.
     * 
    **/
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VolumeScalarFieldEnum>
  }


  /**
   * Volume create
   */
  export type VolumeCreateArgs = {
    /**
     * Select specific fields to fetch from the Volume
     * 
    **/
    select?: VolumeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VolumeInclude | null
    /**
     * The data needed to create a Volume.
     * 
    **/
    data: XOR<VolumeCreateInput, VolumeUncheckedCreateInput>
  }


  /**
   * Volume createMany
   */
  export type VolumeCreateManyArgs = {
    data: Enumerable<VolumeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Volume update
   */
  export type VolumeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Volume
     * 
    **/
    select?: VolumeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VolumeInclude | null
    /**
     * The data needed to update a Volume.
     * 
    **/
    data: XOR<VolumeUpdateInput, VolumeUncheckedUpdateInput>
    /**
     * Choose, which Volume to update.
     * 
    **/
    where: VolumeWhereUniqueInput
  }


  /**
   * Volume updateMany
   */
  export type VolumeUpdateManyArgs = {
    data: XOR<VolumeUpdateManyMutationInput, VolumeUncheckedUpdateManyInput>
    where?: VolumeWhereInput
  }


  /**
   * Volume upsert
   */
  export type VolumeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Volume
     * 
    **/
    select?: VolumeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VolumeInclude | null
    /**
     * The filter to search for the Volume to update in case it exists.
     * 
    **/
    where: VolumeWhereUniqueInput
    /**
     * In case the Volume found by the `where` argument doesn't exist, create a new Volume with this data.
     * 
    **/
    create: XOR<VolumeCreateInput, VolumeUncheckedCreateInput>
    /**
     * In case the Volume was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VolumeUpdateInput, VolumeUncheckedUpdateInput>
  }


  /**
   * Volume delete
   */
  export type VolumeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Volume
     * 
    **/
    select?: VolumeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VolumeInclude | null
    /**
     * Filter which Volume to delete.
     * 
    **/
    where: VolumeWhereUniqueInput
  }


  /**
   * Volume deleteMany
   */
  export type VolumeDeleteManyArgs = {
    where?: VolumeWhereInput
  }


  /**
   * Volume without action
   */
  export type VolumeArgs = {
    /**
     * Select specific fields to fetch from the Volume
     * 
    **/
    select?: VolumeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VolumeInclude | null
  }



  /**
   * Model Dimensao
   */


  export type AggregateDimensao = {
    _count: DimensaoCountAggregateOutputType | null
    _avg: DimensaoAvgAggregateOutputType | null
    _sum: DimensaoSumAggregateOutputType | null
    _min: DimensaoMinAggregateOutputType | null
    _max: DimensaoMaxAggregateOutputType | null
  }

  export type DimensaoAvgAggregateOutputType = {
    id: number | null
    volume_id: number | null
  }

  export type DimensaoSumAggregateOutputType = {
    id: number | null
    volume_id: number | null
  }

  export type DimensaoMinAggregateOutputType = {
    id: number | null
    peso: string | null
    altura: string | null
    largura: string | null
    comprimento: string | null
    diametro: string | null
    volume_id: number | null
  }

  export type DimensaoMaxAggregateOutputType = {
    id: number | null
    peso: string | null
    altura: string | null
    largura: string | null
    comprimento: string | null
    diametro: string | null
    volume_id: number | null
  }

  export type DimensaoCountAggregateOutputType = {
    id: number
    peso: number
    altura: number
    largura: number
    comprimento: number
    diametro: number
    volume_id: number
    _all: number
  }


  export type DimensaoAvgAggregateInputType = {
    id?: true
    volume_id?: true
  }

  export type DimensaoSumAggregateInputType = {
    id?: true
    volume_id?: true
  }

  export type DimensaoMinAggregateInputType = {
    id?: true
    peso?: true
    altura?: true
    largura?: true
    comprimento?: true
    diametro?: true
    volume_id?: true
  }

  export type DimensaoMaxAggregateInputType = {
    id?: true
    peso?: true
    altura?: true
    largura?: true
    comprimento?: true
    diametro?: true
    volume_id?: true
  }

  export type DimensaoCountAggregateInputType = {
    id?: true
    peso?: true
    altura?: true
    largura?: true
    comprimento?: true
    diametro?: true
    volume_id?: true
    _all?: true
  }

  export type DimensaoAggregateArgs = {
    /**
     * Filter which Dimensao to aggregate.
     * 
    **/
    where?: DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensaos to fetch.
     * 
    **/
    orderBy?: Enumerable<DimensaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensaos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dimensaos
    **/
    _count?: true | DimensaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DimensaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DimensaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DimensaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DimensaoMaxAggregateInputType
  }

  export type GetDimensaoAggregateType<T extends DimensaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDimensao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDimensao[P]>
      : GetScalarType<T[P], AggregateDimensao[P]>
  }




  export type DimensaoGroupByArgs = {
    where?: DimensaoWhereInput
    orderBy?: Enumerable<DimensaoOrderByWithAggregationInput>
    by: Array<DimensaoScalarFieldEnum>
    having?: DimensaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DimensaoCountAggregateInputType | true
    _avg?: DimensaoAvgAggregateInputType
    _sum?: DimensaoSumAggregateInputType
    _min?: DimensaoMinAggregateInputType
    _max?: DimensaoMaxAggregateInputType
  }


  export type DimensaoGroupByOutputType = {
    id: number
    peso: string | null
    altura: string | null
    largura: string | null
    comprimento: string | null
    diametro: string | null
    volume_id: number
    _count: DimensaoCountAggregateOutputType | null
    _avg: DimensaoAvgAggregateOutputType | null
    _sum: DimensaoSumAggregateOutputType | null
    _min: DimensaoMinAggregateOutputType | null
    _max: DimensaoMaxAggregateOutputType | null
  }

  type GetDimensaoGroupByPayload<T extends DimensaoGroupByArgs> = Promise<
    Array<
      PickArray<DimensaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DimensaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DimensaoGroupByOutputType[P]>
            : GetScalarType<T[P], DimensaoGroupByOutputType[P]>
        }
      >
    >


  export type DimensaoSelect = {
    id?: boolean
    peso?: boolean
    altura?: boolean
    largura?: boolean
    comprimento?: boolean
    diametro?: boolean
    volume_id?: boolean
    volume?: boolean | VolumeArgs
  }

  export type DimensaoInclude = {
    volume?: boolean | VolumeArgs
  }

  export type DimensaoGetPayload<
    S extends boolean | null | undefined | DimensaoArgs,
    U = keyof S
      > = S extends true
        ? Dimensao
    : S extends undefined
    ? never
    : S extends DimensaoArgs | DimensaoFindManyArgs
    ?'include' extends U
    ? Dimensao  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'volume'
        ? VolumeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Dimensao ?Dimensao [P]
  : 
          P extends 'volume'
        ? VolumeGetPayload<S['select'][P]> : never
  } 
    : Dimensao
  : Dimensao


  type DimensaoCountArgs = Merge<
    Omit<DimensaoFindManyArgs, 'select' | 'include'> & {
      select?: DimensaoCountAggregateInputType | true
    }
  >

  export interface DimensaoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dimensao that matches the filter.
     * @param {DimensaoFindUniqueArgs} args - Arguments to find a Dimensao
     * @example
     * // Get one Dimensao
     * const dimensao = await prisma.dimensao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DimensaoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DimensaoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dimensao'> extends True ? CheckSelect<T, Prisma__DimensaoClient<Dimensao>, Prisma__DimensaoClient<DimensaoGetPayload<T>>> : CheckSelect<T, Prisma__DimensaoClient<Dimensao | null >, Prisma__DimensaoClient<DimensaoGetPayload<T> | null >>

    /**
     * Find the first Dimensao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoFindFirstArgs} args - Arguments to find a Dimensao
     * @example
     * // Get one Dimensao
     * const dimensao = await prisma.dimensao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DimensaoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DimensaoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dimensao'> extends True ? CheckSelect<T, Prisma__DimensaoClient<Dimensao>, Prisma__DimensaoClient<DimensaoGetPayload<T>>> : CheckSelect<T, Prisma__DimensaoClient<Dimensao | null >, Prisma__DimensaoClient<DimensaoGetPayload<T> | null >>

    /**
     * Find zero or more Dimensaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dimensaos
     * const dimensaos = await prisma.dimensao.findMany()
     * 
     * // Get first 10 Dimensaos
     * const dimensaos = await prisma.dimensao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dimensaoWithIdOnly = await prisma.dimensao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DimensaoFindManyArgs>(
      args?: SelectSubset<T, DimensaoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dimensao>>, PrismaPromise<Array<DimensaoGetPayload<T>>>>

    /**
     * Create a Dimensao.
     * @param {DimensaoCreateArgs} args - Arguments to create a Dimensao.
     * @example
     * // Create one Dimensao
     * const Dimensao = await prisma.dimensao.create({
     *   data: {
     *     // ... data to create a Dimensao
     *   }
     * })
     * 
    **/
    create<T extends DimensaoCreateArgs>(
      args: SelectSubset<T, DimensaoCreateArgs>
    ): CheckSelect<T, Prisma__DimensaoClient<Dimensao>, Prisma__DimensaoClient<DimensaoGetPayload<T>>>

    /**
     * Create many Dimensaos.
     *     @param {DimensaoCreateManyArgs} args - Arguments to create many Dimensaos.
     *     @example
     *     // Create many Dimensaos
     *     const dimensao = await prisma.dimensao.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DimensaoCreateManyArgs>(
      args?: SelectSubset<T, DimensaoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dimensao.
     * @param {DimensaoDeleteArgs} args - Arguments to delete one Dimensao.
     * @example
     * // Delete one Dimensao
     * const Dimensao = await prisma.dimensao.delete({
     *   where: {
     *     // ... filter to delete one Dimensao
     *   }
     * })
     * 
    **/
    delete<T extends DimensaoDeleteArgs>(
      args: SelectSubset<T, DimensaoDeleteArgs>
    ): CheckSelect<T, Prisma__DimensaoClient<Dimensao>, Prisma__DimensaoClient<DimensaoGetPayload<T>>>

    /**
     * Update one Dimensao.
     * @param {DimensaoUpdateArgs} args - Arguments to update one Dimensao.
     * @example
     * // Update one Dimensao
     * const dimensao = await prisma.dimensao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DimensaoUpdateArgs>(
      args: SelectSubset<T, DimensaoUpdateArgs>
    ): CheckSelect<T, Prisma__DimensaoClient<Dimensao>, Prisma__DimensaoClient<DimensaoGetPayload<T>>>

    /**
     * Delete zero or more Dimensaos.
     * @param {DimensaoDeleteManyArgs} args - Arguments to filter Dimensaos to delete.
     * @example
     * // Delete a few Dimensaos
     * const { count } = await prisma.dimensao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DimensaoDeleteManyArgs>(
      args?: SelectSubset<T, DimensaoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dimensaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dimensaos
     * const dimensao = await prisma.dimensao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DimensaoUpdateManyArgs>(
      args: SelectSubset<T, DimensaoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dimensao.
     * @param {DimensaoUpsertArgs} args - Arguments to update or create a Dimensao.
     * @example
     * // Update or create a Dimensao
     * const dimensao = await prisma.dimensao.upsert({
     *   create: {
     *     // ... data to create a Dimensao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dimensao we want to update
     *   }
     * })
    **/
    upsert<T extends DimensaoUpsertArgs>(
      args: SelectSubset<T, DimensaoUpsertArgs>
    ): CheckSelect<T, Prisma__DimensaoClient<Dimensao>, Prisma__DimensaoClient<DimensaoGetPayload<T>>>

    /**
     * Count the number of Dimensaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoCountArgs} args - Arguments to filter Dimensaos to count.
     * @example
     * // Count the number of Dimensaos
     * const count = await prisma.dimensao.count({
     *   where: {
     *     // ... the filter for the Dimensaos we want to count
     *   }
     * })
    **/
    count<T extends DimensaoCountArgs>(
      args?: Subset<T, DimensaoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DimensaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dimensao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DimensaoAggregateArgs>(args: Subset<T, DimensaoAggregateArgs>): PrismaPromise<GetDimensaoAggregateType<T>>

    /**
     * Group by Dimensao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DimensaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DimensaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DimensaoGroupByArgs['orderBy'] }
        : { orderBy?: DimensaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DimensaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDimensaoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dimensao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DimensaoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    volume<T extends VolumeArgs = {}>(args?: Subset<T, VolumeArgs>): CheckSelect<T, Prisma__VolumeClient<Volume | null >, Prisma__VolumeClient<VolumeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Dimensao findUnique
   */
  export type DimensaoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Dimensao
     * 
    **/
    select?: DimensaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensaoInclude | null
    /**
     * Throw an Error if a Dimensao can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dimensao to fetch.
     * 
    **/
    where: DimensaoWhereUniqueInput
  }


  /**
   * Dimensao findFirst
   */
  export type DimensaoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Dimensao
     * 
    **/
    select?: DimensaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensaoInclude | null
    /**
     * Throw an Error if a Dimensao can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dimensao to fetch.
     * 
    **/
    where?: DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensaos to fetch.
     * 
    **/
    orderBy?: Enumerable<DimensaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dimensaos.
     * 
    **/
    cursor?: DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensaos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dimensaos.
     * 
    **/
    distinct?: Enumerable<DimensaoScalarFieldEnum>
  }


  /**
   * Dimensao findMany
   */
  export type DimensaoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dimensao
     * 
    **/
    select?: DimensaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensaoInclude | null
    /**
     * Filter, which Dimensaos to fetch.
     * 
    **/
    where?: DimensaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dimensaos to fetch.
     * 
    **/
    orderBy?: Enumerable<DimensaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dimensaos.
     * 
    **/
    cursor?: DimensaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dimensaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dimensaos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DimensaoScalarFieldEnum>
  }


  /**
   * Dimensao create
   */
  export type DimensaoCreateArgs = {
    /**
     * Select specific fields to fetch from the Dimensao
     * 
    **/
    select?: DimensaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensaoInclude | null
    /**
     * The data needed to create a Dimensao.
     * 
    **/
    data: XOR<DimensaoCreateInput, DimensaoUncheckedCreateInput>
  }


  /**
   * Dimensao createMany
   */
  export type DimensaoCreateManyArgs = {
    data: Enumerable<DimensaoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Dimensao update
   */
  export type DimensaoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dimensao
     * 
    **/
    select?: DimensaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensaoInclude | null
    /**
     * The data needed to update a Dimensao.
     * 
    **/
    data: XOR<DimensaoUpdateInput, DimensaoUncheckedUpdateInput>
    /**
     * Choose, which Dimensao to update.
     * 
    **/
    where: DimensaoWhereUniqueInput
  }


  /**
   * Dimensao updateMany
   */
  export type DimensaoUpdateManyArgs = {
    data: XOR<DimensaoUpdateManyMutationInput, DimensaoUncheckedUpdateManyInput>
    where?: DimensaoWhereInput
  }


  /**
   * Dimensao upsert
   */
  export type DimensaoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dimensao
     * 
    **/
    select?: DimensaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensaoInclude | null
    /**
     * The filter to search for the Dimensao to update in case it exists.
     * 
    **/
    where: DimensaoWhereUniqueInput
    /**
     * In case the Dimensao found by the `where` argument doesn't exist, create a new Dimensao with this data.
     * 
    **/
    create: XOR<DimensaoCreateInput, DimensaoUncheckedCreateInput>
    /**
     * In case the Dimensao was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DimensaoUpdateInput, DimensaoUncheckedUpdateInput>
  }


  /**
   * Dimensao delete
   */
  export type DimensaoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dimensao
     * 
    **/
    select?: DimensaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensaoInclude | null
    /**
     * Filter which Dimensao to delete.
     * 
    **/
    where: DimensaoWhereUniqueInput
  }


  /**
   * Dimensao deleteMany
   */
  export type DimensaoDeleteManyArgs = {
    where?: DimensaoWhereInput
  }


  /**
   * Dimensao without action
   */
  export type DimensaoArgs = {
    /**
     * Select specific fields to fetch from the Dimensao
     * 
    **/
    select?: DimensaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DimensaoInclude | null
  }



  /**
   * Model Parcela
   */


  export type AggregateParcela = {
    _count: ParcelaCountAggregateOutputType | null
    _avg: ParcelaAvgAggregateOutputType | null
    _sum: ParcelaSumAggregateOutputType | null
    _min: ParcelaMinAggregateOutputType | null
    _max: ParcelaMaxAggregateOutputType | null
  }

  export type ParcelaAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    pedidoNumero: number | null
  }

  export type ParcelaSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    pedidoNumero: number | null
  }

  export type ParcelaMinAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    dataVencimento: Date | null
    obs: string | null
    destino: string | null
    formaPagamento_id: string | null
    formaPagamentoDescricao: string | null
    formaPagamentoCodigoFiscal: string | null
    pedidoNumero: number | null
  }

  export type ParcelaMaxAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    dataVencimento: Date | null
    obs: string | null
    destino: string | null
    formaPagamento_id: string | null
    formaPagamentoDescricao: string | null
    formaPagamentoCodigoFiscal: string | null
    pedidoNumero: number | null
  }

  export type ParcelaCountAggregateOutputType = {
    id: number
    valor: number
    dataVencimento: number
    obs: number
    destino: number
    formaPagamento_id: number
    formaPagamentoDescricao: number
    formaPagamentoCodigoFiscal: number
    pedidoNumero: number
    _all: number
  }


  export type ParcelaAvgAggregateInputType = {
    id?: true
    valor?: true
    pedidoNumero?: true
  }

  export type ParcelaSumAggregateInputType = {
    id?: true
    valor?: true
    pedidoNumero?: true
  }

  export type ParcelaMinAggregateInputType = {
    id?: true
    valor?: true
    dataVencimento?: true
    obs?: true
    destino?: true
    formaPagamento_id?: true
    formaPagamentoDescricao?: true
    formaPagamentoCodigoFiscal?: true
    pedidoNumero?: true
  }

  export type ParcelaMaxAggregateInputType = {
    id?: true
    valor?: true
    dataVencimento?: true
    obs?: true
    destino?: true
    formaPagamento_id?: true
    formaPagamentoDescricao?: true
    formaPagamentoCodigoFiscal?: true
    pedidoNumero?: true
  }

  export type ParcelaCountAggregateInputType = {
    id?: true
    valor?: true
    dataVencimento?: true
    obs?: true
    destino?: true
    formaPagamento_id?: true
    formaPagamentoDescricao?: true
    formaPagamentoCodigoFiscal?: true
    pedidoNumero?: true
    _all?: true
  }

  export type ParcelaAggregateArgs = {
    /**
     * Filter which Parcela to aggregate.
     * 
    **/
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     * 
    **/
    orderBy?: Enumerable<ParcelaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcelas
    **/
    _count?: true | ParcelaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelaMaxAggregateInputType
  }

  export type GetParcelaAggregateType<T extends ParcelaAggregateArgs> = {
        [P in keyof T & keyof AggregateParcela]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcela[P]>
      : GetScalarType<T[P], AggregateParcela[P]>
  }




  export type ParcelaGroupByArgs = {
    where?: ParcelaWhereInput
    orderBy?: Enumerable<ParcelaOrderByWithAggregationInput>
    by: Array<ParcelaScalarFieldEnum>
    having?: ParcelaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelaCountAggregateInputType | true
    _avg?: ParcelaAvgAggregateInputType
    _sum?: ParcelaSumAggregateInputType
    _min?: ParcelaMinAggregateInputType
    _max?: ParcelaMaxAggregateInputType
  }


  export type ParcelaGroupByOutputType = {
    id: number
    valor: Decimal
    dataVencimento: Date
    obs: string | null
    destino: string | null
    formaPagamento_id: string
    formaPagamentoDescricao: string | null
    formaPagamentoCodigoFiscal: string | null
    pedidoNumero: number | null
    _count: ParcelaCountAggregateOutputType | null
    _avg: ParcelaAvgAggregateOutputType | null
    _sum: ParcelaSumAggregateOutputType | null
    _min: ParcelaMinAggregateOutputType | null
    _max: ParcelaMaxAggregateOutputType | null
  }

  type GetParcelaGroupByPayload<T extends ParcelaGroupByArgs> = Promise<
    Array<
      PickArray<ParcelaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelaGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelaGroupByOutputType[P]>
        }
      >
    >


  export type ParcelaSelect = {
    id?: boolean
    valor?: boolean
    dataVencimento?: boolean
    obs?: boolean
    destino?: boolean
    formaPagamento_id?: boolean
    formaPagamentoDescricao?: boolean
    formaPagamentoCodigoFiscal?: boolean
    pedidoNumero?: boolean
    Pedido?: boolean | PedidoArgs
  }

  export type ParcelaInclude = {
    Pedido?: boolean | PedidoArgs
  }

  export type ParcelaGetPayload<
    S extends boolean | null | undefined | ParcelaArgs,
    U = keyof S
      > = S extends true
        ? Parcela
    : S extends undefined
    ? never
    : S extends ParcelaArgs | ParcelaFindManyArgs
    ?'include' extends U
    ? Parcela  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Pedido'
        ? PedidoGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Parcela ?Parcela [P]
  : 
          P extends 'Pedido'
        ? PedidoGetPayload<S['select'][P]> | null : never
  } 
    : Parcela
  : Parcela


  type ParcelaCountArgs = Merge<
    Omit<ParcelaFindManyArgs, 'select' | 'include'> & {
      select?: ParcelaCountAggregateInputType | true
    }
  >

  export interface ParcelaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Parcela that matches the filter.
     * @param {ParcelaFindUniqueArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParcelaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ParcelaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Parcela'> extends True ? CheckSelect<T, Prisma__ParcelaClient<Parcela>, Prisma__ParcelaClient<ParcelaGetPayload<T>>> : CheckSelect<T, Prisma__ParcelaClient<Parcela | null >, Prisma__ParcelaClient<ParcelaGetPayload<T> | null >>

    /**
     * Find the first Parcela that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaFindFirstArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParcelaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ParcelaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Parcela'> extends True ? CheckSelect<T, Prisma__ParcelaClient<Parcela>, Prisma__ParcelaClient<ParcelaGetPayload<T>>> : CheckSelect<T, Prisma__ParcelaClient<Parcela | null >, Prisma__ParcelaClient<ParcelaGetPayload<T> | null >>

    /**
     * Find zero or more Parcelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcelas
     * const parcelas = await prisma.parcela.findMany()
     * 
     * // Get first 10 Parcelas
     * const parcelas = await prisma.parcela.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelaWithIdOnly = await prisma.parcela.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParcelaFindManyArgs>(
      args?: SelectSubset<T, ParcelaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Parcela>>, PrismaPromise<Array<ParcelaGetPayload<T>>>>

    /**
     * Create a Parcela.
     * @param {ParcelaCreateArgs} args - Arguments to create a Parcela.
     * @example
     * // Create one Parcela
     * const Parcela = await prisma.parcela.create({
     *   data: {
     *     // ... data to create a Parcela
     *   }
     * })
     * 
    **/
    create<T extends ParcelaCreateArgs>(
      args: SelectSubset<T, ParcelaCreateArgs>
    ): CheckSelect<T, Prisma__ParcelaClient<Parcela>, Prisma__ParcelaClient<ParcelaGetPayload<T>>>

    /**
     * Create many Parcelas.
     *     @param {ParcelaCreateManyArgs} args - Arguments to create many Parcelas.
     *     @example
     *     // Create many Parcelas
     *     const parcela = await prisma.parcela.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParcelaCreateManyArgs>(
      args?: SelectSubset<T, ParcelaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Parcela.
     * @param {ParcelaDeleteArgs} args - Arguments to delete one Parcela.
     * @example
     * // Delete one Parcela
     * const Parcela = await prisma.parcela.delete({
     *   where: {
     *     // ... filter to delete one Parcela
     *   }
     * })
     * 
    **/
    delete<T extends ParcelaDeleteArgs>(
      args: SelectSubset<T, ParcelaDeleteArgs>
    ): CheckSelect<T, Prisma__ParcelaClient<Parcela>, Prisma__ParcelaClient<ParcelaGetPayload<T>>>

    /**
     * Update one Parcela.
     * @param {ParcelaUpdateArgs} args - Arguments to update one Parcela.
     * @example
     * // Update one Parcela
     * const parcela = await prisma.parcela.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParcelaUpdateArgs>(
      args: SelectSubset<T, ParcelaUpdateArgs>
    ): CheckSelect<T, Prisma__ParcelaClient<Parcela>, Prisma__ParcelaClient<ParcelaGetPayload<T>>>

    /**
     * Delete zero or more Parcelas.
     * @param {ParcelaDeleteManyArgs} args - Arguments to filter Parcelas to delete.
     * @example
     * // Delete a few Parcelas
     * const { count } = await prisma.parcela.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParcelaDeleteManyArgs>(
      args?: SelectSubset<T, ParcelaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcelas
     * const parcela = await prisma.parcela.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParcelaUpdateManyArgs>(
      args: SelectSubset<T, ParcelaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Parcela.
     * @param {ParcelaUpsertArgs} args - Arguments to update or create a Parcela.
     * @example
     * // Update or create a Parcela
     * const parcela = await prisma.parcela.upsert({
     *   create: {
     *     // ... data to create a Parcela
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcela we want to update
     *   }
     * })
    **/
    upsert<T extends ParcelaUpsertArgs>(
      args: SelectSubset<T, ParcelaUpsertArgs>
    ): CheckSelect<T, Prisma__ParcelaClient<Parcela>, Prisma__ParcelaClient<ParcelaGetPayload<T>>>

    /**
     * Count the number of Parcelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaCountArgs} args - Arguments to filter Parcelas to count.
     * @example
     * // Count the number of Parcelas
     * const count = await prisma.parcela.count({
     *   where: {
     *     // ... the filter for the Parcelas we want to count
     *   }
     * })
    **/
    count<T extends ParcelaCountArgs>(
      args?: Subset<T, ParcelaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParcelaAggregateArgs>(args: Subset<T, ParcelaAggregateArgs>): PrismaPromise<GetParcelaAggregateType<T>>

    /**
     * Group by Parcela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParcelaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelaGroupByArgs['orderBy'] }
        : { orderBy?: ParcelaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParcelaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelaGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parcela.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ParcelaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Pedido<T extends PedidoArgs = {}>(args?: Subset<T, PedidoArgs>): CheckSelect<T, Prisma__PedidoClient<Pedido | null >, Prisma__PedidoClient<PedidoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Parcela findUnique
   */
  export type ParcelaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Parcela
     * 
    **/
    select?: ParcelaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParcelaInclude | null
    /**
     * Throw an Error if a Parcela can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Parcela to fetch.
     * 
    **/
    where: ParcelaWhereUniqueInput
  }


  /**
   * Parcela findFirst
   */
  export type ParcelaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Parcela
     * 
    **/
    select?: ParcelaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParcelaInclude | null
    /**
     * Throw an Error if a Parcela can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Parcela to fetch.
     * 
    **/
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     * 
    **/
    orderBy?: Enumerable<ParcelaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcelas.
     * 
    **/
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcelas.
     * 
    **/
    distinct?: Enumerable<ParcelaScalarFieldEnum>
  }


  /**
   * Parcela findMany
   */
  export type ParcelaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Parcela
     * 
    **/
    select?: ParcelaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParcelaInclude | null
    /**
     * Filter, which Parcelas to fetch.
     * 
    **/
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     * 
    **/
    orderBy?: Enumerable<ParcelaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcelas.
     * 
    **/
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ParcelaScalarFieldEnum>
  }


  /**
   * Parcela create
   */
  export type ParcelaCreateArgs = {
    /**
     * Select specific fields to fetch from the Parcela
     * 
    **/
    select?: ParcelaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParcelaInclude | null
    /**
     * The data needed to create a Parcela.
     * 
    **/
    data: XOR<ParcelaCreateInput, ParcelaUncheckedCreateInput>
  }


  /**
   * Parcela createMany
   */
  export type ParcelaCreateManyArgs = {
    data: Enumerable<ParcelaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Parcela update
   */
  export type ParcelaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Parcela
     * 
    **/
    select?: ParcelaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParcelaInclude | null
    /**
     * The data needed to update a Parcela.
     * 
    **/
    data: XOR<ParcelaUpdateInput, ParcelaUncheckedUpdateInput>
    /**
     * Choose, which Parcela to update.
     * 
    **/
    where: ParcelaWhereUniqueInput
  }


  /**
   * Parcela updateMany
   */
  export type ParcelaUpdateManyArgs = {
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyInput>
    where?: ParcelaWhereInput
  }


  /**
   * Parcela upsert
   */
  export type ParcelaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Parcela
     * 
    **/
    select?: ParcelaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParcelaInclude | null
    /**
     * The filter to search for the Parcela to update in case it exists.
     * 
    **/
    where: ParcelaWhereUniqueInput
    /**
     * In case the Parcela found by the `where` argument doesn't exist, create a new Parcela with this data.
     * 
    **/
    create: XOR<ParcelaCreateInput, ParcelaUncheckedCreateInput>
    /**
     * In case the Parcela was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ParcelaUpdateInput, ParcelaUncheckedUpdateInput>
  }


  /**
   * Parcela delete
   */
  export type ParcelaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Parcela
     * 
    **/
    select?: ParcelaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParcelaInclude | null
    /**
     * Filter which Parcela to delete.
     * 
    **/
    where: ParcelaWhereUniqueInput
  }


  /**
   * Parcela deleteMany
   */
  export type ParcelaDeleteManyArgs = {
    where?: ParcelaWhereInput
  }


  /**
   * Parcela without action
   */
  export type ParcelaArgs = {
    /**
     * Select specific fields to fetch from the Parcela
     * 
    **/
    select?: ParcelaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ParcelaInclude | null
  }



  /**
   * Model Nota
   */


  export type AggregateNota = {
    _count: NotaCountAggregateOutputType | null
    _avg: NotaAvgAggregateOutputType | null
    _sum: NotaSumAggregateOutputType | null
    _min: NotaMinAggregateOutputType | null
    _max: NotaMaxAggregateOutputType | null
  }

  export type NotaAvgAggregateOutputType = {
    situacao: number | null
    valorNota: Decimal | null
    pedidoNumero: number | null
  }

  export type NotaSumAggregateOutputType = {
    situacao: number | null
    valorNota: Decimal | null
    pedidoNumero: number | null
  }

  export type NotaMinAggregateOutputType = {
    numero: string | null
    serie: string | null
    dataEmissao: Date | null
    situacao: number | null
    valorNota: Decimal | null
    chaveAcesso: string | null
    pedidoNumero: number | null
  }

  export type NotaMaxAggregateOutputType = {
    numero: string | null
    serie: string | null
    dataEmissao: Date | null
    situacao: number | null
    valorNota: Decimal | null
    chaveAcesso: string | null
    pedidoNumero: number | null
  }

  export type NotaCountAggregateOutputType = {
    numero: number
    serie: number
    dataEmissao: number
    situacao: number
    valorNota: number
    chaveAcesso: number
    pedidoNumero: number
    _all: number
  }


  export type NotaAvgAggregateInputType = {
    situacao?: true
    valorNota?: true
    pedidoNumero?: true
  }

  export type NotaSumAggregateInputType = {
    situacao?: true
    valorNota?: true
    pedidoNumero?: true
  }

  export type NotaMinAggregateInputType = {
    numero?: true
    serie?: true
    dataEmissao?: true
    situacao?: true
    valorNota?: true
    chaveAcesso?: true
    pedidoNumero?: true
  }

  export type NotaMaxAggregateInputType = {
    numero?: true
    serie?: true
    dataEmissao?: true
    situacao?: true
    valorNota?: true
    chaveAcesso?: true
    pedidoNumero?: true
  }

  export type NotaCountAggregateInputType = {
    numero?: true
    serie?: true
    dataEmissao?: true
    situacao?: true
    valorNota?: true
    chaveAcesso?: true
    pedidoNumero?: true
    _all?: true
  }

  export type NotaAggregateArgs = {
    /**
     * Filter which Nota to aggregate.
     * 
    **/
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     * 
    **/
    orderBy?: Enumerable<NotaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notas
    **/
    _count?: true | NotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotaMaxAggregateInputType
  }

  export type GetNotaAggregateType<T extends NotaAggregateArgs> = {
        [P in keyof T & keyof AggregateNota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNota[P]>
      : GetScalarType<T[P], AggregateNota[P]>
  }




  export type NotaGroupByArgs = {
    where?: NotaWhereInput
    orderBy?: Enumerable<NotaOrderByWithAggregationInput>
    by: Array<NotaScalarFieldEnum>
    having?: NotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotaCountAggregateInputType | true
    _avg?: NotaAvgAggregateInputType
    _sum?: NotaSumAggregateInputType
    _min?: NotaMinAggregateInputType
    _max?: NotaMaxAggregateInputType
  }


  export type NotaGroupByOutputType = {
    numero: string
    serie: string | null
    dataEmissao: Date | null
    situacao: number | null
    valorNota: Decimal | null
    chaveAcesso: string | null
    pedidoNumero: number
    _count: NotaCountAggregateOutputType | null
    _avg: NotaAvgAggregateOutputType | null
    _sum: NotaSumAggregateOutputType | null
    _min: NotaMinAggregateOutputType | null
    _max: NotaMaxAggregateOutputType | null
  }

  type GetNotaGroupByPayload<T extends NotaGroupByArgs> = Promise<
    Array<
      PickArray<NotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotaGroupByOutputType[P]>
            : GetScalarType<T[P], NotaGroupByOutputType[P]>
        }
      >
    >


  export type NotaSelect = {
    numero?: boolean
    serie?: boolean
    dataEmissao?: boolean
    situacao?: boolean
    valorNota?: boolean
    chaveAcesso?: boolean
    pedidoNumero?: boolean
    pedido?: boolean | PedidoArgs
  }

  export type NotaInclude = {
    pedido?: boolean | PedidoArgs
  }

  export type NotaGetPayload<
    S extends boolean | null | undefined | NotaArgs,
    U = keyof S
      > = S extends true
        ? Nota
    : S extends undefined
    ? never
    : S extends NotaArgs | NotaFindManyArgs
    ?'include' extends U
    ? Nota  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'pedido'
        ? PedidoGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Nota ?Nota [P]
  : 
          P extends 'pedido'
        ? PedidoGetPayload<S['select'][P]> : never
  } 
    : Nota
  : Nota


  type NotaCountArgs = Merge<
    Omit<NotaFindManyArgs, 'select' | 'include'> & {
      select?: NotaCountAggregateInputType | true
    }
  >

  export interface NotaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Nota that matches the filter.
     * @param {NotaFindUniqueArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Nota'> extends True ? CheckSelect<T, Prisma__NotaClient<Nota>, Prisma__NotaClient<NotaGetPayload<T>>> : CheckSelect<T, Prisma__NotaClient<Nota | null >, Prisma__NotaClient<NotaGetPayload<T> | null >>

    /**
     * Find the first Nota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFindFirstArgs} args - Arguments to find a Nota
     * @example
     * // Get one Nota
     * const nota = await prisma.nota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Nota'> extends True ? CheckSelect<T, Prisma__NotaClient<Nota>, Prisma__NotaClient<NotaGetPayload<T>>> : CheckSelect<T, Prisma__NotaClient<Nota | null >, Prisma__NotaClient<NotaGetPayload<T> | null >>

    /**
     * Find zero or more Notas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notas
     * const notas = await prisma.nota.findMany()
     * 
     * // Get first 10 Notas
     * const notas = await prisma.nota.findMany({ take: 10 })
     * 
     * // Only select the `numero`
     * const notaWithNumeroOnly = await prisma.nota.findMany({ select: { numero: true } })
     * 
    **/
    findMany<T extends NotaFindManyArgs>(
      args?: SelectSubset<T, NotaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Nota>>, PrismaPromise<Array<NotaGetPayload<T>>>>

    /**
     * Create a Nota.
     * @param {NotaCreateArgs} args - Arguments to create a Nota.
     * @example
     * // Create one Nota
     * const Nota = await prisma.nota.create({
     *   data: {
     *     // ... data to create a Nota
     *   }
     * })
     * 
    **/
    create<T extends NotaCreateArgs>(
      args: SelectSubset<T, NotaCreateArgs>
    ): CheckSelect<T, Prisma__NotaClient<Nota>, Prisma__NotaClient<NotaGetPayload<T>>>

    /**
     * Create many Notas.
     *     @param {NotaCreateManyArgs} args - Arguments to create many Notas.
     *     @example
     *     // Create many Notas
     *     const nota = await prisma.nota.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotaCreateManyArgs>(
      args?: SelectSubset<T, NotaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Nota.
     * @param {NotaDeleteArgs} args - Arguments to delete one Nota.
     * @example
     * // Delete one Nota
     * const Nota = await prisma.nota.delete({
     *   where: {
     *     // ... filter to delete one Nota
     *   }
     * })
     * 
    **/
    delete<T extends NotaDeleteArgs>(
      args: SelectSubset<T, NotaDeleteArgs>
    ): CheckSelect<T, Prisma__NotaClient<Nota>, Prisma__NotaClient<NotaGetPayload<T>>>

    /**
     * Update one Nota.
     * @param {NotaUpdateArgs} args - Arguments to update one Nota.
     * @example
     * // Update one Nota
     * const nota = await prisma.nota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotaUpdateArgs>(
      args: SelectSubset<T, NotaUpdateArgs>
    ): CheckSelect<T, Prisma__NotaClient<Nota>, Prisma__NotaClient<NotaGetPayload<T>>>

    /**
     * Delete zero or more Notas.
     * @param {NotaDeleteManyArgs} args - Arguments to filter Notas to delete.
     * @example
     * // Delete a few Notas
     * const { count } = await prisma.nota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotaDeleteManyArgs>(
      args?: SelectSubset<T, NotaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notas
     * const nota = await prisma.nota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotaUpdateManyArgs>(
      args: SelectSubset<T, NotaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Nota.
     * @param {NotaUpsertArgs} args - Arguments to update or create a Nota.
     * @example
     * // Update or create a Nota
     * const nota = await prisma.nota.upsert({
     *   create: {
     *     // ... data to create a Nota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nota we want to update
     *   }
     * })
    **/
    upsert<T extends NotaUpsertArgs>(
      args: SelectSubset<T, NotaUpsertArgs>
    ): CheckSelect<T, Prisma__NotaClient<Nota>, Prisma__NotaClient<NotaGetPayload<T>>>

    /**
     * Count the number of Notas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaCountArgs} args - Arguments to filter Notas to count.
     * @example
     * // Count the number of Notas
     * const count = await prisma.nota.count({
     *   where: {
     *     // ... the filter for the Notas we want to count
     *   }
     * })
    **/
    count<T extends NotaCountArgs>(
      args?: Subset<T, NotaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotaAggregateArgs>(args: Subset<T, NotaAggregateArgs>): PrismaPromise<GetNotaAggregateType<T>>

    /**
     * Group by Nota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotaGroupByArgs['orderBy'] }
        : { orderBy?: NotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    pedido<T extends PedidoArgs = {}>(args?: Subset<T, PedidoArgs>): CheckSelect<T, Prisma__PedidoClient<Pedido | null >, Prisma__PedidoClient<PedidoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Nota findUnique
   */
  export type NotaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Nota
     * 
    **/
    select?: NotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotaInclude | null
    /**
     * Throw an Error if a Nota can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Nota to fetch.
     * 
    **/
    where: NotaWhereUniqueInput
  }


  /**
   * Nota findFirst
   */
  export type NotaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Nota
     * 
    **/
    select?: NotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotaInclude | null
    /**
     * Throw an Error if a Nota can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Nota to fetch.
     * 
    **/
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     * 
    **/
    orderBy?: Enumerable<NotaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notas.
     * 
    **/
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notas.
     * 
    **/
    distinct?: Enumerable<NotaScalarFieldEnum>
  }


  /**
   * Nota findMany
   */
  export type NotaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Nota
     * 
    **/
    select?: NotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotaInclude | null
    /**
     * Filter, which Notas to fetch.
     * 
    **/
    where?: NotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notas to fetch.
     * 
    **/
    orderBy?: Enumerable<NotaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notas.
     * 
    **/
    cursor?: NotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NotaScalarFieldEnum>
  }


  /**
   * Nota create
   */
  export type NotaCreateArgs = {
    /**
     * Select specific fields to fetch from the Nota
     * 
    **/
    select?: NotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotaInclude | null
    /**
     * The data needed to create a Nota.
     * 
    **/
    data: XOR<NotaCreateInput, NotaUncheckedCreateInput>
  }


  /**
   * Nota createMany
   */
  export type NotaCreateManyArgs = {
    data: Enumerable<NotaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Nota update
   */
  export type NotaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Nota
     * 
    **/
    select?: NotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotaInclude | null
    /**
     * The data needed to update a Nota.
     * 
    **/
    data: XOR<NotaUpdateInput, NotaUncheckedUpdateInput>
    /**
     * Choose, which Nota to update.
     * 
    **/
    where: NotaWhereUniqueInput
  }


  /**
   * Nota updateMany
   */
  export type NotaUpdateManyArgs = {
    data: XOR<NotaUpdateManyMutationInput, NotaUncheckedUpdateManyInput>
    where?: NotaWhereInput
  }


  /**
   * Nota upsert
   */
  export type NotaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Nota
     * 
    **/
    select?: NotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotaInclude | null
    /**
     * The filter to search for the Nota to update in case it exists.
     * 
    **/
    where: NotaWhereUniqueInput
    /**
     * In case the Nota found by the `where` argument doesn't exist, create a new Nota with this data.
     * 
    **/
    create: XOR<NotaCreateInput, NotaUncheckedCreateInput>
    /**
     * In case the Nota was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NotaUpdateInput, NotaUncheckedUpdateInput>
  }


  /**
   * Nota delete
   */
  export type NotaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Nota
     * 
    **/
    select?: NotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotaInclude | null
    /**
     * Filter which Nota to delete.
     * 
    **/
    where: NotaWhereUniqueInput
  }


  /**
   * Nota deleteMany
   */
  export type NotaDeleteManyArgs = {
    where?: NotaWhereInput
  }


  /**
   * Nota without action
   */
  export type NotaArgs = {
    /**
     * Select specific fields to fetch from the Nota
     * 
    **/
    select?: NotaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NotaInclude | null
  }



  /**
   * Model ProdutoNoPedido
   */


  export type AggregateProdutoNoPedido = {
    _count: ProdutoNoPedidoCountAggregateOutputType | null
    _avg: ProdutoNoPedidoAvgAggregateOutputType | null
    _sum: ProdutoNoPedidoSumAggregateOutputType | null
    _min: ProdutoNoPedidoMinAggregateOutputType | null
    _max: ProdutoNoPedidoMaxAggregateOutputType | null
  }

  export type ProdutoNoPedidoAvgAggregateOutputType = {
    id: number | null
    quantidade: Decimal | null
    valorunidade: Decimal | null
    precocusto: Decimal | null
    descontoItem: Decimal | null
    pesoBruto: Decimal | null
    largura: Decimal | null
    altura: Decimal | null
    profundidade: Decimal | null
    pedidoNumero: number | null
  }

  export type ProdutoNoPedidoSumAggregateOutputType = {
    id: number | null
    quantidade: Decimal | null
    valorunidade: Decimal | null
    precocusto: Decimal | null
    descontoItem: Decimal | null
    pesoBruto: Decimal | null
    largura: Decimal | null
    altura: Decimal | null
    profundidade: Decimal | null
    pedidoNumero: number | null
  }

  export type ProdutoNoPedidoMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descricao: string | null
    quantidade: Decimal | null
    valorunidade: Decimal | null
    precocusto: Decimal | null
    descontoItem: Decimal | null
    un: string | null
    pesoBruto: Decimal | null
    largura: Decimal | null
    altura: Decimal | null
    profundidade: Decimal | null
    unidadeMedida: string | null
    descricaoDetalhada: string | null
    pedidoNumero: number | null
  }

  export type ProdutoNoPedidoMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descricao: string | null
    quantidade: Decimal | null
    valorunidade: Decimal | null
    precocusto: Decimal | null
    descontoItem: Decimal | null
    un: string | null
    pesoBruto: Decimal | null
    largura: Decimal | null
    altura: Decimal | null
    profundidade: Decimal | null
    unidadeMedida: string | null
    descricaoDetalhada: string | null
    pedidoNumero: number | null
  }

  export type ProdutoNoPedidoCountAggregateOutputType = {
    id: number
    codigo: number
    descricao: number
    quantidade: number
    valorunidade: number
    precocusto: number
    descontoItem: number
    un: number
    pesoBruto: number
    largura: number
    altura: number
    profundidade: number
    unidadeMedida: number
    descricaoDetalhada: number
    pedidoNumero: number
    _all: number
  }


  export type ProdutoNoPedidoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    valorunidade?: true
    precocusto?: true
    descontoItem?: true
    pesoBruto?: true
    largura?: true
    altura?: true
    profundidade?: true
    pedidoNumero?: true
  }

  export type ProdutoNoPedidoSumAggregateInputType = {
    id?: true
    quantidade?: true
    valorunidade?: true
    precocusto?: true
    descontoItem?: true
    pesoBruto?: true
    largura?: true
    altura?: true
    profundidade?: true
    pedidoNumero?: true
  }

  export type ProdutoNoPedidoMinAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    quantidade?: true
    valorunidade?: true
    precocusto?: true
    descontoItem?: true
    un?: true
    pesoBruto?: true
    largura?: true
    altura?: true
    profundidade?: true
    unidadeMedida?: true
    descricaoDetalhada?: true
    pedidoNumero?: true
  }

  export type ProdutoNoPedidoMaxAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    quantidade?: true
    valorunidade?: true
    precocusto?: true
    descontoItem?: true
    un?: true
    pesoBruto?: true
    largura?: true
    altura?: true
    profundidade?: true
    unidadeMedida?: true
    descricaoDetalhada?: true
    pedidoNumero?: true
  }

  export type ProdutoNoPedidoCountAggregateInputType = {
    id?: true
    codigo?: true
    descricao?: true
    quantidade?: true
    valorunidade?: true
    precocusto?: true
    descontoItem?: true
    un?: true
    pesoBruto?: true
    largura?: true
    altura?: true
    profundidade?: true
    unidadeMedida?: true
    descricaoDetalhada?: true
    pedidoNumero?: true
    _all?: true
  }

  export type ProdutoNoPedidoAggregateArgs = {
    /**
     * Filter which ProdutoNoPedido to aggregate.
     * 
    **/
    where?: ProdutoNoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoNoPedidos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoNoPedidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProdutoNoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoNoPedidos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoNoPedidos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProdutoNoPedidos
    **/
    _count?: true | ProdutoNoPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoNoPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoNoPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoNoPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoNoPedidoMaxAggregateInputType
  }

  export type GetProdutoNoPedidoAggregateType<T extends ProdutoNoPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutoNoPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutoNoPedido[P]>
      : GetScalarType<T[P], AggregateProdutoNoPedido[P]>
  }




  export type ProdutoNoPedidoGroupByArgs = {
    where?: ProdutoNoPedidoWhereInput
    orderBy?: Enumerable<ProdutoNoPedidoOrderByWithAggregationInput>
    by: Array<ProdutoNoPedidoScalarFieldEnum>
    having?: ProdutoNoPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoNoPedidoCountAggregateInputType | true
    _avg?: ProdutoNoPedidoAvgAggregateInputType
    _sum?: ProdutoNoPedidoSumAggregateInputType
    _min?: ProdutoNoPedidoMinAggregateInputType
    _max?: ProdutoNoPedidoMaxAggregateInputType
  }


  export type ProdutoNoPedidoGroupByOutputType = {
    id: number
    codigo: string | null
    descricao: string | null
    quantidade: Decimal | null
    valorunidade: Decimal | null
    precocusto: Decimal | null
    descontoItem: Decimal | null
    un: string | null
    pesoBruto: Decimal | null
    largura: Decimal | null
    altura: Decimal | null
    profundidade: Decimal | null
    unidadeMedida: string | null
    descricaoDetalhada: string | null
    pedidoNumero: number | null
    _count: ProdutoNoPedidoCountAggregateOutputType | null
    _avg: ProdutoNoPedidoAvgAggregateOutputType | null
    _sum: ProdutoNoPedidoSumAggregateOutputType | null
    _min: ProdutoNoPedidoMinAggregateOutputType | null
    _max: ProdutoNoPedidoMaxAggregateOutputType | null
  }

  type GetProdutoNoPedidoGroupByPayload<T extends ProdutoNoPedidoGroupByArgs> = Promise<
    Array<
      PickArray<ProdutoNoPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoNoPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoNoPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoNoPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoNoPedidoSelect = {
    id?: boolean
    codigo?: boolean
    descricao?: boolean
    quantidade?: boolean
    valorunidade?: boolean
    precocusto?: boolean
    descontoItem?: boolean
    un?: boolean
    pesoBruto?: boolean
    largura?: boolean
    altura?: boolean
    profundidade?: boolean
    unidadeMedida?: boolean
    descricaoDetalhada?: boolean
    pedidoNumero?: boolean
    pedido?: boolean | PedidoArgs
  }

  export type ProdutoNoPedidoInclude = {
    pedido?: boolean | PedidoArgs
  }

  export type ProdutoNoPedidoGetPayload<
    S extends boolean | null | undefined | ProdutoNoPedidoArgs,
    U = keyof S
      > = S extends true
        ? ProdutoNoPedido
    : S extends undefined
    ? never
    : S extends ProdutoNoPedidoArgs | ProdutoNoPedidoFindManyArgs
    ?'include' extends U
    ? ProdutoNoPedido  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'pedido'
        ? PedidoGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ProdutoNoPedido ?ProdutoNoPedido [P]
  : 
          P extends 'pedido'
        ? PedidoGetPayload<S['select'][P]> | null : never
  } 
    : ProdutoNoPedido
  : ProdutoNoPedido


  type ProdutoNoPedidoCountArgs = Merge<
    Omit<ProdutoNoPedidoFindManyArgs, 'select' | 'include'> & {
      select?: ProdutoNoPedidoCountAggregateInputType | true
    }
  >

  export interface ProdutoNoPedidoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ProdutoNoPedido that matches the filter.
     * @param {ProdutoNoPedidoFindUniqueArgs} args - Arguments to find a ProdutoNoPedido
     * @example
     * // Get one ProdutoNoPedido
     * const produtoNoPedido = await prisma.produtoNoPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProdutoNoPedidoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProdutoNoPedidoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProdutoNoPedido'> extends True ? CheckSelect<T, Prisma__ProdutoNoPedidoClient<ProdutoNoPedido>, Prisma__ProdutoNoPedidoClient<ProdutoNoPedidoGetPayload<T>>> : CheckSelect<T, Prisma__ProdutoNoPedidoClient<ProdutoNoPedido | null >, Prisma__ProdutoNoPedidoClient<ProdutoNoPedidoGetPayload<T> | null >>

    /**
     * Find the first ProdutoNoPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoNoPedidoFindFirstArgs} args - Arguments to find a ProdutoNoPedido
     * @example
     * // Get one ProdutoNoPedido
     * const produtoNoPedido = await prisma.produtoNoPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProdutoNoPedidoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProdutoNoPedidoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProdutoNoPedido'> extends True ? CheckSelect<T, Prisma__ProdutoNoPedidoClient<ProdutoNoPedido>, Prisma__ProdutoNoPedidoClient<ProdutoNoPedidoGetPayload<T>>> : CheckSelect<T, Prisma__ProdutoNoPedidoClient<ProdutoNoPedido | null >, Prisma__ProdutoNoPedidoClient<ProdutoNoPedidoGetPayload<T> | null >>

    /**
     * Find zero or more ProdutoNoPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoNoPedidoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdutoNoPedidos
     * const produtoNoPedidos = await prisma.produtoNoPedido.findMany()
     * 
     * // Get first 10 ProdutoNoPedidos
     * const produtoNoPedidos = await prisma.produtoNoPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoNoPedidoWithIdOnly = await prisma.produtoNoPedido.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProdutoNoPedidoFindManyArgs>(
      args?: SelectSubset<T, ProdutoNoPedidoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ProdutoNoPedido>>, PrismaPromise<Array<ProdutoNoPedidoGetPayload<T>>>>

    /**
     * Create a ProdutoNoPedido.
     * @param {ProdutoNoPedidoCreateArgs} args - Arguments to create a ProdutoNoPedido.
     * @example
     * // Create one ProdutoNoPedido
     * const ProdutoNoPedido = await prisma.produtoNoPedido.create({
     *   data: {
     *     // ... data to create a ProdutoNoPedido
     *   }
     * })
     * 
    **/
    create<T extends ProdutoNoPedidoCreateArgs>(
      args: SelectSubset<T, ProdutoNoPedidoCreateArgs>
    ): CheckSelect<T, Prisma__ProdutoNoPedidoClient<ProdutoNoPedido>, Prisma__ProdutoNoPedidoClient<ProdutoNoPedidoGetPayload<T>>>

    /**
     * Create many ProdutoNoPedidos.
     *     @param {ProdutoNoPedidoCreateManyArgs} args - Arguments to create many ProdutoNoPedidos.
     *     @example
     *     // Create many ProdutoNoPedidos
     *     const produtoNoPedido = await prisma.produtoNoPedido.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProdutoNoPedidoCreateManyArgs>(
      args?: SelectSubset<T, ProdutoNoPedidoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProdutoNoPedido.
     * @param {ProdutoNoPedidoDeleteArgs} args - Arguments to delete one ProdutoNoPedido.
     * @example
     * // Delete one ProdutoNoPedido
     * const ProdutoNoPedido = await prisma.produtoNoPedido.delete({
     *   where: {
     *     // ... filter to delete one ProdutoNoPedido
     *   }
     * })
     * 
    **/
    delete<T extends ProdutoNoPedidoDeleteArgs>(
      args: SelectSubset<T, ProdutoNoPedidoDeleteArgs>
    ): CheckSelect<T, Prisma__ProdutoNoPedidoClient<ProdutoNoPedido>, Prisma__ProdutoNoPedidoClient<ProdutoNoPedidoGetPayload<T>>>

    /**
     * Update one ProdutoNoPedido.
     * @param {ProdutoNoPedidoUpdateArgs} args - Arguments to update one ProdutoNoPedido.
     * @example
     * // Update one ProdutoNoPedido
     * const produtoNoPedido = await prisma.produtoNoPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProdutoNoPedidoUpdateArgs>(
      args: SelectSubset<T, ProdutoNoPedidoUpdateArgs>
    ): CheckSelect<T, Prisma__ProdutoNoPedidoClient<ProdutoNoPedido>, Prisma__ProdutoNoPedidoClient<ProdutoNoPedidoGetPayload<T>>>

    /**
     * Delete zero or more ProdutoNoPedidos.
     * @param {ProdutoNoPedidoDeleteManyArgs} args - Arguments to filter ProdutoNoPedidos to delete.
     * @example
     * // Delete a few ProdutoNoPedidos
     * const { count } = await prisma.produtoNoPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProdutoNoPedidoDeleteManyArgs>(
      args?: SelectSubset<T, ProdutoNoPedidoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoNoPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoNoPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdutoNoPedidos
     * const produtoNoPedido = await prisma.produtoNoPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProdutoNoPedidoUpdateManyArgs>(
      args: SelectSubset<T, ProdutoNoPedidoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProdutoNoPedido.
     * @param {ProdutoNoPedidoUpsertArgs} args - Arguments to update or create a ProdutoNoPedido.
     * @example
     * // Update or create a ProdutoNoPedido
     * const produtoNoPedido = await prisma.produtoNoPedido.upsert({
     *   create: {
     *     // ... data to create a ProdutoNoPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdutoNoPedido we want to update
     *   }
     * })
    **/
    upsert<T extends ProdutoNoPedidoUpsertArgs>(
      args: SelectSubset<T, ProdutoNoPedidoUpsertArgs>
    ): CheckSelect<T, Prisma__ProdutoNoPedidoClient<ProdutoNoPedido>, Prisma__ProdutoNoPedidoClient<ProdutoNoPedidoGetPayload<T>>>

    /**
     * Count the number of ProdutoNoPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoNoPedidoCountArgs} args - Arguments to filter ProdutoNoPedidos to count.
     * @example
     * // Count the number of ProdutoNoPedidos
     * const count = await prisma.produtoNoPedido.count({
     *   where: {
     *     // ... the filter for the ProdutoNoPedidos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoNoPedidoCountArgs>(
      args?: Subset<T, ProdutoNoPedidoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoNoPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProdutoNoPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoNoPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoNoPedidoAggregateArgs>(args: Subset<T, ProdutoNoPedidoAggregateArgs>): PrismaPromise<GetProdutoNoPedidoAggregateType<T>>

    /**
     * Group by ProdutoNoPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoNoPedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoNoPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoNoPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoNoPedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoNoPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoNoPedidoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProdutoNoPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProdutoNoPedidoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    pedido<T extends PedidoArgs = {}>(args?: Subset<T, PedidoArgs>): CheckSelect<T, Prisma__PedidoClient<Pedido | null >, Prisma__PedidoClient<PedidoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ProdutoNoPedido findUnique
   */
  export type ProdutoNoPedidoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ProdutoNoPedido
     * 
    **/
    select?: ProdutoNoPedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoNoPedidoInclude | null
    /**
     * Throw an Error if a ProdutoNoPedido can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProdutoNoPedido to fetch.
     * 
    **/
    where: ProdutoNoPedidoWhereUniqueInput
  }


  /**
   * ProdutoNoPedido findFirst
   */
  export type ProdutoNoPedidoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ProdutoNoPedido
     * 
    **/
    select?: ProdutoNoPedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoNoPedidoInclude | null
    /**
     * Throw an Error if a ProdutoNoPedido can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ProdutoNoPedido to fetch.
     * 
    **/
    where?: ProdutoNoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoNoPedidos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoNoPedidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoNoPedidos.
     * 
    **/
    cursor?: ProdutoNoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoNoPedidos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoNoPedidos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoNoPedidos.
     * 
    **/
    distinct?: Enumerable<ProdutoNoPedidoScalarFieldEnum>
  }


  /**
   * ProdutoNoPedido findMany
   */
  export type ProdutoNoPedidoFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProdutoNoPedido
     * 
    **/
    select?: ProdutoNoPedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoNoPedidoInclude | null
    /**
     * Filter, which ProdutoNoPedidos to fetch.
     * 
    **/
    where?: ProdutoNoPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoNoPedidos to fetch.
     * 
    **/
    orderBy?: Enumerable<ProdutoNoPedidoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProdutoNoPedidos.
     * 
    **/
    cursor?: ProdutoNoPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoNoPedidos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoNoPedidos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProdutoNoPedidoScalarFieldEnum>
  }


  /**
   * ProdutoNoPedido create
   */
  export type ProdutoNoPedidoCreateArgs = {
    /**
     * Select specific fields to fetch from the ProdutoNoPedido
     * 
    **/
    select?: ProdutoNoPedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoNoPedidoInclude | null
    /**
     * The data needed to create a ProdutoNoPedido.
     * 
    **/
    data: XOR<ProdutoNoPedidoCreateInput, ProdutoNoPedidoUncheckedCreateInput>
  }


  /**
   * ProdutoNoPedido createMany
   */
  export type ProdutoNoPedidoCreateManyArgs = {
    data: Enumerable<ProdutoNoPedidoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProdutoNoPedido update
   */
  export type ProdutoNoPedidoUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProdutoNoPedido
     * 
    **/
    select?: ProdutoNoPedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoNoPedidoInclude | null
    /**
     * The data needed to update a ProdutoNoPedido.
     * 
    **/
    data: XOR<ProdutoNoPedidoUpdateInput, ProdutoNoPedidoUncheckedUpdateInput>
    /**
     * Choose, which ProdutoNoPedido to update.
     * 
    **/
    where: ProdutoNoPedidoWhereUniqueInput
  }


  /**
   * ProdutoNoPedido updateMany
   */
  export type ProdutoNoPedidoUpdateManyArgs = {
    data: XOR<ProdutoNoPedidoUpdateManyMutationInput, ProdutoNoPedidoUncheckedUpdateManyInput>
    where?: ProdutoNoPedidoWhereInput
  }


  /**
   * ProdutoNoPedido upsert
   */
  export type ProdutoNoPedidoUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProdutoNoPedido
     * 
    **/
    select?: ProdutoNoPedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoNoPedidoInclude | null
    /**
     * The filter to search for the ProdutoNoPedido to update in case it exists.
     * 
    **/
    where: ProdutoNoPedidoWhereUniqueInput
    /**
     * In case the ProdutoNoPedido found by the `where` argument doesn't exist, create a new ProdutoNoPedido with this data.
     * 
    **/
    create: XOR<ProdutoNoPedidoCreateInput, ProdutoNoPedidoUncheckedCreateInput>
    /**
     * In case the ProdutoNoPedido was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProdutoNoPedidoUpdateInput, ProdutoNoPedidoUncheckedUpdateInput>
  }


  /**
   * ProdutoNoPedido delete
   */
  export type ProdutoNoPedidoDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProdutoNoPedido
     * 
    **/
    select?: ProdutoNoPedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoNoPedidoInclude | null
    /**
     * Filter which ProdutoNoPedido to delete.
     * 
    **/
    where: ProdutoNoPedidoWhereUniqueInput
  }


  /**
   * ProdutoNoPedido deleteMany
   */
  export type ProdutoNoPedidoDeleteManyArgs = {
    where?: ProdutoNoPedidoWhereInput
  }


  /**
   * ProdutoNoPedido without action
   */
  export type ProdutoNoPedidoArgs = {
    /**
     * Select specific fields to fetch from the ProdutoNoPedido
     * 
    **/
    select?: ProdutoNoPedidoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProdutoNoPedidoInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProdutoScalarFieldEnum: {
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
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const CategoriasNoProdutoScalarFieldEnum: {
    produto_id: 'produto_id',
    categoria_id: 'categoria_id'
  };

  export type CategoriasNoProdutoScalarFieldEnum = (typeof CategoriasNoProdutoScalarFieldEnum)[keyof typeof CategoriasNoProdutoScalarFieldEnum]


  export const CategoriaProdutoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type CategoriaProdutoScalarFieldEnum = (typeof CategoriaProdutoScalarFieldEnum)[keyof typeof CategoriaProdutoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
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
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
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
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const TransportadoraScalarFieldEnum: {
    cnpj: 'cnpj',
    nome: 'nome',
    tipo_frete: 'tipo_frete',
    servico_correios: 'servico_correios'
  };

  export type TransportadoraScalarFieldEnum = (typeof TransportadoraScalarFieldEnum)[keyof typeof TransportadoraScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    endereco: 'endereco',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cep: 'cep',
    cidade: 'cidade',
    uf: 'uf'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const VolumeScalarFieldEnum: {
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
  };

  export type VolumeScalarFieldEnum = (typeof VolumeScalarFieldEnum)[keyof typeof VolumeScalarFieldEnum]


  export const DimensaoScalarFieldEnum: {
    id: 'id',
    peso: 'peso',
    altura: 'altura',
    largura: 'largura',
    comprimento: 'comprimento',
    diametro: 'diametro',
    volume_id: 'volume_id'
  };

  export type DimensaoScalarFieldEnum = (typeof DimensaoScalarFieldEnum)[keyof typeof DimensaoScalarFieldEnum]


  export const ParcelaScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    dataVencimento: 'dataVencimento',
    obs: 'obs',
    destino: 'destino',
    formaPagamento_id: 'formaPagamento_id',
    formaPagamentoDescricao: 'formaPagamentoDescricao',
    formaPagamentoCodigoFiscal: 'formaPagamentoCodigoFiscal',
    pedidoNumero: 'pedidoNumero'
  };

  export type ParcelaScalarFieldEnum = (typeof ParcelaScalarFieldEnum)[keyof typeof ParcelaScalarFieldEnum]


  export const NotaScalarFieldEnum: {
    numero: 'numero',
    serie: 'serie',
    dataEmissao: 'dataEmissao',
    situacao: 'situacao',
    valorNota: 'valorNota',
    chaveAcesso: 'chaveAcesso',
    pedidoNumero: 'pedidoNumero'
  };

  export type NotaScalarFieldEnum = (typeof NotaScalarFieldEnum)[keyof typeof NotaScalarFieldEnum]


  export const ProdutoNoPedidoScalarFieldEnum: {
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
  };

  export type ProdutoNoPedidoScalarFieldEnum = (typeof ProdutoNoPedidoScalarFieldEnum)[keyof typeof ProdutoNoPedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type ProdutoWhereInput = {
    AND?: Enumerable<ProdutoWhereInput>
    OR?: Enumerable<ProdutoWhereInput>
    NOT?: Enumerable<ProdutoWhereInput>
    id?: StringFilter | string
    codigo?: StringFilter | string
    descricao?: StringNullableFilter | string | null
    tipo?: StringNullableFilter | string | null
    situacao?: StringNullableFilter | string | null
    unidade?: StringNullableFilter | string | null
    preco?: DecimalNullableFilter | Decimal | number | string | null
    precoCusto?: DecimalNullableFilter | Decimal | number | string | null
    descricaoCurta?: StringNullableFilter | string | null
    descricaoComplementar?: StringNullableFilter | string | null
    dataInclusao?: DateTimeNullableFilter | Date | string | null
    dataAlteracao?: DateTimeNullableFilter | Date | string | null
    imageThumbnail?: StringNullableFilter | string | null
    urlVideo?: StringNullableFilter | string | null
    nomeFornecedor?: StringNullableFilter | string | null
    codigoFabricante?: StringNullableFilter | string | null
    marca?: StringNullableFilter | string | null
    classFiscal?: StringNullableFilter | string | null
    cest?: StringNullableFilter | string | null
    origem?: IntNullableFilter | number | null
    idGrupoProduto?: IntNullableFilter | number | null
    linkExterno?: StringNullableFilter | string | null
    observacoes?: StringNullableFilter | string | null
    grupoProduto?: StringNullableFilter | string | null
    garantia?: IntNullableFilter | number | null
    descricaoFornecedor?: StringNullableFilter | string | null
    idFabricante?: IntNullableFilter | number | null
    pesoLiq?: DecimalNullableFilter | Decimal | number | string | null
    pesoBruto?: DecimalNullableFilter | Decimal | number | string | null
    estoqueMinimo?: DecimalNullableFilter | Decimal | number | string | null
    estoqueMaximo?: DecimalNullableFilter | Decimal | number | string | null
    gtin?: StringNullableFilter | string | null
    gtinEmbalagem?: StringNullableFilter | string | null
    larguraProduto?: DecimalNullableFilter | Decimal | number | string | null
    alturaProduto?: DecimalNullableFilter | Decimal | number | string | null
    profundidadeProduto?: DecimalNullableFilter | Decimal | number | string | null
    unidadeMedida?: StringNullableFilter | string | null
    itensPorCaixa?: IntNullableFilter | number | null
    volumes?: IntNullableFilter | number | null
    localizacao?: StringNullableFilter | string | null
    crossdocking?: IntNullableFilter | number | null
    condicao?: StringNullableFilter | string | null
    freteGratis?: StringNullableFilter | string | null
    producao?: StringNullableFilter | string | null
    dataValidade?: DateTimeNullableFilter | Date | string | null
    spedTipoItem?: StringNullableFilter | string | null
    codigoPai?: StringNullableFilter | string | null
    clonarDadosPai?: StringNullableFilter | string | null
    categorias?: CategoriasNoProdutoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    situacao?: SortOrder
    unidade?: SortOrder
    preco?: SortOrder
    precoCusto?: SortOrder
    descricaoCurta?: SortOrder
    descricaoComplementar?: SortOrder
    dataInclusao?: SortOrder
    dataAlteracao?: SortOrder
    imageThumbnail?: SortOrder
    urlVideo?: SortOrder
    nomeFornecedor?: SortOrder
    codigoFabricante?: SortOrder
    marca?: SortOrder
    classFiscal?: SortOrder
    cest?: SortOrder
    origem?: SortOrder
    idGrupoProduto?: SortOrder
    linkExterno?: SortOrder
    observacoes?: SortOrder
    grupoProduto?: SortOrder
    garantia?: SortOrder
    descricaoFornecedor?: SortOrder
    idFabricante?: SortOrder
    pesoLiq?: SortOrder
    pesoBruto?: SortOrder
    estoqueMinimo?: SortOrder
    estoqueMaximo?: SortOrder
    gtin?: SortOrder
    gtinEmbalagem?: SortOrder
    larguraProduto?: SortOrder
    alturaProduto?: SortOrder
    profundidadeProduto?: SortOrder
    unidadeMedida?: SortOrder
    itensPorCaixa?: SortOrder
    volumes?: SortOrder
    localizacao?: SortOrder
    crossdocking?: SortOrder
    condicao?: SortOrder
    freteGratis?: SortOrder
    producao?: SortOrder
    dataValidade?: SortOrder
    spedTipoItem?: SortOrder
    codigoPai?: SortOrder
    clonarDadosPai?: SortOrder
    categorias?: CategoriasNoProdutoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = {
    id?: string
  }

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    situacao?: SortOrder
    unidade?: SortOrder
    preco?: SortOrder
    precoCusto?: SortOrder
    descricaoCurta?: SortOrder
    descricaoComplementar?: SortOrder
    dataInclusao?: SortOrder
    dataAlteracao?: SortOrder
    imageThumbnail?: SortOrder
    urlVideo?: SortOrder
    nomeFornecedor?: SortOrder
    codigoFabricante?: SortOrder
    marca?: SortOrder
    classFiscal?: SortOrder
    cest?: SortOrder
    origem?: SortOrder
    idGrupoProduto?: SortOrder
    linkExterno?: SortOrder
    observacoes?: SortOrder
    grupoProduto?: SortOrder
    garantia?: SortOrder
    descricaoFornecedor?: SortOrder
    idFabricante?: SortOrder
    pesoLiq?: SortOrder
    pesoBruto?: SortOrder
    estoqueMinimo?: SortOrder
    estoqueMaximo?: SortOrder
    gtin?: SortOrder
    gtinEmbalagem?: SortOrder
    larguraProduto?: SortOrder
    alturaProduto?: SortOrder
    profundidadeProduto?: SortOrder
    unidadeMedida?: SortOrder
    itensPorCaixa?: SortOrder
    volumes?: SortOrder
    localizacao?: SortOrder
    crossdocking?: SortOrder
    condicao?: SortOrder
    freteGratis?: SortOrder
    producao?: SortOrder
    dataValidade?: SortOrder
    spedTipoItem?: SortOrder
    codigoPai?: SortOrder
    clonarDadosPai?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProdutoScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProdutoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProdutoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    codigo?: StringWithAggregatesFilter | string
    descricao?: StringNullableWithAggregatesFilter | string | null
    tipo?: StringNullableWithAggregatesFilter | string | null
    situacao?: StringNullableWithAggregatesFilter | string | null
    unidade?: StringNullableWithAggregatesFilter | string | null
    preco?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    precoCusto?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    descricaoCurta?: StringNullableWithAggregatesFilter | string | null
    descricaoComplementar?: StringNullableWithAggregatesFilter | string | null
    dataInclusao?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dataAlteracao?: DateTimeNullableWithAggregatesFilter | Date | string | null
    imageThumbnail?: StringNullableWithAggregatesFilter | string | null
    urlVideo?: StringNullableWithAggregatesFilter | string | null
    nomeFornecedor?: StringNullableWithAggregatesFilter | string | null
    codigoFabricante?: StringNullableWithAggregatesFilter | string | null
    marca?: StringNullableWithAggregatesFilter | string | null
    classFiscal?: StringNullableWithAggregatesFilter | string | null
    cest?: StringNullableWithAggregatesFilter | string | null
    origem?: IntNullableWithAggregatesFilter | number | null
    idGrupoProduto?: IntNullableWithAggregatesFilter | number | null
    linkExterno?: StringNullableWithAggregatesFilter | string | null
    observacoes?: StringNullableWithAggregatesFilter | string | null
    grupoProduto?: StringNullableWithAggregatesFilter | string | null
    garantia?: IntNullableWithAggregatesFilter | number | null
    descricaoFornecedor?: StringNullableWithAggregatesFilter | string | null
    idFabricante?: IntNullableWithAggregatesFilter | number | null
    pesoLiq?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    pesoBruto?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    estoqueMinimo?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    estoqueMaximo?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    gtin?: StringNullableWithAggregatesFilter | string | null
    gtinEmbalagem?: StringNullableWithAggregatesFilter | string | null
    larguraProduto?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    alturaProduto?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    profundidadeProduto?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    unidadeMedida?: StringNullableWithAggregatesFilter | string | null
    itensPorCaixa?: IntNullableWithAggregatesFilter | number | null
    volumes?: IntNullableWithAggregatesFilter | number | null
    localizacao?: StringNullableWithAggregatesFilter | string | null
    crossdocking?: IntNullableWithAggregatesFilter | number | null
    condicao?: StringNullableWithAggregatesFilter | string | null
    freteGratis?: StringNullableWithAggregatesFilter | string | null
    producao?: StringNullableWithAggregatesFilter | string | null
    dataValidade?: DateTimeNullableWithAggregatesFilter | Date | string | null
    spedTipoItem?: StringNullableWithAggregatesFilter | string | null
    codigoPai?: StringNullableWithAggregatesFilter | string | null
    clonarDadosPai?: StringNullableWithAggregatesFilter | string | null
  }

  export type CategoriasNoProdutoWhereInput = {
    AND?: Enumerable<CategoriasNoProdutoWhereInput>
    OR?: Enumerable<CategoriasNoProdutoWhereInput>
    NOT?: Enumerable<CategoriasNoProdutoWhereInput>
    produto_id?: StringFilter | string
    produto?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
    categoria_id?: IntFilter | number
    categoria?: XOR<CategoriaProdutoRelationFilter, CategoriaProdutoWhereInput>
  }

  export type CategoriasNoProdutoOrderByWithRelationInput = {
    produto_id?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    categoria_id?: SortOrder
    categoria?: CategoriaProdutoOrderByWithRelationInput
  }

  export type CategoriasNoProdutoWhereUniqueInput = {
    produto_id_categoria_id?: CategoriasNoProdutoProduto_idCategoria_idCompoundUniqueInput
  }

  export type CategoriasNoProdutoOrderByWithAggregationInput = {
    produto_id?: SortOrder
    categoria_id?: SortOrder
    _count?: CategoriasNoProdutoCountOrderByAggregateInput
    _avg?: CategoriasNoProdutoAvgOrderByAggregateInput
    _max?: CategoriasNoProdutoMaxOrderByAggregateInput
    _min?: CategoriasNoProdutoMinOrderByAggregateInput
    _sum?: CategoriasNoProdutoSumOrderByAggregateInput
  }

  export type CategoriasNoProdutoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoriasNoProdutoScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoriasNoProdutoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoriasNoProdutoScalarWhereWithAggregatesInput>
    produto_id?: StringWithAggregatesFilter | string
    categoria_id?: IntWithAggregatesFilter | number
  }

  export type CategoriaProdutoWhereInput = {
    AND?: Enumerable<CategoriaProdutoWhereInput>
    OR?: Enumerable<CategoriaProdutoWhereInput>
    NOT?: Enumerable<CategoriaProdutoWhereInput>
    id?: IntFilter | number
    descricao?: StringFilter | string
    produtos?: CategoriasNoProdutoListRelationFilter
  }

  export type CategoriaProdutoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    produtos?: CategoriasNoProdutoOrderByRelationAggregateInput
  }

  export type CategoriaProdutoWhereUniqueInput = {
    id?: number
  }

  export type CategoriaProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: CategoriaProdutoCountOrderByAggregateInput
    _avg?: CategoriaProdutoAvgOrderByAggregateInput
    _max?: CategoriaProdutoMaxOrderByAggregateInput
    _min?: CategoriaProdutoMinOrderByAggregateInput
    _sum?: CategoriaProdutoSumOrderByAggregateInput
  }

  export type CategoriaProdutoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoriaProdutoScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoriaProdutoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoriaProdutoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    descricao?: StringWithAggregatesFilter | string
  }

  export type PedidoWhereInput = {
    AND?: Enumerable<PedidoWhereInput>
    OR?: Enumerable<PedidoWhereInput>
    NOT?: Enumerable<PedidoWhereInput>
    numero?: IntFilter | number
    desconto?: FloatNullableFilter | number | null
    observacoes?: StringNullableFilter | string | null
    observacaointerna?: StringNullableFilter | string | null
    data?: DateTimeNullableFilter | Date | string | null
    dataSaida?: DateTimeNullableFilter | Date | string | null
    numeroOrdemCompra?: StringNullableFilter | string | null
    vendedor?: StringNullableFilter | string | null
    valorfrete?: FloatNullableFilter | number | null
    outrasdespesas?: FloatNullableFilter | number | null
    totalprodutos?: FloatNullableFilter | number | null
    totalvenda?: FloatNullableFilter | number | null
    situacao?: StringNullableFilter | string | null
    loja?: StringNullableFilter | string | null
    numeroPedidoLoja?: StringNullableFilter | string | null
    tipoIntegracao?: StringNullableFilter | string | null
    cliente_id?: IntFilter | number
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    transportadora_id?: StringNullableFilter | string | null
    transportadora?: XOR<TransportadoraRelationFilter, TransportadoraWhereInput> | null
    enderecoEntrega_id?: IntNullableFilter | number | null
    enderecoEntrega?: XOR<EnderecoRelationFilter, EnderecoWhereInput> | null
    volume?: VolumeListRelationFilter
    parcelas?: ParcelaListRelationFilter
    nota?: XOR<NotaRelationFilter, NotaWhereInput> | null
    produtos?: ProdutoNoPedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    numero?: SortOrder
    desconto?: SortOrder
    observacoes?: SortOrder
    observacaointerna?: SortOrder
    data?: SortOrder
    dataSaida?: SortOrder
    numeroOrdemCompra?: SortOrder
    vendedor?: SortOrder
    valorfrete?: SortOrder
    outrasdespesas?: SortOrder
    totalprodutos?: SortOrder
    totalvenda?: SortOrder
    situacao?: SortOrder
    loja?: SortOrder
    numeroPedidoLoja?: SortOrder
    tipoIntegracao?: SortOrder
    cliente_id?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    transportadora_id?: SortOrder
    transportadora?: TransportadoraOrderByWithRelationInput
    enderecoEntrega_id?: SortOrder
    enderecoEntrega?: EnderecoOrderByWithRelationInput
    volume?: VolumeOrderByRelationAggregateInput
    parcelas?: ParcelaOrderByRelationAggregateInput
    nota?: NotaOrderByWithRelationInput
    produtos?: ProdutoNoPedidoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = {
    numero?: number
  }

  export type PedidoOrderByWithAggregationInput = {
    numero?: SortOrder
    desconto?: SortOrder
    observacoes?: SortOrder
    observacaointerna?: SortOrder
    data?: SortOrder
    dataSaida?: SortOrder
    numeroOrdemCompra?: SortOrder
    vendedor?: SortOrder
    valorfrete?: SortOrder
    outrasdespesas?: SortOrder
    totalprodutos?: SortOrder
    totalvenda?: SortOrder
    situacao?: SortOrder
    loja?: SortOrder
    numeroPedidoLoja?: SortOrder
    tipoIntegracao?: SortOrder
    cliente_id?: SortOrder
    transportadora_id?: SortOrder
    enderecoEntrega_id?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PedidoScalarWhereWithAggregatesInput>
    OR?: Enumerable<PedidoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PedidoScalarWhereWithAggregatesInput>
    numero?: IntWithAggregatesFilter | number
    desconto?: FloatNullableWithAggregatesFilter | number | null
    observacoes?: StringNullableWithAggregatesFilter | string | null
    observacaointerna?: StringNullableWithAggregatesFilter | string | null
    data?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dataSaida?: DateTimeNullableWithAggregatesFilter | Date | string | null
    numeroOrdemCompra?: StringNullableWithAggregatesFilter | string | null
    vendedor?: StringNullableWithAggregatesFilter | string | null
    valorfrete?: FloatNullableWithAggregatesFilter | number | null
    outrasdespesas?: FloatNullableWithAggregatesFilter | number | null
    totalprodutos?: FloatNullableWithAggregatesFilter | number | null
    totalvenda?: FloatNullableWithAggregatesFilter | number | null
    situacao?: StringNullableWithAggregatesFilter | string | null
    loja?: StringNullableWithAggregatesFilter | string | null
    numeroPedidoLoja?: StringNullableWithAggregatesFilter | string | null
    tipoIntegracao?: StringNullableWithAggregatesFilter | string | null
    cliente_id?: IntWithAggregatesFilter | number
    transportadora_id?: StringNullableWithAggregatesFilter | string | null
    enderecoEntrega_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type ClienteWhereInput = {
    AND?: Enumerable<ClienteWhereInput>
    OR?: Enumerable<ClienteWhereInput>
    NOT?: Enumerable<ClienteWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    tipoPessoa?: StringNullableFilter | string | null
    cpfCnpj?: StringNullableFilter | string | null
    incricaoEstadual?: StringNullableFilter | string | null
    rg?: StringNullableFilter | string | null
    contribuinte?: StringNullableFilter | string | null
    fone?: StringNullableFilter | string | null
    celular?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    endereco_id?: IntFilter | number
    endereco?: XOR<EnderecoRelationFilter, EnderecoWhereInput> | null
    pedido?: PedidoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoPessoa?: SortOrder
    cpfCnpj?: SortOrder
    incricaoEstadual?: SortOrder
    rg?: SortOrder
    contribuinte?: SortOrder
    fone?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    endereco_id?: SortOrder
    endereco?: EnderecoOrderByWithRelationInput
    pedido?: PedidoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = {
    id?: number
  }

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoPessoa?: SortOrder
    cpfCnpj?: SortOrder
    incricaoEstadual?: SortOrder
    rg?: SortOrder
    contribuinte?: SortOrder
    fone?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    endereco_id?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClienteScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClienteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClienteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    tipoPessoa?: StringNullableWithAggregatesFilter | string | null
    cpfCnpj?: StringNullableWithAggregatesFilter | string | null
    incricaoEstadual?: StringNullableWithAggregatesFilter | string | null
    rg?: StringNullableWithAggregatesFilter | string | null
    contribuinte?: StringNullableWithAggregatesFilter | string | null
    fone?: StringNullableWithAggregatesFilter | string | null
    celular?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    endereco_id?: IntWithAggregatesFilter | number
  }

  export type TransportadoraWhereInput = {
    AND?: Enumerable<TransportadoraWhereInput>
    OR?: Enumerable<TransportadoraWhereInput>
    NOT?: Enumerable<TransportadoraWhereInput>
    cnpj?: StringFilter | string
    nome?: StringNullableFilter | string | null
    tipo_frete?: StringNullableFilter | string | null
    servico_correios?: StringNullableFilter | string | null
    pedido?: PedidoListRelationFilter
  }

  export type TransportadoraOrderByWithRelationInput = {
    cnpj?: SortOrder
    nome?: SortOrder
    tipo_frete?: SortOrder
    servico_correios?: SortOrder
    pedido?: PedidoOrderByRelationAggregateInput
  }

  export type TransportadoraWhereUniqueInput = {
    cnpj?: string
  }

  export type TransportadoraOrderByWithAggregationInput = {
    cnpj?: SortOrder
    nome?: SortOrder
    tipo_frete?: SortOrder
    servico_correios?: SortOrder
    _count?: TransportadoraCountOrderByAggregateInput
    _max?: TransportadoraMaxOrderByAggregateInput
    _min?: TransportadoraMinOrderByAggregateInput
  }

  export type TransportadoraScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TransportadoraScalarWhereWithAggregatesInput>
    OR?: Enumerable<TransportadoraScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TransportadoraScalarWhereWithAggregatesInput>
    cnpj?: StringWithAggregatesFilter | string
    nome?: StringNullableWithAggregatesFilter | string | null
    tipo_frete?: StringNullableWithAggregatesFilter | string | null
    servico_correios?: StringNullableWithAggregatesFilter | string | null
  }

  export type EnderecoWhereInput = {
    AND?: Enumerable<EnderecoWhereInput>
    OR?: Enumerable<EnderecoWhereInput>
    NOT?: Enumerable<EnderecoWhereInput>
    id?: IntFilter | number
    nome?: StringNullableFilter | string | null
    endereco?: StringNullableFilter | string | null
    numero?: StringNullableFilter | string | null
    complemento?: StringNullableFilter | string | null
    bairro?: StringNullableFilter | string | null
    cep?: StringNullableFilter | string | null
    cidade?: StringNullableFilter | string | null
    uf?: StringNullableFilter | string | null
    cliente?: ClienteListRelationFilter
    pedido?: PedidoListRelationFilter
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    cliente?: ClienteOrderByRelationAggregateInput
    pedido?: PedidoOrderByRelationAggregateInput
  }

  export type EnderecoWhereUniqueInput = {
    id?: number
  }

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _avg?: EnderecoAvgOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
    _sum?: EnderecoSumOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EnderecoScalarWhereWithAggregatesInput>
    OR?: Enumerable<EnderecoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EnderecoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringNullableWithAggregatesFilter | string | null
    endereco?: StringNullableWithAggregatesFilter | string | null
    numero?: StringNullableWithAggregatesFilter | string | null
    complemento?: StringNullableWithAggregatesFilter | string | null
    bairro?: StringNullableWithAggregatesFilter | string | null
    cep?: StringNullableWithAggregatesFilter | string | null
    cidade?: StringNullableWithAggregatesFilter | string | null
    uf?: StringNullableWithAggregatesFilter | string | null
  }

  export type VolumeWhereInput = {
    AND?: Enumerable<VolumeWhereInput>
    OR?: Enumerable<VolumeWhereInput>
    NOT?: Enumerable<VolumeWhereInput>
    id?: IntFilter | number
    idServico?: IntFilter | number
    idOrigem?: StringNullableFilter | string | null
    servico?: StringNullableFilter | string | null
    codigoServico?: StringNullableFilter | string | null
    codigoRastreamento?: StringNullableFilter | string | null
    valorFretePrevisto?: FloatNullableFilter | number | null
    remessaNumero?: StringNullableFilter | string | null
    remessaDataCriacao?: DateTimeNullableFilter | Date | string | null
    dataSaida?: DateTimeNullableFilter | Date | string | null
    prazoEntregaPrevisto?: StringNullableFilter | string | null
    valorDeclarado?: FloatNullableFilter | number | null
    avisoRecebimento?: BoolNullableFilter | boolean | null
    maoPropria?: BoolNullableFilter | boolean | null
    urlRastreamento?: StringNullableFilter | string | null
    pedidoNumero?: IntNullableFilter | number | null
    pedido?: XOR<PedidoRelationFilter, PedidoWhereInput> | null
    dimensao?: XOR<DimensaoRelationFilter, DimensaoWhereInput> | null
  }

  export type VolumeOrderByWithRelationInput = {
    id?: SortOrder
    idServico?: SortOrder
    idOrigem?: SortOrder
    servico?: SortOrder
    codigoServico?: SortOrder
    codigoRastreamento?: SortOrder
    valorFretePrevisto?: SortOrder
    remessaNumero?: SortOrder
    remessaDataCriacao?: SortOrder
    dataSaida?: SortOrder
    prazoEntregaPrevisto?: SortOrder
    valorDeclarado?: SortOrder
    avisoRecebimento?: SortOrder
    maoPropria?: SortOrder
    urlRastreamento?: SortOrder
    pedidoNumero?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    dimensao?: DimensaoOrderByWithRelationInput
  }

  export type VolumeWhereUniqueInput = {
    id?: number
  }

  export type VolumeOrderByWithAggregationInput = {
    id?: SortOrder
    idServico?: SortOrder
    idOrigem?: SortOrder
    servico?: SortOrder
    codigoServico?: SortOrder
    codigoRastreamento?: SortOrder
    valorFretePrevisto?: SortOrder
    remessaNumero?: SortOrder
    remessaDataCriacao?: SortOrder
    dataSaida?: SortOrder
    prazoEntregaPrevisto?: SortOrder
    valorDeclarado?: SortOrder
    avisoRecebimento?: SortOrder
    maoPropria?: SortOrder
    urlRastreamento?: SortOrder
    pedidoNumero?: SortOrder
    _count?: VolumeCountOrderByAggregateInput
    _avg?: VolumeAvgOrderByAggregateInput
    _max?: VolumeMaxOrderByAggregateInput
    _min?: VolumeMinOrderByAggregateInput
    _sum?: VolumeSumOrderByAggregateInput
  }

  export type VolumeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VolumeScalarWhereWithAggregatesInput>
    OR?: Enumerable<VolumeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VolumeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idServico?: IntWithAggregatesFilter | number
    idOrigem?: StringNullableWithAggregatesFilter | string | null
    servico?: StringNullableWithAggregatesFilter | string | null
    codigoServico?: StringNullableWithAggregatesFilter | string | null
    codigoRastreamento?: StringNullableWithAggregatesFilter | string | null
    valorFretePrevisto?: FloatNullableWithAggregatesFilter | number | null
    remessaNumero?: StringNullableWithAggregatesFilter | string | null
    remessaDataCriacao?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dataSaida?: DateTimeNullableWithAggregatesFilter | Date | string | null
    prazoEntregaPrevisto?: StringNullableWithAggregatesFilter | string | null
    valorDeclarado?: FloatNullableWithAggregatesFilter | number | null
    avisoRecebimento?: BoolNullableWithAggregatesFilter | boolean | null
    maoPropria?: BoolNullableWithAggregatesFilter | boolean | null
    urlRastreamento?: StringNullableWithAggregatesFilter | string | null
    pedidoNumero?: IntNullableWithAggregatesFilter | number | null
  }

  export type DimensaoWhereInput = {
    AND?: Enumerable<DimensaoWhereInput>
    OR?: Enumerable<DimensaoWhereInput>
    NOT?: Enumerable<DimensaoWhereInput>
    id?: IntFilter | number
    peso?: StringNullableFilter | string | null
    altura?: StringNullableFilter | string | null
    largura?: StringNullableFilter | string | null
    comprimento?: StringNullableFilter | string | null
    diametro?: StringNullableFilter | string | null
    volume_id?: IntFilter | number
    volume?: XOR<VolumeRelationFilter, VolumeWhereInput>
  }

  export type DimensaoOrderByWithRelationInput = {
    id?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    largura?: SortOrder
    comprimento?: SortOrder
    diametro?: SortOrder
    volume_id?: SortOrder
    volume?: VolumeOrderByWithRelationInput
  }

  export type DimensaoWhereUniqueInput = {
    id?: number
    volume_id?: number
  }

  export type DimensaoOrderByWithAggregationInput = {
    id?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    largura?: SortOrder
    comprimento?: SortOrder
    diametro?: SortOrder
    volume_id?: SortOrder
    _count?: DimensaoCountOrderByAggregateInput
    _avg?: DimensaoAvgOrderByAggregateInput
    _max?: DimensaoMaxOrderByAggregateInput
    _min?: DimensaoMinOrderByAggregateInput
    _sum?: DimensaoSumOrderByAggregateInput
  }

  export type DimensaoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DimensaoScalarWhereWithAggregatesInput>
    OR?: Enumerable<DimensaoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DimensaoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    peso?: StringNullableWithAggregatesFilter | string | null
    altura?: StringNullableWithAggregatesFilter | string | null
    largura?: StringNullableWithAggregatesFilter | string | null
    comprimento?: StringNullableWithAggregatesFilter | string | null
    diametro?: StringNullableWithAggregatesFilter | string | null
    volume_id?: IntWithAggregatesFilter | number
  }

  export type ParcelaWhereInput = {
    AND?: Enumerable<ParcelaWhereInput>
    OR?: Enumerable<ParcelaWhereInput>
    NOT?: Enumerable<ParcelaWhereInput>
    id?: IntFilter | number
    valor?: DecimalFilter | Decimal | number | string
    dataVencimento?: DateTimeFilter | Date | string
    obs?: StringNullableFilter | string | null
    destino?: StringNullableFilter | string | null
    formaPagamento_id?: StringFilter | string
    formaPagamentoDescricao?: StringNullableFilter | string | null
    formaPagamentoCodigoFiscal?: StringNullableFilter | string | null
    pedidoNumero?: IntNullableFilter | number | null
    Pedido?: XOR<PedidoRelationFilter, PedidoWhereInput> | null
  }

  export type ParcelaOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    obs?: SortOrder
    destino?: SortOrder
    formaPagamento_id?: SortOrder
    formaPagamentoDescricao?: SortOrder
    formaPagamentoCodigoFiscal?: SortOrder
    pedidoNumero?: SortOrder
    Pedido?: PedidoOrderByWithRelationInput
  }

  export type ParcelaWhereUniqueInput = {
    id?: number
  }

  export type ParcelaOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    obs?: SortOrder
    destino?: SortOrder
    formaPagamento_id?: SortOrder
    formaPagamentoDescricao?: SortOrder
    formaPagamentoCodigoFiscal?: SortOrder
    pedidoNumero?: SortOrder
    _count?: ParcelaCountOrderByAggregateInput
    _avg?: ParcelaAvgOrderByAggregateInput
    _max?: ParcelaMaxOrderByAggregateInput
    _min?: ParcelaMinOrderByAggregateInput
    _sum?: ParcelaSumOrderByAggregateInput
  }

  export type ParcelaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ParcelaScalarWhereWithAggregatesInput>
    OR?: Enumerable<ParcelaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ParcelaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    valor?: DecimalWithAggregatesFilter | Decimal | number | string
    dataVencimento?: DateTimeWithAggregatesFilter | Date | string
    obs?: StringNullableWithAggregatesFilter | string | null
    destino?: StringNullableWithAggregatesFilter | string | null
    formaPagamento_id?: StringWithAggregatesFilter | string
    formaPagamentoDescricao?: StringNullableWithAggregatesFilter | string | null
    formaPagamentoCodigoFiscal?: StringNullableWithAggregatesFilter | string | null
    pedidoNumero?: IntNullableWithAggregatesFilter | number | null
  }

  export type NotaWhereInput = {
    AND?: Enumerable<NotaWhereInput>
    OR?: Enumerable<NotaWhereInput>
    NOT?: Enumerable<NotaWhereInput>
    numero?: StringFilter | string
    serie?: StringNullableFilter | string | null
    dataEmissao?: DateTimeNullableFilter | Date | string | null
    situacao?: IntNullableFilter | number | null
    valorNota?: DecimalNullableFilter | Decimal | number | string | null
    chaveAcesso?: StringNullableFilter | string | null
    pedidoNumero?: IntFilter | number
    pedido?: XOR<PedidoRelationFilter, PedidoWhereInput>
  }

  export type NotaOrderByWithRelationInput = {
    numero?: SortOrder
    serie?: SortOrder
    dataEmissao?: SortOrder
    situacao?: SortOrder
    valorNota?: SortOrder
    chaveAcesso?: SortOrder
    pedidoNumero?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
  }

  export type NotaWhereUniqueInput = {
    numero?: string
    pedidoNumero?: number
  }

  export type NotaOrderByWithAggregationInput = {
    numero?: SortOrder
    serie?: SortOrder
    dataEmissao?: SortOrder
    situacao?: SortOrder
    valorNota?: SortOrder
    chaveAcesso?: SortOrder
    pedidoNumero?: SortOrder
    _count?: NotaCountOrderByAggregateInput
    _avg?: NotaAvgOrderByAggregateInput
    _max?: NotaMaxOrderByAggregateInput
    _min?: NotaMinOrderByAggregateInput
    _sum?: NotaSumOrderByAggregateInput
  }

  export type NotaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotaScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotaScalarWhereWithAggregatesInput>
    numero?: StringWithAggregatesFilter | string
    serie?: StringNullableWithAggregatesFilter | string | null
    dataEmissao?: DateTimeNullableWithAggregatesFilter | Date | string | null
    situacao?: IntNullableWithAggregatesFilter | number | null
    valorNota?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    chaveAcesso?: StringNullableWithAggregatesFilter | string | null
    pedidoNumero?: IntWithAggregatesFilter | number
  }

  export type ProdutoNoPedidoWhereInput = {
    AND?: Enumerable<ProdutoNoPedidoWhereInput>
    OR?: Enumerable<ProdutoNoPedidoWhereInput>
    NOT?: Enumerable<ProdutoNoPedidoWhereInput>
    id?: IntFilter | number
    codigo?: StringNullableFilter | string | null
    descricao?: StringNullableFilter | string | null
    quantidade?: DecimalNullableFilter | Decimal | number | string | null
    valorunidade?: DecimalNullableFilter | Decimal | number | string | null
    precocusto?: DecimalNullableFilter | Decimal | number | string | null
    descontoItem?: DecimalNullableFilter | Decimal | number | string | null
    un?: StringNullableFilter | string | null
    pesoBruto?: DecimalNullableFilter | Decimal | number | string | null
    largura?: DecimalNullableFilter | Decimal | number | string | null
    altura?: DecimalNullableFilter | Decimal | number | string | null
    profundidade?: DecimalNullableFilter | Decimal | number | string | null
    unidadeMedida?: StringNullableFilter | string | null
    descricaoDetalhada?: StringNullableFilter | string | null
    pedidoNumero?: IntNullableFilter | number | null
    pedido?: XOR<PedidoRelationFilter, PedidoWhereInput> | null
  }

  export type ProdutoNoPedidoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    valorunidade?: SortOrder
    precocusto?: SortOrder
    descontoItem?: SortOrder
    un?: SortOrder
    pesoBruto?: SortOrder
    largura?: SortOrder
    altura?: SortOrder
    profundidade?: SortOrder
    unidadeMedida?: SortOrder
    descricaoDetalhada?: SortOrder
    pedidoNumero?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
  }

  export type ProdutoNoPedidoWhereUniqueInput = {
    id?: number
  }

  export type ProdutoNoPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    valorunidade?: SortOrder
    precocusto?: SortOrder
    descontoItem?: SortOrder
    un?: SortOrder
    pesoBruto?: SortOrder
    largura?: SortOrder
    altura?: SortOrder
    profundidade?: SortOrder
    unidadeMedida?: SortOrder
    descricaoDetalhada?: SortOrder
    pedidoNumero?: SortOrder
    _count?: ProdutoNoPedidoCountOrderByAggregateInput
    _avg?: ProdutoNoPedidoAvgOrderByAggregateInput
    _max?: ProdutoNoPedidoMaxOrderByAggregateInput
    _min?: ProdutoNoPedidoMinOrderByAggregateInput
    _sum?: ProdutoNoPedidoSumOrderByAggregateInput
  }

  export type ProdutoNoPedidoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProdutoNoPedidoScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProdutoNoPedidoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProdutoNoPedidoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    codigo?: StringNullableWithAggregatesFilter | string | null
    descricao?: StringNullableWithAggregatesFilter | string | null
    quantidade?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    valorunidade?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    precocusto?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    descontoItem?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    un?: StringNullableWithAggregatesFilter | string | null
    pesoBruto?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    largura?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    altura?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    profundidade?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    unidadeMedida?: StringNullableWithAggregatesFilter | string | null
    descricaoDetalhada?: StringNullableWithAggregatesFilter | string | null
    pedidoNumero?: IntNullableWithAggregatesFilter | number | null
  }

  export type ProdutoCreateInput = {
    id: string
    codigo: string
    descricao?: string | null
    tipo?: string | null
    situacao?: string | null
    unidade?: string | null
    preco?: Decimal | number | string | null
    precoCusto?: Decimal | number | string | null
    descricaoCurta?: string | null
    descricaoComplementar?: string | null
    dataInclusao?: Date | string | null
    dataAlteracao?: Date | string | null
    imageThumbnail?: string | null
    urlVideo?: string | null
    nomeFornecedor?: string | null
    codigoFabricante?: string | null
    marca?: string | null
    classFiscal?: string | null
    cest?: string | null
    origem?: number | null
    idGrupoProduto?: number | null
    linkExterno?: string | null
    observacoes?: string | null
    grupoProduto?: string | null
    garantia?: number | null
    descricaoFornecedor?: string | null
    idFabricante?: number | null
    pesoLiq?: Decimal | number | string | null
    pesoBruto?: Decimal | number | string | null
    estoqueMinimo?: Decimal | number | string | null
    estoqueMaximo?: Decimal | number | string | null
    gtin?: string | null
    gtinEmbalagem?: string | null
    larguraProduto?: Decimal | number | string | null
    alturaProduto?: Decimal | number | string | null
    profundidadeProduto?: Decimal | number | string | null
    unidadeMedida?: string | null
    itensPorCaixa?: number | null
    volumes?: number | null
    localizacao?: string | null
    crossdocking?: number | null
    condicao?: string | null
    freteGratis?: string | null
    producao?: string | null
    dataValidade?: Date | string | null
    spedTipoItem?: string | null
    codigoPai?: string | null
    clonarDadosPai?: string | null
    categorias?: CategoriasNoProdutoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id: string
    codigo: string
    descricao?: string | null
    tipo?: string | null
    situacao?: string | null
    unidade?: string | null
    preco?: Decimal | number | string | null
    precoCusto?: Decimal | number | string | null
    descricaoCurta?: string | null
    descricaoComplementar?: string | null
    dataInclusao?: Date | string | null
    dataAlteracao?: Date | string | null
    imageThumbnail?: string | null
    urlVideo?: string | null
    nomeFornecedor?: string | null
    codigoFabricante?: string | null
    marca?: string | null
    classFiscal?: string | null
    cest?: string | null
    origem?: number | null
    idGrupoProduto?: number | null
    linkExterno?: string | null
    observacoes?: string | null
    grupoProduto?: string | null
    garantia?: number | null
    descricaoFornecedor?: string | null
    idFabricante?: number | null
    pesoLiq?: Decimal | number | string | null
    pesoBruto?: Decimal | number | string | null
    estoqueMinimo?: Decimal | number | string | null
    estoqueMaximo?: Decimal | number | string | null
    gtin?: string | null
    gtinEmbalagem?: string | null
    larguraProduto?: Decimal | number | string | null
    alturaProduto?: Decimal | number | string | null
    profundidadeProduto?: Decimal | number | string | null
    unidadeMedida?: string | null
    itensPorCaixa?: number | null
    volumes?: number | null
    localizacao?: string | null
    crossdocking?: number | null
    condicao?: string | null
    freteGratis?: string | null
    producao?: string | null
    dataValidade?: Date | string | null
    spedTipoItem?: string | null
    codigoPai?: string | null
    clonarDadosPai?: string | null
    categorias?: CategoriasNoProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precoCusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descricaoCurta?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoComplementar?: NullableStringFieldUpdateOperationsInput | string | null
    dataInclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataAlteracao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    codigoFabricante?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    classFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableIntFieldUpdateOperationsInput | number | null
    idGrupoProduto?: NullableIntFieldUpdateOperationsInput | number | null
    linkExterno?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    grupoProduto?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: NullableIntFieldUpdateOperationsInput | number | null
    descricaoFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    idFabricante?: NullableIntFieldUpdateOperationsInput | number | null
    pesoLiq?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMinimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMaximo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    gtinEmbalagem?: NullableStringFieldUpdateOperationsInput | string | null
    larguraProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    alturaProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidadeProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    itensPorCaixa?: NullableIntFieldUpdateOperationsInput | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    crossdocking?: NullableIntFieldUpdateOperationsInput | number | null
    condicao?: NullableStringFieldUpdateOperationsInput | string | null
    freteGratis?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spedTipoItem?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPai?: NullableStringFieldUpdateOperationsInput | string | null
    clonarDadosPai?: NullableStringFieldUpdateOperationsInput | string | null
    categorias?: CategoriasNoProdutoUpdateManyWithoutProdutoInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precoCusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descricaoCurta?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoComplementar?: NullableStringFieldUpdateOperationsInput | string | null
    dataInclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataAlteracao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    codigoFabricante?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    classFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableIntFieldUpdateOperationsInput | number | null
    idGrupoProduto?: NullableIntFieldUpdateOperationsInput | number | null
    linkExterno?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    grupoProduto?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: NullableIntFieldUpdateOperationsInput | number | null
    descricaoFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    idFabricante?: NullableIntFieldUpdateOperationsInput | number | null
    pesoLiq?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMinimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMaximo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    gtinEmbalagem?: NullableStringFieldUpdateOperationsInput | string | null
    larguraProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    alturaProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidadeProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    itensPorCaixa?: NullableIntFieldUpdateOperationsInput | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    crossdocking?: NullableIntFieldUpdateOperationsInput | number | null
    condicao?: NullableStringFieldUpdateOperationsInput | string | null
    freteGratis?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spedTipoItem?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPai?: NullableStringFieldUpdateOperationsInput | string | null
    clonarDadosPai?: NullableStringFieldUpdateOperationsInput | string | null
    categorias?: CategoriasNoProdutoUncheckedUpdateManyWithoutProdutoInput
  }

  export type ProdutoCreateManyInput = {
    id: string
    codigo: string
    descricao?: string | null
    tipo?: string | null
    situacao?: string | null
    unidade?: string | null
    preco?: Decimal | number | string | null
    precoCusto?: Decimal | number | string | null
    descricaoCurta?: string | null
    descricaoComplementar?: string | null
    dataInclusao?: Date | string | null
    dataAlteracao?: Date | string | null
    imageThumbnail?: string | null
    urlVideo?: string | null
    nomeFornecedor?: string | null
    codigoFabricante?: string | null
    marca?: string | null
    classFiscal?: string | null
    cest?: string | null
    origem?: number | null
    idGrupoProduto?: number | null
    linkExterno?: string | null
    observacoes?: string | null
    grupoProduto?: string | null
    garantia?: number | null
    descricaoFornecedor?: string | null
    idFabricante?: number | null
    pesoLiq?: Decimal | number | string | null
    pesoBruto?: Decimal | number | string | null
    estoqueMinimo?: Decimal | number | string | null
    estoqueMaximo?: Decimal | number | string | null
    gtin?: string | null
    gtinEmbalagem?: string | null
    larguraProduto?: Decimal | number | string | null
    alturaProduto?: Decimal | number | string | null
    profundidadeProduto?: Decimal | number | string | null
    unidadeMedida?: string | null
    itensPorCaixa?: number | null
    volumes?: number | null
    localizacao?: string | null
    crossdocking?: number | null
    condicao?: string | null
    freteGratis?: string | null
    producao?: string | null
    dataValidade?: Date | string | null
    spedTipoItem?: string | null
    codigoPai?: string | null
    clonarDadosPai?: string | null
  }

  export type ProdutoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precoCusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descricaoCurta?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoComplementar?: NullableStringFieldUpdateOperationsInput | string | null
    dataInclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataAlteracao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    codigoFabricante?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    classFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableIntFieldUpdateOperationsInput | number | null
    idGrupoProduto?: NullableIntFieldUpdateOperationsInput | number | null
    linkExterno?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    grupoProduto?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: NullableIntFieldUpdateOperationsInput | number | null
    descricaoFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    idFabricante?: NullableIntFieldUpdateOperationsInput | number | null
    pesoLiq?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMinimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMaximo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    gtinEmbalagem?: NullableStringFieldUpdateOperationsInput | string | null
    larguraProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    alturaProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidadeProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    itensPorCaixa?: NullableIntFieldUpdateOperationsInput | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    crossdocking?: NullableIntFieldUpdateOperationsInput | number | null
    condicao?: NullableStringFieldUpdateOperationsInput | string | null
    freteGratis?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spedTipoItem?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPai?: NullableStringFieldUpdateOperationsInput | string | null
    clonarDadosPai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precoCusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descricaoCurta?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoComplementar?: NullableStringFieldUpdateOperationsInput | string | null
    dataInclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataAlteracao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    codigoFabricante?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    classFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableIntFieldUpdateOperationsInput | number | null
    idGrupoProduto?: NullableIntFieldUpdateOperationsInput | number | null
    linkExterno?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    grupoProduto?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: NullableIntFieldUpdateOperationsInput | number | null
    descricaoFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    idFabricante?: NullableIntFieldUpdateOperationsInput | number | null
    pesoLiq?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMinimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMaximo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    gtinEmbalagem?: NullableStringFieldUpdateOperationsInput | string | null
    larguraProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    alturaProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidadeProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    itensPorCaixa?: NullableIntFieldUpdateOperationsInput | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    crossdocking?: NullableIntFieldUpdateOperationsInput | number | null
    condicao?: NullableStringFieldUpdateOperationsInput | string | null
    freteGratis?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spedTipoItem?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPai?: NullableStringFieldUpdateOperationsInput | string | null
    clonarDadosPai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriasNoProdutoCreateInput = {
    produto: ProdutoCreateNestedOneWithoutCategoriasInput
    categoria: CategoriaProdutoCreateNestedOneWithoutProdutosInput
  }

  export type CategoriasNoProdutoUncheckedCreateInput = {
    produto_id: string
    categoria_id: number
  }

  export type CategoriasNoProdutoUpdateInput = {
    produto?: ProdutoUpdateOneRequiredWithoutCategoriasInput
    categoria?: CategoriaProdutoUpdateOneRequiredWithoutProdutosInput
  }

  export type CategoriasNoProdutoUncheckedUpdateInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriasNoProdutoCreateManyInput = {
    produto_id: string
    categoria_id: number
  }

  export type CategoriasNoProdutoUpdateManyMutationInput = {

  }

  export type CategoriasNoProdutoUncheckedUpdateManyInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaProdutoCreateInput = {
    id: number
    descricao: string
    produtos?: CategoriasNoProdutoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaProdutoUncheckedCreateInput = {
    id: number
    descricao: string
    produtos?: CategoriasNoProdutoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaProdutoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    produtos?: CategoriasNoProdutoUpdateManyWithoutCategoriaInput
  }

  export type CategoriaProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    produtos?: CategoriasNoProdutoUncheckedUpdateManyWithoutCategoriaInput
  }

  export type CategoriaProdutoCreateManyInput = {
    id: number
    descricao: string
  }

  export type CategoriaProdutoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente: ClienteCreateNestedOneWithoutPedidoInput
    transportadora?: TransportadoraCreateNestedOneWithoutPedidoInput
    enderecoEntrega?: EnderecoCreateNestedOneWithoutPedidoInput
    volume?: VolumeCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaCreateNestedManyWithoutPedidoInput
    nota?: NotaCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    transportadora_id?: string | null
    enderecoEntrega_id?: number | null
    volume?: VolumeUncheckedCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutPedidoInput
    nota?: NotaUncheckedCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidoInput
    transportadora?: TransportadoraUpdateOneWithoutPedidoInput
    enderecoEntrega?: EnderecoUpdateOneWithoutPedidoInput
    volume?: VolumeUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUpdateManyWithoutPedidoInput
    nota?: NotaUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUpdateManyWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: IntFieldUpdateOperationsInput | number
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: VolumeUncheckedUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutPedidoInput
    nota?: NotaUncheckedUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedUpdateManyWithoutPedidoInput
  }

  export type PedidoCreateManyInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    transportadora_id?: string | null
    enderecoEntrega_id?: number | null
  }

  export type PedidoUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoUncheckedUpdateManyInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: IntFieldUpdateOperationsInput | number
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClienteCreateInput = {
    id: number
    nome: string
    tipoPessoa?: string | null
    cpfCnpj?: string | null
    incricaoEstadual?: string | null
    rg?: string | null
    contribuinte?: string | null
    fone?: string | null
    celular?: string | null
    email?: string | null
    endereco?: EnderecoCreateNestedOneWithoutClienteInput
    pedido?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id: number
    nome: string
    tipoPessoa?: string | null
    cpfCnpj?: string | null
    incricaoEstadual?: string | null
    rg?: string | null
    contribuinte?: string | null
    fone?: string | null
    celular?: string | null
    email?: string | null
    endereco_id: number
    pedido?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: EnderecoUpdateOneWithoutClienteInput
    pedido?: PedidoUpdateManyWithoutClienteInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco_id?: IntFieldUpdateOperationsInput | number
    pedido?: PedidoUncheckedUpdateManyWithoutClienteInput
  }

  export type ClienteCreateManyInput = {
    id: number
    nome: string
    tipoPessoa?: string | null
    cpfCnpj?: string | null
    incricaoEstadual?: string | null
    rg?: string | null
    contribuinte?: string | null
    fone?: string | null
    celular?: string | null
    email?: string | null
    endereco_id: number
  }

  export type ClienteUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransportadoraCreateInput = {
    cnpj: string
    nome?: string | null
    tipo_frete?: string | null
    servico_correios?: string | null
    pedido?: PedidoCreateNestedManyWithoutTransportadoraInput
  }

  export type TransportadoraUncheckedCreateInput = {
    cnpj: string
    nome?: string | null
    tipo_frete?: string | null
    servico_correios?: string | null
    pedido?: PedidoUncheckedCreateNestedManyWithoutTransportadoraInput
  }

  export type TransportadoraUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_frete?: NullableStringFieldUpdateOperationsInput | string | null
    servico_correios?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateManyWithoutTransportadoraInput
  }

  export type TransportadoraUncheckedUpdateInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_frete?: NullableStringFieldUpdateOperationsInput | string | null
    servico_correios?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUncheckedUpdateManyWithoutTransportadoraInput
  }

  export type TransportadoraCreateManyInput = {
    cnpj: string
    nome?: string | null
    tipo_frete?: string | null
    servico_correios?: string | null
  }

  export type TransportadoraUpdateManyMutationInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_frete?: NullableStringFieldUpdateOperationsInput | string | null
    servico_correios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransportadoraUncheckedUpdateManyInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_frete?: NullableStringFieldUpdateOperationsInput | string | null
    servico_correios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoCreateInput = {
    nome?: string | null
    endereco?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cep?: string | null
    cidade?: string | null
    uf?: string | null
    cliente?: ClienteCreateNestedManyWithoutEnderecoInput
    pedido?: PedidoCreateNestedManyWithoutEnderecoEntregaInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: number
    nome?: string | null
    endereco?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cep?: string | null
    cidade?: string | null
    uf?: string | null
    cliente?: ClienteUncheckedCreateNestedManyWithoutEnderecoInput
    pedido?: PedidoUncheckedCreateNestedManyWithoutEnderecoEntregaInput
  }

  export type EnderecoUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateManyWithoutEnderecoInput
    pedido?: PedidoUpdateManyWithoutEnderecoEntregaInput
  }

  export type EnderecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUncheckedUpdateManyWithoutEnderecoInput
    pedido?: PedidoUncheckedUpdateManyWithoutEnderecoEntregaInput
  }

  export type EnderecoCreateManyInput = {
    id?: number
    nome?: string | null
    endereco?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cep?: string | null
    cidade?: string | null
    uf?: string | null
  }

  export type EnderecoUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VolumeCreateInput = {
    id: number
    idServico: number
    idOrigem?: string | null
    servico?: string | null
    codigoServico?: string | null
    codigoRastreamento?: string | null
    valorFretePrevisto?: number | null
    remessaNumero?: string | null
    remessaDataCriacao?: Date | string | null
    dataSaida?: Date | string | null
    prazoEntregaPrevisto?: string | null
    valorDeclarado?: number | null
    avisoRecebimento?: boolean | null
    maoPropria?: boolean | null
    urlRastreamento?: string | null
    pedido?: PedidoCreateNestedOneWithoutVolumeInput
    dimensao?: DimensaoCreateNestedOneWithoutVolumeInput
  }

  export type VolumeUncheckedCreateInput = {
    id: number
    idServico: number
    idOrigem?: string | null
    servico?: string | null
    codigoServico?: string | null
    codigoRastreamento?: string | null
    valorFretePrevisto?: number | null
    remessaNumero?: string | null
    remessaDataCriacao?: Date | string | null
    dataSaida?: Date | string | null
    prazoEntregaPrevisto?: string | null
    valorDeclarado?: number | null
    avisoRecebimento?: boolean | null
    maoPropria?: boolean | null
    urlRastreamento?: string | null
    pedidoNumero?: number | null
    dimensao?: DimensaoUncheckedCreateNestedOneWithoutVolumeInput
  }

  export type VolumeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneWithoutVolumeInput
    dimensao?: DimensaoUpdateOneWithoutVolumeInput
  }

  export type VolumeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: NullableIntFieldUpdateOperationsInput | number | null
    dimensao?: DimensaoUncheckedUpdateOneWithoutVolumeInput
  }

  export type VolumeCreateManyInput = {
    id: number
    idServico: number
    idOrigem?: string | null
    servico?: string | null
    codigoServico?: string | null
    codigoRastreamento?: string | null
    valorFretePrevisto?: number | null
    remessaNumero?: string | null
    remessaDataCriacao?: Date | string | null
    dataSaida?: Date | string | null
    prazoEntregaPrevisto?: string | null
    valorDeclarado?: number | null
    avisoRecebimento?: boolean | null
    maoPropria?: boolean | null
    urlRastreamento?: string | null
    pedidoNumero?: number | null
  }

  export type VolumeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VolumeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DimensaoCreateInput = {
    id: number
    peso?: string | null
    altura?: string | null
    largura?: string | null
    comprimento?: string | null
    diametro?: string | null
    volume: VolumeCreateNestedOneWithoutDimensaoInput
  }

  export type DimensaoUncheckedCreateInput = {
    id: number
    peso?: string | null
    altura?: string | null
    largura?: string | null
    comprimento?: string | null
    diametro?: string | null
    volume_id: number
  }

  export type DimensaoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableStringFieldUpdateOperationsInput | string | null
    largura?: NullableStringFieldUpdateOperationsInput | string | null
    comprimento?: NullableStringFieldUpdateOperationsInput | string | null
    diametro?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: VolumeUpdateOneRequiredWithoutDimensaoInput
  }

  export type DimensaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableStringFieldUpdateOperationsInput | string | null
    largura?: NullableStringFieldUpdateOperationsInput | string | null
    comprimento?: NullableStringFieldUpdateOperationsInput | string | null
    diametro?: NullableStringFieldUpdateOperationsInput | string | null
    volume_id?: IntFieldUpdateOperationsInput | number
  }

  export type DimensaoCreateManyInput = {
    id: number
    peso?: string | null
    altura?: string | null
    largura?: string | null
    comprimento?: string | null
    diametro?: string | null
    volume_id: number
  }

  export type DimensaoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableStringFieldUpdateOperationsInput | string | null
    largura?: NullableStringFieldUpdateOperationsInput | string | null
    comprimento?: NullableStringFieldUpdateOperationsInput | string | null
    diametro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DimensaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableStringFieldUpdateOperationsInput | string | null
    largura?: NullableStringFieldUpdateOperationsInput | string | null
    comprimento?: NullableStringFieldUpdateOperationsInput | string | null
    diametro?: NullableStringFieldUpdateOperationsInput | string | null
    volume_id?: IntFieldUpdateOperationsInput | number
  }

  export type ParcelaCreateInput = {
    id: number
    valor: Decimal | number | string
    dataVencimento: Date | string
    obs?: string | null
    destino?: string | null
    formaPagamento_id: string
    formaPagamentoDescricao?: string | null
    formaPagamentoCodigoFiscal?: string | null
    Pedido?: PedidoCreateNestedOneWithoutParcelasInput
  }

  export type ParcelaUncheckedCreateInput = {
    id: number
    valor: Decimal | number | string
    dataVencimento: Date | string
    obs?: string | null
    destino?: string | null
    formaPagamento_id: string
    formaPagamentoDescricao?: string | null
    formaPagamentoCodigoFiscal?: string | null
    pedidoNumero?: number | null
  }

  export type ParcelaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamento_id?: StringFieldUpdateOperationsInput | string
    formaPagamentoDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamentoCodigoFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    Pedido?: PedidoUpdateOneWithoutParcelasInput
  }

  export type ParcelaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamento_id?: StringFieldUpdateOperationsInput | string
    formaPagamentoDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamentoCodigoFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ParcelaCreateManyInput = {
    id: number
    valor: Decimal | number | string
    dataVencimento: Date | string
    obs?: string | null
    destino?: string | null
    formaPagamento_id: string
    formaPagamentoDescricao?: string | null
    formaPagamentoCodigoFiscal?: string | null
    pedidoNumero?: number | null
  }

  export type ParcelaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamento_id?: StringFieldUpdateOperationsInput | string
    formaPagamentoDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamentoCodigoFiscal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParcelaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamento_id?: StringFieldUpdateOperationsInput | string
    formaPagamentoDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamentoCodigoFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotaCreateInput = {
    numero: string
    serie?: string | null
    dataEmissao?: Date | string | null
    situacao?: number | null
    valorNota?: Decimal | number | string | null
    chaveAcesso?: string | null
    pedido: PedidoCreateNestedOneWithoutNotaInput
  }

  export type NotaUncheckedCreateInput = {
    numero: string
    serie?: string | null
    dataEmissao?: Date | string | null
    situacao?: number | null
    valorNota?: Decimal | number | string | null
    chaveAcesso?: string | null
    pedidoNumero: number
  }

  export type NotaUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    dataEmissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    situacao?: NullableIntFieldUpdateOperationsInput | number | null
    valorNota?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    chaveAcesso?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneRequiredWithoutNotaInput
  }

  export type NotaUncheckedUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    dataEmissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    situacao?: NullableIntFieldUpdateOperationsInput | number | null
    valorNota?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    chaveAcesso?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: IntFieldUpdateOperationsInput | number
  }

  export type NotaCreateManyInput = {
    numero: string
    serie?: string | null
    dataEmissao?: Date | string | null
    situacao?: number | null
    valorNota?: Decimal | number | string | null
    chaveAcesso?: string | null
    pedidoNumero: number
  }

  export type NotaUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    dataEmissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    situacao?: NullableIntFieldUpdateOperationsInput | number | null
    valorNota?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    chaveAcesso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotaUncheckedUpdateManyInput = {
    numero?: StringFieldUpdateOperationsInput | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    dataEmissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    situacao?: NullableIntFieldUpdateOperationsInput | number | null
    valorNota?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    chaveAcesso?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoNoPedidoCreateInput = {
    codigo?: string | null
    descricao?: string | null
    quantidade?: Decimal | number | string | null
    valorunidade?: Decimal | number | string | null
    precocusto?: Decimal | number | string | null
    descontoItem?: Decimal | number | string | null
    un?: string | null
    pesoBruto?: Decimal | number | string | null
    largura?: Decimal | number | string | null
    altura?: Decimal | number | string | null
    profundidade?: Decimal | number | string | null
    unidadeMedida?: string | null
    descricaoDetalhada?: string | null
    pedido?: PedidoCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoNoPedidoUncheckedCreateInput = {
    id?: number
    codigo?: string | null
    descricao?: string | null
    quantidade?: Decimal | number | string | null
    valorunidade?: Decimal | number | string | null
    precocusto?: Decimal | number | string | null
    descontoItem?: Decimal | number | string | null
    un?: string | null
    pesoBruto?: Decimal | number | string | null
    largura?: Decimal | number | string | null
    altura?: Decimal | number | string | null
    profundidade?: Decimal | number | string | null
    unidadeMedida?: string | null
    descricaoDetalhada?: string | null
    pedidoNumero?: number | null
  }

  export type ProdutoNoPedidoUpdateInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    valorunidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precocusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descontoItem?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    un?: NullableStringFieldUpdateOperationsInput | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneWithoutProdutosInput
  }

  export type ProdutoNoPedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    valorunidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precocusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descontoItem?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    un?: NullableStringFieldUpdateOperationsInput | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProdutoNoPedidoCreateManyInput = {
    id?: number
    codigo?: string | null
    descricao?: string | null
    quantidade?: Decimal | number | string | null
    valorunidade?: Decimal | number | string | null
    precocusto?: Decimal | number | string | null
    descontoItem?: Decimal | number | string | null
    un?: string | null
    pesoBruto?: Decimal | number | string | null
    largura?: Decimal | number | string | null
    altura?: Decimal | number | string | null
    profundidade?: Decimal | number | string | null
    unidadeMedida?: string | null
    descricaoDetalhada?: string | null
    pedidoNumero?: number | null
  }

  export type ProdutoNoPedidoUpdateManyMutationInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    valorunidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precocusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descontoItem?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    un?: NullableStringFieldUpdateOperationsInput | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoNoPedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    valorunidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precocusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descontoItem?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    un?: NullableStringFieldUpdateOperationsInput | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableFilter | Decimal | number | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type CategoriasNoProdutoListRelationFilter = {
    every?: CategoriasNoProdutoWhereInput
    some?: CategoriasNoProdutoWhereInput
    none?: CategoriasNoProdutoWhereInput
  }

  export type CategoriasNoProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    situacao?: SortOrder
    unidade?: SortOrder
    preco?: SortOrder
    precoCusto?: SortOrder
    descricaoCurta?: SortOrder
    descricaoComplementar?: SortOrder
    dataInclusao?: SortOrder
    dataAlteracao?: SortOrder
    imageThumbnail?: SortOrder
    urlVideo?: SortOrder
    nomeFornecedor?: SortOrder
    codigoFabricante?: SortOrder
    marca?: SortOrder
    classFiscal?: SortOrder
    cest?: SortOrder
    origem?: SortOrder
    idGrupoProduto?: SortOrder
    linkExterno?: SortOrder
    observacoes?: SortOrder
    grupoProduto?: SortOrder
    garantia?: SortOrder
    descricaoFornecedor?: SortOrder
    idFabricante?: SortOrder
    pesoLiq?: SortOrder
    pesoBruto?: SortOrder
    estoqueMinimo?: SortOrder
    estoqueMaximo?: SortOrder
    gtin?: SortOrder
    gtinEmbalagem?: SortOrder
    larguraProduto?: SortOrder
    alturaProduto?: SortOrder
    profundidadeProduto?: SortOrder
    unidadeMedida?: SortOrder
    itensPorCaixa?: SortOrder
    volumes?: SortOrder
    localizacao?: SortOrder
    crossdocking?: SortOrder
    condicao?: SortOrder
    freteGratis?: SortOrder
    producao?: SortOrder
    dataValidade?: SortOrder
    spedTipoItem?: SortOrder
    codigoPai?: SortOrder
    clonarDadosPai?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    preco?: SortOrder
    precoCusto?: SortOrder
    origem?: SortOrder
    idGrupoProduto?: SortOrder
    garantia?: SortOrder
    idFabricante?: SortOrder
    pesoLiq?: SortOrder
    pesoBruto?: SortOrder
    estoqueMinimo?: SortOrder
    estoqueMaximo?: SortOrder
    larguraProduto?: SortOrder
    alturaProduto?: SortOrder
    profundidadeProduto?: SortOrder
    itensPorCaixa?: SortOrder
    volumes?: SortOrder
    crossdocking?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    situacao?: SortOrder
    unidade?: SortOrder
    preco?: SortOrder
    precoCusto?: SortOrder
    descricaoCurta?: SortOrder
    descricaoComplementar?: SortOrder
    dataInclusao?: SortOrder
    dataAlteracao?: SortOrder
    imageThumbnail?: SortOrder
    urlVideo?: SortOrder
    nomeFornecedor?: SortOrder
    codigoFabricante?: SortOrder
    marca?: SortOrder
    classFiscal?: SortOrder
    cest?: SortOrder
    origem?: SortOrder
    idGrupoProduto?: SortOrder
    linkExterno?: SortOrder
    observacoes?: SortOrder
    grupoProduto?: SortOrder
    garantia?: SortOrder
    descricaoFornecedor?: SortOrder
    idFabricante?: SortOrder
    pesoLiq?: SortOrder
    pesoBruto?: SortOrder
    estoqueMinimo?: SortOrder
    estoqueMaximo?: SortOrder
    gtin?: SortOrder
    gtinEmbalagem?: SortOrder
    larguraProduto?: SortOrder
    alturaProduto?: SortOrder
    profundidadeProduto?: SortOrder
    unidadeMedida?: SortOrder
    itensPorCaixa?: SortOrder
    volumes?: SortOrder
    localizacao?: SortOrder
    crossdocking?: SortOrder
    condicao?: SortOrder
    freteGratis?: SortOrder
    producao?: SortOrder
    dataValidade?: SortOrder
    spedTipoItem?: SortOrder
    codigoPai?: SortOrder
    clonarDadosPai?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    situacao?: SortOrder
    unidade?: SortOrder
    preco?: SortOrder
    precoCusto?: SortOrder
    descricaoCurta?: SortOrder
    descricaoComplementar?: SortOrder
    dataInclusao?: SortOrder
    dataAlteracao?: SortOrder
    imageThumbnail?: SortOrder
    urlVideo?: SortOrder
    nomeFornecedor?: SortOrder
    codigoFabricante?: SortOrder
    marca?: SortOrder
    classFiscal?: SortOrder
    cest?: SortOrder
    origem?: SortOrder
    idGrupoProduto?: SortOrder
    linkExterno?: SortOrder
    observacoes?: SortOrder
    grupoProduto?: SortOrder
    garantia?: SortOrder
    descricaoFornecedor?: SortOrder
    idFabricante?: SortOrder
    pesoLiq?: SortOrder
    pesoBruto?: SortOrder
    estoqueMinimo?: SortOrder
    estoqueMaximo?: SortOrder
    gtin?: SortOrder
    gtinEmbalagem?: SortOrder
    larguraProduto?: SortOrder
    alturaProduto?: SortOrder
    profundidadeProduto?: SortOrder
    unidadeMedida?: SortOrder
    itensPorCaixa?: SortOrder
    volumes?: SortOrder
    localizacao?: SortOrder
    crossdocking?: SortOrder
    condicao?: SortOrder
    freteGratis?: SortOrder
    producao?: SortOrder
    dataValidade?: SortOrder
    spedTipoItem?: SortOrder
    codigoPai?: SortOrder
    clonarDadosPai?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    preco?: SortOrder
    precoCusto?: SortOrder
    origem?: SortOrder
    idGrupoProduto?: SortOrder
    garantia?: SortOrder
    idFabricante?: SortOrder
    pesoLiq?: SortOrder
    pesoBruto?: SortOrder
    estoqueMinimo?: SortOrder
    estoqueMaximo?: SortOrder
    larguraProduto?: SortOrder
    alturaProduto?: SortOrder
    profundidadeProduto?: SortOrder
    itensPorCaixa?: SortOrder
    volumes?: SortOrder
    crossdocking?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type ProdutoRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type CategoriaProdutoRelationFilter = {
    is?: CategoriaProdutoWhereInput
    isNot?: CategoriaProdutoWhereInput
  }

  export type CategoriasNoProdutoProduto_idCategoria_idCompoundUniqueInput = {
    produto_id: string
    categoria_id: number
  }

  export type CategoriasNoProdutoCountOrderByAggregateInput = {
    produto_id?: SortOrder
    categoria_id?: SortOrder
  }

  export type CategoriasNoProdutoAvgOrderByAggregateInput = {
    categoria_id?: SortOrder
  }

  export type CategoriasNoProdutoMaxOrderByAggregateInput = {
    produto_id?: SortOrder
    categoria_id?: SortOrder
  }

  export type CategoriasNoProdutoMinOrderByAggregateInput = {
    produto_id?: SortOrder
    categoria_id?: SortOrder
  }

  export type CategoriasNoProdutoSumOrderByAggregateInput = {
    categoria_id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type CategoriaProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type ClienteRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type TransportadoraRelationFilter = {
    is?: TransportadoraWhereInput | null
    isNot?: TransportadoraWhereInput | null
  }

  export type EnderecoRelationFilter = {
    is?: EnderecoWhereInput | null
    isNot?: EnderecoWhereInput | null
  }

  export type VolumeListRelationFilter = {
    every?: VolumeWhereInput
    some?: VolumeWhereInput
    none?: VolumeWhereInput
  }

  export type ParcelaListRelationFilter = {
    every?: ParcelaWhereInput
    some?: ParcelaWhereInput
    none?: ParcelaWhereInput
  }

  export type NotaRelationFilter = {
    is?: NotaWhereInput | null
    isNot?: NotaWhereInput | null
  }

  export type ProdutoNoPedidoListRelationFilter = {
    every?: ProdutoNoPedidoWhereInput
    some?: ProdutoNoPedidoWhereInput
    none?: ProdutoNoPedidoWhereInput
  }

  export type VolumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParcelaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoNoPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    numero?: SortOrder
    desconto?: SortOrder
    observacoes?: SortOrder
    observacaointerna?: SortOrder
    data?: SortOrder
    dataSaida?: SortOrder
    numeroOrdemCompra?: SortOrder
    vendedor?: SortOrder
    valorfrete?: SortOrder
    outrasdespesas?: SortOrder
    totalprodutos?: SortOrder
    totalvenda?: SortOrder
    situacao?: SortOrder
    loja?: SortOrder
    numeroPedidoLoja?: SortOrder
    tipoIntegracao?: SortOrder
    cliente_id?: SortOrder
    transportadora_id?: SortOrder
    enderecoEntrega_id?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    numero?: SortOrder
    desconto?: SortOrder
    valorfrete?: SortOrder
    outrasdespesas?: SortOrder
    totalprodutos?: SortOrder
    totalvenda?: SortOrder
    cliente_id?: SortOrder
    enderecoEntrega_id?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    numero?: SortOrder
    desconto?: SortOrder
    observacoes?: SortOrder
    observacaointerna?: SortOrder
    data?: SortOrder
    dataSaida?: SortOrder
    numeroOrdemCompra?: SortOrder
    vendedor?: SortOrder
    valorfrete?: SortOrder
    outrasdespesas?: SortOrder
    totalprodutos?: SortOrder
    totalvenda?: SortOrder
    situacao?: SortOrder
    loja?: SortOrder
    numeroPedidoLoja?: SortOrder
    tipoIntegracao?: SortOrder
    cliente_id?: SortOrder
    transportadora_id?: SortOrder
    enderecoEntrega_id?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    numero?: SortOrder
    desconto?: SortOrder
    observacoes?: SortOrder
    observacaointerna?: SortOrder
    data?: SortOrder
    dataSaida?: SortOrder
    numeroOrdemCompra?: SortOrder
    vendedor?: SortOrder
    valorfrete?: SortOrder
    outrasdespesas?: SortOrder
    totalprodutos?: SortOrder
    totalvenda?: SortOrder
    situacao?: SortOrder
    loja?: SortOrder
    numeroPedidoLoja?: SortOrder
    tipoIntegracao?: SortOrder
    cliente_id?: SortOrder
    transportadora_id?: SortOrder
    enderecoEntrega_id?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    numero?: SortOrder
    desconto?: SortOrder
    valorfrete?: SortOrder
    outrasdespesas?: SortOrder
    totalprodutos?: SortOrder
    totalvenda?: SortOrder
    cliente_id?: SortOrder
    enderecoEntrega_id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoPessoa?: SortOrder
    cpfCnpj?: SortOrder
    incricaoEstadual?: SortOrder
    rg?: SortOrder
    contribuinte?: SortOrder
    fone?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    endereco_id?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
    endereco_id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoPessoa?: SortOrder
    cpfCnpj?: SortOrder
    incricaoEstadual?: SortOrder
    rg?: SortOrder
    contribuinte?: SortOrder
    fone?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    endereco_id?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipoPessoa?: SortOrder
    cpfCnpj?: SortOrder
    incricaoEstadual?: SortOrder
    rg?: SortOrder
    contribuinte?: SortOrder
    fone?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    endereco_id?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
    endereco_id?: SortOrder
  }

  export type TransportadoraCountOrderByAggregateInput = {
    cnpj?: SortOrder
    nome?: SortOrder
    tipo_frete?: SortOrder
    servico_correios?: SortOrder
  }

  export type TransportadoraMaxOrderByAggregateInput = {
    cnpj?: SortOrder
    nome?: SortOrder
    tipo_frete?: SortOrder
    servico_correios?: SortOrder
  }

  export type TransportadoraMinOrderByAggregateInput = {
    cnpj?: SortOrder
    nome?: SortOrder
    tipo_frete?: SortOrder
    servico_correios?: SortOrder
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
  }

  export type EnderecoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
  }

  export type EnderecoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type PedidoRelationFilter = {
    is?: PedidoWhereInput | null
    isNot?: PedidoWhereInput | null
  }

  export type DimensaoRelationFilter = {
    is?: DimensaoWhereInput | null
    isNot?: DimensaoWhereInput | null
  }

  export type VolumeCountOrderByAggregateInput = {
    id?: SortOrder
    idServico?: SortOrder
    idOrigem?: SortOrder
    servico?: SortOrder
    codigoServico?: SortOrder
    codigoRastreamento?: SortOrder
    valorFretePrevisto?: SortOrder
    remessaNumero?: SortOrder
    remessaDataCriacao?: SortOrder
    dataSaida?: SortOrder
    prazoEntregaPrevisto?: SortOrder
    valorDeclarado?: SortOrder
    avisoRecebimento?: SortOrder
    maoPropria?: SortOrder
    urlRastreamento?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type VolumeAvgOrderByAggregateInput = {
    id?: SortOrder
    idServico?: SortOrder
    valorFretePrevisto?: SortOrder
    valorDeclarado?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type VolumeMaxOrderByAggregateInput = {
    id?: SortOrder
    idServico?: SortOrder
    idOrigem?: SortOrder
    servico?: SortOrder
    codigoServico?: SortOrder
    codigoRastreamento?: SortOrder
    valorFretePrevisto?: SortOrder
    remessaNumero?: SortOrder
    remessaDataCriacao?: SortOrder
    dataSaida?: SortOrder
    prazoEntregaPrevisto?: SortOrder
    valorDeclarado?: SortOrder
    avisoRecebimento?: SortOrder
    maoPropria?: SortOrder
    urlRastreamento?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type VolumeMinOrderByAggregateInput = {
    id?: SortOrder
    idServico?: SortOrder
    idOrigem?: SortOrder
    servico?: SortOrder
    codigoServico?: SortOrder
    codigoRastreamento?: SortOrder
    valorFretePrevisto?: SortOrder
    remessaNumero?: SortOrder
    remessaDataCriacao?: SortOrder
    dataSaida?: SortOrder
    prazoEntregaPrevisto?: SortOrder
    valorDeclarado?: SortOrder
    avisoRecebimento?: SortOrder
    maoPropria?: SortOrder
    urlRastreamento?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type VolumeSumOrderByAggregateInput = {
    id?: SortOrder
    idServico?: SortOrder
    valorFretePrevisto?: SortOrder
    valorDeclarado?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type VolumeRelationFilter = {
    is?: VolumeWhereInput
    isNot?: VolumeWhereInput
  }

  export type DimensaoCountOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    largura?: SortOrder
    comprimento?: SortOrder
    diametro?: SortOrder
    volume_id?: SortOrder
  }

  export type DimensaoAvgOrderByAggregateInput = {
    id?: SortOrder
    volume_id?: SortOrder
  }

  export type DimensaoMaxOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    largura?: SortOrder
    comprimento?: SortOrder
    diametro?: SortOrder
    volume_id?: SortOrder
  }

  export type DimensaoMinOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    largura?: SortOrder
    comprimento?: SortOrder
    diametro?: SortOrder
    volume_id?: SortOrder
  }

  export type DimensaoSumOrderByAggregateInput = {
    id?: SortOrder
    volume_id?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ParcelaCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    obs?: SortOrder
    destino?: SortOrder
    formaPagamento_id?: SortOrder
    formaPagamentoDescricao?: SortOrder
    formaPagamentoCodigoFiscal?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ParcelaAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ParcelaMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    obs?: SortOrder
    destino?: SortOrder
    formaPagamento_id?: SortOrder
    formaPagamentoDescricao?: SortOrder
    formaPagamentoCodigoFiscal?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ParcelaMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    obs?: SortOrder
    destino?: SortOrder
    formaPagamento_id?: SortOrder
    formaPagamentoDescricao?: SortOrder
    formaPagamentoCodigoFiscal?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ParcelaSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NotaCountOrderByAggregateInput = {
    numero?: SortOrder
    serie?: SortOrder
    dataEmissao?: SortOrder
    situacao?: SortOrder
    valorNota?: SortOrder
    chaveAcesso?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type NotaAvgOrderByAggregateInput = {
    situacao?: SortOrder
    valorNota?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type NotaMaxOrderByAggregateInput = {
    numero?: SortOrder
    serie?: SortOrder
    dataEmissao?: SortOrder
    situacao?: SortOrder
    valorNota?: SortOrder
    chaveAcesso?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type NotaMinOrderByAggregateInput = {
    numero?: SortOrder
    serie?: SortOrder
    dataEmissao?: SortOrder
    situacao?: SortOrder
    valorNota?: SortOrder
    chaveAcesso?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type NotaSumOrderByAggregateInput = {
    situacao?: SortOrder
    valorNota?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ProdutoNoPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    valorunidade?: SortOrder
    precocusto?: SortOrder
    descontoItem?: SortOrder
    un?: SortOrder
    pesoBruto?: SortOrder
    largura?: SortOrder
    altura?: SortOrder
    profundidade?: SortOrder
    unidadeMedida?: SortOrder
    descricaoDetalhada?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ProdutoNoPedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    valorunidade?: SortOrder
    precocusto?: SortOrder
    descontoItem?: SortOrder
    pesoBruto?: SortOrder
    largura?: SortOrder
    altura?: SortOrder
    profundidade?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ProdutoNoPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    valorunidade?: SortOrder
    precocusto?: SortOrder
    descontoItem?: SortOrder
    un?: SortOrder
    pesoBruto?: SortOrder
    largura?: SortOrder
    altura?: SortOrder
    profundidade?: SortOrder
    unidadeMedida?: SortOrder
    descricaoDetalhada?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ProdutoNoPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descricao?: SortOrder
    quantidade?: SortOrder
    valorunidade?: SortOrder
    precocusto?: SortOrder
    descontoItem?: SortOrder
    un?: SortOrder
    pesoBruto?: SortOrder
    largura?: SortOrder
    altura?: SortOrder
    profundidade?: SortOrder
    unidadeMedida?: SortOrder
    descricaoDetalhada?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type ProdutoNoPedidoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    valorunidade?: SortOrder
    precocusto?: SortOrder
    descontoItem?: SortOrder
    pesoBruto?: SortOrder
    largura?: SortOrder
    altura?: SortOrder
    profundidade?: SortOrder
    pedidoNumero?: SortOrder
  }

  export type CategoriasNoProdutoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<Enumerable<CategoriasNoProdutoCreateWithoutProdutoInput>, Enumerable<CategoriasNoProdutoUncheckedCreateWithoutProdutoInput>>
    connectOrCreate?: Enumerable<CategoriasNoProdutoCreateOrConnectWithoutProdutoInput>
    createMany?: CategoriasNoProdutoCreateManyProdutoInputEnvelope
    connect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
  }

  export type CategoriasNoProdutoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<Enumerable<CategoriasNoProdutoCreateWithoutProdutoInput>, Enumerable<CategoriasNoProdutoUncheckedCreateWithoutProdutoInput>>
    connectOrCreate?: Enumerable<CategoriasNoProdutoCreateOrConnectWithoutProdutoInput>
    createMany?: CategoriasNoProdutoCreateManyProdutoInputEnvelope
    connect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string | null
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriasNoProdutoUpdateManyWithoutProdutoInput = {
    create?: XOR<Enumerable<CategoriasNoProdutoCreateWithoutProdutoInput>, Enumerable<CategoriasNoProdutoUncheckedCreateWithoutProdutoInput>>
    connectOrCreate?: Enumerable<CategoriasNoProdutoCreateOrConnectWithoutProdutoInput>
    upsert?: Enumerable<CategoriasNoProdutoUpsertWithWhereUniqueWithoutProdutoInput>
    createMany?: CategoriasNoProdutoCreateManyProdutoInputEnvelope
    set?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    disconnect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    delete?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    connect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    update?: Enumerable<CategoriasNoProdutoUpdateWithWhereUniqueWithoutProdutoInput>
    updateMany?: Enumerable<CategoriasNoProdutoUpdateManyWithWhereWithoutProdutoInput>
    deleteMany?: Enumerable<CategoriasNoProdutoScalarWhereInput>
  }

  export type CategoriasNoProdutoUncheckedUpdateManyWithoutProdutoInput = {
    create?: XOR<Enumerable<CategoriasNoProdutoCreateWithoutProdutoInput>, Enumerable<CategoriasNoProdutoUncheckedCreateWithoutProdutoInput>>
    connectOrCreate?: Enumerable<CategoriasNoProdutoCreateOrConnectWithoutProdutoInput>
    upsert?: Enumerable<CategoriasNoProdutoUpsertWithWhereUniqueWithoutProdutoInput>
    createMany?: CategoriasNoProdutoCreateManyProdutoInputEnvelope
    set?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    disconnect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    delete?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    connect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    update?: Enumerable<CategoriasNoProdutoUpdateWithWhereUniqueWithoutProdutoInput>
    updateMany?: Enumerable<CategoriasNoProdutoUpdateManyWithWhereWithoutProdutoInput>
    deleteMany?: Enumerable<CategoriasNoProdutoScalarWhereInput>
  }

  export type ProdutoCreateNestedOneWithoutCategoriasInput = {
    create?: XOR<ProdutoCreateWithoutCategoriasInput, ProdutoUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriasInput
    connect?: ProdutoWhereUniqueInput
  }

  export type CategoriaProdutoCreateNestedOneWithoutProdutosInput = {
    create?: XOR<CategoriaProdutoCreateWithoutProdutosInput, CategoriaProdutoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: CategoriaProdutoCreateOrConnectWithoutProdutosInput
    connect?: CategoriaProdutoWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutCategoriasInput = {
    create?: XOR<ProdutoCreateWithoutCategoriasInput, ProdutoUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriasInput
    upsert?: ProdutoUpsertWithoutCategoriasInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<ProdutoUpdateWithoutCategoriasInput, ProdutoUncheckedUpdateWithoutCategoriasInput>
  }

  export type CategoriaProdutoUpdateOneRequiredWithoutProdutosInput = {
    create?: XOR<CategoriaProdutoCreateWithoutProdutosInput, CategoriaProdutoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: CategoriaProdutoCreateOrConnectWithoutProdutosInput
    upsert?: CategoriaProdutoUpsertWithoutProdutosInput
    connect?: CategoriaProdutoWhereUniqueInput
    update?: XOR<CategoriaProdutoUpdateWithoutProdutosInput, CategoriaProdutoUncheckedUpdateWithoutProdutosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriasNoProdutoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<Enumerable<CategoriasNoProdutoCreateWithoutCategoriaInput>, Enumerable<CategoriasNoProdutoUncheckedCreateWithoutCategoriaInput>>
    connectOrCreate?: Enumerable<CategoriasNoProdutoCreateOrConnectWithoutCategoriaInput>
    createMany?: CategoriasNoProdutoCreateManyCategoriaInputEnvelope
    connect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
  }

  export type CategoriasNoProdutoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<Enumerable<CategoriasNoProdutoCreateWithoutCategoriaInput>, Enumerable<CategoriasNoProdutoUncheckedCreateWithoutCategoriaInput>>
    connectOrCreate?: Enumerable<CategoriasNoProdutoCreateOrConnectWithoutCategoriaInput>
    createMany?: CategoriasNoProdutoCreateManyCategoriaInputEnvelope
    connect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
  }

  export type CategoriasNoProdutoUpdateManyWithoutCategoriaInput = {
    create?: XOR<Enumerable<CategoriasNoProdutoCreateWithoutCategoriaInput>, Enumerable<CategoriasNoProdutoUncheckedCreateWithoutCategoriaInput>>
    connectOrCreate?: Enumerable<CategoriasNoProdutoCreateOrConnectWithoutCategoriaInput>
    upsert?: Enumerable<CategoriasNoProdutoUpsertWithWhereUniqueWithoutCategoriaInput>
    createMany?: CategoriasNoProdutoCreateManyCategoriaInputEnvelope
    set?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    disconnect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    delete?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    connect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    update?: Enumerable<CategoriasNoProdutoUpdateWithWhereUniqueWithoutCategoriaInput>
    updateMany?: Enumerable<CategoriasNoProdutoUpdateManyWithWhereWithoutCategoriaInput>
    deleteMany?: Enumerable<CategoriasNoProdutoScalarWhereInput>
  }

  export type CategoriasNoProdutoUncheckedUpdateManyWithoutCategoriaInput = {
    create?: XOR<Enumerable<CategoriasNoProdutoCreateWithoutCategoriaInput>, Enumerable<CategoriasNoProdutoUncheckedCreateWithoutCategoriaInput>>
    connectOrCreate?: Enumerable<CategoriasNoProdutoCreateOrConnectWithoutCategoriaInput>
    upsert?: Enumerable<CategoriasNoProdutoUpsertWithWhereUniqueWithoutCategoriaInput>
    createMany?: CategoriasNoProdutoCreateManyCategoriaInputEnvelope
    set?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    disconnect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    delete?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    connect?: Enumerable<CategoriasNoProdutoWhereUniqueInput>
    update?: Enumerable<CategoriasNoProdutoUpdateWithWhereUniqueWithoutCategoriaInput>
    updateMany?: Enumerable<CategoriasNoProdutoUpdateManyWithWhereWithoutCategoriaInput>
    deleteMany?: Enumerable<CategoriasNoProdutoScalarWhereInput>
  }

  export type ClienteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidoInput
    connect?: ClienteWhereUniqueInput
  }

  export type TransportadoraCreateNestedOneWithoutPedidoInput = {
    create?: XOR<TransportadoraCreateWithoutPedidoInput, TransportadoraUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: TransportadoraCreateOrConnectWithoutPedidoInput
    connect?: TransportadoraWhereUniqueInput
  }

  export type EnderecoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<EnderecoCreateWithoutPedidoInput, EnderecoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutPedidoInput
    connect?: EnderecoWhereUniqueInput
  }

  export type VolumeCreateNestedManyWithoutPedidoInput = {
    create?: XOR<Enumerable<VolumeCreateWithoutPedidoInput>, Enumerable<VolumeUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<VolumeCreateOrConnectWithoutPedidoInput>
    createMany?: VolumeCreateManyPedidoInputEnvelope
    connect?: Enumerable<VolumeWhereUniqueInput>
  }

  export type ParcelaCreateNestedManyWithoutPedidoInput = {
    create?: XOR<Enumerable<ParcelaCreateWithoutPedidoInput>, Enumerable<ParcelaUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<ParcelaCreateOrConnectWithoutPedidoInput>
    createMany?: ParcelaCreateManyPedidoInputEnvelope
    connect?: Enumerable<ParcelaWhereUniqueInput>
  }

  export type NotaCreateNestedOneWithoutPedidoInput = {
    create?: XOR<NotaCreateWithoutPedidoInput, NotaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: NotaCreateOrConnectWithoutPedidoInput
    connect?: NotaWhereUniqueInput
  }

  export type ProdutoNoPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<Enumerable<ProdutoNoPedidoCreateWithoutPedidoInput>, Enumerable<ProdutoNoPedidoUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<ProdutoNoPedidoCreateOrConnectWithoutPedidoInput>
    createMany?: ProdutoNoPedidoCreateManyPedidoInputEnvelope
    connect?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
  }

  export type VolumeUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<Enumerable<VolumeCreateWithoutPedidoInput>, Enumerable<VolumeUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<VolumeCreateOrConnectWithoutPedidoInput>
    createMany?: VolumeCreateManyPedidoInputEnvelope
    connect?: Enumerable<VolumeWhereUniqueInput>
  }

  export type ParcelaUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<Enumerable<ParcelaCreateWithoutPedidoInput>, Enumerable<ParcelaUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<ParcelaCreateOrConnectWithoutPedidoInput>
    createMany?: ParcelaCreateManyPedidoInputEnvelope
    connect?: Enumerable<ParcelaWhereUniqueInput>
  }

  export type NotaUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<NotaCreateWithoutPedidoInput, NotaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: NotaCreateOrConnectWithoutPedidoInput
    connect?: NotaWhereUniqueInput
  }

  export type ProdutoNoPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<Enumerable<ProdutoNoPedidoCreateWithoutPedidoInput>, Enumerable<ProdutoNoPedidoUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<ProdutoNoPedidoCreateOrConnectWithoutPedidoInput>
    createMany?: ProdutoNoPedidoCreateManyPedidoInputEnvelope
    connect?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUpdateOneRequiredWithoutPedidoInput = {
    create?: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidoInput
    upsert?: ClienteUpsertWithoutPedidoInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<ClienteUpdateWithoutPedidoInput, ClienteUncheckedUpdateWithoutPedidoInput>
  }

  export type TransportadoraUpdateOneWithoutPedidoInput = {
    create?: XOR<TransportadoraCreateWithoutPedidoInput, TransportadoraUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: TransportadoraCreateOrConnectWithoutPedidoInput
    upsert?: TransportadoraUpsertWithoutPedidoInput
    disconnect?: boolean
    delete?: boolean
    connect?: TransportadoraWhereUniqueInput
    update?: XOR<TransportadoraUpdateWithoutPedidoInput, TransportadoraUncheckedUpdateWithoutPedidoInput>
  }

  export type EnderecoUpdateOneWithoutPedidoInput = {
    create?: XOR<EnderecoCreateWithoutPedidoInput, EnderecoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutPedidoInput
    upsert?: EnderecoUpsertWithoutPedidoInput
    disconnect?: boolean
    delete?: boolean
    connect?: EnderecoWhereUniqueInput
    update?: XOR<EnderecoUpdateWithoutPedidoInput, EnderecoUncheckedUpdateWithoutPedidoInput>
  }

  export type VolumeUpdateManyWithoutPedidoInput = {
    create?: XOR<Enumerable<VolumeCreateWithoutPedidoInput>, Enumerable<VolumeUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<VolumeCreateOrConnectWithoutPedidoInput>
    upsert?: Enumerable<VolumeUpsertWithWhereUniqueWithoutPedidoInput>
    createMany?: VolumeCreateManyPedidoInputEnvelope
    set?: Enumerable<VolumeWhereUniqueInput>
    disconnect?: Enumerable<VolumeWhereUniqueInput>
    delete?: Enumerable<VolumeWhereUniqueInput>
    connect?: Enumerable<VolumeWhereUniqueInput>
    update?: Enumerable<VolumeUpdateWithWhereUniqueWithoutPedidoInput>
    updateMany?: Enumerable<VolumeUpdateManyWithWhereWithoutPedidoInput>
    deleteMany?: Enumerable<VolumeScalarWhereInput>
  }

  export type ParcelaUpdateManyWithoutPedidoInput = {
    create?: XOR<Enumerable<ParcelaCreateWithoutPedidoInput>, Enumerable<ParcelaUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<ParcelaCreateOrConnectWithoutPedidoInput>
    upsert?: Enumerable<ParcelaUpsertWithWhereUniqueWithoutPedidoInput>
    createMany?: ParcelaCreateManyPedidoInputEnvelope
    set?: Enumerable<ParcelaWhereUniqueInput>
    disconnect?: Enumerable<ParcelaWhereUniqueInput>
    delete?: Enumerable<ParcelaWhereUniqueInput>
    connect?: Enumerable<ParcelaWhereUniqueInput>
    update?: Enumerable<ParcelaUpdateWithWhereUniqueWithoutPedidoInput>
    updateMany?: Enumerable<ParcelaUpdateManyWithWhereWithoutPedidoInput>
    deleteMany?: Enumerable<ParcelaScalarWhereInput>
  }

  export type NotaUpdateOneWithoutPedidoInput = {
    create?: XOR<NotaCreateWithoutPedidoInput, NotaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: NotaCreateOrConnectWithoutPedidoInput
    upsert?: NotaUpsertWithoutPedidoInput
    disconnect?: boolean
    delete?: boolean
    connect?: NotaWhereUniqueInput
    update?: XOR<NotaUpdateWithoutPedidoInput, NotaUncheckedUpdateWithoutPedidoInput>
  }

  export type ProdutoNoPedidoUpdateManyWithoutPedidoInput = {
    create?: XOR<Enumerable<ProdutoNoPedidoCreateWithoutPedidoInput>, Enumerable<ProdutoNoPedidoUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<ProdutoNoPedidoCreateOrConnectWithoutPedidoInput>
    upsert?: Enumerable<ProdutoNoPedidoUpsertWithWhereUniqueWithoutPedidoInput>
    createMany?: ProdutoNoPedidoCreateManyPedidoInputEnvelope
    set?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
    disconnect?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
    delete?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
    connect?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
    update?: Enumerable<ProdutoNoPedidoUpdateWithWhereUniqueWithoutPedidoInput>
    updateMany?: Enumerable<ProdutoNoPedidoUpdateManyWithWhereWithoutPedidoInput>
    deleteMany?: Enumerable<ProdutoNoPedidoScalarWhereInput>
  }

  export type VolumeUncheckedUpdateManyWithoutPedidoInput = {
    create?: XOR<Enumerable<VolumeCreateWithoutPedidoInput>, Enumerable<VolumeUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<VolumeCreateOrConnectWithoutPedidoInput>
    upsert?: Enumerable<VolumeUpsertWithWhereUniqueWithoutPedidoInput>
    createMany?: VolumeCreateManyPedidoInputEnvelope
    set?: Enumerable<VolumeWhereUniqueInput>
    disconnect?: Enumerable<VolumeWhereUniqueInput>
    delete?: Enumerable<VolumeWhereUniqueInput>
    connect?: Enumerable<VolumeWhereUniqueInput>
    update?: Enumerable<VolumeUpdateWithWhereUniqueWithoutPedidoInput>
    updateMany?: Enumerable<VolumeUpdateManyWithWhereWithoutPedidoInput>
    deleteMany?: Enumerable<VolumeScalarWhereInput>
  }

  export type ParcelaUncheckedUpdateManyWithoutPedidoInput = {
    create?: XOR<Enumerable<ParcelaCreateWithoutPedidoInput>, Enumerable<ParcelaUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<ParcelaCreateOrConnectWithoutPedidoInput>
    upsert?: Enumerable<ParcelaUpsertWithWhereUniqueWithoutPedidoInput>
    createMany?: ParcelaCreateManyPedidoInputEnvelope
    set?: Enumerable<ParcelaWhereUniqueInput>
    disconnect?: Enumerable<ParcelaWhereUniqueInput>
    delete?: Enumerable<ParcelaWhereUniqueInput>
    connect?: Enumerable<ParcelaWhereUniqueInput>
    update?: Enumerable<ParcelaUpdateWithWhereUniqueWithoutPedidoInput>
    updateMany?: Enumerable<ParcelaUpdateManyWithWhereWithoutPedidoInput>
    deleteMany?: Enumerable<ParcelaScalarWhereInput>
  }

  export type NotaUncheckedUpdateOneWithoutPedidoInput = {
    create?: XOR<NotaCreateWithoutPedidoInput, NotaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: NotaCreateOrConnectWithoutPedidoInput
    upsert?: NotaUpsertWithoutPedidoInput
    disconnect?: boolean
    delete?: boolean
    connect?: NotaWhereUniqueInput
    update?: XOR<NotaUpdateWithoutPedidoInput, NotaUncheckedUpdateWithoutPedidoInput>
  }

  export type ProdutoNoPedidoUncheckedUpdateManyWithoutPedidoInput = {
    create?: XOR<Enumerable<ProdutoNoPedidoCreateWithoutPedidoInput>, Enumerable<ProdutoNoPedidoUncheckedCreateWithoutPedidoInput>>
    connectOrCreate?: Enumerable<ProdutoNoPedidoCreateOrConnectWithoutPedidoInput>
    upsert?: Enumerable<ProdutoNoPedidoUpsertWithWhereUniqueWithoutPedidoInput>
    createMany?: ProdutoNoPedidoCreateManyPedidoInputEnvelope
    set?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
    disconnect?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
    delete?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
    connect?: Enumerable<ProdutoNoPedidoWhereUniqueInput>
    update?: Enumerable<ProdutoNoPedidoUpdateWithWhereUniqueWithoutPedidoInput>
    updateMany?: Enumerable<ProdutoNoPedidoUpdateManyWithWhereWithoutPedidoInput>
    deleteMany?: Enumerable<ProdutoNoPedidoScalarWhereInput>
  }

  export type EnderecoCreateNestedOneWithoutClienteInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput
    connect?: EnderecoWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutClienteInput>, Enumerable<PedidoUncheckedCreateWithoutClienteInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutClienteInput>
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: Enumerable<PedidoWhereUniqueInput>
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutClienteInput>, Enumerable<PedidoUncheckedCreateWithoutClienteInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutClienteInput>
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: Enumerable<PedidoWhereUniqueInput>
  }

  export type EnderecoUpdateOneWithoutClienteInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput
    upsert?: EnderecoUpsertWithoutClienteInput
    disconnect?: boolean
    delete?: boolean
    connect?: EnderecoWhereUniqueInput
    update?: XOR<EnderecoUpdateWithoutClienteInput, EnderecoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithoutClienteInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutClienteInput>, Enumerable<PedidoUncheckedCreateWithoutClienteInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutClienteInput>
    upsert?: Enumerable<PedidoUpsertWithWhereUniqueWithoutClienteInput>
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: Enumerable<PedidoWhereUniqueInput>
    disconnect?: Enumerable<PedidoWhereUniqueInput>
    delete?: Enumerable<PedidoWhereUniqueInput>
    connect?: Enumerable<PedidoWhereUniqueInput>
    update?: Enumerable<PedidoUpdateWithWhereUniqueWithoutClienteInput>
    updateMany?: Enumerable<PedidoUpdateManyWithWhereWithoutClienteInput>
    deleteMany?: Enumerable<PedidoScalarWhereInput>
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutClienteInput>, Enumerable<PedidoUncheckedCreateWithoutClienteInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutClienteInput>
    upsert?: Enumerable<PedidoUpsertWithWhereUniqueWithoutClienteInput>
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: Enumerable<PedidoWhereUniqueInput>
    disconnect?: Enumerable<PedidoWhereUniqueInput>
    delete?: Enumerable<PedidoWhereUniqueInput>
    connect?: Enumerable<PedidoWhereUniqueInput>
    update?: Enumerable<PedidoUpdateWithWhereUniqueWithoutClienteInput>
    updateMany?: Enumerable<PedidoUpdateManyWithWhereWithoutClienteInput>
    deleteMany?: Enumerable<PedidoScalarWhereInput>
  }

  export type PedidoCreateNestedManyWithoutTransportadoraInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutTransportadoraInput>, Enumerable<PedidoUncheckedCreateWithoutTransportadoraInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutTransportadoraInput>
    createMany?: PedidoCreateManyTransportadoraInputEnvelope
    connect?: Enumerable<PedidoWhereUniqueInput>
  }

  export type PedidoUncheckedCreateNestedManyWithoutTransportadoraInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutTransportadoraInput>, Enumerable<PedidoUncheckedCreateWithoutTransportadoraInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutTransportadoraInput>
    createMany?: PedidoCreateManyTransportadoraInputEnvelope
    connect?: Enumerable<PedidoWhereUniqueInput>
  }

  export type PedidoUpdateManyWithoutTransportadoraInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutTransportadoraInput>, Enumerable<PedidoUncheckedCreateWithoutTransportadoraInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutTransportadoraInput>
    upsert?: Enumerable<PedidoUpsertWithWhereUniqueWithoutTransportadoraInput>
    createMany?: PedidoCreateManyTransportadoraInputEnvelope
    set?: Enumerable<PedidoWhereUniqueInput>
    disconnect?: Enumerable<PedidoWhereUniqueInput>
    delete?: Enumerable<PedidoWhereUniqueInput>
    connect?: Enumerable<PedidoWhereUniqueInput>
    update?: Enumerable<PedidoUpdateWithWhereUniqueWithoutTransportadoraInput>
    updateMany?: Enumerable<PedidoUpdateManyWithWhereWithoutTransportadoraInput>
    deleteMany?: Enumerable<PedidoScalarWhereInput>
  }

  export type PedidoUncheckedUpdateManyWithoutTransportadoraInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutTransportadoraInput>, Enumerable<PedidoUncheckedCreateWithoutTransportadoraInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutTransportadoraInput>
    upsert?: Enumerable<PedidoUpsertWithWhereUniqueWithoutTransportadoraInput>
    createMany?: PedidoCreateManyTransportadoraInputEnvelope
    set?: Enumerable<PedidoWhereUniqueInput>
    disconnect?: Enumerable<PedidoWhereUniqueInput>
    delete?: Enumerable<PedidoWhereUniqueInput>
    connect?: Enumerable<PedidoWhereUniqueInput>
    update?: Enumerable<PedidoUpdateWithWhereUniqueWithoutTransportadoraInput>
    updateMany?: Enumerable<PedidoUpdateManyWithWhereWithoutTransportadoraInput>
    deleteMany?: Enumerable<PedidoScalarWhereInput>
  }

  export type ClienteCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<Enumerable<ClienteCreateWithoutEnderecoInput>, Enumerable<ClienteUncheckedCreateWithoutEnderecoInput>>
    connectOrCreate?: Enumerable<ClienteCreateOrConnectWithoutEnderecoInput>
    createMany?: ClienteCreateManyEnderecoInputEnvelope
    connect?: Enumerable<ClienteWhereUniqueInput>
  }

  export type PedidoCreateNestedManyWithoutEnderecoEntregaInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutEnderecoEntregaInput>, Enumerable<PedidoUncheckedCreateWithoutEnderecoEntregaInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutEnderecoEntregaInput>
    createMany?: PedidoCreateManyEnderecoEntregaInputEnvelope
    connect?: Enumerable<PedidoWhereUniqueInput>
  }

  export type ClienteUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<Enumerable<ClienteCreateWithoutEnderecoInput>, Enumerable<ClienteUncheckedCreateWithoutEnderecoInput>>
    connectOrCreate?: Enumerable<ClienteCreateOrConnectWithoutEnderecoInput>
    createMany?: ClienteCreateManyEnderecoInputEnvelope
    connect?: Enumerable<ClienteWhereUniqueInput>
  }

  export type PedidoUncheckedCreateNestedManyWithoutEnderecoEntregaInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutEnderecoEntregaInput>, Enumerable<PedidoUncheckedCreateWithoutEnderecoEntregaInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutEnderecoEntregaInput>
    createMany?: PedidoCreateManyEnderecoEntregaInputEnvelope
    connect?: Enumerable<PedidoWhereUniqueInput>
  }

  export type ClienteUpdateManyWithoutEnderecoInput = {
    create?: XOR<Enumerable<ClienteCreateWithoutEnderecoInput>, Enumerable<ClienteUncheckedCreateWithoutEnderecoInput>>
    connectOrCreate?: Enumerable<ClienteCreateOrConnectWithoutEnderecoInput>
    upsert?: Enumerable<ClienteUpsertWithWhereUniqueWithoutEnderecoInput>
    createMany?: ClienteCreateManyEnderecoInputEnvelope
    set?: Enumerable<ClienteWhereUniqueInput>
    disconnect?: Enumerable<ClienteWhereUniqueInput>
    delete?: Enumerable<ClienteWhereUniqueInput>
    connect?: Enumerable<ClienteWhereUniqueInput>
    update?: Enumerable<ClienteUpdateWithWhereUniqueWithoutEnderecoInput>
    updateMany?: Enumerable<ClienteUpdateManyWithWhereWithoutEnderecoInput>
    deleteMany?: Enumerable<ClienteScalarWhereInput>
  }

  export type PedidoUpdateManyWithoutEnderecoEntregaInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutEnderecoEntregaInput>, Enumerable<PedidoUncheckedCreateWithoutEnderecoEntregaInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutEnderecoEntregaInput>
    upsert?: Enumerable<PedidoUpsertWithWhereUniqueWithoutEnderecoEntregaInput>
    createMany?: PedidoCreateManyEnderecoEntregaInputEnvelope
    set?: Enumerable<PedidoWhereUniqueInput>
    disconnect?: Enumerable<PedidoWhereUniqueInput>
    delete?: Enumerable<PedidoWhereUniqueInput>
    connect?: Enumerable<PedidoWhereUniqueInput>
    update?: Enumerable<PedidoUpdateWithWhereUniqueWithoutEnderecoEntregaInput>
    updateMany?: Enumerable<PedidoUpdateManyWithWhereWithoutEnderecoEntregaInput>
    deleteMany?: Enumerable<PedidoScalarWhereInput>
  }

  export type ClienteUncheckedUpdateManyWithoutEnderecoInput = {
    create?: XOR<Enumerable<ClienteCreateWithoutEnderecoInput>, Enumerable<ClienteUncheckedCreateWithoutEnderecoInput>>
    connectOrCreate?: Enumerable<ClienteCreateOrConnectWithoutEnderecoInput>
    upsert?: Enumerable<ClienteUpsertWithWhereUniqueWithoutEnderecoInput>
    createMany?: ClienteCreateManyEnderecoInputEnvelope
    set?: Enumerable<ClienteWhereUniqueInput>
    disconnect?: Enumerable<ClienteWhereUniqueInput>
    delete?: Enumerable<ClienteWhereUniqueInput>
    connect?: Enumerable<ClienteWhereUniqueInput>
    update?: Enumerable<ClienteUpdateWithWhereUniqueWithoutEnderecoInput>
    updateMany?: Enumerable<ClienteUpdateManyWithWhereWithoutEnderecoInput>
    deleteMany?: Enumerable<ClienteScalarWhereInput>
  }

  export type PedidoUncheckedUpdateManyWithoutEnderecoEntregaInput = {
    create?: XOR<Enumerable<PedidoCreateWithoutEnderecoEntregaInput>, Enumerable<PedidoUncheckedCreateWithoutEnderecoEntregaInput>>
    connectOrCreate?: Enumerable<PedidoCreateOrConnectWithoutEnderecoEntregaInput>
    upsert?: Enumerable<PedidoUpsertWithWhereUniqueWithoutEnderecoEntregaInput>
    createMany?: PedidoCreateManyEnderecoEntregaInputEnvelope
    set?: Enumerable<PedidoWhereUniqueInput>
    disconnect?: Enumerable<PedidoWhereUniqueInput>
    delete?: Enumerable<PedidoWhereUniqueInput>
    connect?: Enumerable<PedidoWhereUniqueInput>
    update?: Enumerable<PedidoUpdateWithWhereUniqueWithoutEnderecoEntregaInput>
    updateMany?: Enumerable<PedidoUpdateManyWithWhereWithoutEnderecoEntregaInput>
    deleteMany?: Enumerable<PedidoScalarWhereInput>
  }

  export type PedidoCreateNestedOneWithoutVolumeInput = {
    create?: XOR<PedidoCreateWithoutVolumeInput, PedidoUncheckedCreateWithoutVolumeInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutVolumeInput
    connect?: PedidoWhereUniqueInput
  }

  export type DimensaoCreateNestedOneWithoutVolumeInput = {
    create?: XOR<DimensaoCreateWithoutVolumeInput, DimensaoUncheckedCreateWithoutVolumeInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutVolumeInput
    connect?: DimensaoWhereUniqueInput
  }

  export type DimensaoUncheckedCreateNestedOneWithoutVolumeInput = {
    create?: XOR<DimensaoCreateWithoutVolumeInput, DimensaoUncheckedCreateWithoutVolumeInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutVolumeInput
    connect?: DimensaoWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PedidoUpdateOneWithoutVolumeInput = {
    create?: XOR<PedidoCreateWithoutVolumeInput, PedidoUncheckedCreateWithoutVolumeInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutVolumeInput
    upsert?: PedidoUpsertWithoutVolumeInput
    disconnect?: boolean
    delete?: boolean
    connect?: PedidoWhereUniqueInput
    update?: XOR<PedidoUpdateWithoutVolumeInput, PedidoUncheckedUpdateWithoutVolumeInput>
  }

  export type DimensaoUpdateOneWithoutVolumeInput = {
    create?: XOR<DimensaoCreateWithoutVolumeInput, DimensaoUncheckedCreateWithoutVolumeInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutVolumeInput
    upsert?: DimensaoUpsertWithoutVolumeInput
    disconnect?: boolean
    delete?: boolean
    connect?: DimensaoWhereUniqueInput
    update?: XOR<DimensaoUpdateWithoutVolumeInput, DimensaoUncheckedUpdateWithoutVolumeInput>
  }

  export type DimensaoUncheckedUpdateOneWithoutVolumeInput = {
    create?: XOR<DimensaoCreateWithoutVolumeInput, DimensaoUncheckedCreateWithoutVolumeInput>
    connectOrCreate?: DimensaoCreateOrConnectWithoutVolumeInput
    upsert?: DimensaoUpsertWithoutVolumeInput
    disconnect?: boolean
    delete?: boolean
    connect?: DimensaoWhereUniqueInput
    update?: XOR<DimensaoUpdateWithoutVolumeInput, DimensaoUncheckedUpdateWithoutVolumeInput>
  }

  export type VolumeCreateNestedOneWithoutDimensaoInput = {
    create?: XOR<VolumeCreateWithoutDimensaoInput, VolumeUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: VolumeCreateOrConnectWithoutDimensaoInput
    connect?: VolumeWhereUniqueInput
  }

  export type VolumeUpdateOneRequiredWithoutDimensaoInput = {
    create?: XOR<VolumeCreateWithoutDimensaoInput, VolumeUncheckedCreateWithoutDimensaoInput>
    connectOrCreate?: VolumeCreateOrConnectWithoutDimensaoInput
    upsert?: VolumeUpsertWithoutDimensaoInput
    connect?: VolumeWhereUniqueInput
    update?: XOR<VolumeUpdateWithoutDimensaoInput, VolumeUncheckedUpdateWithoutDimensaoInput>
  }

  export type PedidoCreateNestedOneWithoutParcelasInput = {
    create?: XOR<PedidoCreateWithoutParcelasInput, PedidoUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutParcelasInput
    connect?: PedidoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PedidoUpdateOneWithoutParcelasInput = {
    create?: XOR<PedidoCreateWithoutParcelasInput, PedidoUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutParcelasInput
    upsert?: PedidoUpsertWithoutParcelasInput
    disconnect?: boolean
    delete?: boolean
    connect?: PedidoWhereUniqueInput
    update?: XOR<PedidoUpdateWithoutParcelasInput, PedidoUncheckedUpdateWithoutParcelasInput>
  }

  export type PedidoCreateNestedOneWithoutNotaInput = {
    create?: XOR<PedidoCreateWithoutNotaInput, PedidoUncheckedCreateWithoutNotaInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutNotaInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutNotaInput = {
    create?: XOR<PedidoCreateWithoutNotaInput, PedidoUncheckedCreateWithoutNotaInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutNotaInput
    upsert?: PedidoUpsertWithoutNotaInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<PedidoUpdateWithoutNotaInput, PedidoUncheckedUpdateWithoutNotaInput>
  }

  export type PedidoCreateNestedOneWithoutProdutosInput = {
    create?: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProdutosInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneWithoutProdutosInput = {
    create?: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProdutosInput
    upsert?: PedidoUpsertWithoutProdutosInput
    disconnect?: boolean
    delete?: boolean
    connect?: PedidoWhereUniqueInput
    update?: XOR<PedidoUpdateWithoutProdutosInput, PedidoUncheckedUpdateWithoutProdutosInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableFilter | Decimal | number | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CategoriasNoProdutoCreateWithoutProdutoInput = {
    categoria: CategoriaProdutoCreateNestedOneWithoutProdutosInput
  }

  export type CategoriasNoProdutoUncheckedCreateWithoutProdutoInput = {
    categoria_id: number
  }

  export type CategoriasNoProdutoCreateOrConnectWithoutProdutoInput = {
    where: CategoriasNoProdutoWhereUniqueInput
    create: XOR<CategoriasNoProdutoCreateWithoutProdutoInput, CategoriasNoProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type CategoriasNoProdutoCreateManyProdutoInputEnvelope = {
    data: Enumerable<CategoriasNoProdutoCreateManyProdutoInput>
    skipDuplicates?: boolean
  }

  export type CategoriasNoProdutoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: CategoriasNoProdutoWhereUniqueInput
    update: XOR<CategoriasNoProdutoUpdateWithoutProdutoInput, CategoriasNoProdutoUncheckedUpdateWithoutProdutoInput>
    create: XOR<CategoriasNoProdutoCreateWithoutProdutoInput, CategoriasNoProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type CategoriasNoProdutoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: CategoriasNoProdutoWhereUniqueInput
    data: XOR<CategoriasNoProdutoUpdateWithoutProdutoInput, CategoriasNoProdutoUncheckedUpdateWithoutProdutoInput>
  }

  export type CategoriasNoProdutoUpdateManyWithWhereWithoutProdutoInput = {
    where: CategoriasNoProdutoScalarWhereInput
    data: XOR<CategoriasNoProdutoUpdateManyMutationInput, CategoriasNoProdutoUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type CategoriasNoProdutoScalarWhereInput = {
    AND?: Enumerable<CategoriasNoProdutoScalarWhereInput>
    OR?: Enumerable<CategoriasNoProdutoScalarWhereInput>
    NOT?: Enumerable<CategoriasNoProdutoScalarWhereInput>
    produto_id?: StringFilter | string
    categoria_id?: IntFilter | number
  }

  export type ProdutoCreateWithoutCategoriasInput = {
    id: string
    codigo: string
    descricao?: string | null
    tipo?: string | null
    situacao?: string | null
    unidade?: string | null
    preco?: Decimal | number | string | null
    precoCusto?: Decimal | number | string | null
    descricaoCurta?: string | null
    descricaoComplementar?: string | null
    dataInclusao?: Date | string | null
    dataAlteracao?: Date | string | null
    imageThumbnail?: string | null
    urlVideo?: string | null
    nomeFornecedor?: string | null
    codigoFabricante?: string | null
    marca?: string | null
    classFiscal?: string | null
    cest?: string | null
    origem?: number | null
    idGrupoProduto?: number | null
    linkExterno?: string | null
    observacoes?: string | null
    grupoProduto?: string | null
    garantia?: number | null
    descricaoFornecedor?: string | null
    idFabricante?: number | null
    pesoLiq?: Decimal | number | string | null
    pesoBruto?: Decimal | number | string | null
    estoqueMinimo?: Decimal | number | string | null
    estoqueMaximo?: Decimal | number | string | null
    gtin?: string | null
    gtinEmbalagem?: string | null
    larguraProduto?: Decimal | number | string | null
    alturaProduto?: Decimal | number | string | null
    profundidadeProduto?: Decimal | number | string | null
    unidadeMedida?: string | null
    itensPorCaixa?: number | null
    volumes?: number | null
    localizacao?: string | null
    crossdocking?: number | null
    condicao?: string | null
    freteGratis?: string | null
    producao?: string | null
    dataValidade?: Date | string | null
    spedTipoItem?: string | null
    codigoPai?: string | null
    clonarDadosPai?: string | null
  }

  export type ProdutoUncheckedCreateWithoutCategoriasInput = {
    id: string
    codigo: string
    descricao?: string | null
    tipo?: string | null
    situacao?: string | null
    unidade?: string | null
    preco?: Decimal | number | string | null
    precoCusto?: Decimal | number | string | null
    descricaoCurta?: string | null
    descricaoComplementar?: string | null
    dataInclusao?: Date | string | null
    dataAlteracao?: Date | string | null
    imageThumbnail?: string | null
    urlVideo?: string | null
    nomeFornecedor?: string | null
    codigoFabricante?: string | null
    marca?: string | null
    classFiscal?: string | null
    cest?: string | null
    origem?: number | null
    idGrupoProduto?: number | null
    linkExterno?: string | null
    observacoes?: string | null
    grupoProduto?: string | null
    garantia?: number | null
    descricaoFornecedor?: string | null
    idFabricante?: number | null
    pesoLiq?: Decimal | number | string | null
    pesoBruto?: Decimal | number | string | null
    estoqueMinimo?: Decimal | number | string | null
    estoqueMaximo?: Decimal | number | string | null
    gtin?: string | null
    gtinEmbalagem?: string | null
    larguraProduto?: Decimal | number | string | null
    alturaProduto?: Decimal | number | string | null
    profundidadeProduto?: Decimal | number | string | null
    unidadeMedida?: string | null
    itensPorCaixa?: number | null
    volumes?: number | null
    localizacao?: string | null
    crossdocking?: number | null
    condicao?: string | null
    freteGratis?: string | null
    producao?: string | null
    dataValidade?: Date | string | null
    spedTipoItem?: string | null
    codigoPai?: string | null
    clonarDadosPai?: string | null
  }

  export type ProdutoCreateOrConnectWithoutCategoriasInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutCategoriasInput, ProdutoUncheckedCreateWithoutCategoriasInput>
  }

  export type CategoriaProdutoCreateWithoutProdutosInput = {
    id: number
    descricao: string
  }

  export type CategoriaProdutoUncheckedCreateWithoutProdutosInput = {
    id: number
    descricao: string
  }

  export type CategoriaProdutoCreateOrConnectWithoutProdutosInput = {
    where: CategoriaProdutoWhereUniqueInput
    create: XOR<CategoriaProdutoCreateWithoutProdutosInput, CategoriaProdutoUncheckedCreateWithoutProdutosInput>
  }

  export type ProdutoUpsertWithoutCategoriasInput = {
    update: XOR<ProdutoUpdateWithoutCategoriasInput, ProdutoUncheckedUpdateWithoutCategoriasInput>
    create: XOR<ProdutoCreateWithoutCategoriasInput, ProdutoUncheckedCreateWithoutCategoriasInput>
  }

  export type ProdutoUpdateWithoutCategoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precoCusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descricaoCurta?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoComplementar?: NullableStringFieldUpdateOperationsInput | string | null
    dataInclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataAlteracao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    codigoFabricante?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    classFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableIntFieldUpdateOperationsInput | number | null
    idGrupoProduto?: NullableIntFieldUpdateOperationsInput | number | null
    linkExterno?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    grupoProduto?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: NullableIntFieldUpdateOperationsInput | number | null
    descricaoFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    idFabricante?: NullableIntFieldUpdateOperationsInput | number | null
    pesoLiq?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMinimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMaximo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    gtinEmbalagem?: NullableStringFieldUpdateOperationsInput | string | null
    larguraProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    alturaProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidadeProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    itensPorCaixa?: NullableIntFieldUpdateOperationsInput | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    crossdocking?: NullableIntFieldUpdateOperationsInput | number | null
    condicao?: NullableStringFieldUpdateOperationsInput | string | null
    freteGratis?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spedTipoItem?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPai?: NullableStringFieldUpdateOperationsInput | string | null
    clonarDadosPai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoUncheckedUpdateWithoutCategoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precoCusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descricaoCurta?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoComplementar?: NullableStringFieldUpdateOperationsInput | string | null
    dataInclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataAlteracao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    urlVideo?: NullableStringFieldUpdateOperationsInput | string | null
    nomeFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    codigoFabricante?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    classFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    cest?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: NullableIntFieldUpdateOperationsInput | number | null
    idGrupoProduto?: NullableIntFieldUpdateOperationsInput | number | null
    linkExterno?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    grupoProduto?: NullableStringFieldUpdateOperationsInput | string | null
    garantia?: NullableIntFieldUpdateOperationsInput | number | null
    descricaoFornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    idFabricante?: NullableIntFieldUpdateOperationsInput | number | null
    pesoLiq?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMinimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    estoqueMaximo?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    gtin?: NullableStringFieldUpdateOperationsInput | string | null
    gtinEmbalagem?: NullableStringFieldUpdateOperationsInput | string | null
    larguraProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    alturaProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidadeProduto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    itensPorCaixa?: NullableIntFieldUpdateOperationsInput | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    crossdocking?: NullableIntFieldUpdateOperationsInput | number | null
    condicao?: NullableStringFieldUpdateOperationsInput | string | null
    freteGratis?: NullableStringFieldUpdateOperationsInput | string | null
    producao?: NullableStringFieldUpdateOperationsInput | string | null
    dataValidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spedTipoItem?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPai?: NullableStringFieldUpdateOperationsInput | string | null
    clonarDadosPai?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaProdutoUpsertWithoutProdutosInput = {
    update: XOR<CategoriaProdutoUpdateWithoutProdutosInput, CategoriaProdutoUncheckedUpdateWithoutProdutosInput>
    create: XOR<CategoriaProdutoCreateWithoutProdutosInput, CategoriaProdutoUncheckedCreateWithoutProdutosInput>
  }

  export type CategoriaProdutoUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaProdutoUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasNoProdutoCreateWithoutCategoriaInput = {
    produto: ProdutoCreateNestedOneWithoutCategoriasInput
  }

  export type CategoriasNoProdutoUncheckedCreateWithoutCategoriaInput = {
    produto_id: string
  }

  export type CategoriasNoProdutoCreateOrConnectWithoutCategoriaInput = {
    where: CategoriasNoProdutoWhereUniqueInput
    create: XOR<CategoriasNoProdutoCreateWithoutCategoriaInput, CategoriasNoProdutoUncheckedCreateWithoutCategoriaInput>
  }

  export type CategoriasNoProdutoCreateManyCategoriaInputEnvelope = {
    data: Enumerable<CategoriasNoProdutoCreateManyCategoriaInput>
    skipDuplicates?: boolean
  }

  export type CategoriasNoProdutoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: CategoriasNoProdutoWhereUniqueInput
    update: XOR<CategoriasNoProdutoUpdateWithoutCategoriaInput, CategoriasNoProdutoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<CategoriasNoProdutoCreateWithoutCategoriaInput, CategoriasNoProdutoUncheckedCreateWithoutCategoriaInput>
  }

  export type CategoriasNoProdutoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: CategoriasNoProdutoWhereUniqueInput
    data: XOR<CategoriasNoProdutoUpdateWithoutCategoriaInput, CategoriasNoProdutoUncheckedUpdateWithoutCategoriaInput>
  }

  export type CategoriasNoProdutoUpdateManyWithWhereWithoutCategoriaInput = {
    where: CategoriasNoProdutoScalarWhereInput
    data: XOR<CategoriasNoProdutoUpdateManyMutationInput, CategoriasNoProdutoUncheckedUpdateManyWithoutProdutosInput>
  }

  export type ClienteCreateWithoutPedidoInput = {
    id: number
    nome: string
    tipoPessoa?: string | null
    cpfCnpj?: string | null
    incricaoEstadual?: string | null
    rg?: string | null
    contribuinte?: string | null
    fone?: string | null
    celular?: string | null
    email?: string | null
    endereco?: EnderecoCreateNestedOneWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPedidoInput = {
    id: number
    nome: string
    tipoPessoa?: string | null
    cpfCnpj?: string | null
    incricaoEstadual?: string | null
    rg?: string | null
    contribuinte?: string | null
    fone?: string | null
    celular?: string | null
    email?: string | null
    endereco_id: number
  }

  export type ClienteCreateOrConnectWithoutPedidoInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
  }

  export type TransportadoraCreateWithoutPedidoInput = {
    cnpj: string
    nome?: string | null
    tipo_frete?: string | null
    servico_correios?: string | null
  }

  export type TransportadoraUncheckedCreateWithoutPedidoInput = {
    cnpj: string
    nome?: string | null
    tipo_frete?: string | null
    servico_correios?: string | null
  }

  export type TransportadoraCreateOrConnectWithoutPedidoInput = {
    where: TransportadoraWhereUniqueInput
    create: XOR<TransportadoraCreateWithoutPedidoInput, TransportadoraUncheckedCreateWithoutPedidoInput>
  }

  export type EnderecoCreateWithoutPedidoInput = {
    nome?: string | null
    endereco?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cep?: string | null
    cidade?: string | null
    uf?: string | null
    cliente?: ClienteCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateWithoutPedidoInput = {
    id?: number
    nome?: string | null
    endereco?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cep?: string | null
    cidade?: string | null
    uf?: string | null
    cliente?: ClienteUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoCreateOrConnectWithoutPedidoInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutPedidoInput, EnderecoUncheckedCreateWithoutPedidoInput>
  }

  export type VolumeCreateWithoutPedidoInput = {
    id: number
    idServico: number
    idOrigem?: string | null
    servico?: string | null
    codigoServico?: string | null
    codigoRastreamento?: string | null
    valorFretePrevisto?: number | null
    remessaNumero?: string | null
    remessaDataCriacao?: Date | string | null
    dataSaida?: Date | string | null
    prazoEntregaPrevisto?: string | null
    valorDeclarado?: number | null
    avisoRecebimento?: boolean | null
    maoPropria?: boolean | null
    urlRastreamento?: string | null
    dimensao?: DimensaoCreateNestedOneWithoutVolumeInput
  }

  export type VolumeUncheckedCreateWithoutPedidoInput = {
    id: number
    idServico: number
    idOrigem?: string | null
    servico?: string | null
    codigoServico?: string | null
    codigoRastreamento?: string | null
    valorFretePrevisto?: number | null
    remessaNumero?: string | null
    remessaDataCriacao?: Date | string | null
    dataSaida?: Date | string | null
    prazoEntregaPrevisto?: string | null
    valorDeclarado?: number | null
    avisoRecebimento?: boolean | null
    maoPropria?: boolean | null
    urlRastreamento?: string | null
    dimensao?: DimensaoUncheckedCreateNestedOneWithoutVolumeInput
  }

  export type VolumeCreateOrConnectWithoutPedidoInput = {
    where: VolumeWhereUniqueInput
    create: XOR<VolumeCreateWithoutPedidoInput, VolumeUncheckedCreateWithoutPedidoInput>
  }

  export type VolumeCreateManyPedidoInputEnvelope = {
    data: Enumerable<VolumeCreateManyPedidoInput>
    skipDuplicates?: boolean
  }

  export type ParcelaCreateWithoutPedidoInput = {
    id: number
    valor: Decimal | number | string
    dataVencimento: Date | string
    obs?: string | null
    destino?: string | null
    formaPagamento_id: string
    formaPagamentoDescricao?: string | null
    formaPagamentoCodigoFiscal?: string | null
  }

  export type ParcelaUncheckedCreateWithoutPedidoInput = {
    id: number
    valor: Decimal | number | string
    dataVencimento: Date | string
    obs?: string | null
    destino?: string | null
    formaPagamento_id: string
    formaPagamentoDescricao?: string | null
    formaPagamentoCodigoFiscal?: string | null
  }

  export type ParcelaCreateOrConnectWithoutPedidoInput = {
    where: ParcelaWhereUniqueInput
    create: XOR<ParcelaCreateWithoutPedidoInput, ParcelaUncheckedCreateWithoutPedidoInput>
  }

  export type ParcelaCreateManyPedidoInputEnvelope = {
    data: Enumerable<ParcelaCreateManyPedidoInput>
    skipDuplicates?: boolean
  }

  export type NotaCreateWithoutPedidoInput = {
    numero: string
    serie?: string | null
    dataEmissao?: Date | string | null
    situacao?: number | null
    valorNota?: Decimal | number | string | null
    chaveAcesso?: string | null
  }

  export type NotaUncheckedCreateWithoutPedidoInput = {
    numero: string
    serie?: string | null
    dataEmissao?: Date | string | null
    situacao?: number | null
    valorNota?: Decimal | number | string | null
    chaveAcesso?: string | null
  }

  export type NotaCreateOrConnectWithoutPedidoInput = {
    where: NotaWhereUniqueInput
    create: XOR<NotaCreateWithoutPedidoInput, NotaUncheckedCreateWithoutPedidoInput>
  }

  export type ProdutoNoPedidoCreateWithoutPedidoInput = {
    codigo?: string | null
    descricao?: string | null
    quantidade?: Decimal | number | string | null
    valorunidade?: Decimal | number | string | null
    precocusto?: Decimal | number | string | null
    descontoItem?: Decimal | number | string | null
    un?: string | null
    pesoBruto?: Decimal | number | string | null
    largura?: Decimal | number | string | null
    altura?: Decimal | number | string | null
    profundidade?: Decimal | number | string | null
    unidadeMedida?: string | null
    descricaoDetalhada?: string | null
  }

  export type ProdutoNoPedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    codigo?: string | null
    descricao?: string | null
    quantidade?: Decimal | number | string | null
    valorunidade?: Decimal | number | string | null
    precocusto?: Decimal | number | string | null
    descontoItem?: Decimal | number | string | null
    un?: string | null
    pesoBruto?: Decimal | number | string | null
    largura?: Decimal | number | string | null
    altura?: Decimal | number | string | null
    profundidade?: Decimal | number | string | null
    unidadeMedida?: string | null
    descricaoDetalhada?: string | null
  }

  export type ProdutoNoPedidoCreateOrConnectWithoutPedidoInput = {
    where: ProdutoNoPedidoWhereUniqueInput
    create: XOR<ProdutoNoPedidoCreateWithoutPedidoInput, ProdutoNoPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ProdutoNoPedidoCreateManyPedidoInputEnvelope = {
    data: Enumerable<ProdutoNoPedidoCreateManyPedidoInput>
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutPedidoInput = {
    update: XOR<ClienteUpdateWithoutPedidoInput, ClienteUncheckedUpdateWithoutPedidoInput>
    create: XOR<ClienteCreateWithoutPedidoInput, ClienteUncheckedCreateWithoutPedidoInput>
  }

  export type ClienteUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: EnderecoUpdateOneWithoutClienteInput
  }

  export type ClienteUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    endereco_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransportadoraUpsertWithoutPedidoInput = {
    update: XOR<TransportadoraUpdateWithoutPedidoInput, TransportadoraUncheckedUpdateWithoutPedidoInput>
    create: XOR<TransportadoraCreateWithoutPedidoInput, TransportadoraUncheckedCreateWithoutPedidoInput>
  }

  export type TransportadoraUpdateWithoutPedidoInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_frete?: NullableStringFieldUpdateOperationsInput | string | null
    servico_correios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransportadoraUncheckedUpdateWithoutPedidoInput = {
    cnpj?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_frete?: NullableStringFieldUpdateOperationsInput | string | null
    servico_correios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUpsertWithoutPedidoInput = {
    update: XOR<EnderecoUpdateWithoutPedidoInput, EnderecoUncheckedUpdateWithoutPedidoInput>
    create: XOR<EnderecoCreateWithoutPedidoInput, EnderecoUncheckedCreateWithoutPedidoInput>
  }

  export type EnderecoUpdateWithoutPedidoInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUncheckedUpdateManyWithoutEnderecoInput
  }

  export type VolumeUpsertWithWhereUniqueWithoutPedidoInput = {
    where: VolumeWhereUniqueInput
    update: XOR<VolumeUpdateWithoutPedidoInput, VolumeUncheckedUpdateWithoutPedidoInput>
    create: XOR<VolumeCreateWithoutPedidoInput, VolumeUncheckedCreateWithoutPedidoInput>
  }

  export type VolumeUpdateWithWhereUniqueWithoutPedidoInput = {
    where: VolumeWhereUniqueInput
    data: XOR<VolumeUpdateWithoutPedidoInput, VolumeUncheckedUpdateWithoutPedidoInput>
  }

  export type VolumeUpdateManyWithWhereWithoutPedidoInput = {
    where: VolumeScalarWhereInput
    data: XOR<VolumeUpdateManyMutationInput, VolumeUncheckedUpdateManyWithoutVolumeInput>
  }

  export type VolumeScalarWhereInput = {
    AND?: Enumerable<VolumeScalarWhereInput>
    OR?: Enumerable<VolumeScalarWhereInput>
    NOT?: Enumerable<VolumeScalarWhereInput>
    id?: IntFilter | number
    idServico?: IntFilter | number
    idOrigem?: StringNullableFilter | string | null
    servico?: StringNullableFilter | string | null
    codigoServico?: StringNullableFilter | string | null
    codigoRastreamento?: StringNullableFilter | string | null
    valorFretePrevisto?: FloatNullableFilter | number | null
    remessaNumero?: StringNullableFilter | string | null
    remessaDataCriacao?: DateTimeNullableFilter | Date | string | null
    dataSaida?: DateTimeNullableFilter | Date | string | null
    prazoEntregaPrevisto?: StringNullableFilter | string | null
    valorDeclarado?: FloatNullableFilter | number | null
    avisoRecebimento?: BoolNullableFilter | boolean | null
    maoPropria?: BoolNullableFilter | boolean | null
    urlRastreamento?: StringNullableFilter | string | null
    pedidoNumero?: IntNullableFilter | number | null
  }

  export type ParcelaUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ParcelaWhereUniqueInput
    update: XOR<ParcelaUpdateWithoutPedidoInput, ParcelaUncheckedUpdateWithoutPedidoInput>
    create: XOR<ParcelaCreateWithoutPedidoInput, ParcelaUncheckedCreateWithoutPedidoInput>
  }

  export type ParcelaUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ParcelaWhereUniqueInput
    data: XOR<ParcelaUpdateWithoutPedidoInput, ParcelaUncheckedUpdateWithoutPedidoInput>
  }

  export type ParcelaUpdateManyWithWhereWithoutPedidoInput = {
    where: ParcelaScalarWhereInput
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyWithoutParcelasInput>
  }

  export type ParcelaScalarWhereInput = {
    AND?: Enumerable<ParcelaScalarWhereInput>
    OR?: Enumerable<ParcelaScalarWhereInput>
    NOT?: Enumerable<ParcelaScalarWhereInput>
    id?: IntFilter | number
    valor?: DecimalFilter | Decimal | number | string
    dataVencimento?: DateTimeFilter | Date | string
    obs?: StringNullableFilter | string | null
    destino?: StringNullableFilter | string | null
    formaPagamento_id?: StringFilter | string
    formaPagamentoDescricao?: StringNullableFilter | string | null
    formaPagamentoCodigoFiscal?: StringNullableFilter | string | null
    pedidoNumero?: IntNullableFilter | number | null
  }

  export type NotaUpsertWithoutPedidoInput = {
    update: XOR<NotaUpdateWithoutPedidoInput, NotaUncheckedUpdateWithoutPedidoInput>
    create: XOR<NotaCreateWithoutPedidoInput, NotaUncheckedCreateWithoutPedidoInput>
  }

  export type NotaUpdateWithoutPedidoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    dataEmissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    situacao?: NullableIntFieldUpdateOperationsInput | number | null
    valorNota?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    chaveAcesso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotaUncheckedUpdateWithoutPedidoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    serie?: NullableStringFieldUpdateOperationsInput | string | null
    dataEmissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    situacao?: NullableIntFieldUpdateOperationsInput | number | null
    valorNota?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    chaveAcesso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoNoPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ProdutoNoPedidoWhereUniqueInput
    update: XOR<ProdutoNoPedidoUpdateWithoutPedidoInput, ProdutoNoPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ProdutoNoPedidoCreateWithoutPedidoInput, ProdutoNoPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ProdutoNoPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ProdutoNoPedidoWhereUniqueInput
    data: XOR<ProdutoNoPedidoUpdateWithoutPedidoInput, ProdutoNoPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ProdutoNoPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ProdutoNoPedidoScalarWhereInput
    data: XOR<ProdutoNoPedidoUpdateManyMutationInput, ProdutoNoPedidoUncheckedUpdateManyWithoutProdutosInput>
  }

  export type ProdutoNoPedidoScalarWhereInput = {
    AND?: Enumerable<ProdutoNoPedidoScalarWhereInput>
    OR?: Enumerable<ProdutoNoPedidoScalarWhereInput>
    NOT?: Enumerable<ProdutoNoPedidoScalarWhereInput>
    id?: IntFilter | number
    codigo?: StringNullableFilter | string | null
    descricao?: StringNullableFilter | string | null
    quantidade?: DecimalNullableFilter | Decimal | number | string | null
    valorunidade?: DecimalNullableFilter | Decimal | number | string | null
    precocusto?: DecimalNullableFilter | Decimal | number | string | null
    descontoItem?: DecimalNullableFilter | Decimal | number | string | null
    un?: StringNullableFilter | string | null
    pesoBruto?: DecimalNullableFilter | Decimal | number | string | null
    largura?: DecimalNullableFilter | Decimal | number | string | null
    altura?: DecimalNullableFilter | Decimal | number | string | null
    profundidade?: DecimalNullableFilter | Decimal | number | string | null
    unidadeMedida?: StringNullableFilter | string | null
    descricaoDetalhada?: StringNullableFilter | string | null
    pedidoNumero?: IntNullableFilter | number | null
  }

  export type EnderecoCreateWithoutClienteInput = {
    nome?: string | null
    endereco?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cep?: string | null
    cidade?: string | null
    uf?: string | null
    pedido?: PedidoCreateNestedManyWithoutEnderecoEntregaInput
  }

  export type EnderecoUncheckedCreateWithoutClienteInput = {
    id?: number
    nome?: string | null
    endereco?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cep?: string | null
    cidade?: string | null
    uf?: string | null
    pedido?: PedidoUncheckedCreateNestedManyWithoutEnderecoEntregaInput
  }

  export type EnderecoCreateOrConnectWithoutClienteInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateWithoutClienteInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    transportadora?: TransportadoraCreateNestedOneWithoutPedidoInput
    enderecoEntrega?: EnderecoCreateNestedOneWithoutPedidoInput
    volume?: VolumeCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaCreateNestedManyWithoutPedidoInput
    nota?: NotaCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    transportadora_id?: string | null
    enderecoEntrega_id?: number | null
    volume?: VolumeUncheckedCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutPedidoInput
    nota?: NotaUncheckedCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: Enumerable<PedidoCreateManyClienteInput>
    skipDuplicates?: boolean
  }

  export type EnderecoUpsertWithoutClienteInput = {
    update: XOR<EnderecoUpdateWithoutClienteInput, EnderecoUncheckedUpdateWithoutClienteInput>
    create: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput>
  }

  export type EnderecoUpdateWithoutClienteInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateManyWithoutEnderecoEntregaInput
  }

  export type EnderecoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUncheckedUpdateManyWithoutEnderecoEntregaInput
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: Enumerable<PedidoScalarWhereInput>
    OR?: Enumerable<PedidoScalarWhereInput>
    NOT?: Enumerable<PedidoScalarWhereInput>
    numero?: IntFilter | number
    desconto?: FloatNullableFilter | number | null
    observacoes?: StringNullableFilter | string | null
    observacaointerna?: StringNullableFilter | string | null
    data?: DateTimeNullableFilter | Date | string | null
    dataSaida?: DateTimeNullableFilter | Date | string | null
    numeroOrdemCompra?: StringNullableFilter | string | null
    vendedor?: StringNullableFilter | string | null
    valorfrete?: FloatNullableFilter | number | null
    outrasdespesas?: FloatNullableFilter | number | null
    totalprodutos?: FloatNullableFilter | number | null
    totalvenda?: FloatNullableFilter | number | null
    situacao?: StringNullableFilter | string | null
    loja?: StringNullableFilter | string | null
    numeroPedidoLoja?: StringNullableFilter | string | null
    tipoIntegracao?: StringNullableFilter | string | null
    cliente_id?: IntFilter | number
    transportadora_id?: StringNullableFilter | string | null
    enderecoEntrega_id?: IntNullableFilter | number | null
  }

  export type PedidoCreateWithoutTransportadoraInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente: ClienteCreateNestedOneWithoutPedidoInput
    enderecoEntrega?: EnderecoCreateNestedOneWithoutPedidoInput
    volume?: VolumeCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaCreateNestedManyWithoutPedidoInput
    nota?: NotaCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutTransportadoraInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    enderecoEntrega_id?: number | null
    volume?: VolumeUncheckedCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutPedidoInput
    nota?: NotaUncheckedCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutTransportadoraInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutTransportadoraInput, PedidoUncheckedCreateWithoutTransportadoraInput>
  }

  export type PedidoCreateManyTransportadoraInputEnvelope = {
    data: Enumerable<PedidoCreateManyTransportadoraInput>
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutTransportadoraInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutTransportadoraInput, PedidoUncheckedUpdateWithoutTransportadoraInput>
    create: XOR<PedidoCreateWithoutTransportadoraInput, PedidoUncheckedCreateWithoutTransportadoraInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutTransportadoraInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutTransportadoraInput, PedidoUncheckedUpdateWithoutTransportadoraInput>
  }

  export type PedidoUpdateManyWithWhereWithoutTransportadoraInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ClienteCreateWithoutEnderecoInput = {
    id: number
    nome: string
    tipoPessoa?: string | null
    cpfCnpj?: string | null
    incricaoEstadual?: string | null
    rg?: string | null
    contribuinte?: string | null
    fone?: string | null
    celular?: string | null
    email?: string | null
    pedido?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutEnderecoInput = {
    id: number
    nome: string
    tipoPessoa?: string | null
    cpfCnpj?: string | null
    incricaoEstadual?: string | null
    rg?: string | null
    contribuinte?: string | null
    fone?: string | null
    celular?: string | null
    email?: string | null
    pedido?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutEnderecoInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEnderecoInput, ClienteUncheckedCreateWithoutEnderecoInput>
  }

  export type ClienteCreateManyEnderecoInputEnvelope = {
    data: Enumerable<ClienteCreateManyEnderecoInput>
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutEnderecoEntregaInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente: ClienteCreateNestedOneWithoutPedidoInput
    transportadora?: TransportadoraCreateNestedOneWithoutPedidoInput
    volume?: VolumeCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaCreateNestedManyWithoutPedidoInput
    nota?: NotaCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutEnderecoEntregaInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    transportadora_id?: string | null
    volume?: VolumeUncheckedCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutPedidoInput
    nota?: NotaUncheckedCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutEnderecoEntregaInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutEnderecoEntregaInput, PedidoUncheckedCreateWithoutEnderecoEntregaInput>
  }

  export type PedidoCreateManyEnderecoEntregaInputEnvelope = {
    data: Enumerable<PedidoCreateManyEnderecoEntregaInput>
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutEnderecoInput, ClienteUncheckedUpdateWithoutEnderecoInput>
    create: XOR<ClienteCreateWithoutEnderecoInput, ClienteUncheckedCreateWithoutEnderecoInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutEnderecoInput, ClienteUncheckedUpdateWithoutEnderecoInput>
  }

  export type ClienteUpdateManyWithWhereWithoutEnderecoInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: Enumerable<ClienteScalarWhereInput>
    OR?: Enumerable<ClienteScalarWhereInput>
    NOT?: Enumerable<ClienteScalarWhereInput>
    id?: IntFilter | number
    nome?: StringFilter | string
    tipoPessoa?: StringNullableFilter | string | null
    cpfCnpj?: StringNullableFilter | string | null
    incricaoEstadual?: StringNullableFilter | string | null
    rg?: StringNullableFilter | string | null
    contribuinte?: StringNullableFilter | string | null
    fone?: StringNullableFilter | string | null
    celular?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    endereco_id?: IntFilter | number
  }

  export type PedidoUpsertWithWhereUniqueWithoutEnderecoEntregaInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutEnderecoEntregaInput, PedidoUncheckedUpdateWithoutEnderecoEntregaInput>
    create: XOR<PedidoCreateWithoutEnderecoEntregaInput, PedidoUncheckedCreateWithoutEnderecoEntregaInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutEnderecoEntregaInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutEnderecoEntregaInput, PedidoUncheckedUpdateWithoutEnderecoEntregaInput>
  }

  export type PedidoUpdateManyWithWhereWithoutEnderecoEntregaInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutVolumeInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente: ClienteCreateNestedOneWithoutPedidoInput
    transportadora?: TransportadoraCreateNestedOneWithoutPedidoInput
    enderecoEntrega?: EnderecoCreateNestedOneWithoutPedidoInput
    parcelas?: ParcelaCreateNestedManyWithoutPedidoInput
    nota?: NotaCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutVolumeInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    transportadora_id?: string | null
    enderecoEntrega_id?: number | null
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutPedidoInput
    nota?: NotaUncheckedCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutVolumeInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutVolumeInput, PedidoUncheckedCreateWithoutVolumeInput>
  }

  export type DimensaoCreateWithoutVolumeInput = {
    id: number
    peso?: string | null
    altura?: string | null
    largura?: string | null
    comprimento?: string | null
    diametro?: string | null
  }

  export type DimensaoUncheckedCreateWithoutVolumeInput = {
    id: number
    peso?: string | null
    altura?: string | null
    largura?: string | null
    comprimento?: string | null
    diametro?: string | null
  }

  export type DimensaoCreateOrConnectWithoutVolumeInput = {
    where: DimensaoWhereUniqueInput
    create: XOR<DimensaoCreateWithoutVolumeInput, DimensaoUncheckedCreateWithoutVolumeInput>
  }

  export type PedidoUpsertWithoutVolumeInput = {
    update: XOR<PedidoUpdateWithoutVolumeInput, PedidoUncheckedUpdateWithoutVolumeInput>
    create: XOR<PedidoCreateWithoutVolumeInput, PedidoUncheckedCreateWithoutVolumeInput>
  }

  export type PedidoUpdateWithoutVolumeInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidoInput
    transportadora?: TransportadoraUpdateOneWithoutPedidoInput
    enderecoEntrega?: EnderecoUpdateOneWithoutPedidoInput
    parcelas?: ParcelaUpdateManyWithoutPedidoInput
    nota?: NotaUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUpdateManyWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateWithoutVolumeInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: IntFieldUpdateOperationsInput | number
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
    parcelas?: ParcelaUncheckedUpdateManyWithoutPedidoInput
    nota?: NotaUncheckedUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedUpdateManyWithoutPedidoInput
  }

  export type DimensaoUpsertWithoutVolumeInput = {
    update: XOR<DimensaoUpdateWithoutVolumeInput, DimensaoUncheckedUpdateWithoutVolumeInput>
    create: XOR<DimensaoCreateWithoutVolumeInput, DimensaoUncheckedCreateWithoutVolumeInput>
  }

  export type DimensaoUpdateWithoutVolumeInput = {
    id?: IntFieldUpdateOperationsInput | number
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableStringFieldUpdateOperationsInput | string | null
    largura?: NullableStringFieldUpdateOperationsInput | string | null
    comprimento?: NullableStringFieldUpdateOperationsInput | string | null
    diametro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DimensaoUncheckedUpdateWithoutVolumeInput = {
    id?: IntFieldUpdateOperationsInput | number
    peso?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableStringFieldUpdateOperationsInput | string | null
    largura?: NullableStringFieldUpdateOperationsInput | string | null
    comprimento?: NullableStringFieldUpdateOperationsInput | string | null
    diametro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VolumeCreateWithoutDimensaoInput = {
    id: number
    idServico: number
    idOrigem?: string | null
    servico?: string | null
    codigoServico?: string | null
    codigoRastreamento?: string | null
    valorFretePrevisto?: number | null
    remessaNumero?: string | null
    remessaDataCriacao?: Date | string | null
    dataSaida?: Date | string | null
    prazoEntregaPrevisto?: string | null
    valorDeclarado?: number | null
    avisoRecebimento?: boolean | null
    maoPropria?: boolean | null
    urlRastreamento?: string | null
    pedido?: PedidoCreateNestedOneWithoutVolumeInput
  }

  export type VolumeUncheckedCreateWithoutDimensaoInput = {
    id: number
    idServico: number
    idOrigem?: string | null
    servico?: string | null
    codigoServico?: string | null
    codigoRastreamento?: string | null
    valorFretePrevisto?: number | null
    remessaNumero?: string | null
    remessaDataCriacao?: Date | string | null
    dataSaida?: Date | string | null
    prazoEntregaPrevisto?: string | null
    valorDeclarado?: number | null
    avisoRecebimento?: boolean | null
    maoPropria?: boolean | null
    urlRastreamento?: string | null
    pedidoNumero?: number | null
  }

  export type VolumeCreateOrConnectWithoutDimensaoInput = {
    where: VolumeWhereUniqueInput
    create: XOR<VolumeCreateWithoutDimensaoInput, VolumeUncheckedCreateWithoutDimensaoInput>
  }

  export type VolumeUpsertWithoutDimensaoInput = {
    update: XOR<VolumeUpdateWithoutDimensaoInput, VolumeUncheckedUpdateWithoutDimensaoInput>
    create: XOR<VolumeCreateWithoutDimensaoInput, VolumeUncheckedCreateWithoutDimensaoInput>
  }

  export type VolumeUpdateWithoutDimensaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateOneWithoutVolumeInput
  }

  export type VolumeUncheckedUpdateWithoutDimensaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoNumero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoCreateWithoutParcelasInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente: ClienteCreateNestedOneWithoutPedidoInput
    transportadora?: TransportadoraCreateNestedOneWithoutPedidoInput
    enderecoEntrega?: EnderecoCreateNestedOneWithoutPedidoInput
    volume?: VolumeCreateNestedManyWithoutPedidoInput
    nota?: NotaCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutParcelasInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    transportadora_id?: string | null
    enderecoEntrega_id?: number | null
    volume?: VolumeUncheckedCreateNestedManyWithoutPedidoInput
    nota?: NotaUncheckedCreateNestedOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutParcelasInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutParcelasInput, PedidoUncheckedCreateWithoutParcelasInput>
  }

  export type PedidoUpsertWithoutParcelasInput = {
    update: XOR<PedidoUpdateWithoutParcelasInput, PedidoUncheckedUpdateWithoutParcelasInput>
    create: XOR<PedidoCreateWithoutParcelasInput, PedidoUncheckedCreateWithoutParcelasInput>
  }

  export type PedidoUpdateWithoutParcelasInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidoInput
    transportadora?: TransportadoraUpdateOneWithoutPedidoInput
    enderecoEntrega?: EnderecoUpdateOneWithoutPedidoInput
    volume?: VolumeUpdateManyWithoutPedidoInput
    nota?: NotaUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUpdateManyWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateWithoutParcelasInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: IntFieldUpdateOperationsInput | number
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: VolumeUncheckedUpdateManyWithoutPedidoInput
    nota?: NotaUncheckedUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedUpdateManyWithoutPedidoInput
  }

  export type PedidoCreateWithoutNotaInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente: ClienteCreateNestedOneWithoutPedidoInput
    transportadora?: TransportadoraCreateNestedOneWithoutPedidoInput
    enderecoEntrega?: EnderecoCreateNestedOneWithoutPedidoInput
    volume?: VolumeCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaCreateNestedManyWithoutPedidoInput
    produtos?: ProdutoNoPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutNotaInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    transportadora_id?: string | null
    enderecoEntrega_id?: number | null
    volume?: VolumeUncheckedCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutNotaInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutNotaInput, PedidoUncheckedCreateWithoutNotaInput>
  }

  export type PedidoUpsertWithoutNotaInput = {
    update: XOR<PedidoUpdateWithoutNotaInput, PedidoUncheckedUpdateWithoutNotaInput>
    create: XOR<PedidoCreateWithoutNotaInput, PedidoUncheckedCreateWithoutNotaInput>
  }

  export type PedidoUpdateWithoutNotaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidoInput
    transportadora?: TransportadoraUpdateOneWithoutPedidoInput
    enderecoEntrega?: EnderecoUpdateOneWithoutPedidoInput
    volume?: VolumeUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUpdateManyWithoutPedidoInput
    produtos?: ProdutoNoPedidoUpdateManyWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateWithoutNotaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: IntFieldUpdateOperationsInput | number
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: VolumeUncheckedUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedUpdateManyWithoutPedidoInput
  }

  export type PedidoCreateWithoutProdutosInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente: ClienteCreateNestedOneWithoutPedidoInput
    transportadora?: TransportadoraCreateNestedOneWithoutPedidoInput
    enderecoEntrega?: EnderecoCreateNestedOneWithoutPedidoInput
    volume?: VolumeCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaCreateNestedManyWithoutPedidoInput
    nota?: NotaCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutProdutosInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    transportadora_id?: string | null
    enderecoEntrega_id?: number | null
    volume?: VolumeUncheckedCreateNestedManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutPedidoInput
    nota?: NotaUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutProdutosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
  }

  export type PedidoUpsertWithoutProdutosInput = {
    update: XOR<PedidoUpdateWithoutProdutosInput, PedidoUncheckedUpdateWithoutProdutosInput>
    create: XOR<PedidoCreateWithoutProdutosInput, PedidoUncheckedCreateWithoutProdutosInput>
  }

  export type PedidoUpdateWithoutProdutosInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidoInput
    transportadora?: TransportadoraUpdateOneWithoutPedidoInput
    enderecoEntrega?: EnderecoUpdateOneWithoutPedidoInput
    volume?: VolumeUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUpdateManyWithoutPedidoInput
    nota?: NotaUpdateOneWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateWithoutProdutosInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: IntFieldUpdateOperationsInput | number
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: VolumeUncheckedUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutPedidoInput
    nota?: NotaUncheckedUpdateOneWithoutPedidoInput
  }

  export type CategoriasNoProdutoCreateManyProdutoInput = {
    categoria_id: number
  }

  export type CategoriasNoProdutoUpdateWithoutProdutoInput = {
    categoria?: CategoriaProdutoUpdateOneRequiredWithoutProdutosInput
  }

  export type CategoriasNoProdutoUncheckedUpdateWithoutProdutoInput = {
    categoria_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriasNoProdutoUncheckedUpdateManyWithoutCategoriasInput = {
    categoria_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriasNoProdutoCreateManyCategoriaInput = {
    produto_id: string
  }

  export type CategoriasNoProdutoUpdateWithoutCategoriaInput = {
    produto?: ProdutoUpdateOneRequiredWithoutCategoriasInput
  }

  export type CategoriasNoProdutoUncheckedUpdateWithoutCategoriaInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasNoProdutoUncheckedUpdateManyWithoutProdutosInput = {
    produto_id?: StringFieldUpdateOperationsInput | string
  }

  export type VolumeCreateManyPedidoInput = {
    id: number
    idServico: number
    idOrigem?: string | null
    servico?: string | null
    codigoServico?: string | null
    codigoRastreamento?: string | null
    valorFretePrevisto?: number | null
    remessaNumero?: string | null
    remessaDataCriacao?: Date | string | null
    dataSaida?: Date | string | null
    prazoEntregaPrevisto?: string | null
    valorDeclarado?: number | null
    avisoRecebimento?: boolean | null
    maoPropria?: boolean | null
    urlRastreamento?: string | null
  }

  export type ParcelaCreateManyPedidoInput = {
    id: number
    valor: Decimal | number | string
    dataVencimento: Date | string
    obs?: string | null
    destino?: string | null
    formaPagamento_id: string
    formaPagamentoDescricao?: string | null
    formaPagamentoCodigoFiscal?: string | null
  }

  export type ProdutoNoPedidoCreateManyPedidoInput = {
    id?: number
    codigo?: string | null
    descricao?: string | null
    quantidade?: Decimal | number | string | null
    valorunidade?: Decimal | number | string | null
    precocusto?: Decimal | number | string | null
    descontoItem?: Decimal | number | string | null
    un?: string | null
    pesoBruto?: Decimal | number | string | null
    largura?: Decimal | number | string | null
    altura?: Decimal | number | string | null
    profundidade?: Decimal | number | string | null
    unidadeMedida?: string | null
    descricaoDetalhada?: string | null
  }

  export type VolumeUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    dimensao?: DimensaoUpdateOneWithoutVolumeInput
  }

  export type VolumeUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    dimensao?: DimensaoUncheckedUpdateOneWithoutVolumeInput
  }

  export type VolumeUncheckedUpdateManyWithoutVolumeInput = {
    id?: IntFieldUpdateOperationsInput | number
    idServico?: IntFieldUpdateOperationsInput | number
    idOrigem?: NullableStringFieldUpdateOperationsInput | string | null
    servico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoServico?: NullableStringFieldUpdateOperationsInput | string | null
    codigoRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
    valorFretePrevisto?: NullableFloatFieldUpdateOperationsInput | number | null
    remessaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    remessaDataCriacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prazoEntregaPrevisto?: NullableStringFieldUpdateOperationsInput | string | null
    valorDeclarado?: NullableFloatFieldUpdateOperationsInput | number | null
    avisoRecebimento?: NullableBoolFieldUpdateOperationsInput | boolean | null
    maoPropria?: NullableBoolFieldUpdateOperationsInput | boolean | null
    urlRastreamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParcelaUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamento_id?: StringFieldUpdateOperationsInput | string
    formaPagamentoDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamentoCodigoFiscal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParcelaUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamento_id?: StringFieldUpdateOperationsInput | string
    formaPagamentoDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamentoCodigoFiscal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParcelaUncheckedUpdateManyWithoutParcelasInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    destino?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamento_id?: StringFieldUpdateOperationsInput | string
    formaPagamentoDescricao?: NullableStringFieldUpdateOperationsInput | string | null
    formaPagamentoCodigoFiscal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoNoPedidoUpdateWithoutPedidoInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    valorunidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precocusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descontoItem?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    un?: NullableStringFieldUpdateOperationsInput | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoNoPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    valorunidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precocusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descontoItem?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    un?: NullableStringFieldUpdateOperationsInput | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoNoPedidoUncheckedUpdateManyWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    valorunidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    precocusto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    descontoItem?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    un?: NullableStringFieldUpdateOperationsInput | string | null
    pesoBruto?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    largura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    profundidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    unidadeMedida?: NullableStringFieldUpdateOperationsInput | string | null
    descricaoDetalhada?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoCreateManyClienteInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    transportadora_id?: string | null
    enderecoEntrega_id?: number | null
  }

  export type PedidoUpdateWithoutClienteInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    transportadora?: TransportadoraUpdateOneWithoutPedidoInput
    enderecoEntrega?: EnderecoUpdateOneWithoutPedidoInput
    volume?: VolumeUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUpdateManyWithoutPedidoInput
    nota?: NotaUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUpdateManyWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: VolumeUncheckedUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutPedidoInput
    nota?: NotaUncheckedUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedUpdateManyWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateManyWithoutPedidoInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoCreateManyTransportadoraInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    enderecoEntrega_id?: number | null
  }

  export type PedidoUpdateWithoutTransportadoraInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidoInput
    enderecoEntrega?: EnderecoUpdateOneWithoutPedidoInput
    volume?: VolumeUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUpdateManyWithoutPedidoInput
    nota?: NotaUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUpdateManyWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateWithoutTransportadoraInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: IntFieldUpdateOperationsInput | number
    enderecoEntrega_id?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: VolumeUncheckedUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutPedidoInput
    nota?: NotaUncheckedUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedUpdateManyWithoutPedidoInput
  }

  export type ClienteCreateManyEnderecoInput = {
    id: number
    nome: string
    tipoPessoa?: string | null
    cpfCnpj?: string | null
    incricaoEstadual?: string | null
    rg?: string | null
    contribuinte?: string | null
    fone?: string | null
    celular?: string | null
    email?: string | null
  }

  export type PedidoCreateManyEnderecoEntregaInput = {
    numero: number
    desconto?: number | null
    observacoes?: string | null
    observacaointerna?: string | null
    data?: Date | string | null
    dataSaida?: Date | string | null
    numeroOrdemCompra?: string | null
    vendedor?: string | null
    valorfrete?: number | null
    outrasdespesas?: number | null
    totalprodutos?: number | null
    totalvenda?: number | null
    situacao?: string | null
    loja?: string | null
    numeroPedidoLoja?: string | null
    tipoIntegracao?: string | null
    cliente_id: number
    transportadora_id?: string | null
  }

  export type ClienteUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUpdateManyWithoutClienteInput
  }

  export type ClienteUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pedido?: PedidoUncheckedUpdateManyWithoutClienteInput
  }

  export type ClienteUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipoPessoa?: NullableStringFieldUpdateOperationsInput | string | null
    cpfCnpj?: NullableStringFieldUpdateOperationsInput | string | null
    incricaoEstadual?: NullableStringFieldUpdateOperationsInput | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    contribuinte?: NullableStringFieldUpdateOperationsInput | string | null
    fone?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoUpdateWithoutEnderecoEntregaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutPedidoInput
    transportadora?: TransportadoraUpdateOneWithoutPedidoInput
    volume?: VolumeUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUpdateManyWithoutPedidoInput
    nota?: NotaUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUpdateManyWithoutPedidoInput
  }

  export type PedidoUncheckedUpdateWithoutEnderecoEntregaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    observacaointerna?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numeroOrdemCompra?: NullableStringFieldUpdateOperationsInput | string | null
    vendedor?: NullableStringFieldUpdateOperationsInput | string | null
    valorfrete?: NullableFloatFieldUpdateOperationsInput | number | null
    outrasdespesas?: NullableFloatFieldUpdateOperationsInput | number | null
    totalprodutos?: NullableFloatFieldUpdateOperationsInput | number | null
    totalvenda?: NullableFloatFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: NullableStringFieldUpdateOperationsInput | string | null
    numeroPedidoLoja?: NullableStringFieldUpdateOperationsInput | string | null
    tipoIntegracao?: NullableStringFieldUpdateOperationsInput | string | null
    cliente_id?: IntFieldUpdateOperationsInput | number
    transportadora_id?: NullableStringFieldUpdateOperationsInput | string | null
    volume?: VolumeUncheckedUpdateManyWithoutPedidoInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutPedidoInput
    nota?: NotaUncheckedUpdateOneWithoutPedidoInput
    produtos?: ProdutoNoPedidoUncheckedUpdateManyWithoutPedidoInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}