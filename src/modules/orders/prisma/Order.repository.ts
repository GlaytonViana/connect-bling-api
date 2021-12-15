import { PrismaClient, Prisma } from '@prisma/client'

class OrderRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient({
            log: ['query'],
        })
    }

    async createMany(orders: Prisma.PedidoCreateInput[]) {
        await this.prisma.pedido.deleteMany({})

        const createOrders = orders.map(order => {
            return this.prisma.pedido.create({
                data: order,
                include: {
                    cliente: true,
                },
            })
        })

        try {
            // const createdOrders = await Promise.all(createOrders)
            const createdOrders = await this.prisma.$transaction(createOrders)
            return createdOrders
        } catch (error) {
            console.log(error)
            process.exit()
        }
    }
}

export default OrderRepository
