import BlingAPI, { IBlingBillsToReceive, IBlingBillsToPay } from '@modules/bling/providers/BlingAPI'

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

        const date = new Date()
        const year = String(date.getFullYear())
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const today = String(date.getDate()).padStart(2, '0')
        const yesterday =
            date.getDate() - 1 > 0 ? String(date.getDate() - 1).padStart(2, '0') : '01'

        if (!firstExecutionBillToReceive) {
            paramByllToReceive.push(
                `dataEmissao[${yesterday}/${month}/${year} TO ${today}/${month}/${year}]`,
            )
        }

        if (!firstExecutionBillToPay) {
            paramByllToPay.push(
                `dataEmissao[${yesterday}/${month}/${year} TO ${today}/${month}/${year}]`,
            )
        }

        const api = new BlingAPI()
        const bills = await api.getBills({
            filtersBillToReceive: paramByllToReceive,
            filtersBillToPay: paramByllToPay,
        })
        return bills
    }
}
