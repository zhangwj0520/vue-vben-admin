import type { RouteRecordRaw } from 'vue-router';

import { $t } from '@/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('page.configure.name'),
      noBasicLayout: true,
    },
    name: 'configure',
    path: '/configure',
    children: [
      {
        meta: {
          title: $t('page.configure.editor'),
          icon: 'token-branded:tusd',
          openInNewWindow: true,
        },
        name: 'configure-editor',
        path: '/configure/tdesign',
        component: () => import('@/views/configure/editor/index.vue'),
      },
      {
        meta: {
          title: $t('page.configure.preview'),
          icon: 'token-branded:tusd',
        },
        name: 'configure-preview',
        path: '/configure/preview',
        component: () => import('@/views/configure/preview/index.vue'),
      },
    ],
  },
];

export default routes;
