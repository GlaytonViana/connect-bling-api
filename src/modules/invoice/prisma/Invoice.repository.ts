import { Prisma } from '@prisma/client'
import prisma from '@shared/prisma'

class InvoiceRepository {
    async count() {
        const count = await prisma.notaFiscal.count()
        await prisma.$disconnect()

        return count
    }

    async deleteMany(invoiceNumbers: string[]) {
        await prisma.notaFiscal.deleteMany({
            where: {
                id: {
                    in: invoiceNumbers,
                },
            },
        })
        await prisma.$disconnect()
    }

    async createMany(invoices: Prisma.NotaFiscalCreateInput[]) {
        const createInvoices = invoices.map(invoice => {
            return prisma.notaFiscal.create({
                data: invoice,
            })
        })

        try {
            const createdInvoices = await prisma.$transaction(createInvoices)
            await prisma.$disconnect()
            console.log(`Notas fiscais: ${createdInvoices.length}`)

            // let savedInvoices: any = []
            // while (createInvoices.length > 0) {
            //     let result = await prisma.$transaction(createInvoices.splice(0, 100))
            //     savedInvoices.push(...result)
            // }

            return createdInvoices
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }
}

export default InvoiceRepository
