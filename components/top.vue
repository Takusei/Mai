<template>
  <v-container
    class="bg-surface-variant full-screen"
  >
  <v-row
      align="center"
      no-gutters
    > 
      <Typed :options="options">
        <h1 class="typing"></h1>
      </Typed>
    </v-row> 
    <v-btn></v-btn>
  </v-container>

</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";
import {topPage} from '../utils/options'

const options: TypedOptions = {
  strings: topPage,
  loop: false,
  typeSpeed: 30,
};
</script>


<style scoped>
.full-screen {
  height: 90vh;
}
</style>