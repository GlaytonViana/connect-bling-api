import { Router } from 'express'
import productRouter from '@modules/products/product.routes'
import orderRouter from '@modules/orders/order.routes'
import billRouter from '@modules/bills/bills.routes'

const routes = Router()

routes.use('/products', productRouter)
routes.use('/orders', orderRouter)
routes.use('/bills', billRouter)

export default routes
