import React from 'react';

interface RadioButtonGroupProps {
  options: { label: string; value: string; description?: string }[];
  selectedValue: string;
  register: any;
}

function RadioButtonGroup({
  options,
  selectedValue,
  register,
}: RadioButtonGroupProps) {
  return (
    <div className="flex gap-4 md:gap-6">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex w-full cursor-pointer items-start gap-2 rounded-xl p-4 ${
            selectedValue === option.value
              ? 'border-2 border-green-normal-01'
              : ''
          } bg-gray-light-02`}
        >
          <input
            type="radio"
            value={option.value}
            {...register}
            className="hidden"
          />
          <div
            className={`flex h-6 w-6 items-center justify-center rounded border bg-white ${
              selectedValue === option.value
                ? 'border-green-normal-01'
                : 'border-gray-normal-02'
            }`}
          >
            {selectedValue === option.value && (
              <svg
                className="h-4 w-4 text-green-normal-01"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold">{option.label}</p>
            {option.description && (
              <p className="text-xs font-medium text-gray-dark-02">
                {option.description}
              </p>
            )}
          </div>
        </label>
      ))}
    </div>
  );
}

export default RadioButtonGroup;