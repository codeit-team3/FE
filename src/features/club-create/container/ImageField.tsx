'use client';

import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { BookClubForm } from '../types';
import { CreateClubFormField } from '../components';
import { useImageField } from '@/features/club-create/hooks';
import { CameraIcon, ImageIcon } from '../../../../public/icons';

interface ImageUploadContainerProps {
  register: UseFormRegister<BookClubForm>;
  setValue: UseFormSetValue<BookClubForm>;
  error?: string;
}

function ImageField({ register, setValue, error }: ImageUploadContainerProps) {
  const { selectedFileName, handleFileChange } = useImageField(
    setValue,
    register,
  );

  return (
    <CreateClubFormField label="이미지" error={error} optional={true}>
      <div className="relative flex h-[130px] w-full items-center justify-center rounded-xl bg-gray-light-02 hover-dim">
        {selectedFileName ? (
          <>
            <div className="flex flex-col items-center gap-1">
              <ImageIcon />
              <span className="text-sm text-blue-light-active">
                {selectedFileName}
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <CameraIcon />
            <span className="text-sm text-gray-dark-01">
              이미지를 첨부해 주세요 (jpg, jpeg)
            </span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={handleFileChange}
        />
      </div>
    </CreateClubFormField>
  );
}

export default ImageField;
