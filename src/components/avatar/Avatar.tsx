import { AVATAR_SIZE, AvatarSize } from '@/constants';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  size?: AvatarSize;
}

function Avatar({ src, alt, size = 'sm', ...props }: AvatarProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-full ${AVATAR_SIZE[size]} ${props.className || ''}`}
      {...props}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default Avatar;
