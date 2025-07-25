<script lang="ts" setup>
import { Page } from '@vben/common-ui';
</script>

<template>
  <Page description="支持多语言，主题功能集成切换等" title="naive组件使用演示">
    <t-space direction="vertical">
      <t-card title="按钮" :bordered="false" hover-shadow>
        <t-space direction="vertical">
          <t-space>
            <span class="icon-[ep--setting] text-8xl"></span>
            <span
              class="icon-[tdesign--refresh] animate-spin text-8xl text-red-500"
            ></span>
            <span class="iconify ep--setting text-8xl"></span>
            <span class="icon-[mdi-light--home] iconify-color text-8xl"></span>

            <span class="icon-[ep--magnet] text-8xl"></span>

            <span
              class="icon-[vscode-icons--file-type-tailwind] iconify-color text-8xl"
            ></span>
            <div
              class="icon-[vscode-icons--file-type-access] hover:icon-[vscode-icons--file-type-access2] text-8xl"
            ></div>
            <div class="icon-[custom--logo] text-8xl"></div>
          </t-space>
        </t-space>
      </t-card>
      <t-card title="组件方式(assets/svg目录下)" :bordered="false" hover-shadow>
        <t-space>
          <icon-custom-logo class="text-8xl" />
        </t-space>
      </t-card>
      <t-card title="类名方式(assets/svg目录下)" :bordered="false" hover-shadow>
        <t-space>
          <span class="icon-[custom--logo] text-8xl"></span>
          <span
            class="icon-[tdesign--refresh] animate-spin text-8xl text-red-500 duration-1900"
          ></span>
        </t-space>
      </t-card>
    </t-space>
  </Page>
</template>
