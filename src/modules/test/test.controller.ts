import { Request, Response } from 'express'
import { getPeriod } from '@shared/utils'

export default class TestController {
    testPeriod(request: Request, response: Response) {
        const newDate = request.query.new_date

        const date = newDate ? new Date() : new Date(2022, 8, 1, 0, 0, 0, 0)
        const period = getPeriod(date)

        return response.json({
            initialDate: date,
            period,
        })
    }
}
