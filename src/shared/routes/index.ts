import { Router } from 'express'
import productRouter from '@modules/products/product.routes'
import orderRouter from '@modules/orders/order.routes'
import billRouter from '@modules/bills/bills.routes'
import invoiceRouter from '@modules/invoice/invoice.routes'
import paymentMethodRouter from '@modules/paymentMethods/paymentMethod.routes'

const routes = Router()

routes.use('/products', productRouter)
routes.use('/orders', orderRouter)
routes.use('/bills', billRouter)
routes.use('/invoices', invoiceRouter)
routes.use('/payment-methods', paymentMethodRouter)

export default routes
