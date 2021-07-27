import {IS_WINDOW_DEFINED, safeParserJson} from './common';
import {isTrueString, stringify} from './string';

export const setLocalStorageItem = (key: string, item: unknown): void => {
  if (IS_WINDOW_DEFINED) {
    window.localStorage.setItem(key, stringify(item));
  }
};

export const removeLocalStorageItem = (key: string): void => {
  if (IS_WINDOW_DEFINED) {
    window.localStorage.removeItem(key);
  }
};

export const getLocalStorageItem = (
  item: string,
): string | null | undefined => {
  if (IS_WINDOW_DEFINED) {
    return safeParserJson(window.localStorage.getItem(item));
  }
};

export const getBooleanLocalStorageItem = (str: string): boolean => {
  const storageItem = getLocalStorageItem(str);
  if (storageItem == null) {
    return false;
  }
  return isTrueString(storageItem) || !storageItem ? true : false;
};
