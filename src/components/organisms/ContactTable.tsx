import {ContactRow} from 'components';
import {useContacts} from 'hooks';
import {Button, TableHeaderCell, TableRow, TableRowCell} from '../atoms';
import {DocumentAddIcon} from '@heroicons/react/outline';
import {useToggle} from 'hooks/useToggle';
import {ContactRowEditable} from 'components/molecules';

export function ContactTable() {
  const {contacts} = useContacts();
  const [isAddContact, toggleIsAddContact] = useToggle(false);
  return (
    <div className="flex flex-col ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <TableRow>
                  <TableHeaderCell isHidden>Favorite</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Description</TableHeaderCell>
                  <TableHeaderCell>Phone</TableHeaderCell>
                  <TableHeaderCell isHidden>Edit</TableHeaderCell>
                </TableRow>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contacts.map(contact => (
                  <ContactRow key={contact.id} {...contact} />
                ))}
                {isAddContact && <ContactRowEditable onSubmit={() => {}} />}
                {!isAddContact && (
                  <TableRow>
                    <TableRowCell className="text-center" span={5}>
                      <Button
                        use="secondary"
                        type="button"
                        onClick={toggleIsAddContact}>
                        Add New Contact
                      </Button>
                    </TableRowCell>
                  </TableRow>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
