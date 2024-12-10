'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import Button from '@/components/button/Button';
import {
  CreateClubFormField,
  InputField,
  RadioButtonGroup,
} from '@/features/club-create/components';

const bookClubSchema = z.object({
  title: z
    .string()
    .min(1, '모임 이름을 입력해주세요')
    .max(30, '모임 이름은 최대 30자까지 가능합니다'),
  description: z
    .string()
    .min(1, '상세 설명을 입력해주세요')
    .max(30, '상세 설명은 최대 30자까지 가능합니다'),
  image: z.string().optional(),
  bookType: z.enum(['자유책', '지정책']),
  location: z.enum(['온라인', '오프라인']),
  place: z.string().optional(),
  startDate: z.string().min(1, '시작 날짜를 선택해주세요'),
  endDate: z.string().min(1, '종료 날짜를 선택해주세요'),
  maxParticipants: z
    .number()
    .min(3, '최소 3명 이상 입력해주세요')
    .max(20, '최대 20명까지 가능합니다'),
});

type BookClubForm = z.infer<typeof bookClubSchema>;

export default function CreateBookClub() {
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookClubForm>({
    resolver: zodResolver(bookClubSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFileName(file ? file.name : '');
  };

  const onSubmit = (data: BookClubForm) => {
    console.log(data);
    // TODO: API 연동
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

        <CreateClubFormField label="이미지" error={errors.image?.message}>
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              className="w-full flex-1 rounded-xl bg-gray-light-02 px-4 py-[10px] font-medium placeholder-gray-dark-02"
              placeholder="이미지를 첨부해주세요"
              value={selectedFileName}
              readOnly
            />
            <input
              type="file"
              accept="image/*"
              {...register('image')}
              className="hidden border"
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
                value: '자유책',
                description:
                  '읽고 싶은 책을 자유롭게 선택하고 각자의 생각을 나눠요.',
              },
              {
                label: '지정책',
                value: '지정책',
                description: '한 권의 책을 선정해 깊이 있는 토론을 진행해요.',
              },
            ]}
            selectedValue={watch('bookType')}
            register={register('bookType')}
          />
        </CreateClubFormField>

        <CreateClubFormField label="온라인 / 오프라인">
          <RadioButtonGroup
            options={[
              { label: '온라인', value: '온라인' },
              { label: '오프라인', value: '오프라인' },
            ]}
            selectedValue={watch('location')}
            register={register('location')}
          />
        </CreateClubFormField>

        <CreateClubFormField
          label="언제 만나나요?"
          error={errors.startDate?.message}
        >
          <input
            type="datetime-local"
            {...register('startDate')}
            className="w-full rounded-xl border bg-gray-light-02 px-4 py-[10px] font-medium placeholder-gray-dark-02"
          />
        </CreateClubFormField>

        <CreateClubFormField
          label="언제 모임을 마감할까요?"
          error={errors.endDate?.message}
        >
          <input
            type="datetime-local"
            {...register('endDate')}
            className="w-full rounded-xl border bg-gray-light-02 px-4 py-[10px] font-medium placeholder-gray-dark-02"
          />
        </CreateClubFormField>

        <CreateClubFormField
          label="모임 정원"
          error={errors.maxParticipants?.message}
          currentLength={watch('maxParticipants') || 0}
          maxLength={20}
        >
          <input
            type="number"
            {...register('maxParticipants', { valueAsNumber: true })}
            placeholder="최소 3인이상 입력해주세요."
            className="w-full rounded-xl border bg-gray-light-02 px-4 py-[10px] font-medium placeholder-gray-dark-02"
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
