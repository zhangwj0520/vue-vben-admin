<script setup lang="ts">
import JsonViewer from 'vue-json-viewer';

import { storeToRefs } from 'pinia';

import { useMate2dStore } from '@/store';

defineOptions({ name: 'DataProps' });
const store = useMate2dStore();

// `mate2dData`  都是响应式引用
// 下面的代码同样会提取那些来自插件的属性的响应式引用
// 但是会跳过所有的 action 或者非响应式（非 ref 或者 非 reactive）的属性
const { mate2dData } = storeToRefs(store);
// 名为 setMate2dData 的 action 可以被解构
</script>

<template>
  <div class="overflow-auto">
    <JsonViewer :value="mate2dData" />
  </div>
</template>

<style lang="css" scoped></style>
