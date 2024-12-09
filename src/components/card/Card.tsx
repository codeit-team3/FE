import Image from 'next/image';
import ParticipantCounter from '../participant-counter/ParticipantCounter';
import ConfirmedLabel from '../confirmed-label/ConfirmedLabel';
import ProgressBar from '../progress-bar/ProgressBar';
import { HeartIcon, RightArrow, WaveIcon } from '../../../public/icons';
import Chip from '@/components/chip/Chip';

interface CardProps {
  title: string;
  location: string;
  date: string;
  time: string;
  currentParticipants: number;
  maxParticipants: number;
  isConfirmed?: boolean;
  isLiked?: boolean;
  isEnded?: boolean;
  imageUrl: string;
  onClick?: () => void;
  onLikeToggleClick?: () => void;
  onJoinClick?: () => void;
}

function Card({
  title,
  location,
  date,
  time,
  currentParticipants,
  maxParticipants,
  isConfirmed = false,
  isLiked = true,
  isEnded = false,
  imageUrl,
  onClick,
  onLikeToggleClick,
  onJoinClick,
}: CardProps) {
  return (
    <article
      className="relative flex w-full min-w-[340px] flex-col overflow-hidden rounded-[24px] border-2 border-gray-100 bg-white sm:h-[156px] sm:flex-row"
      onClick={onClick}
    >
      <div className="relative h-[156px] w-full sm:h-full sm:w-[280px]">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-5 p-4 sm:flex-1 sm:justify-between">
        {/* 상단 섹션: 제목/위치, 찜하기 아이콘, 날짜/시간 칩 */}
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
              <Chip text={date} />
              <Chip text={time} />
            </div>
          </div>
          <button
            className="flex justify-center"
            aria-label="좋아요"
            onClick={(e) => {
              e.stopPropagation();
              onLikeToggleClick?.();
            }}
          >
            <HeartIcon isActive={isLiked} />
          </button>
        </div>

        {/* 하단 섹션: 인원, progressBar, 참가 버튼 */}
        <div className="flex gap-6 py-2">
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

          <div className="flex shrink-0 items-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onJoinClick?.();
              }}
              className="flex items-center gap-2 text-orange-600 hover:cursor-pointer"
            >
              <span className="text-base font-semibold">join now</span>
              <RightArrow />
            </button>
          </div>
        </div>
      </div>

      {/* 마감 오버레이 */}
      {isEnded && (
        <>
          <div className="absolute inset-0 z-10 bg-black/80">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-3 py-[6px]">
              <p className="whitespace-pre-line text-center text-sm font-medium text-white">
                {'마감된 챌린지에요,\n다음 기회에 만나요 🙏'}
              </p>
              {isLiked && (
                <button
                  className="flex w-fit items-center justify-center gap-1 rounded-xl bg-orange-50 px-3 py-[6px] sm:hidden"
                  onClick={(e) => {
                    e.stopPropagation();
                    onLikeToggleClick?.();
                  }}
                >
                  <WaveIcon />
                  <span className="text-xs font-semibold text-orange-600">
                    모임 보내주기
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* 태블릿, 데스크톱 레이아웃 우측 상단 찜하기 아이콘 */}
          {isLiked && (
            <div className="absolute right-6 top-6 z-20 hidden sm:block">
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50"
                onClick={(e) => {
                  e.stopPropagation();
                  onLikeToggleClick?.();
                }}
              >
                <WaveIcon />
              </button>
            </div>
          )}
        </>
      )}
    </article>
  );
}

export default Card;
