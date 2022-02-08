import { Router } from 'express'
import InvoiceController from './Invoice.controller'

const invoiceRouter = Router()

const invoiceController = new InvoiceController()

invoiceRouter.get('/', invoiceController.listAndSave)

export default invoiceRouter
