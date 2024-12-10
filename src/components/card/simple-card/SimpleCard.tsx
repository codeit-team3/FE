import { ComponentPropsWithoutRef } from 'react';
import Card from '../Card';
import { Meeting } from '@/components/card/types';

interface SimpleCardProps extends ComponentPropsWithoutRef<'article'> {
  meeting: Meeting;
}

function SimpleCard({ meeting, className, ...props }: SimpleCardProps) {
  const {
    meetingInfo,
    participationStatus,
    imageInfo,
    isPast = false,
    isCanceled = false,
    actions,
  } = meeting;

  return (
    <Card isCanceled={isCanceled} className={className} {...props}>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-[336px] lg:w-[384px]">
          <Card.Image {...imageInfo} />
        </div>
        <Card.Box className="relative flex-1" onClick={actions?.onClick}>
          <Card.Info {...meetingInfo} isPast={isPast} />
          <Card.Status {...participationStatus} isPast={isPast} />
          <Card.EndedOverlay onDelete={actions?.onDelete} />
        </Card.Box>
      </div>
    </Card>
  );
}

export default SimpleCard;
