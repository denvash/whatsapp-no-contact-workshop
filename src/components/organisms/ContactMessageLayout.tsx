import {ContactMessage} from 'components/molecules';
import {BackgroundSVG} from '../atoms';

export function ContactMessageLayout() {
  return (
    <div className="w-full max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="relative rounded-2xl px-6 py-10 bg-green-500 overflow-hidden shadow-xl sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
          <BackgroundSVG />
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
            <ContactMessage />
          </div>
        </div>
      </div>
    </div>
  );
}
