import {DefaultComponent} from 'types/common';

type Props = DefaultComponent & {
  isHidden?: boolean;
};

export const TableHeaderCell = (props: Props) => {
  const {children, isHidden} = props;
  return isHidden ? (
    <th scope="col" className="relative px-6 py-3">
      <span className="sr-only">{children}</span>
    </th>
  ) : (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
};
