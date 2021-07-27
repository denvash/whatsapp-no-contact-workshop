import {DefaultComponent} from '$types/common';
import {NoopFn, classNames} from '@utils';
import {ReactElement} from 'react';

type ButtonUse = `primary` | `secondary` | `destructive`;
type ButtonSize = `xs` | `sm` | `md`;
type ButtonType = `button` | `submit`;

type ButtonProps = DefaultComponent & {
  size?: ButtonSize;
  type?: ButtonType;
  use?: ButtonUse;
};

const BUTTON_SIZE: {[key in ButtonSize]: string} = {
  md: `text-base px-4 py-2`,
  sm: `text-sm px-3 py-2 leading-4`,
  xs: `text-xs px-2.5 py-1.5`,
};

const BUTTON_COLOR: {[key in ButtonUse]: string} = {
  destructive: `text-white bg-red-600 hover:bg-red-700`,
  primary: `text-white bg-indigo-600 hover:bg-indigo-700`,
  secondary: ``,
};

export const Button = (props: ButtonProps): ReactElement => {
  const {
    className = ``,
    children,
    use = `primary`,
    size = `xs`,
    type = `button`,
    onClick = NoopFn,
  } = props;
  return (
    <button
      {...{onClick, type}}
      className={classNames(
        `inline-flex items-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-center`,
        BUTTON_SIZE[size],
        BUTTON_COLOR[use],
        className,
      )}>
      {children}
    </button>
  );
};
