<script lang="ts" setup>
// 全局特性配置，引入英文语言配置包 enConfig
import type { GlobalConfigProvider } from 'tdesign-vue-next';

import { computed } from 'vue';

import { preferences } from '@vben/preferences';

// import {
//   darkTheme,
//   dateEnUS,
//   dateZhCN,
//   enUS,
//   lightTheme,
//   NConfigProvider,
//   NMessageProvider,
//   NNotificationProvider,
//   zhCN,
// } from 'naive-ui';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-vue-next/es/locale/en_US';
import zhConfig from 'tdesign-vue-next/es/locale/zh_CN';

defineOptions({ name: 'App' });
const empty: GlobalConfigProvider = {};
const customConfig: GlobalConfigProvider = {
  // 可以在此处定义更多自定义配置，具体可配置内容参看 API 文档
  calendar: {},
  table: {},
  pagination: {},
};
const locale = computed(() =>
  preferences.app.locale === 'zh-CN' ? zhConfig : enConfig,
);
const globalConfig: GlobalConfigProvider = computed(() =>
  merge(empty, locale.value, customConfig),
);

// const { commonTokens } = useNaiveDesignTokens();

// const tokenDateLocale = computed(() =>
//   preferences.app.locale === 'zh-CN' ? dateZhCN : dateEnUS,
// );
// const tokenTheme = computed(() =>
//   preferences.theme.mode === 'dark' ? darkTheme : lightTheme,
// );

// const themeOverrides = computed((): GlobalThemeOverrides => {
//   return {
//     common: commonTokens,
//   };
// });
</script>

<template>
  <!-- <NConfigProvider
    :date-locale="tokenDateLocale"
    :locale="tokenLocale"
    :theme="tokenTheme"
    :theme-overrides="themeOverrides"
    class="h-full"
  >
    <NNotificationProvider>
      <NMessageProvider>
        <RouterView />
      </NMessageProvider>
    </NNotificationProvider>
  </NConfigProvider> -->
  <t-config-provider :global-config="globalConfig">
    <RouterView />
  </t-config-provider>
</template>
