export const AUTH_ERROR_MESSAGES = {
  USER_NOT_FOUND: '존재하지 않는 아이디입니다.',
  INVALID_CREDENTIALS: '비밀번호가 아이디와 일치하지 않습니다.',
  SERVER_ERROR: '서버 오류가 발생했습니다',
} as const;

export const LOGIN_FORM_PLACEHOLDERS = {
  EMAIL: '이메일을 입력해주세요',
  PASSWORD: '비밀번호를 입력해주세요.',
} as const;
