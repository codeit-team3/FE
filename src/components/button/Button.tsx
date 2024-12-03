import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'small' | 'modal';
  hasBackground: boolean;
  variantColor?: 'default' | 'gray';
}

const sizeVariants = {
  modal: 'min-w-[120px] h-[44px] px-4 text-base',
  large: 'min-w-[332px] h-[44px] px-4 text-base',
  small: 'min-w-[120px] h-[40px] px-3 text-sm',
};

const backgroundVariants = {
  filled: {
    default: 'bg-orange-600 text-white cursor-pointer',
    gray: 'bg-gray-400 text-white cursor-pointer',
  },
  outline: {
    default: 'bg-white text-orange-600 border border-orange-600 cursor-pointer',
    gray: 'bg-white text-gray-400 border border-gray-400 cursor-pointer',
  },
};

const Button = ({
  text,
  size,
  hasBackground,
  variantColor = 'default',
  ...buttonProps
}: ButtonProps) => {
  const { disabled } = buttonProps;

  const sizeClasses = sizeVariants[size];
  const baseClasses = 'rounded-[12px] font-semibold';
  const styleType = hasBackground ? 'filled' : 'outline';
  const bgClasses = twMerge(
    backgroundVariants[styleType][variantColor],
    disabled && 'cursor-not-allowed',
  );

  const buttonClassName = twMerge(sizeClasses, baseClasses, bgClasses);

  return (
    <button {...buttonProps} className={buttonClassName}>
      {text}
    </button>
  );
};

export default Button;
