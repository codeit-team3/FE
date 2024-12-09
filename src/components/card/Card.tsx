import { createContext, useContext, ReactNode } from 'react';
import Chip from '@/components/chip/Chip';
import ParticipantCounter from '../participant-counter/ParticipantCounter';
import AvatarGroup from '../avatar-group/AvatarGroup';
import ConfirmedLabel from '../confirmed-label/ConfirmedLabel';
import ProgressBar from '../progress-bar/ProgressBar';
import Avatar from '../avatar/Avatar';
import { LocationIcon, HostIcon, HeartIcon } from '../../../public/icons';
import Image from 'next/image';

interface CardContextType {
  isEnded?: boolean;
}

const CardContext = createContext<CardContextType>({});

// 메인 Card 컴포넌트
export interface CardProps {
  children?: ReactNode;
  isEnded?: boolean;
}

// Box 컴포넌트 추가
interface CardBoxProps {
  children: ReactNode;
  className?: string;
}

function CardBox({ children, className = '' }: CardBoxProps) {
  return (
    <div
      className={`flex min-h-[180px] flex-col justify-between rounded-2xl border border-gray-200 p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function Card({ children, isEnded = false }: CardProps) {
  return (
    <CardContext.Provider value={{ isEnded }}>
      <article className="relative flex h-full w-full min-w-[336px] flex-col gap-4">
        {children}
      </article>
    </CardContext.Provider>
  );
}

// CardInfo 컴포넌트 (기존 CardMeetingInfo)
interface CardInfoProps {
  title: string;
  category: string;
  location: string;
  datetime: string;
  isPast?: boolean;
}

function CardInfo({
  title,
  category,
  location,
  datetime,
  isPast = false,
}: CardInfoProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-black">{title}</h3>
        <Chip text={category} isPast={isPast} />
      </div>
      <div className="flex items-center gap-1.5 text-sm text-gray-dark-03">
        <div className="flex items-center">
          <LocationIcon />
          <span className="font-semibold">{location}</span>
        </div>
        <span className="font-medium">{datetime}</span>
      </div>
    </div>
  );
}

// CardStatus 컴포넌트 (기존 CardParticipantInfo)
interface CardStatusProps {
  currentParticipants: number;
  maxParticipants: number;
  isConfirmed?: boolean;
  isPast?: boolean;
  participants: Array<{
    src: string;
    alt: string;
  }>;
}

function CardStatus({
  currentParticipants,
  maxParticipants,
  isConfirmed = false,
  isPast = false,
  participants,
}: CardStatusProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <ParticipantCounter
            current={currentParticipants}
            max={maxParticipants}
            isPast={isPast}
          />
          <AvatarGroup isPast={isPast}>
            {participants.map((participant, index) => (
              <Avatar key={index} src={participant.src} alt={participant.alt} />
            ))}
          </AvatarGroup>
        </div>
        {isConfirmed && <ConfirmedLabel variant="confirmed" isPast={isPast} />}
      </div>
      <ProgressBar
        percentage={(currentParticipants / maxParticipants) * 100}
        isPast={isPast}
      />
    </div>
  );
}

// Overlay 컴포넌트
function CardEndedOverlay() {
  const { isEnded } = useContext(CardContext);
  if (!isEnded) return null;

  return (
    <div className="absolute inset-0 z-10 bg-black/80">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <p className="whitespace-pre-line text-center text-sm font-medium text-white">
          {'마감된 챌린지에요,\n다음 기회에 만나요 🙏'}
        </p>
      </div>
    </div>
  );
}

// Host 컴포넌트 인터페이스
interface CardHostProps {
  nickname: string;
}

// Host 컴포넌트
function CardHost({ nickname }: CardHostProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-normal-01">
          <Avatar
            size="md"
            src={`https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`}
            alt={`${nickname}님의 프로필`}
          />
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-normal-01 bg-green-normal-01">
          <HostIcon />
        </div>
      </div>
      <span className="text-sm">
        <span className="text-green-normal-01">{nickname}님</span>
        <span className="text-gray-darker">의 모임</span>
      </span>
    </div>
  );
}

// Image 컴포넌트 인터페이스
interface CardImageProps {
  url: string;
  alt?: string;
  isLiked?: boolean;
  onLikeClick?: () => void;
}

// Image 컴포넌트
function CardImage({
  url,
  alt = '모임 이미지',
  isLiked = false,
  onLikeClick,
}: CardImageProps) {
  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
      <Image src={url} alt={alt} fill className="object-cover" />
      <div className="absolute right-5 top-[15px] z-10">
        <HeartIcon isLiked={isLiked} onClick={onLikeClick} />
      </div>
    </div>
  );
}

// Compound Components 설정
Card.Box = CardBox;
Card.Info = CardInfo;
Card.Status = CardStatus;
Card.EndedOverlay = CardEndedOverlay;
Card.Host = CardHost;
Card.Image = CardImage;

export default Card;
