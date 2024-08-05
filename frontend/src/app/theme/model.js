import { onBeforeMount } from 'vue'
import { THEME_CONFIG } from './config'
import { convertToCssVariables } from './lib'

export const useTheme = () => {
  const appStyle = {
    ...convertToCssVariables(THEME_CONFIG.colors)
  }

  const setStyles = () => {
    Object.entries(appStyle).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  }

  onBeforeMount(() => {
    setStyles()
  })
}
