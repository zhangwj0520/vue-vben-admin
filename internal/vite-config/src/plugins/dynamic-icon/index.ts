import type { Plugin } from 'vite';

import { isDirectory } from '../../utils/file';
import generateDataSet from './generateDataSet';

interface IIconSetPluginProps {
  path: string;
  prefix?: string;
}
function addIconSetPlugin(list: IIconSetPluginProps[]): Plugin {
  return {
    name: 'vite-plugin-add-icon-set',
    configureServer(server) {
      list.forEach(async (item) => {
        const { path, prefix } = item;
        if (!isDirectory(path)) {
          console.error(`The path ${path} is not a directory`);
          return;
        }
        const watcher = server.watcher;
        watcher.add(path);
        // watcher.unwatch(`${path}/custom.json`);
        // 监听文件添加
        // watcher.on('all', () => {
        //   generateDataSet(path, prefix);
        // });
        watcher.on('add', () => {
          generateDataSet(path, prefix);
        });
        watcher.on('unlink', () => {
          generateDataSet(path, prefix);
        });
      });

      // useWatcher(server.watcher)
    },
  };
}

export default addIconSetPlugin;
