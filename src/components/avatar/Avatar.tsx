import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE = {
  sm: 'h-[29px] w-[29px]',
  md: 'h-[40px] w-[40px]',
  lg: 'h-[56px] w-[56px]',
} as const;

export default function Avatar({
  src,
  alt,
  size = 'sm',
  ...props
}: AvatarProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-full ${SIZE[size]} ${props.className || 'https://picsum.photos/200/300?random=1'}`}
      {...props}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
