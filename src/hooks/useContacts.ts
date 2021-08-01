import {ContactsContext} from 'context';
import {useContext} from 'react';

export const useContacts = () => {
  const contactsContext = useContext(ContactsContext);
  return contactsContext;
};
