// https://vitepress.dev/guide/custom-theme
import type { EnhanceAppContext, Theme } from 'vitepress';

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';
import DefaultTheme from 'vitepress/theme';

import { DemoPreview } from '../components';
import SiteLayout from './components/site-layout.vue';

import './styles';

import 'virtual:group-icons.css';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css';

export default {
  async enhanceApp(ctx: EnhanceAppContext) {
    const { app } = ctx;
    app.component('DemoPreview', DemoPreview);
    app.use(NolebaseGitChangelogPlugin);
  },
  extends: DefaultTheme,
  Layout: SiteLayout,
} satisfies Theme;
