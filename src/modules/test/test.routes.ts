import Router from 'express'
import TestController from './test.controller'

const testRouter = Router()
const testController = new TestController()

testRouter.get('/period', testController.testPeriod)

export default testRouter
