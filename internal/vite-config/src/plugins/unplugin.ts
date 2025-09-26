// 从指定目录自动导入组件
// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import IconsResolver from 'unplugin-icons/resolver';
// https://github.com/antfu/unplugin-icons/blob/main/examples/vite-vue3/vite.config.ts
import Icons from 'unplugin-icons/vite'; // iconify图标
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
        // { '@hj-fe/icons': ['HjIcon'] },

        // 'vue-i18n',
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
    Icons({
      compiler: 'vue3',
      customCollections: {
        // icon-custom-XXX
        custom: FileSystemIconLoader(
          `${process.cwd()}/src/assets/custom`,
          (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
        // icon-system-XXX
        system: FileSystemIconLoader(`${process.cwd()}/src/assets/system`),
      },
      autoInstall: true,
      scale: 1,
      // defaultClass: 'iconify',
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

        // 在assets/svg目录下查找svg文件 并自动生成组件 icon-custom-xxx
        IconsResolver({
          // enabledCollections: ['ep'],
          customCollections: ['custom', 'system'],
          componentPrefix: 'icon',
        }),
      ],
    }),
  ];
}
