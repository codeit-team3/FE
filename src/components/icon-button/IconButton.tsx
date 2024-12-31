import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps extends ComponentProps<'button'> {
  icon: React.ReactNode;
}

export default function IconButton({
  icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'flex h-8 w-8 items-center justify-center rounded-full bg-gray-white hover-dim',
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
