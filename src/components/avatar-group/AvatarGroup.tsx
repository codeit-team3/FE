import Avatar from '@/components/avatar/Avatar';
import { AVATAR_SIZE, AvatarSize } from '@/constants';
import { Children, ReactElement, cloneElement } from 'react';

interface AvatarGroupProps {
  children: ReactElement<typeof Avatar> | ReactElement<typeof Avatar>[];
  maxCount?: number;
  size?: AvatarSize;
  isPast?: boolean;
}

function AvatarGroup({
  children,
  maxCount = 4,
  size = 'sm',
  isPast = false,
}: AvatarGroupProps) {
  const avatars = Children.toArray(children).slice(0, maxCount);
  const remainingCount = Children.count(children) - maxCount;

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2.5">
        {avatars.map((avatar, index) =>
          cloneElement(avatar as ReactElement, {
            key: index,
            size,
            isPast,
          }),
        )}

        {remainingCount > 0 && (
          <div
            className={`relative flex items-center justify-center rounded-full border border-white bg-gray-100 ${
              AVATAR_SIZE[size]
            } ${isPast ? 'opacity-60' : ''}`}
          >
            <span
              className={`text-sm font-medium ${isPast ? 'text-gray-600' : 'text-gray-900'}`}
            >
              +{remainingCount}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AvatarGroup;
