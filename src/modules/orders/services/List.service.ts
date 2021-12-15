import BlingAPI, { IBlingOrder } from '@modules/bling/providers/BlingAPI'

class ListService {
    async execute(): Promise<IBlingOrder[]> {
        const api = new BlingAPI()
        const orders = await api.getOrders()
        return orders
    }
}

export default ListService
