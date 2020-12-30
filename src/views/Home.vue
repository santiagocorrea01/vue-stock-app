<template>
  <div class="home">
    <Hero
      title="Easy Stocks"
      backgroundImage="https://cdn2.hubspot.net/hubfs/7562645/Portfolio/hero.png"
      copy="Just look up a stock and get data quick."
    />
    <Card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Hero from '@/components/Hero.vue'
import Card from '@/components/stocks/Stock.vue'

@Component({
  components: {
    Hero,
    Card
  }
})
export default class Home extends Vue {}
</script>
