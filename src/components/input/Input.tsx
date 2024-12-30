import { ChangeEvent, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: ReactNode;
  className?: string;
}

function Input({ value, onChange, placeholder, icon, className }: InputProps) {
  return (
    <div
      className={twMerge(
        'flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2',
        className,
      )}
    >
      {icon && (
        <div className="flex h-6 w-6 items-center justify-center text-gray-400">
          {icon}
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-gray-darker placeholder:text-gray-normal-03"
      />
    </div>
  );
}

export default Input;
