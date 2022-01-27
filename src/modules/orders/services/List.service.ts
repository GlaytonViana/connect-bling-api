import BlingAPI, { IBlingOrder } from '@modules/bling/providers/BlingAPI'

class ListService {
    async execute(firstExecution: boolean): Promise<IBlingOrder[]> {
        let param = []

        if (!firstExecution) {
            const date = new Date()
            const year = String(date.getFullYear())
            const month = String(date.getMonth() + 1).padStart(2, '0')
            const today = String(date.getDate()).padStart(2, '0')
            const yesterday =
                date.getDate() - 1 > 0 ? String(date.getDate() - 1).padStart(2, '0') : '01'
            param.push(`dataAlteracao[${yesterday}/${month}/${year} TO ${today}/${month}/${year}]`)
        }

        const api = new BlingAPI()
        const orders = await api.getOrders(param)
        return orders
    }
}

export default ListService
