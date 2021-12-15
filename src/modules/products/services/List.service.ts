import BlingAPI, { IBlingProduct } from '@modules/bling/providers/BlingAPI'

export default class ListService {
    async execute(): Promise<IBlingProduct[]> {
        const api = new BlingAPI()
        const products = await api.getProducts()
        return products
    }
}
