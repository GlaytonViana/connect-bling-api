import { PrismaClient, Prisma } from '@prisma/client'

class OrderRepository {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async count() {
        const count = await this.prisma.pedido.count()
        return count
    }

    async deleteMany(orderNumbers: number[]) {
        await this.prisma.pedido.deleteMany({
            where: {
                numero: {
                    in: orderNumbers,
                },
            },
        })
    }

    async createMany(orders: Prisma.PedidoCreateInput[]) {
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
            let savedOrders: any = []

            while (createOrders.length > 0) {
                let result = await this.prisma.$transaction(createOrders.splice(0, 100))
                savedOrders.push(...result)
            }

            return savedOrders
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }
}

export default OrderRepository
