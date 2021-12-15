import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatBlingProductToProductService from './services/FormatBlingProductToProduct.service'
import ProductRepository from './prisma/Product.repository'
import CategoryRepository from './prisma/Category.repository'

export default class ProductController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        // Buscar da API
        const listService = new ListService()
        const productsFromApi = await listService.execute()

        // Formatar Produtos
        const formatBlingProductToProduct = new FormatBlingProductToProductService()
        const [productsFormatted, categoriesFormatted] =
            formatBlingProductToProduct.execute(productsFromApi)

        // Salvar categorias
        const categoryRepository = new CategoryRepository()
        await categoryRepository.createMany(categoriesFormatted)

        // Salvar Produtos e categorias
        const productRepository = new ProductRepository()
        const products = await productRepository.createMany(productsFormatted)

        return response.json(products)
    }
}
