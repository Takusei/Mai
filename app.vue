<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(option, i) in travelOptions"
      :key="i"
      :dot-color="option.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${option.color}`"
          v-text="option.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${option.color}`">
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
import {travelOptions} from './utils/options.ts'

const years = travelOptions
</script>