import Card from '@/components/card/Card';
import { useSelectAddress } from '@/features/club-create/hooks';
import { BookClubForm } from '@/features/club-create/types';
import { UseFormSetValue } from 'react-hook-form';

interface RadioButtonGroupProps {
  options: { label: string; value: string; description?: string }[];
  selectedValue: string;
  register: any;
  setValue?: UseFormSetValue<BookClubForm>;
  name: keyof BookClubForm;
  town?: string;
}

function RadioButtonGroup({
  options,
  selectedValue,
  register,
  setValue,
  name,
  town,
}: RadioButtonGroupProps) {
  const { handleRadioChange } = useSelectAddress({ setValue, name });

  return (
    <div className="flex gap-4 md:gap-6">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex w-full cursor-pointer items-start gap-2 rounded-xl px-4 py-5 ${
            selectedValue === option.value
              ? 'bg-green-light-02'
              : 'bg-gray-light-02'
          }`}
          onClick={(e) => handleRadioChange(option.value, e)}
        >
          <input
            type="radio"
            value={option.value}
            {...register}
            className="hidden"
          />
          <div className="flex h-6 w-6 items-center justify-center">
            <div
              className={`flex h-4 w-4 items-center justify-center rounded-[5px] border ${
                selectedValue === option.value
                  ? 'border-green-normal-02 bg-green-normal-02'
                  : 'border-gray-normal-02 bg-white'
              }`}
            >
              {selectedValue === option.value && (
                <svg
                  className="h-3 w-3 text-white"
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
          </div>
          <div className="flex flex-col gap-0.5">
            <p
              className={`font-semibold ${
                selectedValue === option.value ? 'text-green-normal-02' : ''
              }`}
            >
              {option.label}
            </p>

            {option.description && (
              <p
                className={`text-xs font-medium ${
                  selectedValue === option.value
                    ? 'text-green-normal-01'
                    : 'text-gray-dark-02'
                }`}
              >
                {option.description}
              </p>
            )}
          </div>
          {option.value === 'OFFLINE' && town && (
            <div className="ml-auto flex items-center">
              <Card.Location>{town}</Card.Location>
            </div>
          )}
        </label>
      ))}
    </div>
  );
}

export default RadioButtonGroup;
