import { createContext, useContext } from 'react';
import Chip from '@/components/chip/Chip';
import ParticipantCounter from '../participant-counter/ParticipantCounter';
import AvatarGroup from '../avatar-group/AvatarGroup';
import ConfirmedLabel from '../confirmed-label/ConfirmedLabel';
import ProgressBar from '../progress-bar/ProgressBar';
import Avatar from '../avatar/Avatar';
import { LocationIcon, HostIcon, HeartIcon } from '../../../public/icons';
import Image from 'next/image';
import {
  CardContextType,
  CardProps,
  CardBoxProps,
  CardInfoProps,
  CardStatusProps,
  CardHostProps,
  CardImageProps,
  CardEndedOverlayProps,
} from './types';

const CardContext = createContext<CardContextType>({ isCanceled: false });

// 메인 Card
function Card({
  children,
  isCanceled = false,
  className,
  ...props
}: CardProps) {
  return (
    <CardContext.Provider value={{ isCanceled }}>
      <article
        className={`relative flex h-full w-full min-w-[336px] flex-col gap-4 ${className || ''}`}
        {...props}
      >
        {children}
      </article>
    </CardContext.Provider>
  );
}

// Box 컴포넌트 (CardInfo + CardStatus)
function CardBox({
  children,
  className = '',
  onClick,
  ...props
}: CardBoxProps) {
  return (
    <div
      className={`flex min-h-[180px] w-[336px] flex-col justify-between rounded-2xl border border-gray-normal-01 p-6 md:w-full ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

// Info 컴포넌트 (모임에 관한 정보 - 제목, 위치, 날짜 등)
function CardInfo({
  title,
  category,
  location,
  datetime,
  isPast = false,
  className,
  ...props
}: CardInfoProps) {
  return (
    <div className={`flex flex-col ${className || ''}`} {...props}>
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

// Status 컴포넌트 (참가지 및 개설 여부 현황)
function CardStatus({
  currentParticipants,
  maxParticipants,
  isConfirmed = false,
  confirmedVariant = 'confirmed',
  isPast = false,
  participants,
  className,
  ...props
}: CardStatusProps) {
  return (
    <div className={`flex flex-col gap-2 ${className || ''}`} {...props}>
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
        {isConfirmed && (
          <ConfirmedLabel variant={confirmedVariant} isPast={isPast} />
        )}
      </div>
      <ProgressBar
        percentage={(currentParticipants / maxParticipants) * 100}
        isPast={isPast}
      />
    </div>
  );
}

// Overlay (모임 취소시 표시되는 오버레이)
function CardEndedOverlay({ onDelete }: CardEndedOverlayProps) {
  const { isCanceled } = useContext(CardContext);

  if (!isCanceled) return null;

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <div className="absolute inset-0 z-10 rounded-2xl bg-black/80">
      <div className="flex h-full w-full flex-col items-center justify-center gap-[10px]">
        <p className="whitespace-pre-line text-center font-semibold text-white">
          {'호스트가 모임을 취소했어요.'}
        </p>
        {/* TODO:: 삭제 버튼 공통 컴포넌트 변경 필요 */}
        <button
          onClick={handleDeleteClick}
          className="w-[120px] rounded-xl bg-white py-2"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

// Host 컴포넌트 (호스트 정보)
function CardHost({
  nickname,
  avatar,
  className,
  onClick,
  ...props
}: CardHostProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`} {...props}>
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-normal-01">
          <Avatar
            size="md"
            src={
              avatar?.src ||
              `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`
            }
            alt={avatar?.alt || `${nickname}님의 프로필`}
            onClick={onClick}
          />
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-normal-01 bg-green-normal-01">
          <HostIcon />
        </div>
      </div>
      <span className="text-xl font-semibold">
        <span className="text-green-normal-01">{nickname}님</span>
        <span className="text-gray-darker">의 모임</span>
      </span>
    </div>
  );
}

// Image 컴포넌트 (모임 이미지)
function CardImage({
  url,
  alt = '모임 이미지',
  isLiked = false,
  onLikeClick,
  className,
  ...props
}: CardImageProps) {
  return (
    <div
      className={`relative min-h-[180px] w-full overflow-hidden rounded-[20px] ${className || ''}`}
      {...props}
    >
      <Image src={url} alt={alt} fill className="object-cover" />
      <div className="absolute right-5 top-[15px] z-10">
        <HeartIcon isLiked={isLiked} onClick={onLikeClick} />
      </div>
    </div>
  );
}

Card.Box = CardBox;
Card.Info = CardInfo;
Card.Status = CardStatus;
Card.EndedOverlay = CardEndedOverlay;
Card.Host = CardHost;
Card.Image = CardImage;

export default Card;
