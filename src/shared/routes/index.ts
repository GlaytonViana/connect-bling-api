import { Router } from 'express'
import productRouter from '@modules/products/product.routes'
import orderRouter from '@modules/orders/order.routes'
import billRouter from '@modules/bills/bills.routes'
import invoiceRouter from '@modules/invoice/invoice.routes'
import paymentMethodRouter from '@modules/paymentMethods/paymentMethod.routes'
import purchaseRequestsRouter from '@modules/purchaseRequests/purchaseRequests.routes'
import testRouter from '@modules/test/test.routes'

const routes = Router()

routes.use('/products', productRouter)
routes.use('/orders', orderRouter)
routes.use('/bills', billRouter)
routes.use('/invoices', invoiceRouter)
routes.use('/payment-methods', paymentMethodRouter)
routes.use('/purchase-requests', purchaseRequestsRouter)
routes.use('/test', testRouter)

export default routes
