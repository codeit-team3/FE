import Avatar from '@/components/avatar/Avatar';
import { Children, ReactElement, cloneElement } from 'react';

interface AvatarGroupProps {
  children: ReactElement<typeof Avatar> | ReactElement<typeof Avatar>[];
  maxCount?: number;
  size?: 'sm' | 'md' | 'lg';
}

function AvatarGroup({
  children,
  maxCount = 4,
  size = 'sm',
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
          }),
        )}

        {remainingCount > 0 && (
          <div
            className={`relative flex items-center justify-center rounded-full border border-white bg-gray-100 ${SIZE[size]}`}
          >
            <span className="text-sm font-medium text-gray-900">
              +{remainingCount}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AvatarGroup;

const SIZE = {
  sm: 'h-[29px] w-[29px]',
  md: 'h-[40px] w-[40px]',
  lg: 'h-[56px] w-[56px]',
} as const;
