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

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
    watch,
  } = form;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createBookClub(data);
      setShowSuccessPopup(true);
    } catch (error) {
      console.error(error);
    }
  });

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
    showSuccessPopup,
    handlePopUpClose,
    handlePopUpConfirm,
  };
};
