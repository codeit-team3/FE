import React from 'react';
import { twMerge } from 'tailwind-merge';
import { COLOR_SCHEMES, SIZE } from '@/constants';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'medium' | 'small' | 'modal';
  fillType: 'solid' | 'outline' | 'lightSolid';
  themeColor: keyof typeof COLOR_SCHEMES;
  lightColor?: keyof typeof COLOR_SCHEMES;
  isSubmitting?: boolean;
  className?: string;
}

export default function Button({
  text,
  size,
  fillType = 'solid',
  themeColor = 'green-normal-01',
  lightColor,
  isSubmitting,
  className,
  ...buttonProps
}: ButtonProps) {
  const { disabled } = buttonProps;

  const sizeClasses = SIZE[size];
  const baseClasses = 'rounded-[12px] font-semibold cursor-pointer';

  const resolvedColor =
    isSubmitting !== undefined
      ? isSubmitting
        ? 'gray-normal-03'
        : 'green-normal-01'
      : themeColor;

  const variantClasses = (() => {
    switch (fillType) {
      case 'solid':
        return `text-gray-white ${COLOR_SCHEMES[resolvedColor]['bg']}`;
      case 'outline':
        return `bg-gray-white border ${COLOR_SCHEMES[resolvedColor]['text']} ${COLOR_SCHEMES[resolvedColor]['border']}`;
      case 'lightSolid':
        if (lightColor) {
          return `${COLOR_SCHEMES[resolvedColor]['text']} ${COLOR_SCHEMES[lightColor]['bg']}`;
        } else {
          return `${COLOR_SCHEMES[resolvedColor]['text']} bg-gray-white`;
        }
    }
  })();

  const isButtonDisabled = isSubmitting || disabled;

  const buttonClassName = twMerge(
    sizeClasses,
    baseClasses,
    variantClasses,
    isButtonDisabled && 'cursor-not-allowed',
    className,
  );

  return (
    <button
      {...buttonProps}
      className={buttonClassName}
      disabled={isButtonDisabled}
    >
      {text}
    </button>
  );
}
