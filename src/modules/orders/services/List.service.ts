import BlingAPI from '@modules/bling/providers/BlingAPI'
import IBlingOrder from '@modules/bling/interfaces/IBlingOrder'
import { getPeriod } from '@shared/utils'

class ListService {
    async execute(firstExecution: boolean): Promise<IBlingOrder[]> {
        let param = []

        if (!firstExecution) {
            const period = getPeriod()
            param.push(`dataAlteracao[${period}]`)
        }

        const api = new BlingAPI()
        const orders = await api.getOrders(param)
        return orders
    }
}

export default ListService
