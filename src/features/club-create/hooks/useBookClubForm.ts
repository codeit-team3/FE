import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookClubForm, bookClubSchema } from '../types';
import { useCreateBookClub } from '@/features/club-create/hooks';

export const useBookClubForm = () => {
  const { onSubmit: createBookClub, isLoading } = useCreateBookClub();

  const form = useForm<BookClubForm>({
    resolver: zodResolver(bookClubSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
    watch,
  } = form;

  const onSubmit = handleSubmit(createBookClub);

  return {
    form,
    register,
    control,
    setValue,
    errors,
    isValid,
    watch,
    onSubmit,
    isLoading,
  };
};
