import {ContactNumber, DEFAULT_CONTACT_NUMBER} from 'context';
import {useContactNumber} from 'hooks/useContactNumber';
import {SyntheticEvent, useState} from 'react';
import {Button} from '../atoms';

type InputEventType = SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>;

export function MessageForm() {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const {contactNumber, setContactNumber} = useContactNumber();

  const genHandleChange =
    (key: 'prefix' | `number`) => (event: InputEventType) => {
      const {value} = event.currentTarget;
      setContactNumber(prevState => ({
        ...prevState,
        [key]: value,
      }));
    };

  const handleMessageChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    setMessage(event.currentTarget.value);
  };

  const whatsappHref = `${WHATSAPP_API_SEND_IL_NUMBER}${contactNumber.prefix}${
    contactNumber.number
  }?text=${encodeURI(message ?? '')}`;

  return (
    <form
      action="#"
      className="sm:mx-auto sm:max-w-lg sm:flex flex-col gap-2"
      onSubmit={e => {
        e.preventDefault();
      }}>
      <div className="flex gap-2">
        <div className="flex rounded-md shadow-sm flex-grow ">
          <input
            className="items-center px-4 rounded-l-md bg-gray-50 text-gray-800 sm:text-sm w-20"
            placeholder="054"
            name="prefix"
            value={contactNumber.prefix}
            onChange={genHandleChange(`prefix`)}
          />
          <input
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md sm:text-sm border-gray-300"
            placeholder="5554123"
            type="text"
            name="number"
            value={contactNumber.number}
            onChange={genHandleChange(`number`)}
          />
        </div>
        <Button type="submit" size="lg" href={whatsappHref}>
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
