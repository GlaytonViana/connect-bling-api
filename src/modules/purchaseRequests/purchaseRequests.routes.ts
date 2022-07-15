import { Router } from 'express'
import PurchaseRequestsContoller from './PurchaseRequests.controller'

const purchaseRequestsRouter = Router()
const purchaseRequestsController = new PurchaseRequestsContoller()

purchaseRequestsRouter.get('/', purchaseRequestsController.listAndSave)

export default purchaseRequestsRouter
