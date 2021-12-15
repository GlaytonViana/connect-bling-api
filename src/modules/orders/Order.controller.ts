import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatBlingOrdersToOrderService from './services/FormatBlingOrdersToOrder.service'
import OrderRepository from './prisma/Order.repository'

class OrderController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        // Buscar da API
        const listService = new ListService()
        const ordersFromApi = await listService.execute()

        // Formatar Produtos
        const formatBlingProductToProduct = new FormatBlingOrdersToOrderService()
        const formattedOrders = formatBlingProductToProduct.execute(ordersFromApi)

        // Salvar Ordens e derivados
        const orderRepository = new OrderRepository()
        const orders = await orderRepository.createMany(formattedOrders.orders)

        return response.json(orders)
    }
}

export default OrderController
