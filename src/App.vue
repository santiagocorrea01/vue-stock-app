<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Source+Sans+Pro:wght@300;400;700&display=swap");

</style>

<script lang="ts">
import Vue from 'vue'
import TheNavigation from '@/components/global/TheNavigation.vue'

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    TheNavigation
  }
})
</script>
