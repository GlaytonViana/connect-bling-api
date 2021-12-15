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
            const createdProducts = await this.prisma.$transaction(createProducts)
            return createdProducts
        } catch (error) {
            console.log(error)
            process.exit()
        }
    }
}

export default ProductRepository
