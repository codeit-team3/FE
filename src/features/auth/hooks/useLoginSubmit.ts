import { useRouter, useSearchParams } from 'next/navigation';
import { UseFormReset, UseFormSetError } from 'react-hook-form';
import { login } from '../api/auth';
import { LoginFormData } from '../types/loginFormSchema';
import { AUTH_ERROR_MESSAGES } from '../constants/messages';

type LoginErrorCode = 'USER_NOT_FOUND' | 'INVALID_CREDENTIALS' | 'SERVER_ERROR';

interface LoginError {
  response: {
    data: {
      code: LoginErrorCode;
    };
  };
}

export const useLoginSubmit = (
  setError: UseFormSetError<LoginFormData>,
  reset: UseFormReset<LoginFormData>,
) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (data: LoginFormData) => {
    try {
      const response = await login(data);
      console.log('로그인 성공:', response);
      reset();

      const returnUrl = searchParams.get('returnUrl') || '/';
      router.replace(returnUrl);
    } catch (error) {
      const { code } = (error as LoginError).response.data;

      switch (code) {
        case 'USER_NOT_FOUND':
          setError('email', {
            type: 'manual',
            message: AUTH_ERROR_MESSAGES.USER_NOT_FOUND,
          });
          break;
        case 'INVALID_CREDENTIALS':
          setError('password', {
            type: 'manual',
            message: AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
          });
          break;
        case 'SERVER_ERROR':
          console.error(AUTH_ERROR_MESSAGES.SERVER_ERROR);
          break;
      }
    }
  };

  return handleSubmit;
};
