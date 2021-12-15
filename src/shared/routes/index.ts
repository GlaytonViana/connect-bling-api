import { Router } from 'express'
import productRouter from '@modules/products/product.routes'
import orderRouter from '@modules/orders/order.routes'

const routes = Router()

routes.use('/products', productRouter)
routes.use('/orders', orderRouter)

export default routes
