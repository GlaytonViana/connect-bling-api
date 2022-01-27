import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatBlingProductToProductService from './services/FormatBlingProductToProduct.service'
import ProductRepository from './prisma/Product.repository'
import CategoryRepository from './prisma/Category.repository'

export default class ProductController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        const productRepository = new ProductRepository()
        const firstExecution = await productRepository.count()

        // Buscar da API
        const listService = new ListService()
        const productsFromApi = await listService.execute(!firstExecution)

        console.log(productsFromApi.length)

        // Formatar Produtos
        const formatBlingProductToProduct = new FormatBlingProductToProductService()
        const [productsFormatted, categoriesFormatted] =
            formatBlingProductToProduct.execute(productsFromApi)

        await productRepository.deleteMany(productsFromApi.map(product => product.produto.id))

        // Salvar categorias
        const categoryRepository = new CategoryRepository()
        await categoryRepository.createMany(categoriesFormatted)

        // Salvar Produtos e categorias no produto
        const products = await productRepository.createMany(productsFormatted)

        return response.json(products)
    }
}
