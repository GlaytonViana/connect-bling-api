import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatPaymentMethodBlingService from './services/FormatPaymentMethodBling.service'
import PaymentMethodRepository from './prisma/PaymentMethod.repository'

export default class PaymentMethodController {
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

    async listAndSave(request: Request, response: Response): Promise<Response> {
        const paymentMethods = await this.executeListAndSave()

        return response.json(paymentMethods)
    }
}
