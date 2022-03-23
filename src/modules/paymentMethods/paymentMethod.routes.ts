import { Router } from 'express'
import PaymentMethodController from './PaymentMethod.controller'

const paymentMethodRouter = Router()
const paymentMethodController = new PaymentMethodController()

paymentMethodRouter.get('/', paymentMethodController.listAndSave)

export default paymentMethodRouter
