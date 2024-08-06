<script setup>
import { useTheme } from './theme'
import { GDialog } from '@/shared/ui'
import { ref, onMounted } from 'vue'
import { useUserStore } from './entities/user'

import HeaderWidget from '../widgets/header/header.vue'
import NavigationWidget from '../widgets/navigation/navigation.vue'

useTheme()
const { user } = useUserStore()

const isDialogVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isDialogVisible.value = true
  }, 1000)
})
</script>

<template>
  <div>
    <header-widget />

    <div class="container">
      <router-view />
    </div>

    <navigation-widget />
  </div>

  <g-dialog v-model="isDialogVisible">
    <template v-if="user">
      <div v-for="item in Object.keys(user)">
        {{ item }}: {{ user[item] }}
      </div>
    </template>
  </g-dialog>
</template>

<style scoped></style>
