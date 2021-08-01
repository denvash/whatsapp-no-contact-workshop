import {DefaultComponent} from 'types/common';
import {classNames} from 'utils';

type FontType = `medium` | `normal`;

type Props = DefaultComponent & {
  font?: FontType;
  span?: number;
};

export const TableRowCell = (props: Props) => {
  const {
    children,
    font: textType = `normal`,
    className = ``,
    span = undefined,
  } = props;
  return (
    <td
      className={classNames(
        className,
        `pr-6 py-4 whitespace-nowrap text-sm`,
        FONT_TYPE[textType],
      )}
      colSpan={span}>
      {children}
    </td>
  );
};

const FONT_TYPE: {[key in FontType]: string} = {
  medium: `font-medium text-gray-900`,
  normal: `font-normal text-gray-500`,
};
