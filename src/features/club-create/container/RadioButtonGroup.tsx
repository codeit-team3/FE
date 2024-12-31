import Card from '@/components/card/Card';
import { useSelectAddress } from '@/features/club-create/hooks';
import { BookClubForm } from '@/features/club-create/types';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import InputField from '../components/InputField';
import CreateClubFormField from '../components/CreateClubFormField';

interface RadioButtonGroupProps {
  options: { label: string; value: string; description?: string }[];
  selectedValue: string;
  register: any;
  addressRegister?: any;
  setValue?: UseFormSetValue<BookClubForm>;
  name: keyof BookClubForm;
  town?: string;
  watch?: UseFormWatch<BookClubForm>;
  errors?: any;
}

function RadioButtonGroup({
  options,
  selectedValue,
  register,
  addressRegister,
  setValue,
  name,
  town,
  watch,
  errors,
}: RadioButtonGroupProps) {
  const { handleRadioChange } = useSelectAddress({ setValue, name });
  const address = watch ? watch('address') : '';

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      {options.map((option) => (
        <div key={option.value} className="flex w-full flex-col gap-4">
          <label
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
                  selectedValue === option.value
                    ? 'text-green-normal-02'
                    : 'text-gray-dark-03'
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
                <Card.Location meetingType="OFFLINE">{town}</Card.Location>
              </div>
            )}
          </label>

          {option.value === 'OFFLINE' && selectedValue === 'OFFLINE' && (
            <div className="flex flex-col gap-3">
              <CreateClubFormField
                label={`${address ? `${address}` : '오프라인 모임 장소'}`}
                error={errors.addressDetail?.message}
                currentLength={watch?.('addressDetail')?.length || 0}
              >
                <InputField
                  register={addressRegister}
                  placeholder="상세 주소를 입력해 주세요"
                />
              </CreateClubFormField>

              <div className="rounded-lg bg-gray-light-02 p-4">
                <p className="text-xs text-gray-dark-01">
                  <span className="text-blue-light-active">ℹ️</span> 개인 계좌
                  입금 유도, 개인 정보 요구, 북코 멤버가 아닌 외부 인원 초대 등
                  가이드를 위반하는 경우 북코에게 신고해 주세요!
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RadioButtonGroup;
