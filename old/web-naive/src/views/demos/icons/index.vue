<script lang="ts" setup></script>

<template>
  <Page description="支持多语言，主题功能集成切换等" title="naive组件使用演示">
    <NCard class="mb-5" title="iconify">
      <NSpace>
        <span class="icon-[ep--setting] text-8xl"></span>
        <span class="iconify ep--setting text-8xl"></span>
        <span class="icon-[mdi-light--home] text-8xl"></span>
        <span class="icon-[mdi-light--home] iconify-color text-8xl"></span>

        <span class="icon-[ep--magnet] text-8xl"></span>

        <span
          class="icon-[vscode-icons--file-type-tailwind] iconify-color text-8xl"
        ></span>
        <div
          class="icon-[vscode-icons--file-type-access] hover:icon-[vscode-icons--file-type-access2] text-8xl"
        ></div>
        <div class="icon-[custom--logo] text-8xl"></div>
      </NSpace>
    </NCard>
    <NCard class="mb-5" title="组件方式(assets/svg目录下)">
      <NSpace>
        <icon-custom-logo class="text-8xl" />
      </NSpace>
    </NCard>
    <NCard class="mb-5" title="类名方式(assets/svg目录下) ">
      <NSpace>
        <div>TODO:还没搞定</div>
      </NSpace>
    </NCard>
  </Page>
</template>
