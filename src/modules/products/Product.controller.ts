import prisma from '@shared/prisma'
import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatBlingProductToProductService from './services/FormatBlingProductToProduct.service'
import ProductRepository from './prisma/Product.repository'
import CategoryRepository from './prisma/Category.repository'
import { IBlingProduct } from '@modules/bling/providers/BlingAPI'
import { Prisma, ProdutoNoDeposito } from '@prisma/client'

export class ProductControllerExecute {
    async executeListAndSave() {
        const productRepository = new ProductRepository()

        console.log('Buscando da API')

        // Buscar da API
        const listService = new ListService()
        const productsFromApi = await listService.execute()

        // Buscar os id que tem no banco
        const existentProducts = await prisma.produto.findMany({
            select: {
                id: true,
            },
        })

        // Compara com os ids recebido do bling e verificar se existe algum produto que não exista no banco
        const productToSave: IBlingProduct[] = []

        for (const product of productsFromApi) {
            const isProductRegistered = existentProducts.find(
                existentProduct => existentProduct.id === product.produto.id,
            )

            if (!isProductRegistered) {
                productToSave.push(product)
            }
        }

        console.log('Salvando novos produtos')

        // Formatar Produtos
        const formatBlingProductToProduct = new FormatBlingProductToProductService()
        const [productsFormatted, categoriesFormatted, depositsToCreat] =
            formatBlingProductToProduct.execute(productToSave)

        console.log('salvando categorias')
        // Salvar categorias
        const categoryRepository = new CategoryRepository()
        await categoryRepository.createMany(categoriesFormatted)

        console.log('salvando depósitos')
        // Salvar depósitos
        await prisma.deposito.createMany({
            data: depositsToCreat,
        })

        // Salvar Produtos e categorias no produto
        const products = await productRepository.createMany(productsFormatted)
        const depositsToUpdate: Prisma.Prisma__ProdutoNoDepositoClient<ProdutoNoDeposito>[] = []

        console.log('Atualizando estoque')
        // Atualizar os estoques
        for (const { produto } of productsFromApi) {
            const depositsToUpdatePromise = produto.depositos.map(({ deposito }) => {
                return prisma.produtoNoDeposito.upsert({
                    where: {
                        produtoId_depositoId: {
                            depositoId: Number(deposito.id),
                            produtoId: produto.id,
                        },
                    },
                    create: {
                        depositoId: Number(deposito.id),
                        produtoId: produto.id,
                        saldo: deposito.saldo,
                        saldoVirtual: deposito.saldoVirtual,
                    },
                    update: {
                        depositoId: Number(deposito.id),
                        produtoId: produto.id,
                        saldo: deposito.saldo,
                        saldoVirtual: deposito.saldoVirtual,
                    },
                })
            })
            depositsToUpdate.push(...depositsToUpdatePromise)
        }

        await prisma.$transaction(depositsToUpdate).catch(error => {
            throw new Error(error)
        })

        console.log('Produtos atualizados')

        return products
    }
}

export default class ProductController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        const oroductControllerExecute = new ProductControllerExecute()

        const products = await oroductControllerExecute.executeListAndSave().catch(error => {
            throw new Error(error)
        })
        return response.header({ 'X-Count': products.length }).json(products)
    }
}
