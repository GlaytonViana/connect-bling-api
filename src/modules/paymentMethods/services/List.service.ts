import BlingAPI, { IBlingPaymentMethod } from '@modules/bling/providers/BlingAPI'

class ListService {
    async execute(): Promise<IBlingPaymentMethod[]> {
        const api = new BlingAPI()
        const paymentMethods = await api.getPaymentMethods([])
        return paymentMethods
    }
}

export default ListService
