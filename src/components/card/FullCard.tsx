import { ComponentPropsWithoutRef } from 'react';
import Card from './Card';

interface FullCardProps extends ComponentPropsWithoutRef<'article'> {
  title: string;
  category: string;
  location: string;
  datetime: string;
  currentParticipants: number;
  maxParticipants: number;
  isConfirmed?: boolean;
  isPast?: boolean;
  imageUrl: string;
  isLiked?: boolean;
  onLikeClick?: () => void;
  hostNickname: string;
  onJoinClick?: () => void;
  participants: Array<{
    src: string;
    alt: string;
  }>;
}

function FullCard({
  title,
  category,
  location,
  datetime,
  currentParticipants,
  maxParticipants,
  isConfirmed = false,
  isPast = false,
  imageUrl,
  isLiked = false,
  onLikeClick,
  hostNickname,
  onJoinClick,
  participants,
  className,
  ...props
}: FullCardProps) {
  return (
    <Card className={className} {...props}>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-[336px] lg:w-[486px]">
          <Card.Image
            url={imageUrl}
            alt={title}
            isLiked={isLiked}
            onLikeClick={onLikeClick}
            className="h-[230px] md:h-full"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[14px]">
          <div className="flex flex-col gap-2">
            <Card.Host nickname={hostNickname} />
            <Card.Box className="flex-1">
              <Card.Info
                title={title}
                category={category}
                location={location}
                datetime={datetime}
                isPast={isPast}
              />
              <Card.Status
                currentParticipants={currentParticipants}
                maxParticipants={maxParticipants}
                isConfirmed={isConfirmed}
                isPast={isPast}
                participants={participants}
              />
            </Card.Box>
          </div>
          <button
            onClick={onJoinClick}
            className="w-full rounded-xl bg-green-normal-01 px-4 py-2 text-white"
          >
            참여하기
          </button>
        </div>
      </div>
    </Card>
  );
}

export default FullCard;
