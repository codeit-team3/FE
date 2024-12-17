export const AUTH_ERROR_MESSAGES = {
  USER_NOT_FOUND: '존재하지 않는 아이디입니다.',
  INVALID_CREDENTIALS: '비밀번호가 아이디와 일치하지 않습니다.',
  SERVER_ERROR: '서버 오류가 발생했습니다',
  EMAIL_EXISTS: '이미 사용 중인 이메일입니다',
  SIGNUP_ERROR: '회원가입 중 오류가 발생했습니다.',
} as const;

export const LOGIN_FORM_PLACEHOLDERS = {
  EMAIL: '이메일을 입력해주세요',
  PASSWORD: '비밀번호를 입력해주세요.',
} as const;

export const SIGNUP_FORM_PLACEHOLDERS = {
  NAME: '이름을 입력해주세요.',
  EMAIL: '이메일을 입력해주세요.',
  PASSWORD: '비밀번호를 입력해주세요.',
  DESCRIPTION: '나를 소개해주세요.',
  NICKNAME: '닉네임을 입력해주세요',
} as const;

export const SIGNUP_VALIDATION_MESSAGES = {
  NAME_MIN_LENGTH: '이름은 2글자 이상이어야 합니다',
  INVALID_EMAIL: '올바른 이메일 형식이 아닙니다',
  PASSWORD_MIN_LENGTH: '비밀번호는 8자 이상이어야 합니다',
  PASSWORD_MISMATCH: '비밀번호가 일치하지 않습니다',
  NICKNAME_MIN_LENGTH: '닉네임은 최소 2자 이상이어야 합니다',
} as const;
