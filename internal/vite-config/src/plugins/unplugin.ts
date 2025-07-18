// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import IconsResolver from 'unplugin-icons/resolver';
// https://github.com/antfu/unplugin-icons/blob/main/examples/vite-vue3/vite.config.ts
import Icons from 'unplugin-icons/vite'; // iconify图标
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
// 从指定目录自动导入组件
export default function unplugin() {
  return [
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
        'vue-i18n',
        '@vueuse/core',
      ],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: './src/typings/auto-imports.d.ts',
      eslintrc: {
        enabled: false,
        // filepath: './.eslintrc-auto-import.json',
        // globalsPropValue: true,
      },
      // custom resolvers
      // 可以在这自定义自己的东西，比如接口api的引入，工具函数等等
      resolvers: [NaiveUiResolver()],
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        // icon-custom-XXX
        custom: FileSystemIconLoader(
          `${process.cwd()}/src/assets/svg-icons`,
          (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
      autoInstall: true,
      scale: 1,
      defaultClass: 'iconify',
      // defaultClass: 'inline-block'
    }),
    Components({
      // 指定组件位置，默认是src/components 所以该项可以省略
      dirs: ['src/components', 'src/element-plus'],
      // 配置文件生成位置
      dts: './src/typings/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      // ui库解析器
      resolvers: [
        NaiveUiResolver(),
        // 在assets/svg目录下查找svg文件 并自动生成组件 icon-custom-xxx
        IconsResolver({
          customCollections: ['custom'],
          componentPrefix: 'icon',
        }),
      ],
    }),
  ];
}
