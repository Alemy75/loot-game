import { createGlobalState } from '@vueuse/core'
import { onMounted, onBeforeMount, ref } from 'vue'

export const useUserStore = createGlobalState(() => {
  const user = ref(null)

  onBeforeMount(() => {
    if (!window.Telegram) {
      throw Error('[userStore]: no Telegram API detected')
    }

    window.Telegram.WebApp.isVerticalSwipesEnabled = false
  })

  onMounted(() => {
    if (!window.Telegram) {
      throw Error('[userStore]: no Telegram API detected')
    }

    user.value = window.Telegram.WebApp.initDataUnsafe.user
  })

  return { user }
})
