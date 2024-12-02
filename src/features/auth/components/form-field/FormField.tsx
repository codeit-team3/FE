'use client';

import { VisibilityOn, VisibilityOff } from '../../../../../public/icons';
import { UseFormRegisterReturn } from 'react-hook-form';
import { usePasswordVisibility } from '../../hooks/usePasswordVisibility';

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: string;
}

function FormField({
  label,
  type,
  placeholder,
  id,
  register,
  error,
}: FormFieldProps) {
  const { showPassword, togglePassword, passwordType } =
    usePasswordVisibility();

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <div className="relative w-full">
        <input
          {...register}
          id={id}
          type={type === 'password' ? passwordType : type}
          placeholder={placeholder}
          className={`w-full rounded-lg bg-gray-50 p-2 sm:p-3 ${
            error ? 'border-2 border-red-500' : ''
          }`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 표시'}
          >
            {showPassword ? <VisibilityOn /> : <VisibilityOff />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default FormField;
