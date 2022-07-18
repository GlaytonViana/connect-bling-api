import dotenv from 'dotenv'
import cron from 'node-cron'
import axios from 'axios'

dotenv.config()

let isSync = false

cron.schedule('*/1 * * * *', async () => {
    isSync ? console.info('sincronizando...') : console.info('inicio de sincronizacao')

    if (!isSync) {
        isSync = true

        const api = axios.create({
            baseURL: process.env.API_URL,
            timeout: 1000 * 60 * 5,
            responseType: 'json',
        })

        console.log('Get products')

        await api.get('/products').catch(error => {
            console.log(error)
        })

        console.log('Get orders')

        await api.get('/orders').catch(error => {
            console.log(error)
        })

        console.log('Get bills')

        await api.get('/bills').catch(error => {
            console.log(error)
        })

        console.log('Get invoices')

        await api.get('/invoices').catch(error => {
            console.log(error)
        })

        console.log('Get payment methods')

        await api.get('/payment-methods').catch(error => {
            console.log(error)
        })

        console.log('Get Purchase Requests')

        await api.get('/purchase-requests').catch(error => {
            console.log(error)
        })

        isSync = false
    }
})
