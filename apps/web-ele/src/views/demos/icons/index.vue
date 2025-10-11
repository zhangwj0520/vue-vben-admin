<script lang="ts" setup>
import { Page } from '@hj-fe/common-ui';
import { HjIcon } from '@hj-fe/icons';
</script>

<template>
  <Page description="ICON使用演示111" title="ICON">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>@iconify/json</span>
        </div>
      </template>
      <span class="icon-[ep--setting] text-8xl"></span>
      <span
        class="icon-[tdesign--refresh] animate-spin text-8xl text-red-500"
      ></span>

      <span class="icon-[mdi-light--home] iconify-color text-8xl"></span>

      <span class="icon-[ep--magnet] text-8xl"></span>

      <span
        class="icon-[vscode-icons--file-type-tailwind] iconify-color text-8xl"
      ></span>
      <div
        class="icon-[vscode-icons--file-type-access] hover:icon-[vscode-icons--file-type-access2] text-8xl"
      ></div>
      <span
        class="icon-[tdesign--refresh] duration-1900 animate-spin text-8xl text-red-500"
      ></span>
    </el-card>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>类名方式(assets/custom目录下的svg文件)</span>
        </div>
      </template>
      <span class="icon-[custom--logo] text-8xl"></span>
      <span class="icon-[system--download] text-8xl"></span>
      <span class="icon-[custom--play] text-8xl"></span>
      <span class="icon-[custom--demos-play] text-8xl"></span>
    </el-card>

    <el-card>
      <template #header>
        <div class="card-header">
          <span>组件方式--HjIcon</span>
        </div>
      </template>
      <HjIcon class="text-8xl" icon="custom:logo" />
      <HjIcon class="text-8xl" icon="system:download" />
      <div>11</div>
      <HjIcon icon="svg:avatar-1" class="text-8xl" />
      <HjIcon icon="custom:play" class="text-8xl" />
      <HjIcon icon="custom--play" class="text-8xl" />
      <HjIcon icon="custom--demos-play" class="text-8xl" />
      <HjIcon icon="vscode-icons--file-type-tailwind" class="text-8xl" />
    </el-card>
  </Page>
</template>
