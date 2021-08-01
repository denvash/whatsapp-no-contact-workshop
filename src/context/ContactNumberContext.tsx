import {createContext} from 'react';
import {NoopFn} from 'utils';

export type ContactNumber = {
  prefix: string;
  number: string;
};

export type ContactNumberContextType = {
  contactNumber: ContactNumber;
  setContactNumber: React.Dispatch<React.SetStateAction<ContactNumber>>;
};

export const DEFAULT_CONTACT_NUMBER = {
  prefix: ``,
  number: ``,
};

export const ContactNumberContext = createContext<ContactNumberContextType>({
  contactNumber: DEFAULT_CONTACT_NUMBER,
  setContactNumber: NoopFn,
});
