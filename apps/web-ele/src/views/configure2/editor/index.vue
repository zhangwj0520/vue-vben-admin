<script lang="ts" setup>
import { onMounted } from 'vue';

import { useMate2dStore } from '@/store';

import Graphics from '../components/graphics.vue';
import Header from '../components/header.vue';
import Props from '../components/props.vue';
import View from '../components/view.vue';

const { setMate2dData } = useMate2dStore();

let timer: any;
function save() {
  console.log('save');
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    timer = undefined;
    setMate2dData();
  }, 200);
}

onMounted(() => {
  meta2d.on('scale', save);
  meta2d.on('drop', save);
  meta2d.on('opened', save);
  meta2d.on('undo', save);
  meta2d.on('redo', save);
  meta2d.on('add', save);
  meta2d.on('delete', save);
  meta2d.on('rotatePens', save);
  meta2d.on('translatePens', save);
});
</script>

<template>
  <div class="h-screen overflow-hidden">
    <Header />

    <div class="grid grid-cols-[300px_1fr_301px]">
      <Graphics />
      <View />
      <Props />
      <!--
       -->
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
