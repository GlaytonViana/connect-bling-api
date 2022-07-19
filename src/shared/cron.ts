import dotenv from 'dotenv'
import cron from 'node-cron'
import axios from 'axios'
import ProductController from '@modules/products/Product.controller'
import OrderController from '@modules/orders/Order.controller'
import BillsController from '@modules/bills/Bills.controller'
import InvoiceController from '@modules/invoice/Invoice.controller'
import PaymentMethodController from '@modules/paymentMethods/PaymentMethod.controller'
import PurchaseRequestsContoller from '@modules/purchaseRequests/PurchaseRequests.controller'

dotenv.config()

let isSync = false

cron.schedule('*/1 * * * *', async () => {
    isSync ? console.info('sincronizando...') : console.info('inicio de sincronizacao')

    if (!isSync) {
        isSync = true

        const api = axios.create({
            baseURL: process.env.API_URL,
            timeout: 1000 * 60 * 5,
            responseType: 'json',
        })

        console.log('Get products')
        await new ProductController().executeListAndSave()

        console.log('Get orders')
        await new OrderController().executeListAndSave()

        console.log('Get bills')
        await new BillsController().executeListAndSave()

        console.log('Get invoices')
        await new InvoiceController().executeListAndSave()

        console.log('Get payment methods')
        await new PaymentMethodController().executeListAndSave()

        console.log('Get Purchase Requests')
        await new PurchaseRequestsContoller().executeListAndSave()

        isSync = false
    }
})
