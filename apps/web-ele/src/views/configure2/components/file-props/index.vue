<script lang="tsx" setup>
import type { TabsPaneContext } from 'element-plus';

// import type { TabPanelProps } from 'tdesign-vue-next';
import { ref } from 'vue';

import DataProps from './data-props.vue';
import PaperProps from './paper-props.vue';

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="图纸" name="first"> <PaperProps /></el-tab-pane>
    <el-tab-pane label="数据" name="second"><DataProps /></el-tab-pane>
    <el-tab-pane label="设备" name="third">
      <p style="padding: 25px">选项卡3的内容，使用 t-tab-panel 渲染</p>
    </el-tab-pane>
  </el-tabs>
</template>
<style lang="css" scoped>
.t-tab-panel {
  @apply h-full overflow-y-auto p-4;
}
</style>
