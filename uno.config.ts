import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind4,
  presetIcons,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { 
        reset: true, 
      }
    }
    ),
    presetAttributify(),
    presetTypography(),
    presetIcons(),
  ],
})