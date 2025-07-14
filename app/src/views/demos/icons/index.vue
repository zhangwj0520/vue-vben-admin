<script setup lang="ts">
import { Page } from '@vben/common-ui';

defineOptions({ name: 'DemoIcons' });
</script>

<template>
  <Page description="icons" title="直接使用icons">
    <div class="flex flex-wrap gap-5">
      <ElCard class="mb-5 w-auto">
        <template #header> icons </template>
        <el-space>
          <span class="icon-[ep--setting] text-[100px]"></span>
          <span class="iconify ep--setting text-[100px]"></span>
          <span class="icon-[mdi-light--home] text-[100px]"></span>
          <span
            class="icon-[mdi-light--home] iconify-color text-[100px]"
          ></span>

          <span class="icon-[ep--magnet] text-[100px]"></span>

          <span
            class="icon-[vscode-icons--file-type-tailwind] iconify-color text-[100px]"
          ></span>
          <div
            class="icon-[vscode-icons--file-type-access] hover:icon-[vscode-icons--file-type-access2] flex text-[100px]"
          ></div>
        </el-space>
      </ElCard>
    </div>
  </Page>
</template>

<style lang="css" scoped></style>
