'use client';

import 'react-datepicker/dist/react-datepicker.css';
import Button from '@/components/button/Button';
import {
  CreateClubFormField,
  InputField,
} from '@/features/club-create/components';
import {
  RadioButtonGroup,
  DatePickerContainer,
  ImageField,
} from '@/features/club-create/container';
import { useBookClubForm } from '@/features/club-create/hooks';

function FormContainer() {
  const {
    register,
    control,
    setValue,
    errors,
    isValid,
    watch,
    onSubmit,
    isLoading,
  } = useBookClubForm();

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10">
      <CreateClubFormField
        label="모임 이름"
        error={errors.title?.message}
        currentLength={watch('title')?.length || 0}
        maxLength={30}
      >
        <InputField
          register={register('title')}
          placeholder="지정책인 경우, 책 이름을 넣어주세요"
        />
      </CreateClubFormField>

      <CreateClubFormField
        label="모임 상세 설명"
        error={errors.description?.message}
        currentLength={watch('description')?.length || 0}
        maxLength={30}
      >
        <InputField
          register={register('description')}
          placeholder="상세 설명을 입력해주세요"
        />
      </CreateClubFormField>

      <ImageField
        register={register}
        setValue={setValue}
        error={errors.image?.message?.toString()}
      />

      <CreateClubFormField
        label="자유책 / 지정책"
        error={errors.bookClubType?.message}
      >
        <RadioButtonGroup
          options={[
            {
              label: '자유책',
              value: 'FREE',
              description:
                '읽고 싶은 책을 자유롭게 선택하고 각자의 생각을 나눠요.',
            },
            {
              label: '지정책',
              value: 'FIXED',
              description: '한 권의 책을 선정해 깊이 있는 토론을 진행해요.',
            },
          ]}
          selectedValue={watch('bookClubType')}
          register={register('bookClubType')}
          setValue={setValue}
          name="bookClubType"
        />
      </CreateClubFormField>

      <CreateClubFormField
        label="온라인 / 오프라인"
        error={errors.meetingType?.message}
      >
        <RadioButtonGroup
          options={[
            { label: '온라인', value: 'ONLINE' },
            { label: '오프라인', value: 'OFFLINE' },
          ]}
          selectedValue={watch('meetingType')}
          register={register('meetingType')}
          setValue={setValue}
          name="meetingType"
          town={watch('town')}
        />
      </CreateClubFormField>

      <DatePickerContainer
        control={control}
        name="targetDate"
        label="언제 만나나요?"
        error={errors.targetDate?.message}
        placeholder="만나는 날짜를 선택해주세요!"
      />

      <DatePickerContainer
        control={control}
        name="endDate"
        label="언제 모임을 마감할까요?"
        error={errors.endDate?.message}
        placeholder="모임의 모집 마감 날짜를 선택해주세요!"
      />

      <CreateClubFormField
        label="모임 정원"
        error={errors.memberLimit?.message}
        currentLength={watch('memberLimit') || 0}
        maxLength={20}
      >
        <InputField
          type="number"
          register={register('memberLimit', { valueAsNumber: true })}
          placeholder="최소 3인이상 입력해주세요."
        />
      </CreateClubFormField>

      <Button
        type="submit"
        text={isLoading ? '생성 중...' : '확인'}
        size="medium"
        fillType="solid"
        themeColor="green-normal-01"
        disabled={!isValid || isLoading}
      />
    </form>
  );
}

export default FormContainer;
