# app-unocss-vant-example

## UnoCSS + Vant 移动端适配方案

 `unocss` 移动端适配方案：`@unocss/preset-rem-to-px` + `postcss-px-to-viewport-8-plugin`

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetRemToPx({
    })
  ]
})
```

```js
// pnpm add -D postcss-px-to-viewport-8-plugin

// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375 // 设计图以375px为基准
    }
  }
}
```

解决 `vant` 设计稿 `375px` 的问题。

```js
// postcss.config.js
module.exports = () => {
  return {
    plugins: {
      "postcss-px-to-viewport-8-plugin": {
        viewportWidth: function (file) {
          return file && file.includes("node_modules/vant") ? 375 : 750; // 针对 vant 特殊处理
        },
      },
    },
  };
};
```

使用 `postcss-px-to-viewport-8-plugin` 作为移动端适配方案时，如果需要 `@unocss/transformer-directives` 完全生效，需要安装插件 `@unocss/postcss`

```js
// postcss.config.js
module.exports = {
  plugins: {
    '@unocss/postcss': {}, // 安装这个插件是为了支持 unocss 的 @apply, @screen and theme() directives.
  },
}
```

###
