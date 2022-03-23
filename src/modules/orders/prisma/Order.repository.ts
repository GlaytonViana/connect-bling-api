import { Prisma } from '@prisma/client'
import prisma from '@shared/prisma'

class OrderRepository {
    async count() {
        const count = await prisma.pedido.count()
        await prisma.$disconnect()

        return count
    }

    async deleteMany(orderNumbers: number[]) {
        await prisma.pedido.deleteMany({
            where: {
                numero: {
                    in: orderNumbers,
                },
            },
        })
        await prisma.$disconnect()
    }

    async createMany(orders: Prisma.PedidoCreateInput[]) {
        const createOrders = orders.map(order => {
            return prisma.pedido.create({
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
            const createdOrders = await prisma.$transaction(createOrders)
            await prisma.$disconnect()
            console.log(`Pedidos salvos: ${createdOrders.length}`)

            // let createdOrders: any = []
            // while (createOrders.length > 0) {
            //     let result = await prisma.$transaction(createOrders.splice(0, 100))
            //     createdOrders.push(...result)
            // }

            return createdOrders
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }
}

export default OrderRepository
