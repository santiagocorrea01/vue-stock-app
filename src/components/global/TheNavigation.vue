<template>
  <div>
    <v-app-bar color="white">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Wegrix</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in navigationLinks" :key="link.name">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link :to="link.url">{{ link.name }}</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import navigationLinks from '@/nav'

@Component
export default class TheNavigation extends Vue {
  drawer = false;
  group = null;
  navigationLinks = navigationLinks;
}
</script>

<style lang="scss" scoped>
.v-application {
  a {
    color: #000;
    text-decoration: none;
  }
}
</style>
