import { createGlobalState } from '@vueuse/core'
import { computed } from 'vue'
import { useWebApp } from 'vue-tg'

export const useUserStore = createGlobalState(() => {
  const { initDataUnsafe: webAppData } = useWebApp()

  const user = computed(() => webAppData.user)

  return { user }
})
