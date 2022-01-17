import { PrismaClient, Prisma } from '@database/prisma/prisma-client-js'

class BillsToPayRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async createMany(billsToPay: Prisma.ContaPagarCreateInput[]) {
        await this.prisma.contaPagar.deleteMany({})

        const createBillsToPay = billsToPay.map(bills => {
            return this.prisma.contaPagar.create({
                data: bills,
                include: {
                    fornecedor: true,
                },
            })
        })

        try {
            // const createdBills = await Promise.all(createBillsToPay)
            // const createdBills = await this.prisma.$transaction(createBillsToPay)

            const createdBills: any = []

            while (createBillsToPay.length > 0) {
                let result = await this.prisma.$transaction(createBillsToPay.splice(0, 100))
                createdBills.push(...result)
            }

            return createdBills
        } catch (error) {
            console.log(error)
            process.exit()
        }
    }
}

export default BillsToPayRepository
