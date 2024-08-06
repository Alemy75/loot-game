<script setup>
import { onMounted, ref } from 'vue'

const userData = ref(null)

onMounted(() => {
  userData.value = window.Telegram.initDataUnsafe.user
})
</script>

<template>
  <main class="mt-8">
    <div v-if="userData">
      Hello, {{ userData.firstName }} {{ userData.lastName }}!
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
