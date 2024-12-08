import React from 'react';
import { IcCheck } from '../../../public/icons';

interface FilterCheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

function FilterCheckbox({ label, ...props }: FilterCheckboxProps) {
  const checked = props.checked;
  return (
    <label
      className={`inline-flex h-10 w-fit min-w-24 cursor-pointer items-center gap-x-2 rounded-xl border bg-white px-[14px] py-2 transition duration-200 ${
        checked ? 'border-green-normal' : 'border-gray-normal-hover'
      }`}
    >
      <span
        className={`text-sm font-medium ${
          checked ? 'text-green-normal' : 'text-gray-dark-hover'
        }`}
      >
        {label}
      </span>
      <div className="relative h-5 w-5">
        <input
          type="checkbox"
          id="checkbox"
          {...props}
          className="peer absolute h-5 w-5 appearance-none rounded-[5px] border border-gray-dark-hover bg-transparent transition duration-200 checked:border-green-normal checked:bg-green-normal"
        />
        <IcCheck
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition duration-200 ${
            checked ? 'opacity-100' : 'opacity-0'
          }`}
          width={28}
          height={28}
          circleColor="none"
          strokeColor="#e6f6f4"
        />
      </div>
    </label>
  );
}

export default FilterCheckbox;
