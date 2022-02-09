import { PrismaClient, Prisma } from '@prisma/client'

class BillsToPayRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async count() {
        const count = await this.prisma.contaPagar.count()
        await this.prisma.$disconnect()

        return count
    }

    async deleteMany(billsId: string[]) {
        await this.prisma.contaPagar.deleteMany({
            where: {
                id: {
                    in: billsId,
                },
            },
        })
        await this.prisma.$disconnect()
    }

    async createMany(billsToPay: Prisma.ContaPagarCreateInput[]) {
        const createBillsToPay = billsToPay.map(bills => {
            return this.prisma.contaPagar.create({
                data: bills,
                include: {
                    fornecedor: true,
                },
            })
        })

        try {
            const createdBills = await this.prisma.$transaction(createBillsToPay)
            await this.prisma.$disconnect()
            console.log(`Contas a pagar: ${createdBills.length}`)

            // const createdBills: any = []

            // while (createBillsToPay.length > 0) {
            //     let result = await this.prisma.$transaction(createBillsToPay.splice(0, 100))
            //     createdBills.push(...result)
            // }

            return createdBills
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }
}

export default BillsToPayRepository
