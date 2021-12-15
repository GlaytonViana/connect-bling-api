import { Router } from 'express'
import ProductController from './Product.controller'

const productRouter = Router()
const productController = new ProductController()

productRouter.get('/', productController.listAndSave)

export default productRouter
