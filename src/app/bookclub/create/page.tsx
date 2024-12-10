'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { CreateClubFormField } from '@/features/club-create/components';

const bookClubSchema = z.object({
  title: z.string().min(1, '모임 이름을 입력해주세요'),
  description: z.string().min(1, '상세 설명을 입력해주세요'),
  image: z.string().optional(),
  bookType: z.enum(['자유책', '지정책']),
  location: z.enum(['온라인', '오프라인']),
  place: z.string().optional(),
  startDate: z.string().min(1, '시작 날짜를 선택해주세요'),
  endDate: z.string().min(1, '종료 날짜를 선택해주세요'),
  maxParticipants: z
    .number()
    .min(3, '최소 3명 이상 입력해주세요')
    .max(30, '최대 30명까지 가능합니다'),
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
    defaultValues: {
      maxParticipants: 3,
    },
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
        <CreateClubFormField label="모임 이름" error={errors.title?.message}>
          <input
            {...register('title')}
            className="w-full rounded-xl border p-3"
            placeholder="지정책인 경우, 책 이름을 넣어주세요"
          />
        </CreateClubFormField>

        <CreateClubFormField
          label="모임 상세 설명"
          error={errors.description?.message}
        >
          <textarea
            {...register('description')}
            className="h-32 w-full rounded-xl border p-3"
            placeholder="상세 설명을 입력해주세요"
          />
        </CreateClubFormField>

        <CreateClubFormField label="이미지" error={errors.image?.message}>
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              className="flex-1 rounded-xl border border-gray-normal-02 p-3"
              placeholder="이미지를 첨부해주세요"
              value={selectedFileName}
              readOnly
            />
            <input
              type="file"
              accept="image/*"
              {...register('image')}
              className="hidden"
              id="image-upload"
              onChange={handleFileChange}
            />
            <label
              htmlFor="image-upload"
              className="flex h-10 cursor-pointer items-center rounded-xl border border-gray-normal-02 px-4 text-gray-dark-02"
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
          <div className="flex gap-4">
            <label className="flex w-full cursor-pointer items-center gap-2 rounded-xl bg-gray-light-01 p-4">
              <input
                type="radio"
                value="자유책"
                {...register('bookType')}
                className="hidden"
              />
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-normal-02 bg-white">
                <div
                  className="h-3 w-3 rounded-full bg-green-normal-01 opacity-0 transition-opacity data-[checked=true]:opacity-100"
                  data-checked={watch('bookType') === '자유책'}
                />
              </div>
              <div>
                <p className="font-medium">자유책</p>
                <p className="text-sm text-gray-dark-02">
                  시간과 장소에 구애받지 않고 자유롭게 참여할 수 있어요.
                </p>
              </div>
            </label>
            <label className="flex w-full cursor-pointer items-center gap-2 rounded-xl bg-gray-light-01 p-4">
              <input
                type="radio"
                value="지정책"
                {...register('bookType')}
                className="hidden"
              />
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-normal-02 bg-white">
                <div
                  className="h-3 w-3 rounded-full bg-green-normal-01 opacity-0 transition-opacity data-[checked=true]:opacity-100"
                  data-checked={watch('bookType') === '지정책'}
                />
              </div>
              <div>
                <p className="font-medium">지정책</p>
                <p className="text-sm text-gray-dark-02">
                  멤버들과 직접 만나 더욱 깊이 있는 대화를 나눌 수 있어요.
                </p>
              </div>
            </label>
          </div>
        </CreateClubFormField>

        <CreateClubFormField label="온라인 / 오프라인">
          <div className="flex gap-4">
            <label className="flex w-full cursor-pointer items-center gap-2 rounded-xl bg-gray-light-01 p-4">
              <input
                type="radio"
                value="온라인"
                {...register('location')}
                className="hidden"
              />
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-normal-02 bg-white">
                <div
                  className="h-3 w-3 rounded-full bg-green-normal-01 opacity-0 transition-opacity data-[checked=true]:opacity-100"
                  data-checked={watch('location') === '온라인'}
                />
              </div>
              <div>
                <p>온라인</p>
              </div>
            </label>
            <label className="flex w-full cursor-pointer items-center gap-2 rounded-xl bg-gray-light-01 p-4">
              <input
                type="radio"
                value="오프라인"
                {...register('location')}
                className="hidden"
              />
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-normal-02 bg-white">
                <div
                  className="h-3 w-3 rounded-full bg-green-normal-01 opacity-0 transition-opacity data-[checked=true]:opacity-100"
                  data-checked={watch('location') === '오프라인'}
                />
              </div>
              <div>
                <p>오프라인</p>
              </div>
            </label>
          </div>
        </CreateClubFormField>

        <CreateClubFormField
          label="언제 만나나요?"
          error={errors.startDate?.message}
        >
          <input
            type="datetime-local"
            {...register('startDate')}
            className="w-full rounded-xl border p-3"
          />
        </CreateClubFormField>

        <CreateClubFormField
          label="언제 모임을 마감할까요?"
          error={errors.endDate?.message}
        >
          <input
            type="datetime-local"
            {...register('endDate')}
            className="w-full rounded-xl border p-3"
          />
        </CreateClubFormField>

        <CreateClubFormField
          label="모임 정원"
          error={errors.maxParticipants?.message}
        >
          <input
            type="number"
            {...register('maxParticipants', { valueAsNumber: true })}
            className="w-full rounded-xl border p-3"
          />
        </CreateClubFormField>

        <button
          type="submit"
          className="rounded-xl bg-green-normal-01 px-6 py-3 text-white"
        >
          확인
        </button>
      </form>
    </main>
  );
}
