'use client';

import { useState } from 'react';
import { BookClubForm } from '../types';
import { useBookClubCreateMutation } from '@/api/react-query/book-club';

export const useCreateBookClub = () => {
  const [error, setError] = useState<string | null>(null);
  const { mutateAsync: createBookClub, isPending } =
    useBookClubCreateMutation();

  const onSubmit = async (data: BookClubForm) => {
    setError(null);

    try {
      const response = await createBookClub(data);
      return response;
    } catch (error) {
      setError('북클럽 생성에 실패했습니다.');
      throw error;
    }
  };

  return { onSubmit, isLoading: isPending, error };
};
