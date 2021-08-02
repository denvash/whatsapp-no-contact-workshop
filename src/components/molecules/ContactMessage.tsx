import {useContactNumber} from 'hooks/useContactNumber';
import {SyntheticEvent, useCallback, useState} from 'react';
import {Button} from '../atoms';
import {InputGroup} from './InputGroup';

export function ContactMessage() {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const {contactNumber, setContactNumber} = useContactNumber();

  const handleMessageChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value);
  };

  const whatsappHref = `${WHATSAPP_API_SEND_IL_NUMBER}${contactNumber.prefix}${
    contactNumber.number
  }?text=${encodeURI(message ?? '')}`;

  const onChangePrefix = useCallback(
    (value: string) => {
      setContactNumber(prevState => ({
        ...prevState,
        prefix: value,
      }));
    },
    [setContactNumber],
  );

  const onChangeNumber = useCallback(
    (value: string) => {
      setContactNumber(prevState => ({
        ...prevState,
        number: value,
      }));
    },
    [setContactNumber],
  );

  return (
    <form action="#" className="sm:mx-auto sm:max-w-lg sm:flex flex-col gap-2">
      <div className="flex gap-2">
        <InputGroup
          prefixProps={{
            value: contactNumber.prefix,
            onChange: onChangePrefix,
            placeholder: `054`,
            maxLength: 3,
          }}
          value={contactNumber.number}
          onChange={onChangeNumber}
          placeholder="5554123"
          maxLength={7}
        />
        <Button size="lg" href={whatsappHref} target="_blank">
          Send
        </Button>
      </div>
      <div className="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600 bg-white">
        <label
          htmlFor="message"
          className="block text-xs font-medium text-gray-900">
          Message
        </label>
        <textarea
          rows={5}
          name="message"
          id="message"
          value={message}
          onChange={handleMessageChange}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
          placeholder="Insert your message"
        />
      </div>
    </form>
  );
}

const DEFAULT_MESSAGE = ``;
const WHATSAPP_API_SEND_IL_NUMBER = `https://wa.me/972`;
