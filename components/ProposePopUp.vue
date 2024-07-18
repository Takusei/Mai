<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="dialog"
      width="100%"
      fullscreen
    >
      <v-card
        style="padding-top: 10vh;"
        max-width="400"
        prepend-icon="mdi-heart-circle-outline"
        title="Dear Mai"
      >
        <v-card-text>
          <Typed :options="options">
              <h1 class="typing"></h1>
          </Typed>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { Typed } from "@duskmoon/vue3-typed-js";
const options = {
  strings: ProposeText,
  loop: false,
  typeSpeed: 90,
  backSpeed: 1,
  fadeOut: true,
};

const dialog = ref(true)

</script>