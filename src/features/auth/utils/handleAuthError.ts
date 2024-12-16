import { UseFormSetError } from 'react-hook-form';
import { AuthError } from '../types/errors';
import { AUTH_ERROR_MESSAGES } from '../constants/messages';

export const handleAuthError = (
  error: unknown,
  setError: UseFormSetError<any>,
) => {
  const { code } = (error as AuthError).response.data;

  switch (code) {
    case 'USER_NOT_FOUND':
      setError('email', {
        message: AUTH_ERROR_MESSAGES.USER_NOT_FOUND,
      });
      break;
    case 'INVALID_CREDENTIALS':
      setError('password', {
        message: AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
      });
      break;
    case 'EMAIL_EXISTS':
      setError('email', {
        message: AUTH_ERROR_MESSAGES.EMAIL_EXISTS,
      });
      break;
    case 'SERVER_ERROR':
      setError('root', {
        message: AUTH_ERROR_MESSAGES.SERVER_ERROR,
      });
      break;
    default:
      setError('root', {
        message: AUTH_ERROR_MESSAGES.SIGNUP_ERROR,
      });
  }
};
