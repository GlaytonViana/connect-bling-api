import { IBlingPaymentMethod } from '@modules/bling/providers/BlingAPI'
import { FormaDePagamento } from '@prisma/client'

export default class FormatPaymentMethodBling {
    async execute(paymentMethods: IBlingPaymentMethod[]): Promise<FormaDePagamento[]> {
        const paymentMethodsFormatted: FormaDePagamento[] = paymentMethods.map(
            ({ formapagamento: { id, descricao, codigoFiscal, padrao, situacao, fixa } }) => ({
                id: parseInt(id),
                descricao,
                codigoFiscal: parseInt(codigoFiscal),
                padrao: parseInt(padrao),
                situacao: parseInt(situacao),
                fixa: parseInt(fixa),
            }),
        )
        return paymentMethodsFormatted
    }
}
