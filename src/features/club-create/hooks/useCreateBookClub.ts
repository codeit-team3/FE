'use client';

import { useState } from 'react';
import { BookClubForm } from '../types';
import { createBookClub } from '../api';

export const useCreateBookClub = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: BookClubForm) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await createBookClub(data);
      return response;
    } catch (error) {
      setError('북클럽 생성에 실패했습니다.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading, error };
};
