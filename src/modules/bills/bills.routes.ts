import { Router } from 'express'
import BillsController from './Bills.controller'

const billsRouter = Router()
const billsController = new BillsController()

billsRouter.get('/', billsController.listAndSave)

export default billsRouter
