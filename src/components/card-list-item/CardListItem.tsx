import Image from 'next/image';
import { TextChip } from '../text-chip/TextChip';
import ParticipantCounter from '../participant-counter/ParticipantCounter';
import ConfirmedLabel from '../confirmed-label/ConfirmedLabel';
import ProgressBar from '../progress-bar/ProgressBar';
import { HeartIcon, RightArrow } from '../../../public/icons';

interface CardListItemProps {
  title: string;
  location: string;
  date: string;
  time: string;
  currentParticipants: number;
  maxParticipants: number;
  isConfirmed?: boolean;
  imageUrl: string;
  onClick?: () => void;
}

function CardListItem({
  title,
  location,
  date,
  time,
  currentParticipants,
  maxParticipants,
  isConfirmed = false,
  imageUrl,
  onClick,
}: CardListItemProps) {
  return (
    <article
      className="flex min-w-[340px] flex-col overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white pb-2"
      onClick={onClick}
    >
      {/* 이미지 섹션 */}
      <div className="relative h-[156px] w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* 컨텐츠 섹션 */}
      <div className="flex flex-col gap-5 p-4">
        {/* 상단 섹션: 제목/위치, 좋아요 아이콘, 날짜/시간 칩 */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <span className="text-lg font-semibold text-gray-900">|</span>
              <span className="text-sm font-medium text-gray-700">
                {location}
              </span>
            </div>
            <div className="flex gap-2">
              <TextChip text={date} />
              <TextChip text={time} />
            </div>
          </div>
          <button className="flex justify-center rounded-full">
            <HeartIcon />
          </button>
        </div>

        {/* 하단 섹션: 왼쪽(참가자/확정/프로그레스), 오른쪽(join now) */}
        <div className="flex gap-6">
          {/* 왼쪽: 참가자 정보, 확정 라벨, 프로그레스바 */}
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-2">
              <ParticipantCounter
                current={currentParticipants}
                max={maxParticipants}
              />
              {isConfirmed && <ConfirmedLabel />}
            </div>
            <ProgressBar current={currentParticipants} max={maxParticipants} />
          </div>

          {/* 오른쪽: Join Now 버튼 */}
          <div className="flex shrink-0 items-end">
            <div className="flex items-center gap-2 text-orange-600">
              <span className="font-medium">join now</span>
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardListItem;
