import { UseFormSetError, UseFormReset } from 'react-hook-form';
import { SignUpFormData } from '../types/sign-up.schema';
import { signup } from '../api/auth';
import { useRouter } from 'next/navigation';
import { handleAuthError } from '../utils/handleAuthError';

export const useSignUpSubmit = (
  setError: UseFormSetError<SignUpFormData>,
  reset: UseFormReset<SignUpFormData>,
) => {
  const router = useRouter();

  return async (data: SignUpFormData) => {
    try {
      await signup(data);
      reset();
      router.replace('/login');
    } catch (error) {
      handleAuthError(error, setError);
    }
  };
};
