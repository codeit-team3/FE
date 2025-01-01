'use client';

import { useState } from 'react';
import { BookClubForm } from '../types';
import { useBookClubCreateMutation } from '@/api/book-club/react-query';
import { useAuthStore } from '@/store/authStore';

export const useCreateBookClub = () => {
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthStore();

  const { mutateAsync: createBookClub, isPending } = useBookClubCreateMutation(
    user?.id ?? 0,
  );

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
