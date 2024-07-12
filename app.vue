<template>
  <v-theme-provider class="pa-10 " theme="dark" with-background>
    <PopUp @closePopUp="closePopUp" />
    <Top v-if="displayTop"/>
  </v-theme-provider>
</template>

<script setup>
import Top from '../components/top.vue'
import PopUp from '../components/popUp.vue'

const displayTop = ref(false)

const closePopUp = () => {
  displayTop.value = true 
}

</script>