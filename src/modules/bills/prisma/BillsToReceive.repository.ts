import { PrismaClient, Prisma } from '@prisma/client'

class BillsToReceiveRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async count() {
        const count = await this.prisma.contaReceber.count()
        return count
    }

    async deleteMany(billsId: string[]) {
        await this.prisma.contaReceber.deleteMany({
            where: {
                id: {
                    in: billsId,
                },
            },
        })
    }

    async createMany(billsToReceive: Prisma.ContaReceberCreateInput[]) {
        const createBillsToReceive = billsToReceive.map(bills => {
            return this.prisma.contaReceber.create({
                data: bills,
                include: {
                    cliente: true,
                },
            })
        })

        try {
            const createdBills = await this.prisma.$transaction(createBillsToReceive)
            await this.prisma.$disconnect()
            console.log(`Contas a receber: ${createdBills.length}`)

            // const createdBills: any = []

            // while (createBillsToReceive.length > 0) {
            //     let result = await this.prisma.$transaction(createBillsToReceive.splice(0, 100))
            //     createdBills.push(...result)
            // }

            return createdBills
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }
}

export default BillsToReceiveRepository
