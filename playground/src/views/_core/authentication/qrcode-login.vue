<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@hj-fe/common-ui';
import { LOGIN_PATH } from '@hj-fe/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
