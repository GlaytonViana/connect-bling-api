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

    async deleteAll() {
        await prisma.produto.deleteMany({})
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

        const createdProducts = await prisma.$transaction(createProducts).catch(error => {
            throw new Error(error)
        })
        return createdProducts
    }
}

export default ProductRepository
