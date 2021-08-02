import {safeParserJson} from './common';
import {isTrueString, stringify} from './string';

export const setLocalStorageItem = (key: string, item: unknown): void => {
  window.localStorage.setItem(key, stringify(item));
};

export const removeLocalStorageItem = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const getLocalStorageItem = (
  item: string,
): string | null | undefined => {
  return safeParserJson(window.localStorage.getItem(item));
};

export const getBooleanLocalStorageItem = (str: string): boolean => {
  const storageItem = getLocalStorageItem(str);
  if (storageItem == null) {
    return false;
  }
  return isTrueString(storageItem) || !storageItem ? true : false;
};
