import type { UserInfo } from '@hj-fe/types';

import { requestClient } from '@/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  return requestClient.get<UserInfo>('/user/info');
}
