import {StarIcon} from '@heroicons/react/solid';

import {classNames} from '../utils/common';

export type PersonNumber = {
  prefix: string;
  number: string;
};

export type Person = {
  id: number;
  name: string;
  number: PersonNumber;
  favorite: boolean;
  description: string;
};

export function ColumnEntry({person}: {person: Person}) {
  const {number, favorite, name, description} = person;
  return (
    <tr
      key={`${number.prefix}${number.number}`}
      className="hover:bg-green-50 transition-color ease-in-out duration-500">
      <td className="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
        <div
          className={classNames(
            favorite ? `text-yellow-400` : `text-gray-200`,
            `hover:text-yellow-300 cursor-pointer transition ease-in-out duration-700`,
          )}>
          <span className="sr-only">Points</span>
          <StarIcon className="h-5 w-5 " aria-hidden="true" />
        </div>
      </td>
      <td className="pr-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {`${number.prefix}-${number.number}`}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700
             hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
            Message
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700
             hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
            Remove
          </button>
        </span>
      </td>
    </tr>
  );
}
