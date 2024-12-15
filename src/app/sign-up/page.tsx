import React, { Suspense } from 'react';
import AuthImage from '@/features/auth/container/auth-image/AuthImage';
import SignUpForm from '@/features/auth/container/sign-up/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-4 lg:flex-row lg:justify-between">
      <Suspense fallback={<div>Loading...</div>}>
        <AuthImage />
      </Suspense>
      <SignUpForm />
    </div>
  );
}
