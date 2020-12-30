const url = process.env.VUE_STOCK_APP_API || 'http://api.marketstack.com/v1/eod'
const key = process.env.VUE_STOCK_APP_API_KEY || '2acd6d3c26678af8df66dc96767621b7'

export const stocksAPI = {
  getStocks: async (stock: string) => {
    return await fetch(`${url}?access_key=${key}&symbols=${stock}&limit=20`)
      .then(res => res.json())
      .then(data => data)
      .catch(e => console.log(e))
  }
}
