import { Suspense } from 'react';
import LoginForm from '@/features/auth/container/login-form/LoginForm';

function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
export default Login;
