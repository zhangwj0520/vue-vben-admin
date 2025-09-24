<script setup lang="ts">
import type { SupportedLanguagesType } from '@hj-fe/locales';

import { SUPPORT_LANGUAGES } from '@hj-fe/constants';
import { Languages } from '@hj-fe/icons';
import { loadLocaleMessages } from '@hj-fe/locales';
import { preferences, updatePreferences } from '@hj-fe/preferences';

import { VbenDropdownRadioMenu, VbenIconButton } from '@hj-fe-core/shadcn-ui';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string | undefined) {
  if (!value) return;
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div>
    <VbenDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <VbenIconButton>
        <Languages class="text-foreground size-4" />
      </VbenIconButton>
    </VbenDropdownRadioMenu>
  </div>
</template>
