import { Prisma } from '@prisma/client'
import { IBlingProduct } from '@modules/bling/providers/BlingAPI'
import { removeDuplicatedElementByAttribute } from '@shared/utils'

class FormatBlingProductToProduct {
    execute(
        products: IBlingProduct[],
    ): [Prisma.ProdutoCreateInput[], Prisma.CategoriaProdutoCreateInput[]] {
        const productToCreateList: Prisma.ProdutoCreateInput[] = []
        const categoriesToCreateList: Prisma.CategoriaProdutoCreateInput[] = []

        products.forEach(({ produto }) => {
            let categories: Prisma.CategoriaProdutoCreateInput[] = []

            if (produto.categoria) {
                categories.push({
                    id: Number(produto.categoria.id),
                    descricao: produto.categoria.descricao,
                })
            }

            const product: Prisma.ProdutoCreateInput = {
                id: produto.id,
                codigo: produto.codigo,

                origem: Number(produto.origem),
                idGrupoProduto: Number(produto.idGrupoProduto),
                garantia: Number(produto.garantia),
                idFabricante: Number(produto.idFabricante),
                crossdocking: Number(produto.crossdocking),
                preco: produto.preco ? Number(produto.preco) : null,
                itensPorCaixa: produto.itensPorCaixa ? Number(produto.itensPorCaixa) : null,
                precoCusto: produto.precoCusto ? Number(produto.precoCusto) : null,
                pesoLiq: produto.pesoLiq ? Number(produto.pesoLiq) : null,
                pesoBruto: produto.pesoBruto ? Number(produto.pesoBruto) : null,
                estoqueMinimo: produto.estoqueMinimo ? Number(produto.estoqueMinimo) : null,
                estoqueMaximo: produto.estoqueMaximo ? Number(produto.estoqueMaximo) : null,
                larguraProduto: Number(produto.larguraProduto) || null,
                alturaProduto: Number(produto.alturaProduto) || null,
                profundidadeProduto: Number(produto.profundidadeProduto) || null,

                codigoPai: produto.codigoPai !== undefined ? produto.codigoPai : null,
                clonarDadosPai:
                    produto.clonarDadosPai !== undefined ? produto.clonarDadosPai : null,
                descricao: produto.descricao || null,
                tipo: produto.tipo || null,
                situacao: produto.situacao || null,
                unidade: produto.unidade || null,
                descricaoCurta: produto.descricao || null,
                descricaoComplementar: produto.descricaoComplementar || null,
                imageThumbnail: produto.imageThumbnail || null,
                urlVideo: produto.urlVideo || null,
                nomeFornecedor: produto.nomeFornecedor || null,
                codigoFabricante: produto.codigoFabricante || null,
                marca: produto.marca || null,
                classFiscal: produto.class_fiscal || null,
                cest: produto.cest || null,
                linkExterno: produto.linkExterno || null,
                observacoes: produto.observacoes || null,
                grupoProduto: produto.grupoProduto || null,
                descricaoFornecedor: produto.descricaoFornecedor || null,
                gtin: produto.gtin || null,
                gtinEmbalagem: produto.gtinEmbalagem || null,
                unidadeMedida: produto.unidadeMedida || null,
                localizacao: produto.localizacao || null,
                condicao: produto.condicao || null,
                freteGratis: produto.freteGratis || null,
                producao: produto.producao || null,
                spedTipoItem: produto.spedTipoItem || null,
                volumes: produto.volumes ? produto.volumes : null,

                dataInclusao:
                    produto.dataInclusao !== '0000-00-00' ? new Date(produto.dataInclusao) : null,
                dataAlteracao:
                    produto.dataAlteracao !== '0000-00-00' ? new Date(produto.dataAlteracao) : null,
                dataValidade:
                    produto.dataValidade !== '0000-00-00' ? new Date(produto.dataValidade) : null,

                // Pivô de produtos e categorias de produtos
                categorias: {
                    createMany: {
                        data: categories.map(category => ({ categoria_id: category.id })),
                    },
                },
            }

            productToCreateList.push(product)

            if (categories) {
                categoriesToCreateList.push(...categories)
            }
        })

        return [productToCreateList, categoriesToCreateList]
    }
}

export default FormatBlingProductToProduct
