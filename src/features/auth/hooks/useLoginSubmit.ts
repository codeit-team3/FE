import { useRouter, useSearchParams } from 'next/navigation';
import { UseFormReset, UseFormSetError } from 'react-hook-form';
import { login } from '../api/auth';
import { LoginFormData } from '../types/loginFormSchema';
import { handleAuthError } from '../utils/handleAuthError';

export const useLoginSubmit = (
  setError: UseFormSetError<LoginFormData>,
  reset: UseFormReset<LoginFormData>,
) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (data: LoginFormData) => {
    try {
      const response = await login(data);
      setTimeout(() => {
        console.log('로그인 성공:', response);
        reset();

        const returnUrl = searchParams.get('returnUrl') || '/bookclub';
        console.log('returnUrl:', returnUrl);
        router.replace(returnUrl);
      }, 2000);

      // router.refresh();
    } catch (error) {
      handleAuthError(error, setError);
    }
  };

  return handleSubmit;
};
