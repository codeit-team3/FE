'use client';

import React from 'react';
import FormField from '../../components/form-field/FormField';
import SubmitButton from '../../components/submit-button/SubmitButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, LoginFormData } from '../../types/loginFormSchema';
import { login } from '../../api/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { AUTH_ERROR_MESSAGES } from '../../constants/messages';

type LoginErrorCode = 'USER_NOT_FOUND' | 'INVALID_CREDENTIALS' | 'SERVER_ERROR';

interface LoginError {
  response: {
    data: {
      code: LoginErrorCode;
    };
  };
}

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting, errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
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

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center rounded-3xl bg-white px-4 py-8 sm:h-[422px] sm:w-[510px] sm:px-14">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <h3 className="text-2xl font-semibold">로그인</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6"
          data-testid="login-form"
        >
          <FormField
            label="아이디"
            type="text"
            placeholder="이메일을 입력해주세요"
            id="email"
            register={register('email')}
            error={errors.email?.message}
          />
          <FormField
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="password"
            register={register('password')}
            error={errors.password?.message}
          />
          <SubmitButton isSubmitting={isSubmitting} disabled={!isValid}>
            로그인
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}
