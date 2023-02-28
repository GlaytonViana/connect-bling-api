import dotenv from 'dotenv'
import cron from 'node-cron'
import { ProductControllerExecute } from '@modules/products/Product.controller'
import { OrderControllerExecute } from '@modules/orders/Order.controller'
import { BillsControllerExecute } from '@modules/bills/Bills.controller'
import { InvoiceControllerExecute } from '@modules/invoice/Invoice.controller'
import { PaymentMethodControllerExecute } from '@modules/paymentMethods/PaymentMethod.controller'
import { PurchaseRequestsControllerExecute } from '@modules/purchaseRequests/PurchaseRequests.controller'

dotenv.config()

let isSync = false

cron.schedule('*/15 * * * *', async () => {
    isSync ? console.info('sincronizando...') : console.info('inicio de sincronizacao')

    if (!isSync) {
        isSync = true

        try {
            console.log('Get products')
            await new ProductControllerExecute().executeListAndSave()

            console.log('Get orders')
            await new OrderControllerExecute().executeListAndSave()

            console.log('Get bills')
            await new BillsControllerExecute().executeListAndSave()

            console.log('Get invoices')
            await new InvoiceControllerExecute().executeListAndSave()

            console.log('Get payment methods')
            await new PaymentMethodControllerExecute().executeListAndSave()

            console.log('Get Purchase Requests')
            await new PurchaseRequestsControllerExecute().executeListAndSave()

            isSync = false
        } catch (error) {
            console.log(error)
            isSync = false
        }
    }
})
