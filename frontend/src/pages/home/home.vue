<script setup>
import { onMounted, ref } from 'vue'

const userData = ref(null)

onMounted(() => {
  userData.value = window.Telegram.initDataUnsafe
})
</script>

<template>
  <main class="mt-8">
    <div>
      {{ JSON.stringify(userData) }}
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
