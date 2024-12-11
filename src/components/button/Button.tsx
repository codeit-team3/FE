import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BASE_CLASSES, COLOR_GROUPS, SIZE } from '@/constants';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'medium' | 'small' | 'modal';
  fillType: 'solid' | 'outline' | 'lightSolid' | 'lightOutline';
  themeColor:
    | 'green-normal-01'
    | 'green-light-03'
    | 'gray-normal-03'
    | 'gray-normal-02'
    | 'gray-darker';
  isSubmitting?: boolean;
}

export default function Button({
  text,
  size,
  fillType = 'solid',
  themeColor = 'green-normal-01',
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
    const color = COLOR_GROUPS[resolvedColor];

    type TextClassType =
      | 'text-green-normal-01'
      | 'text-gray-darker'
      | 'text-white'
      | 'text-gray-dark-02';

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
        throw new Error(`잘못된 fillType 값입니다: ${fillType}`);
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
