import { ComponentPropsWithoutRef } from 'react';
import Card from '../Card';
import ClubChip from '@/components/chip/club-chip/ClubChip';
import Button from '@/components/button/Button';
import { ClubMeeting } from '@/components/card/types';
import Chip from '@/components/chip/Chip';

interface MyClubCardProps extends ComponentPropsWithoutRef<'article'> {
  meeting: ClubMeeting;
}

function MyClubCard({ meeting, className, ...props }: MyClubCardProps) {
  const {
    meetingInfo,
    imageInfo,
    clubStatus,
    isCanceled = false,
    actions,
  } = meeting;

  return (
    <Card isCanceled={isCanceled} className={className} {...props}>
      <div className="flex flex-col gap-4">
        <Card.Image {...imageInfo} />
        <Card.Box className="relative flex-1" onClick={actions?.onClick}>
          {/* 첫 번째 줄: ClubChip + Chip */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ClubChip
                variant={clubStatus.isCompleted ? 'completed' : 'scheduled'}
              />
              <ClubChip
                variant={clubStatus.isConfirmed ? 'confirmed' : 'pending'}
              />
            </div>
            <Chip text={meetingInfo.category} />
          </div>

          {/* 두 번째 줄: 모임 정보 */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-black">
              {meetingInfo.title}
            </h3>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-dark-03">
              <span>{meetingInfo.location}</span>
              <span>{meetingInfo.datetime}</span>
            </div>
          </div>

          {/* 세 번째 줄: 버튼 */}
          <div className="mt-4">
            <Button
              text="참여 취소하기"
              size="medium"
              fillType="outline"
              themeColor="green-normal-01"
              onClick={actions?.onDelete}
            />
          </div>

          <Card.EndedOverlay onDelete={actions?.onDelete} />
        </Card.Box>
      </div>
    </Card>
  );
}

export default MyClubCard;
