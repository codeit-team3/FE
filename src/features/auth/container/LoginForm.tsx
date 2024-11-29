import React from 'react';
import FormField from '../components/FormField';
import SubmitButton from '../components/SubmitButton';

function LoginForm() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center rounded-3xl bg-white px-4 py-8 sm:h-[422px] sm:w-[510px] sm:px-14">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <h3 className="text-2xl font-semibold">로그인</h3>
        <form className="flex w-full flex-col gap-6">
          <FormField
            label="아이디"
            type="text"
            placeholder="이메일을 입력해주세요"
            id="email"
          />
          <FormField
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="password"
          />
          <SubmitButton>로그인</SubmitButton>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;