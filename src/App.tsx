import {NumbersForm, NumbersTable} from 'components';

export function App() {
  return (
    <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-200 w-screen h-screen flex flex-col gap-8 justify-center items-center justify-items-center">
      <div className="w-full max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <NumbersForm/>
      </div>
      <NumbersTable/>
    </div>
  );
}
