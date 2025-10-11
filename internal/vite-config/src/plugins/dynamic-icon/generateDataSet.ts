/* eslint-disable unicorn/text-encoding-identifier-case */
import type { IconifyJSON } from '@iconify/types';

import fs from 'node:fs';
import { join } from 'node:path';

import {
  cleanupIconKeyword,
  cleanupSVG,
  importDirectorySync,
  parseColors,
  runSVGO,
} from '@iconify/tools';

const generateDataSet = async (dirPath: string, prefix?: string) => {
  const customSet = importDirectorySync(dirPath, {
    prefix: prefix || '',
    keyword: (item) => cleanupIconKeyword(item.subdir + item.file),
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
        //   return !color || isEmptyColor(color) ? colorStr : 'currentColor';
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

    customSet.fromSVG(name, svg);
  });
  const newCollection = await customSet.export();

  const outFile = join(process.cwd(), 'src/assets/iconset', `${prefix}.json`);

  let shouldWrite = true;

  if (fs.existsSync(outFile)) {
    try {
      const oldContent = JSON.parse(
        fs.readFileSync(outFile, 'utf8'),
      ) as IconifyJSON;
      if (oldContent.lastModified === newCollection.lastModified) {
        shouldWrite = false;
        // console.log(`Iconify collection unchanged: skip writing ${outFile}`);
      }
    } catch {
      // 文件损坏或不是合法 JSON，就继续写入
      shouldWrite = true;
    }
  }

  if (shouldWrite) {
    fs.writeFileSync(outFile, JSON.stringify(newCollection, null, 2), 'utf-8');
    // console.log(`Iconify collection updated: ${outFile}`);
  }

  // writeFileSync(outFile, JSON.stringify(dataSet));
};

export default generateDataSet;
