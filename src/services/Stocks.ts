import { stocksAPI } from '@/api'

const StocksService = {
  getStocks: async (stock: string) => {
    return await stocksAPI.getStocks(stock)
  }
}

export default StocksService
