import prisma from '@shared/prisma'

export default class PurchaseRequestsRepository {
    async count() {
        const counter = await prisma.pedidoDeCompra.count()
        return counter
    }
}
