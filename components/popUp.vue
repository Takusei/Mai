<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="dialog"
      width="100%"
      fullscreen
    >
      <v-card
        style="padding-top: 40vh;"
        max-width="400"
        prepend-icon="mdi-heart-circle-outline"
        text="This is the webpage I created for you, Mai. I hope you like it."
        title="Dear Mai"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Continue"
            @click="clicked"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const dialog = ref(true)
const emit = defineEmits(['closePopUp'])

const clicked = () => {
  dialog.value = false
  // const audio = new Audio('/Perfect.mp3');
  // audio.play();
  emit('closePopUp')
}


</script>