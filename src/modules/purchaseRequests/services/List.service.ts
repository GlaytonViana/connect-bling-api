import IPurchaseRequests from '@modules/bling/interfaces/IPurchaseRequests'
import BlingAPI from '@modules/bling/providers/BlingAPI'

export default class ListService {
    async execute(): Promise<IPurchaseRequests[]> {
        const api = new BlingAPI()
        const purchaseRequests = await api.getPurchaseRequests(['situacao[0]'])
        return purchaseRequests[0]
    }
}
