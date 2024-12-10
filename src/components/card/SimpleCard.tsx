import { ComponentPropsWithoutRef } from 'react';
import Card from './Card';

interface SimpleCardProps extends ComponentPropsWithoutRef<'article'> {
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
  participants: Array<{
    src: string;
    alt: string;
  }>;
  isEnded?: boolean;
}

function SimpleCard({
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
  participants,
  isEnded = false,
  className,
  ...props
}: SimpleCardProps) {
  return (
    <Card isEnded={isEnded} className={className} {...props}>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-[336px] lg:w-[384px]">
          <Card.Image
            url={imageUrl}
            alt={title}
            isLiked={isLiked}
            onLikeClick={onLikeClick}
          />
        </div>
        <Card.Box className="relative flex-1">
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
          <Card.EndedOverlay />
        </Card.Box>
      </div>
    </Card>
  );
}

export default SimpleCard;
