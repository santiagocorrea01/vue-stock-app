<template>
  <section>
    <div
      class="c-hero"
      id="hero"
      :style="`background-image: url(${backgroundImage})`"
    >
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="6">
              <div class="c-hero__wrapper">
                <h1 class="c-hero__title">{{ title }}</h1>
                <p class="c-hero__copy">{{ copy }}</p>
                <v-row align="center" justify="center" class="c-hero--mt16">
                  <a href="" class="c-hero__btn c-hero__btn--primary"
                    >Stocks</a
                  >
                  <a href="" class="c-hero__btn c-hero__btn--secondary"
                    >Work</a
                  >
                </v-row>
              </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<style lang="scss" scoped>
html {
  // A font-size of 62.5% will create a base font-size of 10px in most cases
  font-size: 62.5%;
  width: 100%;
}

.c-hero {
  background-repeat: no-repeat;
  height: 100%;
  background-size: cover;
  min-height: 400px;
  width: 100%;
  background-image: linear-gradient(212deg, #ffa48d 3%, #6799ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-height: 700px;
    background-position-x: -100%;
  }

  &__wrapper {
    max-width: 380px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      font-size: 68px;
      margin: 0 20px 24px 0;
    }
  }

  &__title {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 900;
    font-size: 20px;
    line-height: 1.176;
    margin: 0 20px 24px 0;
    @media screen and (min-width: 768px) {
      font-size: 68px;
    }
  }

  &__copy {
    font-family: "Lato", sans-serif;
    font-size: 16px;
  }

  &__btn {
    appearance: none;
    display: inline-flex;
    font-family: "Source Sans Pro", sans-serif;
    justify-content: center;
    font-size: 18px;
    line-height: 2;
    padding: 8px 59px;
    text-decoration: none;
    width: 100%;
    margin-bottom: 20px;

    &--primary {
      background-color: #1a237e;
      box-shadow: 0 8px 16px rgba(26, 35, 126, 0.3);
      border: 2px solid transparent;
      color: #fff;
    }

    &--secondary {
      border: 2px solid #00bfa5;
      color: #00bfa5;
    }
  }

  &--mt16 {
    margin-top: 16px;
  }
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    title: String,
    backgroundImage: String,
    copy: String
  }
})
export default class Hero extends Vue {
  message = 'Hello!';
}
</script>
