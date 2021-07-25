import {BackgroundDotsPattern} from './components/BackgroundDotsPattern';

function App() {
  return (
    <div className="">
      <div className="bg-white py-16 sm:py-24">
        <div className="relative sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <BackgroundDotsPattern />
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-green-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
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
                    className="text-green-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-green-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    No Contact Whatsapp Message
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-green-200">
                    It's free, just use it
                  </p>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 px-3 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="pl-20 block w-full border border-transparent rounded-md px-2 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border bg-opacity-100 border-transparent px-5 py-3 bg-green-500 text-base font-medium text-white shadow hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 sm:px-10">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
