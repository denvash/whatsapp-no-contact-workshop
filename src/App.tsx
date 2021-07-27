import {StarIcon} from '@heroicons/react/solid';
import {Button} from 'components';
import {classNames} from './utils/common';

export function App() {
  return (
    <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-200 w-screen h-screen flex flex-col gap-8 justify-center items-center justify-items-center">
      <div className="w-full max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative rounded-2xl px-6 py-10 bg-green-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360">
              <path
                className="text-green-300 text-opacity-20"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-green-400 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="flex flex-col gap-4">
              <div className="sm:text-center flex flex-col gap-2">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  No Contact Whatsapp Message
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-green-200">
                  Lorem Ipsum
                </p>
              </div>
              <form
                action="#"
                className="sm:mx-auto sm:max-w-lg sm:flex flex-col gap-4">
                <div className="flex gap-2">
                  <div className="flex rounded-md shadow-sm flex-grow">
                    <input
                      className="inline-flex items-center px-3 rounded-l-md  border-r-0 bg-gray-50 text-gray-500 sm:text-sm w-16"
                      placeholder="054"
                    />
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300"
                      placeholder="5554321"
                    />
                  </div>
                  <Button type="submit" size="lg">
                    Send
                  </Button>
                </div>
                <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600 bg-white">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    id="message"
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                    placeholder="Hello there!"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Favorite</span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Number
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map(person => (
                    <tr
                      key={`${person.number.prefix}${person.number.number}`}
                      className="hover:bg-green-50 transition-color ease-in-out duration-500">
                      <td className="px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div
                          className={classNames(
                            person.favorite
                              ? `text-yellow-400`
                              : `text-gray-200`,
                            `hover:text-yellow-300 cursor-pointer transition ease-in-out duration-700`,
                          )}>
                          <span className="sr-only">Points</span>
                          <StarIcon className="h-5 w-5 " aria-hidden="true" />
                        </div>
                      </td>
                      <td className="pr-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {person.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {`${person.number.prefix}-${person.number.number}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <span className="relative z-0 inline-flex shadow-sm rounded-md">
                          <button
                            type="button"
                            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
                            Message
                          </button>
                          <button
                            type="button"
                            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
                            Edit
                          </button>
                          <button
                            type="button"
                            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
                            Remove
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const people = [
  {
    name: `Alister Dorsey`,
    number: {prefix: `054`, number: `5156478`},
    description: `Dolor sit amet`,
    favorite: true,
  },
  {
    name: `Georgina Philip`,
    number: {prefix: `055`, number: `5158120`},
    description: `Suspendisse aliquam`,
    favorite: true,
  },
  {
    name: `Terrell Derrick`,
    number: {prefix: `057`, number: `5472113`},
    description: `Curabitur sagittis`,
  },
  {
    name: `Tomas Chavez`,
    number: {prefix: `053`, number: `5144598`},
    description: `Duis feugiat`,
  },
  {
    name: `Fearne Mathis`,
    number: {prefix: `055`, number: `5567052`},
    description: `Quis ultrices`,
  },
];
