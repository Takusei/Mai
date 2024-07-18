<template>
  <div v-if="showCurrentPage">
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
      >
        <v-tab :value="2022">2022</v-tab>
        <v-tab :value="2023">2023</v-tab>
        <v-tab :value="2024">2024</v-tab>
      </v-tabs>
    </v-card>
    <TimeLine :travelOptions="getTravelOptions(tab)" />
    <v-col align="center" 
          justify="center">
      <v-btn v-if="displayBtn" @click="clicked">Click Me</v-btn>
    </v-col>
  </div>
  <ProposePopUp v-if="!showCurrentPage"/>
</template>

<script setup>
import {year2022, year2023, year2024} from '../utils/options.ts'
import TimeLine from './timeLine.vue'
import ProposePopUp from './ProposePopUp.vue';

const tab = ref(null)
const showCurrentPage = ref(true)

const getTravelOptions = (year) => {
  if (year === 2022) {
    return year2022
  } else if (year === 2023) {
    return year2023
  } else if (year === 2024) {
    return year2024
  } else {
    console.log('No data found')
  }
}

const displayBtn = computed(() => {
  return tab.value === 2024
})

const clicked = () => {
  console.log('clicked')
  showCurrentPage.value = false
}

</script>