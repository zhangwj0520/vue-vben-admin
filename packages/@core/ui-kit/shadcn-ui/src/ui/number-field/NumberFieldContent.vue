<script setup lang="ts">
import { cn } from '@vben-core/shared/utils';

const props = defineProps<{
  class?: any;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'relative has-data-[slot=decrement]:*:data-[slot=input]:pl-5 has-data-[slot=increment]:*:data-[slot=input]:pr-5',
        props.class,
      )
    "
  >
    <slot></slot>
  </div>
</template>
