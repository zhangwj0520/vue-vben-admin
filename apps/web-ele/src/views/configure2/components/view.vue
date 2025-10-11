<!-- eslint-disable no-new -->
<script lang="ts" setup>
import type { Pen } from '@hj-meta2d/core';

import { onMounted, onUnmounted } from 'vue';

// import {
//   activityDiagram,
//   activityDiagramByCtx,
// } from '@hj-meta2d/activity-diagram';
// import { register as registerEcharts } from '@hj-meta2d/chart-diagram';
// import { classPens } from '@hj-meta2d/class-diagram';
import { Meta2d } from '@hj-meta2d/core';
// import { flowAnchors, flowPens } from '@hj-meta2d/flow-diagram';
// import { formPens } from '@hj-meta2d/form-diagram';
// import { ftaAnchors, ftaPens, ftaPensbyCtx } from '@hj-meta2d/fta-diagram';
// import { hjPens } from '@hj-meta2d/hj-diagram';
// import { chartsPens } from '@hj-meta2d/le5le-charts';
// import { sequencePens, sequencePensbyCtx } from '@hj-meta2d/sequence-diagram';
// import * as echarts from 'echarts';

import { useSelection } from '../hooks/selections';

interface Props {
  isPreview?: boolean;
}

const { isPreview = false } = defineProps<Props>();

const { select } = useSelection();

const meta2dOptions: any = {
  // rule: !isPreview,
  rule: true,
  isPreview: !!isPreview, // 是否预览模式
  strictScope: true,
  background: 'rgba(148, 148, 148, 0.2)',
  // background: 'rgba(21, 24, 28, 0.95)',
  parentBackground: '#7f838c',
  echartsOption: {
    darkMode: true, // 开启暗黑模式
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          show: false,
          yAxisIndex: 'none',
        },
        dataView: {
          show: false,
          readOnly: false,
        },
        magicType: {
          type: ['line', 'bar'],
        },
        restore: {
          show: false,
        },
        saveAsImage: {
          show: false,
        },
      },
    },
  },
};

onMounted(() => {
  // 创建实例
  const meta2d = new Meta2d('meta2d', meta2dOptions);

  // 按需注册图形库
  // 以下为自带基础图形库
  // register(hjPens());
  // // registerClassPen(hjClassPens());
  // register(flowPens());
  // registerAnchors(flowAnchors());

  // // 活动图形库
  // register(activityDiagram());
  // registerCanvasDraw(activityDiagramByCtx());

  // // 类图
  // register(classPens());
  // register(sequencePens());
  // registerCanvasDraw(sequencePensbyCtx());
  // registerEcharts(echarts);
  // registerCanvasDraw(formPens());
  // registerCanvasDraw(chartsPens());
  // register(ftaPens());
  // registerCanvasDraw(ftaPensbyCtx());
  // registerAnchors(ftaAnchors());

  // 注册其他自定义图形库
  // ...

  // 读取本地存储
  let data: any = localStorage.getItem('meta2d');
  if (data) {
    data = JSON.parse(data);

    // 判断是否为运行查看，是-设置为预览模式
    data.locked = isPreview ? 1 : 0;
    // data.origin = { x: 0, y: 0 };
    meta2d.open(data);

    // meta2d.showMap();
    // meta2d.open(tempData);
  }

  meta2d.on('active', active);
  meta2d.on('inactive', inactive);
});

const active = (pens?: Pen[]) => {
  select(pens);
};

const inactive = () => {
  select();
};

onUnmounted(() => {
  meta2d.destroy();
});
</script>

<template>
  <div
    id="meta2d"
    :data-preview="isPreview"
    class="h-[calc(100vh - 80px)] z-[1] auto-cols-auto bg-[#eee] bg-[repeating-linear-gradient(to_right,#bbb_0_1px,transparent_1px_20px),repeating-linear-gradient(to_bottom,#bbb_0_1px,transparent_1px_20px)] data-[preview=true]:h-screen"
  ></div>
</template>
<style lang="css" scoped></style>
