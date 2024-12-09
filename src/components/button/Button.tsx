import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'small' | 'modal';
  fillType: 'solid' | 'outline' | 'lightSolid';
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
  bordered: 'bg-white border',
  lightSolid: '',
} as const;

const COLOR_CLASSES = {
  'green-normal-01': {
    bg: 'bg-green-normal-01',
    text: 'text-green-normal-01',
    border: 'border-green-normal-01',
  },
  'green-light-03': {
    bg: 'bg-green-light-03',
    text: 'text-green-normal-01',
    border: 'border-green-light-03',
  },
  'gray-normal-03': {
    bg: 'bg-gray-normal-03',
    text: 'text-gray-darker',
    border: 'border-gray-normal-03',
  },
  'gray-darker': {
    bg: 'bg-gray-darker',
    text: 'text-gray-darker',
    border: 'border-gray-darker',
  },
} as const;

// 기본 색상 정의
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

  // 공통 클래스
  const sizeClasses = SIZE[size];
  const baseClasses = 'rounded-[12px] font-semibold cursor-pointer';

  // resolvedColor 계산
  const resolvedColor =
    isSubmitting !== undefined
      ? isSubmitting
        ? 'gray-normal-03'
        : 'green-normal-01'
      : themeColor;

  // 상태에 따른 스타일 조합
  const variantClasses = (() => {
    // 색상 데이터 가져오기, 없는 경우 기본 색상 사용
    const color = COLOR_CLASSES[resolvedColor] || DEFAULT_COLOR;

    // TypeScript는 COLOR_CLASSES 객체에서 text 값의 타입을 "text-green-normal-01" 또는 "text-gray-darker"로 고정한다.
    // 따라서 "text-white"와 같은 값은 허용되지 않는다.
    // 이를 해결하려면 textClass 변수의 타입을 명시적으로 확장하여 "text-white"를 포함시켜야 한다.

    // textClass 변수에 "text-white"를 허용하도록 타입을 확장
    type TextClassType =
      | 'text-green-normal-01'
      | 'text-gray-darker'
      | 'text-white';

    let textClass: TextClassType = color.text;

    // 배경색과 글자색이 동일한 경우 textClass를 흰색으로 덮어쓰기
    if (
      fillType === 'lightSolid' &&
      color.bg.includes(color.text.replace('text-', 'bg-'))
    ) {
      textClass = 'text-white'; // text-white 허용
    }

    switch (fillType) {
      case 'solid':
        return `${color.bg} ${BASE_CLASSES.solid}`;
      case 'outline':
        return `${BASE_CLASSES.bordered} ${color.text} ${color.border}`;
      case 'lightSolid':
        return `${color.bg} ${textClass}`;
      default:
        return `${DEFAULT_COLOR.bg} ${DEFAULT_COLOR.text}`;
    }
  })();

  // 버튼 비활성화 처리
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
