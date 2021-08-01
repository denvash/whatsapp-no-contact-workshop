import {ChatIcon, TrashIcon, PencilIcon} from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/solid';
import {TableRow, TableRowCell} from 'components/atoms';
import {Contact} from 'context/ContactsContext';
import {classNames} from 'utils';

export function ContactRow(props: Contact) {
  const {number, favorite, name, description} = props;
  return (
    <TableRow key={`${number.prefix}${number.number}`}>
      <TableRowCell className="px-6">
        <div
          className={classNames(
            favorite ? `text-yellow-400` : `text-gray-200`,
            `hover:text-yellow-300 cursor-pointer transition ease-in-out duration-700`,
          )}>
          <span className="sr-only">Points</span>
          <StarIcon className="h-5 w-5" />
        </div>
      </TableRowCell>
      <TableRowCell font="medium">{name}</TableRowCell>
      <TableRowCell>{description}</TableRowCell>
      <TableRowCell>{`${number.prefix}-${number.number}`}</TableRowCell>
      <TableRowCell className="flex gap-2">
        <ChatIcon className={iconClassName} />
        <PencilIcon className={iconClassName} />
        <TrashIcon className={iconClassName} />
      </TableRowCell>
    </TableRow>
  );
}

const iconClassName = `h-5 w-5 cursor-pointer hover:text-green-500 transition ease-in-out duration-700`;
