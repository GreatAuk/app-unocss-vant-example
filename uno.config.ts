import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  theme: {
    colors: {
      // 复用组件库的一些颜色变量, 以下仅供示意
      primary: 'var(--van-primary-color)',
    }
  },
  shortcuts: [
    // 垂直水平居中
    ['inline-flex-center', 'inline-flex justify-center items-center'],
  ]
})