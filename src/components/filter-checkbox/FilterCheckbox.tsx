import React from 'react';
import { IcCheck } from '../../../public/icons';

interface FilterCheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  checked: boolean;
}

function FilterCheckbox({ label, checked, ...props }: FilterCheckboxProps) {
  return (
    <label
      className={`inline-flex h-10 w-fit min-w-24 cursor-pointer items-center gap-x-2 rounded-xl border bg-white px-[14px] py-2 transition duration-200 ${
        checked ? 'border-green-normal-01' : 'border-gray-normal-02'
      }`}
    >
      <span
        className={`text-sm font-medium ${
          checked ? 'text-green-normal-01' : 'text-gray-dark-02'
        }`}
      >
        {label}
      </span>
      <div className="relative h-5 w-5">
        <input
          type="checkbox"
          id="checkbox"
          {...props}
          className="absolute h-5 w-5 appearance-none rounded-[5px] border border-gray-dark-02 bg-transparent transition duration-200 checked:border-green-normal-01 checked:bg-green-normal-01"
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
