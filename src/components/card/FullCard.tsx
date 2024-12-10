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
    hostInfo,
    isPast = false,
    isCanceled = false,
    actions,
  } = meeting;

  return (
    <Card isCanceled={isCanceled} className={className} {...props}>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-[336px] lg:w-[486px]">
          <Card.Image
            {...imageInfo}
            alt={meetingInfo.title}
            className="h-[230px] md:h-full"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[14px]">
          <div className="flex flex-col gap-2">
            <Card.Host {...hostInfo} />
            <Card.Box className="flex-1">
              <Card.Info {...meetingInfo} isPast={isPast} />
              <Card.Status {...participationStatus} isPast={isPast} />
            </Card.Box>
          </div>
          <button
            onClick={actions.onJoinClick}
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
