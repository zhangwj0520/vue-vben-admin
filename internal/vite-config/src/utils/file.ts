import { existsSync, lstatSync } from 'node:fs';

// 判断路径是否存在
export const exists = (path: string) => {
  return existsSync(path);
};

export const isFile = (fileName: string) => {
  return lstatSync(fileName).isFile();
};
export const isDirectory = (fileName: string) => {
  const isExist = exists(fileName);
  if (isExist) {
    return lstatSync(fileName).isDirectory();
  }
  return false;
};
