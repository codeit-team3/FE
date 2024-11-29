'use client';

import { useState } from 'react';
import VisibilityOn from '../../../../../public/icons/visibility_on';
import VisibilityOff from '../../../../../public/icons/visibility_off';

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}

function FormField({ label, type, placeholder, id }: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={id}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          placeholder={placeholder}
          className="w-full rounded-lg bg-gray-50 p-2 sm:p-3"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <VisibilityOn /> : <VisibilityOff />}
          </button>
        )}
      </div>
    </div>
  );
}

export default FormField;
