import { PrismaClient, Prisma } from '@database/prisma/prisma-client-js'

class OrderRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient({
            log: ['error'],
        })
    }

    async createMany(orders: Prisma.PedidoCreateInput[]) {
        await this.prisma.pedido.deleteMany({})

        const createOrders = orders.map(order => {
            return this.prisma.pedido.create({
                data: order,
                include: {
                    cliente: {
                        include: {
                            endereco: true,
                        },
                    },
                    enderecoEntrega: true,
                    parcelas: true,
                    produtos: true,
                    volume: true,
                    nota: true,
                    transportadora: true,
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
