import { twMerge } from 'tailwind-merge';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'dot';
}

const sizeStyles = {
  sm: 'h-[20px] min-w-[20px] px-1.5 text-[10px]',
  md: 'h-[26px] min-w-[26px] px-2 text-xs',
  lg: 'h-[32px] min-w-[32px] px-2.5 text-sm',
} as const;

const dotSizeStyles = {
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
} as const;

// TODO: 추후 위치 정보(vertical, horizontal) 에 따라 뱃지 위치를 조정할 수 있도록 하는 기능이 필요할 수 있음
function Badge({
  count,
  size = 'md',
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  if (variant === 'dot') {
    return (
      <div
        className={twMerge(
          'rounded-full bg-red-normal',
          dotSizeStyles[size],
          className,
        )}
        {...props}
      />
    );
  }

  const displayCount = count && count >= 1000 ? '999+' : count;

  return (
    <div
      className={twMerge(
        'flex items-center justify-center rounded-full bg-red-normal font-semibold text-gray-white',
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {displayCount}
    </div>
  );
}

export default Badge;
