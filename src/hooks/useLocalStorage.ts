import {
  removeLocalStorageItem,
  safeParserJson,
  setLocalStorageItem,
} from 'utils';
import {useEffect, useState} from 'react';

export type DiffFn<T> = React.Dispatch<React.SetStateAction<T | null>>;
export type ReturnType<T> = [T | null, DiffFn<T>];

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): ReturnType<T> => {
  const [value, setValue] = useState<T | null>(() => {
    const parsed = safeParserJson(window.localStorage.getItem(key));
    return parsed ?? initialValue;
  });

  useEffect(() => {
    value ? setLocalStorageItem(key, value) : removeLocalStorageItem(key);
  }, [key, value]);

  return [value, setValue];
};
