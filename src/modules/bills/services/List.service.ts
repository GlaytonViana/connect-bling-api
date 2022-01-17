import BlingAPI, { IBlingBillsToReceive, IBlingBillsToPay } from '@modules/bling/providers/BlingAPI'

export default class ListService {
    async execute(): Promise<[IBlingBillsToReceive[], IBlingBillsToPay[]]> {
        const api = new BlingAPI()
        const bills = await api.getBills()
        return bills
    }
}
