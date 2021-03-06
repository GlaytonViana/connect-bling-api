import { Request, Response } from 'express'
import ListService from './services/List.service'
import FormatToInvoiceService from './services/FormatToInvoice.service'
import InvoiceRepository from './prisma/Invoice.repository'

export class InvoiceControllerExecute {
    async executeListAndSave() {
        const invoiceRepository = new InvoiceRepository()
        const firstExecution = await invoiceRepository.count()

        // Buscar da API
        const listService = new ListService()
        const invoicesFromApi = await listService.execute(!firstExecution)

        // Formatar Pedidos
        const formatToInvoiceService = new FormatToInvoiceService()
        const formattedInvoices = formatToInvoiceService.execute(invoicesFromApi)

        await invoiceRepository.deleteMany(invoicesFromApi.map(invoice => invoice.notafiscal.id))

        // Salvar Ordens e derivados
        const invoices = await invoiceRepository.createMany(formattedInvoices)
        return invoices
    }
}

class InvoiceController {
    async listAndSave(request: Request, response: Response): Promise<Response> {
        const invoiceControllerExecute = new InvoiceControllerExecute()
        const invoices = await invoiceControllerExecute.executeListAndSave()
        return response.json(invoices)
    }
}

export default InvoiceController
