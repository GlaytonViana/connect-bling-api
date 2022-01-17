import { PrismaClient, Prisma } from '@database/prisma/prisma-client-js'

class ProductRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async createMany(products: Prisma.ProdutoCreateInput[]) {
        await this.prisma.produto.deleteMany({})

        const createProducts = products.map(product => {
            return this.prisma.produto.create({
                data: product,
                include: {
                    categorias: {
                        select: {
                            categoria: true,
                        },
                    },
                },
            })
        })

        try {
            // const createdProducts = await Promise.all(createProducts)
            // const createdProducts = await this.prisma.$transaction(createProducts)

            const createdProducts: any = []

            while (createProducts.length > 0) {
                let result = await this.prisma.$transaction(createProducts.splice(0, 100))
                createdProducts.push(...result)
            }

            return createdProducts
        } catch (error) {
            console.log(error)
            process.exit()
        }
    }
}

export default ProductRepository
