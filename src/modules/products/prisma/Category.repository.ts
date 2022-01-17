import { PrismaClient, Prisma } from '@prisma/client'

class CategoryRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async createMany(categories: Prisma.CategoriaProdutoCreateInput[]) {
        await this.prisma.categoriaProduto.deleteMany({})

        await this.prisma.categoriaProduto.createMany({
            data: categories,
            skipDuplicates: true,
        })

        return categories
    }
}

export default CategoryRepository
