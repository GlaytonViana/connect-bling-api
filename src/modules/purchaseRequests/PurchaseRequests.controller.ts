import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatBlingPurchaseRequestsService from './services/FormatBlingPurchaseRequests.service'

export default class PurchaseRequestsContoller {
    async executeListAndSave() {
        // Buscar da API
        const listService = new ListService()
        const purchaseRequestsFromApi = await listService.execute()

        // Formatar para salvar no banco
        const formatBlingPurchaseRequestsService = new FormatBlingPurchaseRequestsService()
        await formatBlingPurchaseRequestsService
            .execute({
                purchaseRequests: purchaseRequestsFromApi,
            })
            .catch(error => {
                throw new Error(error)
            })

        return purchaseRequestsFromApi
    }

    async listAndSave(request: Request, response: Response): Promise<Response> {
        try {
            const purchaseRequestsFromApi = await this.executeListAndSave()
            return response.json(purchaseRequestsFromApi)
        } catch (error) {
            console.log(error)

            return response.status(500).json({ status: 'fail' })
        }
    }
}
