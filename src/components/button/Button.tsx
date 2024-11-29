import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'small';
  hasBackground: boolean;
  backgroundColor?: string;
  outlineColor?: string;
  fontColor?: string;
}

const Button = ({
  text,
  size,
  hasBackground,
  backgroundColor,
  outlineColor,
  fontColor,
  ...buttonProps
}: ButtonProps) => {
  const { disabled } = buttonProps;

  let sizeClasses = '';
  if (size === 'large') {
    sizeClasses = 'min-w-[332px] h-[44px] px-4 text-base';
  } else if (size === 'small') {
    sizeClasses = 'min-w-[120px] h-[40px] px-3 text-sm';
  }

  const baseClasses = 'rounded-[12px] font-semibold';

  let bgClasses = '';

  if (hasBackground) {
    bgClasses = disabled
      ? `bg-gray-400 text-white cursor-not-allowed`
      : `bg-orange-600 text-white cursor-pointer`;
  } else {
    bgClasses = disabled
      ? 'bg-white text-gray-400 border border-gray-400 cursor-not-allowed'
      : 'bg-white text-orange-600 border border-orange-600 cursor-pointer';
  }

  const buttonClassName = twMerge(sizeClasses, baseClasses, bgClasses);

  const inlineStyles: React.CSSProperties = {
    backgroundColor: hasBackground && !disabled ? backgroundColor : undefined,
    borderColor: !hasBackground && !disabled ? outlineColor : undefined,
    color: !hasBackground && !disabled ? fontColor : undefined,
  };

  return (
    <button {...buttonProps} className={buttonClassName} style={inlineStyles}>
      {text}
    </button>
  );
};

export default Button;
