import type { Meta2dData } from '@meta2d/core';

import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useMate2dStore = defineStore('mate2d', () => {
  const mate2dData = ref<any>({});

  const setMate2dData = () => {
    const data: any = meta2d.data();
    console.log('setMate2dData', data);
    mate2dData.value = data;
    localStorage.setItem('meta2d', JSON.stringify(data));
  };

  const clearMate2dData = () => {
    meta2d.clear();
    mate2dData.value = {};
    localStorage.removeItem('meta2d');
  };

  // 图纸数据 props
  const meta2dPropsData: Meta2dData = reactive<Meta2dData>({
    name: '',
    background: '',
    color: undefined,
    width: 1920,
    height: 1080,
    scale: 1,

    strictScope: true,
    bkImage:
      'https://drive.le5lecdn.com/2024/0618/1/1/2.5D-%E8%83%8C%E6%99%AF%EF%BC%88%E6%B7%B1%E8%93%9D%EF%BC%89_566cf6db.jpg',
  });
  // 初始化图纸数据
  const setMeta2dPropsData = (d: any) => {
    console.log('setMeta2dPropsData', d);
  };

  return {
    setMate2dData,
    clearMate2dData,
    mate2dData,
    meta2dPropsData,
    setMeta2dPropsData,
  };
});
