<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(option, i) in travelOptions"
      :key="i"
      :dot-color="randomColor()"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${randomColor()}`"
          v-text="option.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${randomColor()}`">
          {{  option.title }}
        </h2>
        <div>
          {{  option.description }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup>
import {randomColor} from 'randomcolor'

const props = defineProps({
  travelOptions: Array,
})

</script>