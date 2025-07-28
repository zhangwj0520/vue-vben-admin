<script setup lang="ts">
import { toRef } from 'vue';

import { Handle, useNodeConnections } from '@vue-flow/core';

import AnalyticsVisitsData from './analytics-visits-data.vue';

// props 解构
// defineProps(['id', 'data', 'selected'])

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  allData: {
    type: Object,
    required: true,
  },
  sourcePosition: {
    type: String,
  },
  targetPosition: {
    type: String,
  },
});

watchEffect(() => {
  console.log('allData', props.allData);
});

const sourceConnections = useNodeConnections({
  handleType: 'target',
});

const targetConnections = useNodeConnections({
  handleType: 'source',
});

const isSender = toRef(() => sourceConnections.value.length <= 0);

const isReceiver = toRef(() => targetConnections.value.length <= 0);

const bgColor = toRef(() => {
  if (isSender.value) {
    return '#2563eb';
  }

  if (props.data.hasError) {
    return '#f87171';
  }

  if (props.data.isFinished) {
    return '#42B983';
  }

  if (props.data.isCancelled) {
    return '#fbbf24';
  }

  return '#4b5563';
});

const processLabel = toRef(() => {
  if (props.data.hasError) {
    return '❌';
  }

  if (props.data.isSkipped) {
    return '🚧';
  }

  if (props.data.isCancelled) {
    return '🚫';
  }

  if (props.data.customType === 'switch') {
    return 'xxx';
  }
  if (isSender.value) {
    return '📦';
  }

  if (props.data.isFinished) {
    return '😎';
  }

  return '🏠';
});
const handleNodeClick = () => {
  console.log('click', 1111);
};
</script>

<template>
  <div v-if="props.data.hasError" class="h-1 w-1 rounded-3xl bg-red-300"></div>
  <div
    v-if="props.data.customType === 'echart'"
    class="-z-20 h-80 w-80 bg-white"
    @click="handleNodeClick"
  >
    <!-- <NodeResizer
      :min-width="100"
      :min-height="60"
      :max-width="400"
      :max-height="300"
      :is-visible="selected"
      :node-id="id"
    /> -->

    <AnalyticsVisitsData />
  </div>
  <div
    v-else
    class="process-node"
    :style="{
      backgroundColor: bgColor,
      boxShadow: data.isRunning ? '0 0 10px rgba(0, 0, 0, 0.5)' : '',
    }"
  >
    <Handle v-if="!isSender" type="target" :position="targetPosition as any">
      <span
        v-if="
          !data.isRunning &&
          !data.isFinished &&
          !data.isCancelled &&
          !data.isSkipped &&
          !data.hasError
        "
        >📥
      </span>
    </Handle>
    <Handle
      v-if="!isReceiver"
      type="source"
      :position="sourcePosition as any"
    />

    <div v-if="!isSender && data.isRunning" class="spinner"></div>
    <span v-else>
      {{ processLabel }}
    </span>
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.process-node {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 10px;
  border-radius: 99px;
}

.process-node .vue-flow__handle {
  width: unset;
  height: unset;
  font-size: 12px;
  background: transparent;
  border: none;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 1px solid #f3f3f3;
  border-top: 1px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
</style>
