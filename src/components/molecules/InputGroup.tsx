import {Input} from 'components/atoms';
import {classNames} from 'utils';

type InputProps = {
  value: string;
  onChange: (arg: string) => void;
  placeholder: string;
  maxLength: number;
};

type Props = {
  prefixProps: InputProps;
  className?: string;
} & InputProps;

export const InputGroup = (props: Props) => {
  const {className = ``, prefixProps, ...valueProps} = props;
  return (
    <div
      className={classNames(`flex rounded-md shadow-sm flex-grow`, className)}>
      <Input
        className="items-center px-4 rounded-l-md bg-gray-50 text-gray-800 sm:text-sm w-20"
        {...prefixProps}
      />
      <Input
        className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 text-gray-800"
        type="text"
        {...valueProps}
      />
    </div>
  );
};
