import { PrismaClient, Prisma } from '@prisma/client'

class BillsToReceiveRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async createMany(billsToReceive: Prisma.ContaReceberCreateInput[]) {
        await this.prisma.contaReceber.deleteMany({})

        const createBillsToReceive = billsToReceive.map(bills => {
            return this.prisma.contaReceber.create({
                data: bills,
                include: {
                    cliente: true,
                },
            })
        })

        try {
            // const createdBills = await Promise.all(createBillsToReceive)
            // const createdBills = await this.prisma.$transaction(createBillsToReceive)

            const createdBills: any = []

            while (createBillsToReceive.length > 0) {
                let result = await this.prisma.$transaction(createBillsToReceive.splice(0, 100))
                createdBills.push(...result)
            }

            return createdBills
        } catch (error) {
            console.log(error)
            process.exit()
        }
    }
}

export default BillsToReceiveRepository
