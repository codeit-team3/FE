'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

import Button from '@/components/button/Button';
import FormField from '@/features/auth/components/form-field/FormField';
import { useLoginSubmit } from '@/features/auth/hooks/useLoginSubmit';
import { useAuthStore } from '@/store/authStore';
import {
  loginFormSchema,
  type LoginFormData,
} from '@/features/auth/types/loginFormSchema';

export default function LoginForm() {
  const { checkLoginStatus } = useAuthStore();
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

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const onSubmit = useLoginSubmit(setError, reset);

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center rounded-3xl bg-gray-light-02 px-4 py-8 sm:h-[422px] sm:w-[510px] sm:px-14">
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
            placeholder="이메일"
            id="email"
            register={register('email')}
            error={errors.email?.message}
          />
          <FormField
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            id="password"
            register={register('password')}
            error={errors.password?.message}
          />
          <Button
            text="로그인"
            size="large"
            fillType="solid"
            themeColor="green-normal-01"
            isSubmitting={isSubmitting}
            disabled={!isValid}
          />
        </form>
        <div className="flex w-full items-center justify-center gap-2 text-gray-normal-03">
          <span>북코가 처음이신가요?</span>
          <Link href="/sign-up" className="text-green-dark-01 underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
