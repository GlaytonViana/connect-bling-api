import { Router } from 'express'
import OrderController from './Order.controller'

const orderRouter = Router()

const orderController = new OrderController()

orderRouter.get('/', orderController.listAndSave)

export default orderRouter
