<script setup lang="ts">
import View from '../components/view.vue';

defineOptions({ name: '组态预览' });
</script>

<template>
  <div class="h-screen">
    <View :is-preview="true" />
  </div>
</template>

<style lang="css" scoped></style>
