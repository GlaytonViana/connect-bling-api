import { PrismaClient, FormaDePagamento } from '@prisma/client'

export default class PaymentMethodRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async upsertMany(paymentMethods: FormaDePagamento[]) {
        paymentMethods.forEach(async paymentMethod => {
            await this.prisma.formaDePagamento.upsert({
                where: {
                    id: paymentMethod.id,
                },
                create: paymentMethod,
                update: paymentMethod,
            })
        })
    }
}
