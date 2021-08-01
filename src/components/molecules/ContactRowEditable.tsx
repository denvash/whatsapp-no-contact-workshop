import {Button, Input, TableRow, TableRowCell} from 'components/atoms';

type Props = {
  onSubmit: () => void;
};

export function ContactRowEditable(props: Props) {
  const {onSubmit} = props;
  return (
    <TableRow>
      <TableRowCell />
      <TableRowCell font="medium">
        <Input
          placeholder="Name"
          className="border border-gray-200 rounded-sm"
        />
      </TableRowCell>
      <TableRowCell>
        <Input
          placeholder="Description"
          className="border border-gray-200 rounded-sm"
        />
      </TableRowCell>
      <TableRowCell>
        <Input
          placeholder="Phone"
          className="border border-gray-200 rounded-sm"
        />
      </TableRowCell>
      <TableRowCell className="flex gap-2">
        <Button>Submit</Button>
      </TableRowCell>
    </TableRow>
  );
}
