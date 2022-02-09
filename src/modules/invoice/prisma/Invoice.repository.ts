import { PrismaClient, Prisma } from '@prisma/client'

class InvoiceRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async count() {
        const count = await this.prisma.notaFiscal.count()
        await this.prisma.$disconnect()

        return count
    }

    async deleteMany(invoiceNumbers: string[]) {
        await this.prisma.notaFiscal.deleteMany({
            where: {
                id: {
                    in: invoiceNumbers,
                },
            },
        })
        await this.prisma.$disconnect()
    }

    async createMany(invoices: Prisma.NotaFiscalCreateInput[]) {
        const createInvoices = invoices.map(invoice => {
            return this.prisma.notaFiscal.create({
                data: invoice,
            })
        })

        try {
            const createdInvoices = await this.prisma.$transaction(createInvoices)
            await this.prisma.$disconnect()
            console.log(`Notas fiscais: ${createdInvoices.length}`)

            // let savedInvoices: any = []
            // while (createInvoices.length > 0) {
            //     let result = await this.prisma.$transaction(createInvoices.splice(0, 100))
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
