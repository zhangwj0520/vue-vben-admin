import type { RouteRecordRaw } from 'vue-router';

import { $t } from '@/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('demos.title'),
    },
    name: 'Demos',
    path: '/demos',
    children: [
      {
        meta: {
          title: $t('demos.elementPlus'),
        },
        name: 'NaiveDemos',
        path: '/demos/element',
        component: () => import('@/views/demos/element/index.vue'),
      },
      {
        meta: {
          title: $t('demos.form'),
        },
        name: 'BasicForm',
        path: '/demos/form',
        component: () => import('@/views/demos/form/basic.vue'),
      },
      {
        meta: {
          title: $t('demos.icons'),
          icon: 'mdi:abjad-hebrew',
        },
        name: 'Icons',
        path: '/demos/icon',
        component: () => import('@/views/demos/icons/index.vue'),
      },
    ],
  },
];

export default routes;
