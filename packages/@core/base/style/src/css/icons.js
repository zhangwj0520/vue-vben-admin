import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
  plugins: [
    addDynamicIconSelectors({
      iconSets: {
        custom: 'src/assets/svg-icons/custom.json',
      },
    }),
  ],
};
