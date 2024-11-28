import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  size: 'large' | 'small';
  state: 'active' | 'disabled' | 'none';
  borderColor?: string; // 사용자 지정
  textColor?: string; // 사용자 지정
}

const Button = ({
  text,
  size,
  state,
  borderColor,
  textColor,
  ...buttonProps
}: ButtonProps) => {
  let sizeClasses = '';
  if (size === 'large') {
    sizeClasses = 'w-[332px] h-[44px] text-base';
  } else if (size === 'small') {
    sizeClasses = 'w-[120px] h-[40px] text-sm';
  }

  let stateClasses = '';
  switch (state) {
    case 'active':
      stateClasses = 'bg-orange-600 text-white';
      break;
    case 'disabled':
      stateClasses = 'bg-gray-400 text-white';
      break;
    case 'none':
    default:
      stateClasses = 'bg-white text-orange-600 border border-orange-600';
      break;
  }

  const buttonClassName = twMerge(
    `${sizeClasses} ${stateClasses} rounded-[12px] font-semibold cursor-pointer`,
    state === 'disabled' && 'cursor-not-allowed',
  );

  // state가 none일 때, 사용자가 스타일 지정
  const inlineStyles = {
    borderColor: borderColor ? borderColor : undefined,
    color: textColor ? textColor : undefined,
  };

  return (
    <button {...buttonProps} className={buttonClassName} style={inlineStyles}>
      {text}
    </button>
  );
};

export default Button;
