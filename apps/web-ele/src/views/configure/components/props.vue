<script setup lang="ts">
import { SelectionMode, useSelection } from '../hooks/selections';
import FileProps from './file-props/index.vue';
import PenProps from './pen-props/index.vue';

defineOptions({ name: 'BaseProps' });

const { selections } = useSelection();
</script>

<template>
  <FileProps v-show="selections.mode === SelectionMode.File" />
  <PenProps v-if="selections.mode === SelectionMode.Pen" />
</template>

<style lang="css" scoped></style>
