import { FormaDePagamento } from '@prisma/client'
import prisma from '@shared/prisma'

export default class PaymentMethodRepository {
    async upsertMany(paymentMethods: FormaDePagamento[]) {
        paymentMethods.forEach(async paymentMethod => {
            await prisma.formaDePagamento.upsert({
                where: {
                    id: paymentMethod.id,
                },
                create: paymentMethod,
                update: paymentMethod,
            })
        })

        console.log(`Métodos de pagamento ${paymentMethods.length}`)
    }
}
