import { AVATAR_SIZE, AvatarSize } from '@/constants';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  size?: AvatarSize;
  onClick?: () => void;
}

function Avatar({ src, alt, size = 'sm', onClick, ...props }: AvatarProps) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-full ${AVATAR_SIZE[size]} ${props.className || ''}`}
      onClick={onClick}
      {...props}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default Avatar;
