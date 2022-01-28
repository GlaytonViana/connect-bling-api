import BlingAPI, { IBlingBillsToReceive, IBlingBillsToPay } from '@modules/bling/providers/BlingAPI'
import { getPeriod } from '@shared/utils'

interface IListServiceParam {
    firstExecutionBillToReceive: boolean
    firstExecutionBillToPay: boolean
}

export default class ListService {
    async execute({
        firstExecutionBillToReceive,
        firstExecutionBillToPay,
    }: IListServiceParam): Promise<[IBlingBillsToReceive[], IBlingBillsToPay[]]> {
        let paramByllToReceive = []
        let paramByllToPay = []

        const period = getPeriod()

        if (!firstExecutionBillToReceive) {
            paramByllToReceive.push(`dataEmissao[${period}]`)
        }

        if (!firstExecutionBillToPay) {
            paramByllToPay.push(`dataEmissao[${period}]`)
        }

        const api = new BlingAPI()
        const bills = await api.getBills({
            filtersBillToReceive: paramByllToReceive,
            filtersBillToPay: paramByllToPay,
        })
        return bills
    }
}
