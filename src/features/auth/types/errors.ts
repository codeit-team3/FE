export type AuthErrorCode =
  | 'USER_NOT_FOUND'
  | 'INVALID_CREDENTIALS'
  | 'SERVER_ERROR'
  | 'EMAIL_EXISTS';

export interface AuthError {
  response: {
    data: {
      code: AuthErrorCode;
    };
  };
}
