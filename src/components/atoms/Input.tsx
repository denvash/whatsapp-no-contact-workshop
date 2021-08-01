import {useCallback, useEffect, useState} from 'react';
import {classNames, NoopFn} from 'utils';

type InputProps<T> = {
  className?: string;
  innerRef?: {current: null | HTMLInputElement};
  onBlur?: () => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  role?: string;
  type?: string;
  value?: string;
  name?: string;
};

export const Input = <T extends unknown>({
  className = ``,
  innerRef,
  onChange = NoopFn,
  value = ``,
  ...props
}: InputProps<T>): React.ReactElement => {
  const [inputValue, setInputValue] = useState(value);
  const $onChange = useCallback(
    ({currentTarget: {value}}) => setInputValue(value),
    [],
  );

  useEffect(() => {
    onChange(inputValue);
  }, [onChange, inputValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <input
      {...{...props}}
      className={classNames(`px-3 py-2`, className)}
      ref={innerRef}
      onChange={$onChange}
      value={inputValue}
    />
  );
};
