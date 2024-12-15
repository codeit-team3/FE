import { z } from 'zod';
import { SIGNUP_VALIDATION_MESSAGES } from '../constants/messages';

export const signUpSchema = z
  .object({
    name: z.string().min(2, SIGNUP_VALIDATION_MESSAGES.NAME_MIN_LENGTH),
    email: z.string().email(SIGNUP_VALIDATION_MESSAGES.INVALID_EMAIL),
    password: z.string().min(8, SIGNUP_VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH),
    passwordConfirm: z.string(),
    nickname: z.string().min(2, '닉네임은 최소 2자 이상이어야 합니다'),
    description: z.string().optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: SIGNUP_VALIDATION_MESSAGES.PASSWORD_MISMATCH,
    path: ['passwordConfirm'],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
