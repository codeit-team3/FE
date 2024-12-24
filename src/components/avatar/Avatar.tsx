import { AVATAR_SIZE, AvatarSize } from '@/constants';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  isPast?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Avatar({
  src,
  alt,
  size = 'sm',
  isPast = false,
  onClick,
  ...props
}: AvatarProps) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-full ${
        AVATAR_SIZE[size]
      } ${isPast ? 'opacity-60 grayscale' : ''} ${props.className || ''}`}
      onClick={onClick}
      {...props}
    >
      <Image
        src={src || '/default-profile.png'}
        alt={alt || '프로필 이미지'}
        fill
        className="object-cover"
      />
    </div>
  );
}

export default Avatar;
