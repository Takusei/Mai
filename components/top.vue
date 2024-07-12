<template>
  <v-container v-if="!showTab"
    class="bg-surface-variant full-screen"
  >
    <v-row
      align="center" 
      justify="center"
      style="margin-top: 25vh;"
      no-gutters> 
        <v-col align-self="center"  style="height: 20vh;">
            <Typed :options="options">
              <h1 class="typing"></h1>
            </Typed>
        </v-col>
    </v-row> 
    <v-row>
      <v-col align="center" 
        justify="center">
        <v-btn @click="clickBtn">
          {{dateCount }} days review
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  
  <tab v-if="showTab"/>
</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";
import {topPage, daysTo2022} from '../utils/options'
import Tab from './tab.vue'
const options: TypedOptions = {
  strings: topPage,
  loop: false,
  typeSpeed: 10,
  backSpeed: 1,
  fadeOut: true,
};

const dateCount = ref(daysTo2022)
const showTab = ref(false)

const clickBtn = () => {
  console.log('clicked')
  // const audio = new Audio('/Perfect.mp3');
  // audio.play();
  showTab.value = true
}
</script>


<style scoped>
.full-screen {
  height: 90vh;
}
</style>