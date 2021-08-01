import {ContactMessage, ContactTable} from 'components';
import {
  Contact,
  ContactNumber,
  ContactNumberContext,
  ContactsContext,
  DEFAULT_CONTACTS,
  DEFAULT_CONTACT_NUMBER,
} from 'context';
import {useState} from 'react';

export function App() {
  const [contactNumber, setContactNumber] = useState<ContactNumber>(
    DEFAULT_CONTACT_NUMBER,
  );

  const [contacts, setContacts] =
    useState<ReadonlyArray<Contact>>(DEFAULT_CONTACTS);

  return (
    <ContactNumberContext.Provider value={{contactNumber, setContactNumber}}>
      <ContactsContext.Provider value={{contacts, setContacts}}>
        <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-200 w-screen h-screen flex flex-col gap-8 justify-center items-center justify-items-center">
          <ContactMessage />
          <ContactTable />
        </div>
      </ContactsContext.Provider>
    </ContactNumberContext.Provider>
  );
}
