import React from 'react';

interface InputFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  register?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder = '',
  register,
  className = '',
  ...props
}) => (
  <input
    type={type}
    {...(register ? register : {})}
    className={`w-full rounded-xl bg-gray-light-02 px-4 py-[10px] font-medium placeholder-gray-dark-02 ${className}`}
    placeholder={placeholder}
    {...props}
  />
);

export default InputField;
