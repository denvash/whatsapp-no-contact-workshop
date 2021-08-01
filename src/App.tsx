import {ContactMessageLayout, ContactTable} from 'components';
import {
  ContactNumber,
  ContactNumberContext,
  ContactsContext,
  DEFAULT_CONTACTS,
  DEFAULT_CONTACT_NUMBER,
} from 'context';
import {useLocalStorage} from 'hooks/useLocalStorage';
import {useMemo, useState} from 'react';

export function App() {
  const [contactNumber, setContactNumber] = useState<ContactNumber>(
    DEFAULT_CONTACT_NUMBER,
  );

  const [contacts, setContacts] = useLocalStorage(
    CONTACTS_LOCAL_STORAGE_KEY,
    DEFAULT_CONTACTS,
  );

  const contactNumberContext = useMemo(
    () => ({
      contactNumber,
      setContactNumber,
    }),
    [contactNumber],
  );

  const contactsContext = useMemo(
    () => ({contacts: contacts ?? DEFAULT_CONTACTS, setContacts}),
    [contacts, setContacts],
  );

  return (
    <ContactNumberContext.Provider value={contactNumberContext}>
      <ContactsContext.Provider value={contactsContext}>
        <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-200 w-screen h-screen flex flex-col gap-8 justify-center items-center justify-items-center">
          <ContactMessageLayout />
          <ContactTable />
        </div>
      </ContactsContext.Provider>
    </ContactNumberContext.Provider>
  );
}

const CONTACTS_LOCAL_STORAGE_KEY = `contacts`;
