# 图标

::: tip 关于图标的管理

- 项目的图标主要由`@hj-fe/icons`包提供，建议统一在该包内部管理，以便于统一管理和维护。
- 如果你使用的是 `Vscode`，推荐安装 [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 插件，可以方便的查找和使用图标。

:::

项目中有以下多种图标使用方式，可以根据实际情况选择使用：

## 图标来源

### 1. Iconify 图标

集成了 [iconify](https://github.com/iconify/iconify) 图标库，自动导入

### 2. Svg文件 图标

可在 `apps/xxx/src/assets/` 目录下新增svg图标文件：

## 使用

### 1. Iconify组件方式

```vue
<script setup lang="ts">
import { HjIcon } from '@hj-fe/icons';
</script>

<template>
  <HjIcon icon="vscode-icons--file-type-tailwind" class="text-8xl" />
</template>
```

### 2. Tailwind CSS方式

直接添加 Tailwind CSS 的图标类名即可使用

```vue
<span class="icon-[mdi--ab-testing]"></span>
<span class="icon-[custom--play] text-8xl"></span>
```

::: tip svg单文件组件组件方式

- 支持将svg放在 `apps/xxx/src/assets/` 目录下的文件，直接转换成组件。
- 因方式不支持文件子路径，目前已经注释该方式，后续有需要再调整vite配置

:::
