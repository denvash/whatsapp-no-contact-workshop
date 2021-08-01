import {ContactNumberContext} from 'context';
import {useContext} from 'react';

export const useContactNumber = () => {
  const contactContext = useContext(ContactNumberContext);
  return contactContext;
};
