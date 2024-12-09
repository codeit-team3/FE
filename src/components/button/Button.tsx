import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'small' | 'modal';
  fillType: 'solid' | 'bordered';
  themeColor: 'green-normal-01' | 'gray-normal-03';
  isSubmitting?: boolean;
}

const SIZE = {
  modal: 'min-w-[120px] h-[44px] px-4 text-base',
  large: 'min-w-[402px] h-[44px] px-4 text-base',
  medium: 'min-w-[332px] h-[44px] px-4 text-base',
  small: 'min-w-[120px] h-[40px] px-3 text-sm',
} as const;

const COLOR_STYLES = {
  'green-normal-01': [
    'bg-green-normal-01',
    'text-green-normal-01',
    'border-green-normal-01',
  ],
  'gray-normal-03': [
    'bg-gray-normal-03',
    'text-gray-normal-03',
    'border-gray-normal-03',
  ],
} as const;

export default function Button({
  text,
  size,
  fillType,
  themeColor,
  isSubmitting,
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

  const variantClasses =
    fillType === 'solid'
      ? `${COLOR_STYLES[resolvedColor][0]} text-white`
      : `bg-white border ${COLOR_STYLES[resolvedColor][1]} ${COLOR_STYLES[resolvedColor][2]}`;

  const isButtonDisabled = isSubmitting || disabled;

  const buttonClassName = twMerge(
    sizeClasses,
    baseClasses,
    variantClasses,
    isButtonDisabled && 'cursor-not-allowed',
  );

  return (
    <button
      {...buttonProps}
      className={buttonClassName}
      disabled={isButtonDisabled} // 제출 중이거나 외부에서 disabled가 true일 경우 비활성화
    >
      {text}
    </button>
  );
}
