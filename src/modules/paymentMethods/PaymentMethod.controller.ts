import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatPaymentMethodBlingService from './services/FormatPaymentMethodBling.service'
import PaymentMethodRepository from './prisma/PaymentMethod.repository'

export class PaymentMethodControllerExecute {
    async executeListAndSave() {
        const paymentMethodsRepository = new PaymentMethodRepository()

        // Buscar da API
        const listService = new ListService()
        const paymentMethods = await listService.execute()

        // Formatar Modos de pagamento
        const formatBlingPaymentMethod = new FormatPaymentMethodBlingService()
        const paymentFormatted = await formatBlingPaymentMethod.execute(paymentMethods)

        await paymentMethodsRepository.upsertMany(paymentFormatted)
        return paymentMethods
    }
}

export default class PaymentMethodController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        const paymentMethodControllerExecute = new PaymentMethodControllerExecute()
        const paymentMethods = await paymentMethodControllerExecute.executeListAndSave()

        return response.json(paymentMethods)
    }
}
