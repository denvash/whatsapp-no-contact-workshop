import {
  IS_WINDOW_DEFINED,
  removeLocalStorageItem,
  safeParserJson,
  setLocalStorageItem,
  stringify,
} from 'utils';
import {useCallback, useEffect, useState} from 'react';
import isEqual from 'lodash.isequal';

type DiffFn<T> = (newValue: T | null) => void;
type ReturnType<T> = [T | null, DiffFn<T>];

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): ReturnType<T> => {
  const [value, setValue] = useState<T | null>(
    IS_WINDOW_DEFINED
      ? safeParserJson(window.localStorage.getItem(key))
      : stringify(initialValue),
  );

  useEffect(() => {
    value ? setLocalStorageItem(key, value) : removeLocalStorageItem(key);
  }, [key, value]);

  const diffSetValue: DiffFn<T> = useCallback(
    (newValue: T | null) => {
      if (!isEqual(newValue, value)) {
        setValue(newValue);
      }
    },
    [value],
  );

  return [value, diffSetValue];
};
