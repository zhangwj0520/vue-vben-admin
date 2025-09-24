# @hj-fe/types

用于多个 `app` 公用的工具类型，继承了 `@hj-fe-core/typings` 的所有能力。业务上有通用的类型定义可以放在这里。

## 用法

### 添加依赖

```bash
# 进入目标应用目录，例如 apps/xxxx-app
# cd apps/xxxx-app
pnpm add @hj-fe/types
```

### 使用

```ts
// 推荐加上 type
import type { SelectOption } from '@hj-fe/types';
```
