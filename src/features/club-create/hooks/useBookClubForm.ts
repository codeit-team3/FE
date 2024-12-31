import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookClubForm, bookClubSchema } from '../types';
import { useCreateBookClub } from './useCreateBookClub';
import { usePopup } from './usePopup';

export const useBookClubForm = () => {
  const { onSubmit: createBookClub, isLoading } = useCreateBookClub();
  const {
    setShowSuccessPopup,
    showSuccessPopup,
    handlePopUpClose,
    handlePopUpConfirm,
  } = usePopup();
  const form = useForm<BookClubForm>({
    resolver: zodResolver(bookClubSchema),
  });

  const onSubmit = form.handleSubmit(async (data: BookClubForm) => {
    await createBookClub(data);
    setShowSuccessPopup(true);
  });

  return {
    form,
    register: form.register,
    control: form.control,
    setValue: form.setValue,
    errors: form.formState.errors,
    isValid: form.formState.isValid,
    watch: form.watch,
    onSubmit,
    isLoading,
    showSuccessPopup,
    handlePopUpClose,
    handlePopUpConfirm,
  };
};
