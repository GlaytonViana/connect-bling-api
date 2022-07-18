import { Prisma, Pedido } from '@prisma/client'
import prisma from '@shared/prisma'

class OrderRepository {
    async count() {
        const count = await prisma.pedido.count()

        return count
    }

    async deleteAll() {
        await prisma.pedido.deleteMany({})
        return
    }

    async deleteMany(orderNumbers: number[]) {
        await prisma.pedido.deleteMany({
            where: {
                numero: {
                    in: orderNumbers,
                },
            },
        })
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
            return createdOrders
        } catch (error) {
            console.log(error)
            return { status: 'error' }
        }
    }

    async upsertMany(orders: Prisma.PedidoCreateInput[]) {
        for (const order of orders) {
            await prisma.pedido
                .upsert({
                    where: {
                        numero: order.numero,
                    },
                    create: order,
                    update: order,
                })
                .catch(error => {
                    console.log(JSON.stringify(order, null, 2))
                    console.log(error)
                })
        }

        return orders
    }
}

export default OrderRepository
