import express from 'express'
import cors from 'cors'
import cron from 'node-cron'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

cron.schedule('*/10 * * * *', async () => {
    console.log('Executando chamadas a API')

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

    console.log('cron executado')
})

app.listen(3334, () => {
    console.log('Cron em execução')
})
