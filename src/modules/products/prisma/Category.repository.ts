import { Prisma } from '@prisma/client'
import prisma from '@shared/prisma'

class CategoryRepository {
    async createMany(categories: Prisma.CategoriaProdutoCreateInput[]) {
        await prisma.categoriaProduto.createMany({
            data: categories,
            skipDuplicates: true,
        })
        await prisma.$disconnect()

        return categories
    }
}

export default CategoryRepository
