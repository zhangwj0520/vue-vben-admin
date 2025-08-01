import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

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
          title: $t('demos.tdesign'),
          icon: 'token-branded:tusd',
        },
        name: 'TDesignDemos',
        path: '/demos/tdesign',
        component: () => import('#/views/demos/tdesign/index.vue'),
      },
      {
        meta: {
          title: $t('demos.vue-flow'),
          icon: 'ep:set-up',
        },
        name: 'vue-flow-1',
        path: '/demos/vue-flow',
        component: () => import('#/views/demos/vue-flow/index.vue'),
      },
      {
        meta: {
          title: $t('demos.vue-flow-demo'),
          icon: 'ep:set-up',
        },
        name: 'vue-flow-2',
        path: '/demos/vue-flow-2',
        component: () => import('#/views/demos/vue-flow-demo/index.vue'),
      },
      {
        meta: {
          title: $t('demos.vue-flow-darg'),
          icon: 'tdesign:drag-move',
        },
        name: 'vue-flow-3',
        path: '/demos/vue-flow-4',
        component: () => import('#/views/demos/vue-flow-drag/index.vue'),
      },
      // {
      //   meta: {
      //     title: $t('demos.table'),
      //   },
      //   name: 'Table',
      //   path: '/demos/table',
      //   component: () => import('#/views/demos/table/index.vue'),
      // },
      // {
      //   meta: {
      //     title: $t('demos.form'),
      //   },
      //   name: 'Form',
      //   path: '/demos/form',
      //   component: () => import('#/views/demos/form/basic.vue'),
      // },
      {
        meta: {
          title: $t('demos.icons'),
        },
        name: 'Icons',
        path: '/demos/icon',
        component: () => import('#/views/demos/icons/index.vue'),
      },
    ],
  },
];

export default routes;
