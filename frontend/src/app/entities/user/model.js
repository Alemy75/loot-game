import { createGlobalState } from '@vueuse/core'
import { onMounted, ref } from 'vue'

export const useUserStore = createGlobalState(() => {
  const user = ref(null)

  onMounted(() => {
    if (!window.Telegram) {
      throw Error('[userStore]: no Telegram API detected')
    }

    user.value = window.Telegram.WebApp.initDataUnsafe.user
  })

  return { user }
})
