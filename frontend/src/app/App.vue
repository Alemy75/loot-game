<script setup>
import { onBeforeMount } from 'vue'
import { cssVariables } from '@/shared/theme'

import headerWidget from '../widgets/header/header.vue'

const appStyle = {
  ...cssVariables
}

const setStyles = () => {
  Object.entries(appStyle).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}

onBeforeMount(() => {
  setStyles()
})
</script>

<template>
  <div>
    <header-widget />

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
