<script setup lang="ts">
import type { EdgeProps } from '@vue-flow/core';

import { computed } from 'vue';

import { BaseEdge, EdgeLabelRenderer, getBezierPath } from '@vue-flow/core';

const props = defineProps<EdgeProps>();

const path = computed(() => getBezierPath(props));
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <!-- You can use the `BaseEdge` component to create your own custom edge more easily -->
  <BaseEdge :path="path[0]" />

  <!-- Use the `EdgeLabelRenderer` to escape the SVG world of edges and render your own custom label in a `<div>` ctx -->
  <EdgeLabelRenderer>
    <div
      :style="{
        pointerEvents: 'all',
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
      }"
      class="nodrag nopan"
    >
      {{ data.hello }}
    </div>
  </EdgeLabelRenderer>
</template>
