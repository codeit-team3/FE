import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'medium' | 'small' | 'modal';
  fillType: 'solid' | 'outline' | 'lightSolid' | 'lightOutline';
  themeColor:
    | 'green-normal-01'
    | 'green-light-03'
    | 'gray-normal-03'
    | 'gray-darker';
  isSubmitting?: boolean;
}

const SIZE = {
  modal: 'min-w-[120px] h-[44px] px-4 text-base',
  large: 'min-w-[402px] h-[44px] px-4 text-base',
  medium: 'min-w-[332px] h-[44px] px-4 text-base',
  small: 'min-w-[120px] h-[40px] px-3 text-sm',
} as const;

const BASE_CLASSES = {
  solid: 'text-white',
  outline: 'bg-white border',
  lightSolid: '',
  lightOutline: 'border',
} as const;

const COLOR_GROUPS = {
  'green-normal-01': {
    bg: 'bg-green-normal-01',
    text: 'text-green-normal-01',
    border: 'border-green-normal-01',
  },
  'green-light-03': {
    bg: 'bg-green-light-03',
    text: 'text-green-normal-01',
    border: 'border-green-normal-01',
  },
  'gray-normal-03': {
    bg: 'bg-gray-normal-03',
    text: 'text-gray-darker',
    border: 'border-gray-darker',
  },
  'gray-darker': {
    bg: 'bg-gray-darker',
    text: 'text-gray-darker',
    border: 'border-gray-darker',
  },
} as const;

const DEFAULT_COLOR = {
  bg: 'bg-gray-normal-03',
  text: 'text-gray-darker',
  border: 'border-gray-normal-03',
};

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

  const variantClasses = (() => {
    const color = COLOR_GROUPS[resolvedColor] || DEFAULT_COLOR;

    type TextClassType =
      | 'text-green-normal-01'
      | 'text-gray-darker'
      | 'text-white';

    let textClass: TextClassType = color.text;

    // 배경색과 글자색이 동일한 경우 textClass를 흰색으로 덮어쓰기
    if (
      (fillType === 'lightSolid' || fillType === 'lightOutline') &&
      color.bg.includes(color.text.replace('text-', 'bg-'))
    ) {
      textClass = 'text-white';
    }

    switch (fillType) {
      case 'solid':
        return `${color.bg} ${BASE_CLASSES.solid}`;
      case 'outline':
        return `${BASE_CLASSES.outline} ${color.text} ${color.border}`;
      case 'lightSolid':
        return `${color.bg} ${textClass}`;
      case 'lightOutline':
        return `${BASE_CLASSES.lightOutline} ${color.bg} ${textClass} ${color.border}`;
      default:
        return `${DEFAULT_COLOR.bg} ${DEFAULT_COLOR.text}`;
    }
  })();

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
      disabled={isButtonDisabled}
    >
      {text}
    </button>
  );
}
