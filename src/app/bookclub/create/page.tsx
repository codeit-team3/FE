'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Button from '@/components/button/Button';
import {
  CreateClubFormField,
  InputField,
  RadioButtonGroup,
} from '@/features/club-create/components';
import { BookClubForm, bookClubSchema } from '@/features/club-create/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateBookClub() {
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm<BookClubForm>({
    resolver: zodResolver(bookClubSchema),
  });

  // TODO:: 컨테이너별로 비즈니스 로직 작업 후 훅 분리
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('선택된 파일:', file);
      setSelectedFileName(file.name);
      setValue('image', file); // 이 줄 추가
    } else {
      setSelectedFileName('');
    }
  };

  // TODO: API 연동, 훅 분리
  const onSubmit = (data: BookClubForm) => {
    const formData = new FormData();

    // 이미지 파일 추가 (Multipart)
    const imageFile = data.image instanceof File ? data.image : null;
    if (imageFile) {
      formData.append('image', imageFile);
    }

    // 나머지 데이터는 JSON으로 묶기
    const bookClubData = {
      title: data.title,
      description: data.description,
      bookClubType: data.bookClubType,
      meetingType: data.meetingType,
      town: data.town,
      targetDate: data.targetDate,
      endDate: data.endDate,
      memberLimit: data.memberLimit,
    };

    // JSON 데이터 추가
    formData.append(
      'bookClub',
      new Blob([JSON.stringify(bookClubData)], {
        type: 'application/json',
      }),
    );

    // 확인용 로그
    console.log('전송될 데이터:', {
      이미지: imageFile
        ? {
            이름: imageFile.name,
            타입: imageFile.type,
            크기: `${(imageFile.size / 1024).toFixed(2)}KB`,
          }
        : null,
      북클럽_데이터: bookClubData,
    });
  };

  return (
    <main className="container mx-auto min-w-[375px] max-w-[1000px] bg-gray-white p-6 pb-20">
      <h1 className="mb-8 text-2xl font-bold">모임 만들기</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
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

        <CreateClubFormField
          label="이미지"
          error={errors.image?.message?.toString()}
        >
          <div className="flex w-full items-center gap-2">
            <InputField
              type="text"
              value={selectedFileName}
              readOnly
              placeholder="이미지를 첨부해주세요"
              className="flex-1"
            />
            <InputField
              type="file"
              accept="image/*"
              register={register('image')}
              className="hidden"
              id="image-upload"
              onChange={handleFileChange}
            />
            <label
              htmlFor="image-upload"
              className="flex h-10 cursor-pointer items-center rounded-xl border border-green-normal-01 px-4 text-green-normal-01"
            >
              파일 찾기
            </label>
            {selectedFileName && (
              <button
                type="button"
                onClick={() => setSelectedFileName('')}
                className="ml-2 text-gray-dark-02"
              >
                ✕
              </button>
            )}
          </div>
        </CreateClubFormField>

        <CreateClubFormField label="자유책 / 지정책">
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
          />
        </CreateClubFormField>

        <CreateClubFormField label="온라인 / 오프라인">
          <RadioButtonGroup
            options={[
              { label: '온라인', value: 'ONLINE' },
              { label: '오프라인', value: 'OFFLINE' },
            ]}
            selectedValue={watch('meetingType')}
            register={register('meetingType')}
          />
        </CreateClubFormField>

        <CreateClubFormField
          label="언제 만나나요?"
          error={errors.targetDate?.message}
        >
          <Controller
            control={control}
            name="targetDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                showTimeSelect
                timeIntervals={10}
                dateFormat="yyyy/MM/dd h:mm aa"
                timeFormat="HH:mm"
                showTimeSelectOnly={false}
                timeCaption="Time"
                timeClassName={(time) => {
                  const hours = time.getHours();
                  return hours > 12 ? 'text-success' : 'text-error';
                }}
                placeholderText="만나는 날짜를 선택해주세요!"
                customInput={<InputField />}
              />
            )}
          />
        </CreateClubFormField>

        <CreateClubFormField
          label="언제 모임을 마감할까요?"
          error={errors.endDate?.message}
        >
          <Controller
            control={control}
            name="endDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                showTimeSelect
                timeIntervals={10}
                dateFormat="yyyy/MM/dd h:mm aa"
                timeFormat="HH:mm"
                showTimeSelectOnly={false}
                timeCaption="Time"
                timeClassName={(time) => {
                  const hours = time.getHours();
                  return hours > 12 ? 'text-success' : 'text-error';
                }}
                placeholderText="모임의 모집 마감 날짜를 선택해주세요!"
                customInput={<InputField />}
              />
            )}
          />
        </CreateClubFormField>

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
          text="확인"
          size="medium"
          fillType="solid"
          themeColor="green-normal-01"
        />
      </form>
    </main>
  );
}

//<InputField type="datetime-local" register={register('endDate')} />
