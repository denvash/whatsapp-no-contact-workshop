import {createContext} from 'react';
import {NoopFn} from 'utils';
import {ContactNumber} from './ContactNumberContext';

export type Contact = {
  description: string;
  favorite: boolean;
  id: number;
  name: string;
  number: ContactNumber;
};

type ContactsContextType = {
  contacts: readonly Contact[];
  setContacts: React.Dispatch<React.SetStateAction<readonly Contact[]>>;
};

export const DEFAULT_CONTACTS: readonly Contact[] = [
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

export const ContactsContext = createContext<ContactsContextType>({
  contacts: DEFAULT_CONTACTS,
  setContacts: NoopFn,
});
