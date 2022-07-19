import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatBillsToReceiveService from './services/FormatBillsToReceive.service'
import FormatBillsToPayService from './services/FormatBillsToPay.service'

import BillsToReceiveRepository from './prisma/BillsToReceive.repository'
import BillsToPayRepository from './prisma/BillsToPay.repository'

export class BillsControllerExecute {
    async executeListAndSave() {
        const billsToPayRepository = new BillsToPayRepository()
        const billsToReceiveRepository = new BillsToReceiveRepository()

        const firstExecutionBillToPay = await billsToPayRepository.count()
        const firstExecutionBillToReceive = await billsToReceiveRepository.count()

        // Buscar da API
        const listService = new ListService()
        const [billsToReceive, billsToPay] = await listService.execute({
            firstExecutionBillToPay: !firstExecutionBillToPay,
            firstExecutionBillToReceive: !firstExecutionBillToReceive,
        })

        const formatBillsToPayService = new FormatBillsToPayService()
        const formattedBillsToPay = formatBillsToPayService.execute(billsToPay)

        await billsToPayRepository.deleteMany(billsToPay.map(bill => bill.contapagar.id))

        const formatBillsToReceiveService = new FormatBillsToReceiveService()
        const formattedBillsToReceive = formatBillsToReceiveService.execute(billsToReceive)

        await billsToReceiveRepository.deleteMany(billsToReceive.map(bill => bill.contaReceber.id))

        // Salvar
        const billsToReceiveStored = await billsToReceiveRepository.createMany(
            formattedBillsToReceive,
        )

        const billsToPayStored = await billsToPayRepository.createMany(formattedBillsToPay)

        return [billsToReceiveStored, billsToPayStored]
    }
}

export default class BillsController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        const billsControllerExecute = new BillsControllerExecute()
        const [billsToReceiveStored, billsToPayStored] =
            await billsControllerExecute.executeListAndSave()

        return response.json({ billsToReceive: billsToReceiveStored, billsToPay: billsToPayStored })
    }
}
