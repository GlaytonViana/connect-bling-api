import BlingAPI, { IBlingInvoice } from '@modules/bling/providers/BlingAPI'
import { getPeriod } from '@shared/utils'

class ListService {
    async execute(firstExecution: boolean): Promise<IBlingInvoice[]> {
        let param = []

        if (!firstExecution) {
            const period = getPeriod()
            param.push(`dataEmissao[${period}]`)
        }

        const api = new BlingAPI()
        const invoices = await api.getInvoices(param)
        return invoices
    }
}

export default ListService
