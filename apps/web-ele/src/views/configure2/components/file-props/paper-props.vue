<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

// 图纸数据
// const data = reactive<any>({
//   name: '',
//   // background: 'rgba(0, 11, 41, 1)',
//   color: undefined,
//   width: 1920,
//   height: 1080,
//   scale: 1,
//   strictScope: true,
//   bkImage: '',
//   // bkImage:
//   //   'https://drive.le5lecdn.com/2024/0618/1/1/2.5D-%E8%83%8C%E6%99%AF%EF%BC%88%E6%B7%B1%E8%93%9D%EF%BC%89_566cf6db.jpg',
// });

// const { setMate2dData } = useMate2dStore();
// 图纸数据
const data = reactive<any>({
  name: '',
  background: undefined,
  color: undefined,
  width: 1920,
  height: 1080,
  strictScope: false,
});

// 画布选项
const options = reactive<any>({
  grid: false,
  gridSize: 10,
  gridRotate: undefined,
  gridColor: undefined,
  rule: true,
});

onMounted(() => {
  const d: any = meta2d.data();
  data.name = d.name || '';
  data.background = d.background;
  data.color = d.color;

  Object.assign(options, meta2d.getOptions());
});

const onChangeData = () => {
  // Object.assign(meta2d.store.data, data);
  // meta2d.store.patchFlagsTop = true;
  // meta2d.store.patchFlagsBackground = true;
  // meta2d.render();
  // meta2d.setDataByOptionsWithUserData(data);
  meta2d.render();
};

const onChangeOptions = () => {
  meta2d.setOptions(options);
  meta2d.store.patchFlagsTop = true;
  meta2d.store.patchFlagsBackground = true;
  meta2d.render();
};
</script>

<template>
  <div class="props-panel" style="'--td-comp-margin-xxl':14">
    <t-form label-align="left">
      <t-form-item label="图纸名称" name="name">
        <t-input v-model="data.name" @change="onChangeData" />
      </t-form-item>
      <t-form-item label="严格模式" name="strictScope">
        <t-switch v-model="data.strictScope" @change="onChangeData" />
      </t-form-item>
      <t-form-item v-if="data.strictScope" label="图纸宽度" name="width">
        <t-input-number
          theme="column"
          v-model="data.width"
          @change="onChangeData"
        />
      </t-form-item>
      <t-form-item v-if="data.strictScope" label="图纸高度" name="height">
        <t-input-number
          theme="column"
          v-model="data.height"
          @change="onChangeData"
        />
      </t-form-item>
      <t-divider />
      <t-form-item label="网格" name="grid">
        <t-switch v-model="options.grid" @change="onChangeOptions" />
      </t-form-item>
      <t-form-item label="网格大小" name="gridSize">
        <t-input v-model.number="options.gridSize" @change="onChangeOptions" />
      </t-form-item>
      <t-form-item label="网格角度" name="gridRotate">
        <t-input
          v-model.number="options.gridRotate"
          @change="onChangeOptions"
        />
      </t-form-item>
      <t-form-item label="网格颜色" name="gridColor">
        <t-color-picker
          class="w-full"
          v-model="options.gridColor"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          @change="onChangeOptions"
        />
      </t-form-item>

      <t-divider />

      <t-form-item label="标尺" name="rule">
        <t-switch v-model="options.rule" @change="onChangeOptions" />
      </t-form-item>

      <t-divider />

      <t-form-item label="背景颜色" name="background">
        <t-color-picker
          class="w-full"
          v-model="data.background"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          @change="onChangeData"
        />
      </t-form-item>
      <t-form-item label="图元默认颜色" name="color">
        <t-color-picker
          class="w-full"
          v-model="data.color"
          :show-primary-color-preview="false"
          format="CSS"
          :color-modes="['monochrome']"
          @change="onChangeData"
        />
      </t-form-item>
    </t-form>
  </div>
</template>
<style lang="css" scoped>
.props-panel :deep(.t-form) .t-form__item {
  margin-bottom: 8px;
}

.props-panel :deep(.t-form) .t-form__label {
  padding-right: 8px;
}

.props-panel :deep(.t-form) .t-divider {
  margin: 12px 0;
}

.props-panel :deep(.t-form) .t-input--auto-width {
  width: 100%;
}
</style>
