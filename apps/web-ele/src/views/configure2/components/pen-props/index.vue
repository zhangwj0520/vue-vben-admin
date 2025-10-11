<script lang="tsx" setup>
import type { TabPanelProps } from 'tdesign-vue-next';

import StyleProps from './style-props.vue';

const value = ref(1);
const panelRender: TabPanelProps['panel'] = () => {
  return <p style="padding: 25px;">选项卡3的内容，使用 t-tab-panel 渲染</p>;
};
</script>

<template>
  <t-tabs
    v-model="value"
    class="z-10 flex h-[calc(100vh-80px)] flex-col border-l border-gray-200 p-4"
  >
    <t-tab-panel :value="1" label="外观" :destroy-on-hide="false">
      <StyleProps />
    </t-tab-panel>
    <t-tab-panel :value="2" label="数据" :destroy-on-hide="false">
      <!-- <template #panel>
        <DataProps />
      </template> -->
    </t-tab-panel>
    <t-tab-panel :value="3" label="事件" :panel="panelRender" />
  </t-tabs>
</template>
<style lang="css" scoped>
.t-tab-panel {
  @apply h-full overflow-y-auto p-4;
}
</style>
