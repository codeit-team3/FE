import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'small' | 'modal';
  hasBackground: boolean;
  variantColor?: 'default';
  backgroundColor?: string;
  outlineColor?: string;
  fontColor?: string;
}

const sizeVariants = {
  modal: 'min-w-[120px] h-[44px] px-4 text-base',
  large: 'min-w-[332px] h-[44px] px-4 text-base',
  small: 'min-w-[120px] h-[40px] px-3 text-sm',
};

const backgroundVariants = {
  enabled: {
    filled: {
      default: 'bg-orange-600 text-white cursor-pointer',
      // 색상 추가
    },
    outline: {
      default:
        'bg-white text-orange-600 border border-orange-600 cursor-pointer',
    },
  },
  disabled: {
    filled: 'bg-gray-400 text-white cursor-not-allowed',
    outline: 'bg-white text-gray-400 border border-gray-400 cursor-not-allowed',
  },
};

const Button = ({
  text,
  size,
  hasBackground,
  variantColor = 'default',
  backgroundColor,
  outlineColor,
  fontColor,
  ...buttonProps
}: ButtonProps) => {
  const { disabled } = buttonProps;

  const sizeClasses = sizeVariants[size];
  const baseClasses = 'rounded-[12px] font-semibold';
  const styleType = hasBackground ? 'filled' : 'outline';
  const bgClasses = disabled
    ? backgroundVariants['disabled'][styleType]
    : backgroundVariants['enabled'][styleType][variantColor];

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
