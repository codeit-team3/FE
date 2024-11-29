'use client';

import React from 'react';
import FormField from '../../components/form-field/FormField';
import SubmitButton from '../../components/submit-button/SubmitButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, LoginFormData } from '../../types/loginFormSchema';
import { login } from '../../api/auth';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log(data);
      const response = await login(data);
      console.log('로그인 성공:', response);
    } catch (error) {
      console.error('로그인 실패:', error);
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
