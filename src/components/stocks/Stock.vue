<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" sm="12" md="6">
        <v-card color="#fff">
          <v-card-title class="headline">
            <form @submit.prevent="getNewStocks(stock)">
              <v-text-field
                light
                label="Stock Name"
                :rules="rules"
                v-model="stock"
                hide-details="auto"
              ></v-text-field>
          </form>
          </v-card-title>
          <apexcharts
            type="line"
            :options="chartOptions"
            :series="series"
            :title="stock"
          ></apexcharts>
          <v-card-actions>
            <v-btn text @click="updateStocks">Update Stocks</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import VueApexCharts from 'vue-apexcharts'

const stocks = namespace('stocks/')

interface Chart {
  chart?: {
    id: string;
  };
  xaxis: {
    categories: string[];
  };
  theme?: {
    palette?: string;
  };
  animations?: unknown;
}

interface Series {
  name?: string;
  data: number[];
}

@Component({
  components: {
    apexcharts: VueApexCharts
  }
})
export default class Stocks extends Vue {
  @stocks.State
  public stocks!: Array<object>;

  @stocks.State
  public loading!: string;

  @stocks.Action
  public getStocks!: (stock: string) => void;

  stock = 'AAPL';

  rules = [
    (value: string | boolean) => !!value || 'Required.',
    (value: string | unknown[]) =>
      (value && value.length >= 3) || 'Min 3 characters'
  ];

  chartOptions: Chart = {
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: []
    },
    theme: {
      palette: 'palette1' // upto palette10
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  };

  series: Series[] = [
    {
      name: 'series-1',
      data: [1, 2, 3]
    }
  ];

  created () {
    this.getStocks('AAPL')
  }

  getNewStocks (stock: string) {
    this.getStocks(stock)
  }

  @Watch('stocks')
  public updateStocks () {
    this.chartOptions = {
      xaxis: {
        categories: this.stocks.map((stock: any) => {
          const date = new Date(stock.date)
          const formattedDate = `${date.getMonth()} / ${date.getDate()} / ${date.getFullYear()}`
          return formattedDate
        })
      }
    }

    this.series = [
      {
        data: this.stocks.map((stock: any) => {
          return parseInt(stock.low)
        })
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.v-card__title {
  &.headline {
    color: #000;
  }
}
</style>
