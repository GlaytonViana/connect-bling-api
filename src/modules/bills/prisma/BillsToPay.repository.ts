import { Prisma } from '@prisma/client'
import prisma from '@shared/prisma'

class BillsToPayRepository {
    async count() {
        const count = await prisma.contaPagar.count()
        await prisma.$disconnect()

        return count
    }

    async deleteMany(billsId: string[]) {
        await prisma.contaPagar.deleteMany({
            where: {
                id: {
                    in: billsId,
                },
            },
        })
        await prisma.$disconnect()
    }

    async createMany(billsToPay: Prisma.ContaPagarCreateInput[]) {
        const createBillsToPay = billsToPay.map(bills => {
            return prisma.contaPagar.create({
                data: bills,
                include: {
                    fornecedor: true,
                },
            })
        })

        try {
            const createdBills = await prisma.$transaction(createBillsToPay)
            await prisma.$disconnect()
            console.log(`Contas a pagar: ${createdBills.length}`)

            // const createdBills: any = []

            // while (createBillsToPay.length > 0) {
            //     let result = await prisma.$transaction(createBillsToPay.splice(0, 100))
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
