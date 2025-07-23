<script lang="ts" setup>
import type { NotificationThemeList } from 'tdesign-vue-next';

import { Page } from '@vben/common-ui';

import { MessagePlugin, NotifyPlugin } from 'tdesign-vue-next';

// const notification = useNotification();

// const message = useMessage();
function error() {
  MessagePlugin.error('Once upon a time you dressed so fine');
}

function warning() {
  MessagePlugin.warning('How many roads must a man walk down');
}
function success() {
  MessagePlugin.success(
    'Cause you walked hand in hand With another man in my place',
  );
}
function loading() {
  MessagePlugin.loading(
    'If I were you, I will realize that I love you more than any other guy',
  );
}

function notify(type: NotificationThemeList) {
  NotifyPlugin(type, {
    title: '标题',
    content: '用户表示操作引起一定后果',
    closeBtn: true,
  });
}
</script>

<template>
  <Page
    description="支持多语言，主题功能集成切换等"
    title="TDesign 组件使用演示"
  >
    <t-space direction="vertical">
      <t-card
        title="按钮"
        :bordered="false"
        hover-shadow
        :style="{ width: '800px' }"
      >
        <t-space direction="vertical">
          <t-space>
            <t-button theme="default">填充按钮</t-button>
            <t-button variant="outline" theme="default">描边按钮</t-button>
            <t-button variant="dashed" theme="default">虚框按钮</t-button>
            <t-button variant="text" theme="default">文字按钮</t-button>
          </t-space>
          <t-space>
            <t-button theme="primary">填充按钮</t-button>
            <t-button variant="outline" theme="primary">描边按钮</t-button>
            <t-button variant="dashed" theme="primary">虚框按钮</t-button>
            <t-button variant="text" theme="primary">文字按钮</t-button>
          </t-space>
          <t-space>
            <t-button theme="danger">填充按钮</t-button>
            <t-button variant="outline" theme="danger">描边按钮</t-button>
            <t-button variant="dashed" theme="danger">虚框按钮</t-button>
            <t-button variant="text" theme="danger">文字按钮</t-button>
          </t-space>
          <t-space>
            <t-button theme="warning">填充按钮</t-button>
            <t-button variant="outline" theme="warning">描边按钮</t-button>
            <t-button variant="dashed" theme="warning">虚框按钮</t-button>
            <t-button variant="text" theme="warning">文字按钮</t-button>
          </t-space>
          <t-space>
            <t-button theme="success">填充按钮</t-button>
            <t-button variant="outline" theme="success">描边按钮</t-button>
            <t-button variant="dashed" theme="success">虚框按钮</t-button>
            <t-button variant="text" theme="success">文字按钮</t-button>
          </t-space>
        </t-space>
      </t-card>
      <t-card title="Message" :bordered="false" hover-shadow>
        <t-space>
          <t-button theme="danger" @click="error"> 错误 </t-button>
          <t-button theme="warning" @click="warning"> 警告 </t-button>
          <t-button theme="success" @click="success"> 成功 </t-button>
          <t-button theme="primary" @click="loading"> 加载中 </t-button>
        </t-space>
      </t-card>
      <t-card title="Notification" :bordered="false" hover-shadow>
        <t-space>
          <t-button theme="danger" @click="notify('error')"> 错误 </t-button>
          <t-button theme="warning" @click="notify('warning')"> 警告 </t-button>
          <t-button theme="success" @click="notify('success')"> 成功 </t-button>
          <t-button theme="primary" @click="notify('info')"> 加载中 </t-button>
        </t-space>
      </t-card>
      <t-card title="日期选择" :bordered="false" hover-shadow>
        <t-date-range-picker />
      </t-card>
    </t-space>
  </Page>
</template>
