'use client';

import { useBookClubCreateMutation } from '@/api/book-club/react-query';
import { toFormData } from '../utils/bookClubFormUtils';
import { BookClubForm } from '../types';

export const useCreateBookClub = () => {
  const { mutateAsync: createBookClubMutation, isPending } =
    useBookClubCreateMutation();

  const onSubmit = async (data: BookClubForm) => {
    const formData = toFormData(data);
    return await createBookClubMutation(formData);
  };

  return { onSubmit, isLoading: isPending };
};
