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
            const createdProducts = await this.prisma.$transaction(createProducts)
            console.log(`Produtos salvos: ${createdProducts.length}`)
            await this.prisma.$disconnect()

            // const createdProducts: any = []
            // while (createProducts.length > 0) {
            //     let result = await this.prisma.$transaction(createProducts.splice(0, 100))
            //     createdProducts.push(...result)
            //     await this.prisma.$disconnect()
            // }

            return createdProducts
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }
}

export default ProductRepository
