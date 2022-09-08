import { Request, Response } from 'express'
import { getPeriod } from '@shared/utils'

export default class TestController {
    testPeriod(request: Request, response: Response) {
        const newDate = request.query.new_date

        const date = newDate ? new Date() : new Date('2022-09-01T03:00:00.000Z')
        const period = getPeriod(date)

        return response.json({
            initialDate: date,
            period,
        })
    }
}
