import React from 'react';

interface InputFieldProps {
  type?: string;
  placeholder: string;
  register: any;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder,
  register,
  className = '',
}) => (
  <input
    type={type}
    {...register}
    className={`w-full rounded-xl bg-gray-light-02 px-4 py-[10px] font-medium placeholder-gray-dark-02 ${className}`}
    placeholder={placeholder}
  />
);

export default InputField;
