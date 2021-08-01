import {ReactElement} from 'react';
import {DefaultComponent} from 'types/common';
import {classNames, NoopFn} from 'utils';

type ButtonUse = `primary` | `secondary` | `destructive`;
type ButtonSize = `xs` | `sm` | `md` | `lg`;
type ButtonType = `button` | `submit`;

type ButtonProps = DefaultComponent & {
  size?: ButtonSize;
  type?: ButtonType;
  use?: ButtonUse;
  href?: string;
};

const BUTTON_SIZE: {[key in ButtonSize]: string} = {
  lg: `text-base sm:px-10 py-3`,
  md: `text-base px-4 py-2`,
  sm: `text-sm px-3 py-2 leading-4`,
  xs: `text-xs px-2.5 py-1.5`,
};

const BUTTON_COLOR: {[key in ButtonUse]: string} = {
  destructive: `text-white bg-red-600 hover:bg-red-700`,
  primary: `text-white bg-green-400 hover:bg-green-300 `,
  secondary: ``,
};

export const Button = (props: ButtonProps): ReactElement => {
  const {
    className = ``,
    children,
    use = `primary`,
    size = `xs`,
    type = `button`,
    href = ``,
    onClick = NoopFn,
  } = props;
  return (
    <a
      {...{onClick, type, href}}
      target="_blank"
      className={classNames(
        `inline-flex items-center border border-transparent font-medium bg-opacity-100 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 justify-center`,
        BUTTON_SIZE[size],
        BUTTON_COLOR[use],
        className,
      )}>
      {children}
    </a>
  );
};
