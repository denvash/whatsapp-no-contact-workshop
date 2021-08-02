import {ChatIcon, TrashIcon} from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/solid';
import {TableRow, TableRowCell} from 'components/atoms';
import {Contact} from 'context/ContactsContext';
import {classNames} from 'utils';

type Props = Contact & {
  onFavorite: () => void;
  onRemove: () => void;
  onMessage: () => void;
};

export function ContactRow(props: Props) {
  const {
    number,
    isFavorite,
    name,
    description,
    onFavorite,
    onRemove,
    onMessage,
  } = props;

  return (
    <TableRow key={`${number.prefix}${number.number}`}>
      <TableRowCell className="px-6">
        <StarIcon
          className={classNames(
            isFavorite ? `text-yellow-400` : `text-gray-200`,
            `hover:text-yellow-300 cursor-pointer transition ease-in-out duration-700 h-5 w-5`,
          )}
          onClick={onFavorite}
        />
      </TableRowCell>
      <TableRowCell font="medium">{name}</TableRowCell>
      <TableRowCell>
        <div className="w-64">{description}</div>
      </TableRowCell>
      <TableRowCell>{`${number.prefix}-${number.number}`}</TableRowCell>
      <TableRowCell className="flex gap-2">
        <ChatIcon className={iconClassName} onClick={onMessage} />
        <TrashIcon className={iconClassName} onClick={onRemove} />
      </TableRowCell>
    </TableRow>
  );
}

const iconClassName = `h-5 w-5 cursor-pointer hover:text-green-500 transition ease-in-out duration-700`;
