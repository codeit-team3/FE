'use client';

import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { BookClubForm } from '../types';

export const useImageField = (setValue: UseFormSetValue<BookClubForm>) => {
  const [selectedFileName, setSelectedFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      setValue('image', file);
    } else {
      setSelectedFileName('');
    }
  };

  const clearFile = () => {
    setSelectedFileName('');
    setValue('image', undefined);
  };

  return {
    selectedFileName,
    handleFileChange,
    clearFile,
  };
};
