import { writeFileSync } from 'node:fs';

import {
  cleanupSVG,
  importDirectorySync,
  parseColors,
  runSVGO,
} from '@iconify/tools';

const generateDataSet = async (dirPath: string, prefix?: string) => {
  const customSet = importDirectorySync(dirPath, {
    prefix: prefix || '',
  });

  customSet.forEachSync((name: string, type: string) => {
    if (type !== 'icon') {
      return;
    }

    const svg = customSet.toSVG(name);
    if (!svg) {
      customSet.remove(name);
      return;
    }

    try {
      cleanupSVG(svg);

      // This is a monotone icon, change color to `currentColor`, add it if missing
      // Skip this step if icons have palette
      parseColors(svg, {
        defaultColor: 'currentColor',
        // callback: (attr, colorStr, color) => {
        //   return !color || isEmptyColor(color) ? colorStr : 'currentColor'
        // },
      });

      // Optimise icon
      runSVGO(svg);
    } catch (error) {
      // Something went wrong when parsing icon: remove it
      console.error(`Error parsing ${name}:`, error);
      customSet.remove(name);
      return;
    }

    // Update icon in icon set from SVG object
    customSet.fromSVG(name, svg);
  });
  const dataSet = await customSet.export();
  writeFileSync(`${dirPath}/custom.json`, JSON.stringify(dataSet));
};

export default generateDataSet;
// importSvg('./src/assets/icons')
