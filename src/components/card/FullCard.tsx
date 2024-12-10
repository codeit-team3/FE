import { ComponentPropsWithoutRef } from 'react';
import Card from './Card';
import { FullMeeting } from './types';

interface FullCardProps extends ComponentPropsWithoutRef<'article'> {
  meeting: FullMeeting;
}

function FullCard({ meeting, className, ...props }: FullCardProps) {
  const {
    meetingInfo,
    participationStatus,
    imageInfo,
    isPast = false,
    isCanceled = false,
  } = meeting;
  const { title, category, location, datetime } = meetingInfo;
  const { currentParticipants, maxParticipants, isConfirmed, participants } =
    participationStatus;
  const { url: imageUrl, isLiked, onLikeClick } = imageInfo;
  const { nickname: hostNickname } = meeting.hostInfo;
  const { onJoinClick } = meeting.actions;

  return (
    <Card isCanceled={isCanceled} className={className} {...props}>
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
              <Card.EndedOverlay />
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
