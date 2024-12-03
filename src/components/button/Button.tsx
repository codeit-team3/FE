import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'small' | 'modal';
  fillType: 'solid' | 'bordered';
  themeColor: 'orange-600' | 'gray-400';
}

const SIZE = {
  modal: 'min-w-[120px] h-[44px] px-4 text-base',
  large: 'min-w-[332px] h-[44px] px-4 text-base',
  small: 'min-w-[120px] h-[40px] px-3 text-sm',
};

const COLOR_STYLES = {
  'orange-600': ['bg-orange-600', 'text-orange-600', 'border-orange-600'],
  'gray-400': ['bg-gray-400', 'text-gray-400', 'border-gray-400'],
};

export default function Button({
  text,
  size,
  fillType,
  themeColor,
  ...buttonProps
}: ButtonProps) {
  const { disabled } = buttonProps;

  const sizeClasses = SIZE[size];
  const baseClasses = 'rounded-[12px] font-semibold cursor-pointer';
  const variantClasses =
    fillType === 'solid'
      ? `${COLOR_STYLES[themeColor][0]} text-white`
      : `bg-white border ${COLOR_STYLES[themeColor][1]} ${COLOR_STYLES[themeColor][2]}`;

  const buttonClassName = twMerge(
    sizeClasses,
    baseClasses,
    variantClasses,
    disabled && 'cursor-not-allowed',
  );

  return (
    <button {...buttonProps} className={buttonClassName}>
      {text}
    </button>
  );
}
