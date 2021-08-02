import {ContactRow} from 'components';
import {useContactNumber, useContacts} from 'hooks';
import {Button, TableHeaderCell, TableRow, TableRowCell} from '../atoms';
import {ContactRowEditable} from 'components/molecules';
import {Contact, DEFAULT_CONTACT_NUMBER} from 'context';
import {useState} from 'react';

export function ContactTable() {
  const {contacts, setContacts} = useContacts();
  const {setContactNumber} = useContactNumber();
  const [isAddContactView, setIsAddContactView] = useState(false);

  const onSubmit = (contact: Contact) => {
    setContacts(prevContacts =>
      prevContacts ? [...prevContacts, contact] : prevContacts,
    );
  };

  const onFavorite = (id: number) => {
    const favoriteIndex = contacts.findIndex(contact => contact.id === id);
    const favoriteContact = contacts[favoriteIndex];

    const newContacts = Object.assign([...contacts], {
      [favoriteIndex]: {
        ...favoriteContact,
        isFavorite: !favoriteContact.isFavorite,
      },
    });

    const newSorted = newContacts.sort((a, b) => {
      return Number(b.isFavorite) - Number(a.isFavorite);
    });

    setContacts(newSorted);
  };

  const onRemove = (id: number) => {
    setContacts(prevContacts =>
      prevContacts
        ? prevContacts.filter(contact => contact.id !== id)
        : prevContacts,
    );
  };

  const onMessage = (id: number) => {
    const targetContact = contacts.find(contact => contact.id === id);
    setContactNumber(targetContact?.number ?? DEFAULT_CONTACT_NUMBER);
  };

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
                {contacts.map(contact => {
                  return (
                    <ContactRow
                      key={contact.id}
                      {...contact}
                      onFavorite={() => onFavorite(contact.id)}
                      onRemove={() => onRemove(contact.id)}
                      onMessage={() => onMessage(contact.id)}
                    />
                  );
                })}
                {isAddContactView && (
                  <ContactRowEditable
                    onSubmit={onSubmit}
                    onCancel={() => setIsAddContactView(false)}
                  />
                )}
                {!isAddContactView && (
                  <TableRow>
                    <TableRowCell className="text-center" span={5}>
                      <Button
                        use="secondary"
                        type="button"
                        onClick={() => setIsAddContactView(true)}>
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
