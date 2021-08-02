import {useCallback, useEffect, useState} from 'react';
import {classNames, NoopFn} from 'utils';

type InputProps = {
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
  maxLength?: number;
};

export const Input = ({
  className = ``,
  innerRef,
  onChange = NoopFn,
  value = ``,
  maxLength = Infinity,
  ...props
}: InputProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState(value);
  const $onChange = useCallback(
    ({currentTarget: {value}}) => {
      if (value.length <= maxLength) {
        setInputValue(value);
      }
    },
    [maxLength],
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
