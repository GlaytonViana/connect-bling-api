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
    console.log('Executando cron ...')

    await axios.get(`${process.env.API_URL}/products`).catch(error => {
        console.log(error)
    })

    await axios.get(`${process.env.API_URL}/orders`).catch(error => {
        console.log(error)
    })

    await axios.get(`${process.env.API_URL}/bills`).catch(error => {
        console.log(error)
    })
})

app.listen(3334, () => {
    console.log('Cron em execução')
})
