import { TextChip } from '@/components/text-chip/TextChip';
import BorderedBox from '@/components/bordered-box/BorderedBox';
import AvatarGroup from '@/components/avatar-group/AvatarGroup';
import Avatar from '@/components/avatar/Avatar';
import ConfirmedLabel from '@/components/confirmed-label/ConfirmedLabel';
import ProgressBar from '@/components/progress-bar/ProgressBar';

interface BookClubInfoProps {
  title: string;
  location: string;
  date: string;
  time: string;
  isDueSoon?: boolean;
  isLiked?: boolean;
  currentParticipants: number;
  maxParticipants: number;
  minParticipants: number;
  isConfirmed?: boolean;
  onLikeClick?: () => void;
  participants: Array<{
    id: string;
    imageUrl: string;
    name: string;
  }>;
}

function BookClubInfo({
  title,
  location,
  date,
  time,
  isDueSoon,
  isLiked,
  currentParticipants,
  maxParticipants,
  minParticipants,
  isConfirmed,
  onLikeClick,
  participants,
}: BookClubInfoProps) {
  return (
    <BorderedBox>
      <div className="flex w-full flex-col">
        {/* 상단 정보 영역 */}
        <div className="flex justify-between px-6 pb-6">
          {/* 왼쪽: 모임 정보 */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-lg font-extrabold text-gray-900">{title}</h1>
              <p className="text-sm font-medium text-gray-700">{location}</p>
            </div>
            <div className="flex gap-2">
              <TextChip text={date} />
              <TextChip text={time} isDueSoon={isDueSoon} />
            </div>
          </div>

          {/* 오른쪽: 하트 아이콘 */}
          <button
            onClick={onLikeClick}
            className="text-gray-300 hover:text-gray-400"
          >
            {isLiked ? '♥' : '♡'}
          </button>
        </div>

        {/* 구분선 */}
        <hr className="mx-1 border-t-2 border-dashed border-gray-200" />

        {/* 하단 정보 영역 */}
        <div className="flex w-full flex-col gap-2 px-6 pt-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 text-sm font-semibold text-gray-900">
                  <span>모집 정원</span>
                  <span>{maxParticipants}명</span>
                </div>
                <div>
                  <AvatarGroup maxCount={4}>
                    {participants.map((participant) => (
                      <Avatar
                        key={participant.id}
                        src={participant.imageUrl}
                        alt={participant.name}
                      />
                    ))}
                  </AvatarGroup>
                </div>
              </div>
              {isConfirmed && (
                <div>
                  <ConfirmedLabel />
                </div>
              )}
            </div>
            <div>
              <ProgressBar
                current={currentParticipants}
                max={maxParticipants}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between text-xs font-medium text-gray-700">
            <div className="flex items-center gap-1.5">
              <span>최소 인원</span>
              <span>{minParticipants}명</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>최대 인원</span>
              <span>{maxParticipants}명</span>
            </div>
          </div>
        </div>
      </div>
    </BorderedBox>
  );
}

export default BookClubInfo;
