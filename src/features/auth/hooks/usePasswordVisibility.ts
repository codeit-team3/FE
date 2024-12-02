import { useState } from 'react';

export const usePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return {
    showPassword,
    togglePassword,
    passwordType: showPassword ? 'text' : 'password',
  } as const;
};
