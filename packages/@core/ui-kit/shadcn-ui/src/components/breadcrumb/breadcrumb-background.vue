<script lang="ts" setup>
import type { BreadcrumbProps } from './types';

import { VbenIcon } from '../icon';

interface Props extends BreadcrumbProps {}

defineOptions({ name: 'Breadcrumb' });
const { breadcrumbs, showIcon } = defineProps<Props>();

const emit = defineEmits<{ select: [string] }>();

function handleClick(index: number, path?: string) {
  if (!path || index === breadcrumbs.length - 1) {
    return;
  }
  emit('select', path);
}
</script>
<template>
  <ul class="flex">
    <TransitionGroup name="breadcrumb-transition">
      <template
        v-for="(item, index) in breadcrumbs"
        :key="`${item.path}-${item.title}-${index}`"
      >
        <li>
          <a
            href="javascript:void 0"
            @click.stop="handleClick(index, item.path)"
          >
            <span class="flex-center z-10 h-full">
              <VbenIcon
                v-if="showIcon"
                :icon="item.icon"
                class="mr-1 size-4 shrink-0"
              />
              <span
                :class="{
                  'text-foreground font-normal':
                    index === breadcrumbs.length - 1,
                }"
                >{{ item.title }}
              </span>
            </span>
          </a>
        </li>
      </template>
    </TransitionGroup>
  </ul>
</template>
<style scoped>
li {
  height: 1.75rem;
}

li a {
  position: relative;
  display: flex;
  align-items: center;
  height: 1.75rem /* 28px */;
  padding: 0 0.5rem 0 5px;
  margin-right: 2.25rem /* 36px */;
  font-size: 13px;
  color: hsl(var(--muted-foreground));
  background-color: hsl(var(--accent));
}

li a > span {
  margin-left: -0.75rem /* -12px */;
}

li:first-child a > span {
  margin-left: -0.25rem /* -4px */;
}

li:first-child a {
  padding-left: 15px;
  border-radius: 4px 0 0 4px;
}

li:first-child a::before {
  border-style: none;
}

li:last-child a {
  padding-right: 15px;
  border-radius: 0 4px 4px 0;
}

li:last-child a::after {
  border-style: none;
}

li a::before,
li a::after {
  --tw-content: '';

  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  content: var(--tw-content);
  border-color: hsl(var(--accent));
  border-style: solid;
  border-width: 0.875rem /* 14px */;
}

li a::before {
  left: -1.75rem /* -28px */;
  z-index: 10;
  border-left-color: transparent;
}

li a::after {
  left: 100%;
  border-color: transparent;
  border-left-color: hsl(var(--accent));
}

li:not(:last-child) a:hover {
  background-color: hsl(var(--accent-hover));
}

li:not(:last-child) a:hover::before {
  border-color: hsl(var(--accent-hover));
  border-left-color: transparent;
}

li:not(:last-child) a:hover::after {
  border-left-color: hsl(var(--accent-hover));
}
</style>
