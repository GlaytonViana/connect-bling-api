import BlingAPI, { IBlingProduct } from '@modules/bling/providers/BlingAPI'
import { getPeriod } from '@shared/utils'

export default class ListService {
    async execute(firstExecution: boolean): Promise<IBlingProduct[]> {
        let param = []

        if (!firstExecution) {
            const period = getPeriod()
            param.push(`dataAlteracao[${period}]`)
        }

        const api = new BlingAPI()
        const products = await api.getProducts(param)
        return products
    }
}
