import {Form} from '../components';

export function NumbersForm() {
  return (
    <div className="relative rounded-2xl px-6 py-10 bg-green-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1463 360">
          <path
            className="text-green-300 text-opacity-20"
            fill="currentColor"
            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
          />
          <path
            className="text-green-400 text-opacity-40"
            fill="currentColor"
            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
          />
        </svg>
      </div>
      <div className="relative">
        <div className="flex flex-col gap-4">
          <div className="sm:text-center flex flex-col gap-2">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              No Contact Whatsapp Message
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-green-200">
              Facebook Workshop
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
