import { PrismaClient, Prisma } from '@prisma/client'

class ProductRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async count() {
        const count = await this.prisma.produto.count()
        return count
    }

    async deleteMany(productsId: string[]) {
        await this.prisma.produto.deleteMany({
            where: {
                id: {
                    in: productsId,
                },
            },
        })
    }

    async createMany(products: Prisma.ProdutoCreateInput[]) {
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
