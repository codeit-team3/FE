'use client';

import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { BookClubForm } from '../types';
import { CreateClubFormField, InputField } from '../components';
import { useImageField } from '@/features/club-create/hooks';

interface ImageUploadContainerProps {
  register: UseFormRegister<BookClubForm>;
  setValue: UseFormSetValue<BookClubForm>;
  error?: string;
}

function ImageField({ register, setValue, error }: ImageUploadContainerProps) {
  const { selectedFileName, handleFileChange, clearFile } =
    useImageField(setValue);

  return (
    <CreateClubFormField label="이미지" error={error}>
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
            onClick={clearFile}
            className="ml-2 text-gray-dark-02"
          >
            ✕
          </button>
        )}
      </div>
    </CreateClubFormField>
  );
}

export default ImageField;
