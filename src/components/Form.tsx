import React, {useState} from 'react';
import {DefaultComponent} from 'types/common';
import {Button} from '../components';

type FormState = DefaultComponent & {
  prefix?: number | null;
  number?: number | null;
  message?: string;
};

const defaultFormState: FormState = {prefix: null, number: null, message: ''};

export function Form() {
  const [state, setState] = useState(defaultFormState);
  const {prefix, number, message} = state;
  const handleChange = (event: any) => {
    const {name, value} = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(`${WHATSAPP_API_SEND_IL_NUMBER}${prefix}${number}?text=${encodeURI(
    message ?? '',
  )}`)

  return (
    <form action="#" className="sm:mx-auto sm:max-w-lg sm:flex flex-col gap-4" onSubmit={(e) => {
      e.preventDefault()
      setState(defaultFormState)
    }}>
      <div className="flex gap-2">
        <div className="flex rounded-md shadow-sm flex-grow">
          <input
            className="inline-flex items-center px-3 rounded-l-md  border-r-0 bg-gray-50 text-gray-500 sm:text-sm w-16"
            name="prefix"
            value={prefix ?? ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="number"
            value={number ?? ''}
            id="company-website"
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300"
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          href={`${WHATSAPP_API_SEND_IL_NUMBER}${prefix}${number}?text=${encodeURI(
            message ?? '',
          )}`}
          >
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
          onChange={handleChange}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
          placeholder="Please enter your message here: "
        />
      </div>
    </form>
  );
}

const WHATSAPP_API_SEND_IL_NUMBER = `https://wa.me/972`;
