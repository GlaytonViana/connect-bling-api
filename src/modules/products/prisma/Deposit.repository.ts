import prisma from '@shared/prisma'
import { Deposito } from '@prisma/client'

export default class DepositRepository {
    async upsert(deposit: Deposito[]) {
        const deposits = await prisma.deposito.createMany({
            data: deposit,
        })

        return deposits
    }

    async createMany(deposits: Deposito[]) {
        const createdDeposits = await prisma.deposito.createMany({
            data: deposits,
        })

        return createdDeposits
    }
}
