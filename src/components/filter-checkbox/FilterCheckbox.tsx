import React from 'react';

interface filterCheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

function FilterCheckbox({ label, ...props }: filterCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-x-2 rounded-xl border border-gray-normal-hover px-2 py-1">
      <span className="font-gray-dark-hover text-sm font-medium">{label}</span>
      <input type="checkbox" id="checkbox" {...props} className="hidden" />
    </label>
  );
}
export default FilterCheckbox;
