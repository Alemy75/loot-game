import { THEME_CONFIG } from './config'
import { convertToCssVariables } from './lib'

export const cssVariables = {
  ...convertToCssVariables(THEME_CONFIG.colors),
}
