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
@reference '@vben-core/style/tailwind.css';

li {
  @apply h-7;
}

li a {
  @apply text-muted-foreground bg-accent relative mr-9 flex h-7 items-center py-0 pr-2 pl-[5px] text-[13px];
}

li a > span {
  @apply -ml-3;
}

li:first-child a > span {
  @apply -ml-1;
}

li:first-child a {
  @apply rounded-[4px_0_0_4px] pl-[15px];
}

li:first-child a::before {
  @apply border-none;
}

li:last-child a {
  @apply rounded-[0_4px_4px_0] pr-[15px];
}

li:last-child a::after {
  @apply border-none;
}

li a::before,
li a::after {
  @apply border-accent absolute top-0 h-0 w-0 border-[.875rem] border-solid content-[''];
}

li a::before {
  @apply -left-7 z-10 border-l-transparent;
}

li a::after {
  @apply border-l-accent left-full border-transparent;
}

li:not(:last-child) a:hover {
  @apply bg-accent-hover;
}

li:not(:last-child) a:hover::before {
  @apply border-accent-hover border-l-transparent;
}

li:not(:last-child) a:hover::after {
  @apply border-l-accent-hover;
}
</style>
