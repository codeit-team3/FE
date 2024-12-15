'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/button/Button';
import FormField from '@/features/auth/components/form-field/FormField';
import { useSignUpSubmit } from '@/features/auth/hooks/useSignUpSubmit';
import {
  signUpSchema,
  type SignUpFormData,
} from '@/features/auth/types/sign-up.schema';
import { SIGNUP_FORM_PLACEHOLDERS } from '../../constants/messages';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = useSignUpSubmit(setError, reset);
  return (
    <div className="w-full max-w-[400px] rounded-3xl bg-gray-light-02 px-6 py-8 md:min-w-[450px] md:max-w-[558px] md:px-[54px]">
      <h3 className="mb-8 text-center text-xl font-bold text-gray-darker md:text-2xl">
        회원가입
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <FormField
          label="이름"
          type="text"
          placeholder={SIGNUP_FORM_PLACEHOLDERS.NAME}
          id="name"
          register={register('name')}
          error={errors.name?.message}
        />
        <FormField
          label="이메일"
          type="text"
          placeholder={SIGNUP_FORM_PLACEHOLDERS.EMAIL}
          id="email"
          register={register('email')}
          error={errors.email?.message}
        />
        <FormField
          label="비밀번호"
          type="password"
          placeholder={SIGNUP_FORM_PLACEHOLDERS.PASSWORD}
          id="password"
          register={register('password')}
          error={errors.password?.message}
        />
        <FormField
          label="비밀번호 확인"
          type="password"
          placeholder={SIGNUP_FORM_PLACEHOLDERS.PASSWORD}
          id="passwordConfirm"
          register={register('passwordConfirm')}
          error={errors.passwordConfirm?.message}
        />
        <FormField
          label="닉네임"
          type="text"
          placeholder={SIGNUP_FORM_PLACEHOLDERS.NICKNAME}
          id="nickname"
          register={register('nickname')}
          error={errors.nickname?.message}
        />
        <FormField
          label={
            <div className="flex items-center gap-1">
              한 줄 소개
              <span className="text-sm text-gray-dark-01">(선택)</span>
            </div>
          }
          type="text"
          placeholder={SIGNUP_FORM_PLACEHOLDERS.DESCRIPTION}
          id="description"
          register={register('description')}
          error={errors.description?.message}
        />
        <Button
          text="회원가입"
          size="modal"
          fillType="solid"
          themeColor="green-normal-01"
          className="w-full"
          isSubmitting={isSubmitting}
          disabled={!isValid}
        />
      </form>
      <div className="mt-6 flex w-full items-center justify-center gap-2 text-gray-normal-03">
        <span>이미 회원이신가요??</span>
        <Link href="/login" className="text-green-dark-01 underline">
          로그인
        </Link>
      </div>
    </div>
  );
}
