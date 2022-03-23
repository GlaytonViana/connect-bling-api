import { Prisma } from '@prisma/client'
import prisma from '@shared/prisma'

class BillsToReceiveRepository {
    async count() {
        const count = await prisma.contaReceber.count()
        await prisma.$disconnect()

        return count
    }

    async deleteMany(billsId: string[]) {
        await prisma.contaReceber.deleteMany({
            where: {
                id: {
                    in: billsId,
                },
            },
        })
        await prisma.$disconnect()
    }

    async createMany(billsToReceive: Prisma.ContaReceberCreateInput[]) {
        const createBillsToReceive = billsToReceive.map(bills => {
            return prisma.contaReceber.create({
                data: bills,
                include: {
                    cliente: true,
                },
            })
        })

        try {
            const createdBills = await prisma.$transaction(createBillsToReceive)
            await prisma.$disconnect()
            console.log(`Contas a receber: ${createdBills.length}`)

            return createdBills
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }
}

export default BillsToReceiveRepository
