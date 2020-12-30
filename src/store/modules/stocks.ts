import * as types from '@/store/types'
import StocksService from '@/services/Stocks'
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

interface StocksState {
  stocks: Array<object>;
  loading: string;
}
@Module({ namespaced: true })

class Stock extends VuexModule implements StocksState {
  stocks: Array<object> = []
  loading = 'not_loading'

  @Action({ rawError: true })
  async getStocks (stock: string) {
    this.context.commit(types.LOADING_STOCKS, 'loading')
    const stocks = await StocksService.getStocks(stock)
    this.context.commit(types.GET_STOCKS, stocks.data)

    if (stocks.data) {
      this.context.commit(types.LOADING_STOCKS, 'loaded')
    }
  }

  get stockState () {
    return this.stocks
  }

  @Mutation
  [types.GET_STOCKS] (data: Array<[]>) {
    this.stocks = data
  }

  @Mutation
  [types.LOADING_STOCKS] (data: string) {
    this.loading = data
  }
}

const stockModule = Stock

export default stockModule
