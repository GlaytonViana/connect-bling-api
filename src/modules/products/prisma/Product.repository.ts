import { PrismaClient, Prisma } from '@prisma/client'
import prisma from '@shared/prisma'

class ProductRepository {
    async count() {
        const count = await prisma.produto.count()
        await prisma.$disconnect()

        return count
    }

    async deleteMany(productsId: string[]) {
        await prisma.produto.deleteMany({
            where: {
                id: {
                    in: productsId,
                },
            },
        })
        await prisma.$disconnect()
    }

    async createMany(products: Prisma.ProdutoCreateInput[]) {
        const createProducts = products.map(product => {
            return prisma.produto.create({
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
            const createdProducts = await prisma.$transaction(createProducts)
            console.log(`Produtos salvos: ${createdProducts.length}`)
            await prisma.$disconnect()

            return createdProducts
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }
}

export default ProductRepository
