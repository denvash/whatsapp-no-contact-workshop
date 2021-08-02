import {DiffFn} from 'hooks/useLocalStorage';
import {createContext} from 'react';
import {NoopFn} from 'utils';
import {ContactNumber} from './ContactNumberContext';

export type Contact = {
  description: string;
  isFavorite: boolean;
  id: number;
  name: string;
  number: ContactNumber;
};

type ContactsContextType = {
  contacts: Contact[];
  setContacts: DiffFn<Contact[]>;
};

export const DEFAULT_CONTACTS: Contact[] = [
  {
    id: -1,
    name: `Alister Dorsey`,
    number: {prefix: `054`, number: `5156478`},
    description: `Dolor sit amet`,
    isFavorite: true,
  },
  {
    id: -2,
    name: `Georgina Philip`,
    number: {prefix: `055`, number: `5158120`},
    description: `Suspendisse aliquam`,
    isFavorite: true,
  },
  {
    id: -3,
    name: `Terrell Derrick`,
    number: {prefix: `057`, number: `5472113`},
    description: `Curabitur sagittis`,
    isFavorite: false,
  },
];

export const ContactsContext = createContext<ContactsContextType>({
  contacts: DEFAULT_CONTACTS,
  setContacts: NoopFn,
});
