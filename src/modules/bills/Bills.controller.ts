import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatBillsToReceiveService from './services/FormatBillsToReceive.service'
import FormatBillsToPayService from './services/FormatBillsToPay.service'

import BillsToReceiveRepository from './prisma/BillsToReceive.repository'
import BillsToPayRepository from './prisma/BillsToPay.repository'

export default class ProductController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        // Buscar da API
        const listService = new ListService()
        const [billsToReceive, billsToPay] = await listService.execute()

        const formatBillsToReceiveService = new FormatBillsToReceiveService()
        const formattedBillsToReceive = formatBillsToReceiveService.execute(billsToReceive)

        const formatBillsToPayService = new FormatBillsToPayService()
        const formattedBillsToPay = formatBillsToPayService.execute(billsToPay)

        // Salvar
        const billsToReceiveRepository = new BillsToReceiveRepository()
        const billsToReceiveStored = await billsToReceiveRepository.createMany(
            formattedBillsToReceive,
        )

        const billsToPayRepository = new BillsToPayRepository()
        const billsToPayStored = await billsToPayRepository.createMany(formattedBillsToPay)

        return response.json({ billsToReceive: billsToReceiveStored, billsToPay: billsToPayStored })
    }
}
