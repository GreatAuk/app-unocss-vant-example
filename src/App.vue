<script setup lang="ts">
import { Button, Checkbox, Divider } from 'vant'
</script>

<template>
  <div>
    <h4>Vant UI</h4>
    <div class="flex items-center gap-10 px-4">
      <Button size="small" type="primary">Button</Button>
      <Checkbox icon-size="16">
        <span class="text-24px">复选框</span>
      </Checkbox>
      <div class="text-primary">Vant Primary Color</div>
    </div>
    <Divider />

    <h4>移动端适配</h4>
    <div class="w-375px inline-flex-center h-40 bg-green">
      <span class="text-32px">Left</span>
    </div>
    <div class="w-375px inline-flex-center h-40 bg-blue">
      <span class="text-32px">Right</span>
    </div>
    <Divider />

    <h4>presetAttributify</h4>
    <div border="1px solid red" class="w-375px h-20" />
    <Divider />

    <h4>transformerVariantGroup</h4>
    <div class="border-(1px solid red) w-375px h-20" />
    <Divider />

    <h4>transformerDirectives</h4>
    <div class="mb-4 text-red text-24px">使用 transformerDirectives，如果需要 px-to-viewport 生效，请参考：https://unocss.dev/integrations/postcss</div>
    <div class="box" />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
.box {
  @apply border-1px border-red border-solid w-375px h-20
}
</style>
