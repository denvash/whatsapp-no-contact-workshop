import {useReducer} from 'react';
import {NoopType} from 'types/common';
import {toggleFn} from 'utils';

type HookReturn = [boolean, NoopType];

export const useToggle = (initial = false): HookReturn => {
  const stateRecord = useReducer(toggleFn, initial);
  return stateRecord;
};
