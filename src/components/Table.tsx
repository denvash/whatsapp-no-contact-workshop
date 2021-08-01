import {TableHeader, ColumnEntry} from '../components';
import {Person} from './ColumnEntry'

export function Table() {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <tbody className="bg-white divide-y divide-gray-200">
        <TableHeader />
        {people.map(person => <ColumnEntry person={person}/>)}
      </tbody>
    </table>
  );
}

const people: Array<Person> = [
  {
    id: 123,
    name: `Alister Dorsey`,
    number: {prefix: `054`, number: `5156478`},
    description: `Dolor sit amet`,
    favorite: true,
  },
  {
    id: 456,
    name: `Georgina Philip`,
    number: {prefix: `055`, number: `5158120`},
    description: `Suspendisse aliquam`,
    favorite: true,
  },
  {
    id: 897,
    name: `Terrell Derrick`,
    number: {prefix: `057`, number: `5472113`},
    description: `Curabitur sagittis`,
    favorite: false,
  },
];
