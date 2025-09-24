import type {
  VbenFormSchema as FormSchema,
  VbenFormProps,
} from '@hj-fe/common-ui';

import type { ComponentType } from './component';

import { setupVbenForm, useVbenForm as useForm, z } from '@hj-fe/common-ui';
import { $t } from '@hj-fe/locales';

async function initSetupVbenForm() {
  setupVbenForm<ComponentType>({
    config: {
      modelPropNameMap: {
        Upload: 'fileList',
        CheckboxGroup: 'model-value',
      },
    },
    defineRules: {
      required: (value, _params, ctx) => {
        if (value === undefined || value === null || value.length === 0) {
          return $t('ui.formRules.required', [ctx.label]);
        }
        return true;
      },
      selectRequired: (value, _params, ctx) => {
        if (value === undefined || value === null) {
          return $t('ui.formRules.selectRequired', [ctx.label]);
        }
        return true;
      },
    },
  });
}

const useVbenForm = useForm<ComponentType>;

export { initSetupVbenForm, useVbenForm, z };

export type VbenFormSchema = FormSchema<ComponentType>;
export type { VbenFormProps };
