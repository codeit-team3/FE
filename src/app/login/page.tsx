import { Suspense } from 'react';
import LoginForm from '@/features/auth/container/login-form/LoginForm';
import AuthImage from '@/features/auth/container/auth-image/AuthImage';

function Login() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-4 lg:flex-row lg:justify-between">
      <AuthImage isLoginPage={true} />
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
export default Login;
