'use client';

import React from 'react';
import FormField from '../../components/form-field/FormField';
import SubmitButton from '../../components/submit-button/SubmitButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, LoginFormData } from '../../types/loginFormSchema';
import { login } from '../../api/auth';
import { useRouter } from 'next/navigation';

function LoginForm() {
  const router = useRouter();
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
      router.replace('/');
    } catch (error: any) {
      if (error.response?.data?.code) {
        const { code } = error.response.data;
        if (code === 'USER_NOT_FOUND') {
          setError('email', {
            type: 'manual',
            message: '존재하지 않는 아이디입니다.',
          });
        } else if (code === 'INVALID_CREDENTIALS') {
          setError('password', {
            type: 'manual',
            message: '비밀번호가 아이디와 일치하지 않습니다.',
          });
        }
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

export default LoginForm;
