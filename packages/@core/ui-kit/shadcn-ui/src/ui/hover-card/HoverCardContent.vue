<script setup lang="ts">
import type { HoverCardContentProps } from 'radix-vue';

import { computed } from 'vue';

import { cn } from '@vben-core/shared/utils';

import { HoverCardContent, HoverCardPortal, useForwardProps } from 'radix-vue';

const props = withDefaults(
  defineProps<HoverCardContentProps & { class?: any }>(),
  {
    sideOffset: 4,
  },
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="forwardedProps"
      :class="
        cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-border z-popup w-64 rounded-md border p-4 shadow-md outline-hidden',
          props.class,
        )
      "
    >
      <slot></slot>
    </HoverCardContent>
  </HoverCardPortal>
</template>
