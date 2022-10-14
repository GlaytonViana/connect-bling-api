import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatBlingOrdersToOrderService from './services/FormatBlingOrdersToOrder.service'
import OrderRepository from './prisma/Order.repository'

export class OrderControllerExecute {
    async executeListAndSave() {
        const orderRepository = new OrderRepository()
        const firstExecution = await orderRepository.count()

        // Buscar da API
        const listService = new ListService()
        const ordersFromApi = await listService.execute(!firstExecution)

        // Formatar Pedidos
        const formatBlingProductToProduct = new FormatBlingOrdersToOrderService()
        const formattedOrders = formatBlingProductToProduct.execute(ordersFromApi)

        // await orderRepository.deleteMany(ordersFromApi.map(order => Number(order.pedido.numero)))

        // Salvar Ordens e derivados
        // const orders = await orderRepository.createMany(formattedOrders.orders).catch(error => {
        //     console.log(error)
        // })

        const orders = await orderRepository.upsertMany(formattedOrders.orders).catch(error => {
            console.log(error)
        })

        return orders
    }
}

class OrderController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        const orderControllerExecute = new OrderControllerExecute()
        const orders = await orderControllerExecute.executeListAndSave()

        return response.json(orders)
    }
}

export default OrderController
