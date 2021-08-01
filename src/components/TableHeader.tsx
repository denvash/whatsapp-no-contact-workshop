const TABLE_COLUMNS = ['Name', 'Description', 'Number'];

export const TableHeader = () => (
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="relative px-6 py-3">
        <span className="sr-only">Favorite</span>
      </th>
      {TABLE_COLUMNS.map(column => (
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {column}
        </th>
      ))}
      <th scope="col" className="relative px-6 py-3">
        <span className="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
);
