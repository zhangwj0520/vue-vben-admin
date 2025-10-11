// 从指定目录自动导入组件
// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
// https://github.com/antfu/unplugin-icons/blob/main/examples/vite-vue3/vite.config.ts
// iconify图标
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export default function unplugin() {
  return [
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        { 'element-plus': ['ElMessage', 'ElMessageBox', 'ElNotification'] },
        'vue-i18n',
        // '@vueuse/core',
      ],
      dts: './src/typings/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        // filepath: './.eslintrc-auto-import.json',
        // globalsPropValue: true,
      },
      // custom resolvers
      // 可以在这自定义自己的东西，比如接口api的引入，工具函数等等
      resolvers: [
        ElementPlusResolver(), // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      // 指定组件位置，默认是src/components 所以该项可以省略
      dirs: ['src/components', 'src/element-plus'],
      // 配置文件生成位置
      dts: './src/typings/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      // ui库解析器
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ];
}
