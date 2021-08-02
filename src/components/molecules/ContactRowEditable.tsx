import {CheckCircleIcon, XCircleIcon} from '@heroicons/react/outline';
import {Input, TableRow, TableRowCell} from 'components/atoms';
import {Contact} from 'context';
import {useContactNumber, useContacts} from 'hooks';
import {useCallback, useState} from 'react';
import {classNames} from 'utils';
import {InputGroup} from './InputGroup';

type Props = {
  onSubmit: (arg: Contact) => void;
  onCancel: () => void;
};

export function ContactRowEditable(props: Props) {
  const {onSubmit, onCancel} = props;

  const {contactNumber} = useContactNumber();
  const {contacts} = useContacts();
  const [$contactNumber, $setContactNumber] = useState(contactNumber);
  const [contactName, setContactName] = useState(DEFAULT_EMPTY);
  const [contactDescription, setContactDescription] = useState(DEFAULT_EMPTY);

  const onPrefixChange = useCallback((value: string) => {
    $setContactNumber(prevContact => ({
      ...prevContact,
      prefix: value,
    }));
  }, []);

  const onNumberChange = useCallback((value: string) => {
    $setContactNumber(prevContact => ({
      ...prevContact,
      number: value,
    }));
  }, []);

  const $onSubmit = () => {
    onSubmit({
      id: contacts.length,
      description: contactDescription,
      isFavorite: false,
      name: contactName,
      number: $contactNumber,
    });
  };

  return (
    <TableRow>
      <TableRowCell />
      <TableRowCell font="medium">
        <Input
          placeholder="Name"
          className="border border-gray-200 rounded-md"
          value={contactName}
          onChange={setContactName}
        />
      </TableRowCell>
      <TableRowCell>
        <Input
          placeholder="Description"
          className="border border-gray-200 rounded-md w-64"
          value={contactDescription}
          onChange={setContactDescription}
        />
      </TableRowCell>
      <TableRowCell>
        <InputGroup
          className="border border-gray-200 rounded-md"
          prefixProps={{
            placeholder: `054`,
            value: $contactNumber.prefix,
            onChange: onPrefixChange,
            maxLength: 3,
          }}
          value={$contactNumber.number}
          onChange={onNumberChange}
          placeholder="5554120"
          maxLength={7}
        />
      </TableRowCell>
      <TableRowCell>
        <div className="flex gap-2">
          <CheckCircleIcon
            className={classNames(styleIcon, `hover:text-green-500`)}
            onClick={$onSubmit}
          />
          <XCircleIcon
            className={classNames(styleIcon, `hover:text-red-500`)}
            onClick={onCancel}
          />
        </div>
      </TableRowCell>
    </TableRow>
  );
}

const styleIcon = `h-5 w-5 transition-color ease-in-out duration-500 cursor-pointer`;
const DEFAULT_EMPTY = ``;
