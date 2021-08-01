import {DefaultComponent} from 'types/common';

import {classNames} from 'utils';

type Props = DefaultComponent & {};

export const TableRow = (props: Props) => {
  const {children, className = ``, onClick} = props;

  return (
    <tr
      {...{onClick}}
      className={classNames(
        `hover:bg-green-50 transition-color ease-in-out duration-500`,
        className,
      )}>
      {children}
    </tr>
  );
};
