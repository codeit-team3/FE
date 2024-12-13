import { createContext, useContext } from 'react';
import Chip from '@/components/chip/Chip';
import ParticipantCounter from '../participant-counter/ParticipantCounter';
import AvatarGroup from '../avatar-group/AvatarGroup';
import ConfirmedLabel from '../confirmed-label/ConfirmedLabel';
import ProgressBar from '../progress-bar/ProgressBar';
import Avatar from '../avatar/Avatar';
import {
  LocationIcon,
  HostIcon,
  HeartIcon,
  RatingIcon,
} from '../../../public/icons';
import Image from 'next/image';
import {
  CardContextType,
  CardInfoProps,
  CardStatusProps,
  CardHostProps,
} from './types';
import { twMerge } from 'tailwind-merge';
import {
  CardBoxProps,
  CardTitleProps,
  CardLocationProps,
  CardDateTimeProps,
  CardOverlayProps,
  CardImageProps,
  CardProps,
} from './types/interface';
import ClubChip from '@/components/chip/club-chip/ClubChip';
import Button from '@/components/button/Button';

const CardContext = createContext<CardContextType>({ isCanceled: false });

// Box 컴포넌트
function CardBox({ children, className = '', ...props }: CardBoxProps) {
  return (
    <div
      className={twMerge(
        'relative flex min-h-[180px] w-[336px] flex-1 flex-col rounded-[20px] border-2 border-gray-normal-01 p-6 md:w-full',
        props.onClick && 'cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

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
      className={twMerge(
        'relative min-h-[180px] w-[336px] overflow-hidden rounded-[20px] lg:w-[384px]',
        className,
      )}
      {...props}
    >
      <Image src={url} alt={alt} fill className="object-cover" />
      <div className="absolute right-5 top-[15px] z-10">
        <HeartIcon isLiked={isLiked} onClick={onLikeClick} />
      </div>
    </div>
  );
}

function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3
      className={twMerge('text-xl font-semibold text-gray-black', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

function CardLocation({
  children,
  className,
  textClassName,
  ...props
}: CardLocationProps) {
  return (
    <div className={twMerge('flex items-center', className)} {...props}>
      <LocationIcon />
      <span
        className={twMerge(
          'text-sm font-semibold text-gray-dark-03',
          textClassName,
        )}
      >
        {children}
      </span>
    </div>
  );
}

function CardDateTime({ children, className, ...props }: CardDateTimeProps) {
  return (
    <span
      className={twMerge('text-sm font-medium text-gray-dark-03', className)}
      {...props}
    >
      {children}
    </span>
  );
}

// Overlay (모임 취소시 표시되는 오버레이)
function CardOverlay({ onDelete }: CardOverlayProps) {
  const { isCanceled } = useContext(CardContext);

  if (!isCanceled) return null;

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <div className="absolute inset-0 z-10 w-[336px] rounded-2xl bg-black/80 md:w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <p className="whitespace-pre-line text-center text-sm text-white">
          {'호스트가 모임을 취소했어요.'}
          <br />
          {'새로운 모임을 찾아볼까요?'}
        </p>
        <Button
          text="삭제하기"
          size="small"
          fillType="lightSolid"
          themeColor="gray-darker"
          lightColor="gray-white"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
}

function Card(props: CardProps) {
  const renderCardContent = () => {
    switch (props.variant) {
      case 'defaultClub':
      default: {
        const {
          imageUrl,
          imageAlt,
          title,
          location,
          datetime,
          isLiked,
          onLikeClick,
          current,
          max,
          isPast,
          isCanceled,
          meetingType,
          onClick,
          onDelete,
          status,
        } = props;

        return (
          <div className="flex flex-col gap-6 md:flex-row">
            <Card.Image
              url={imageUrl}
              alt={imageAlt}
              isLiked={isLiked}
              onLikeClick={onLikeClick}
            />

            <Card.Box onClick={onClick} className="justify-between">
              <div className="flex flex-col gap-0.5">
                <div className="flex justify-between">
                  <Card.Title>{title}</Card.Title>
                  <ClubChip variant={meetingType} isPast={isPast} />
                </div>
                <div className="flex items-center gap-1.5">
                  <Card.Location>{location}</Card.Location>
                  <Card.DateTime>{datetime}</Card.DateTime>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <ParticipantCounter
                    current={current}
                    max={max}
                    isPast={isPast}
                  />
                  <ClubChip variant={status} isPast={isPast} />
                </div>
                <ProgressBar
                  percentage={(current / max) * 100}
                  isPast={isPast}
                />
              </div>
            </Card.Box>
            {isCanceled && <Card.Overlay onDelete={onDelete} />}
          </div>
        );
      }

      case 'participatedClub': {
        const {
          imageUrl,
          imageAlt,
          isLiked,
          onLikeClick,
          isCanceled,
          onClick,
          onDelete,
          status,
          meetingType,
          isPast,
          title,
          location,
          datetime,
          onCancel,
          reviewScore,
        } = props;

        return (
          <div className="flex flex-col gap-6 md:flex-row">
            <Card.Image
              url={imageUrl}
              alt={imageAlt}
              isLiked={isLiked}
              onLikeClick={onLikeClick}
            />
            <Card.Box onClick={onClick} className="justify-between">
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between">
                  <ClubChip variant={isPast ? 'completed' : status} />
                  <ClubChip variant={meetingType} />
                </div>
                <div className="flex flex-col">
                  <Card.Title>{title}</Card.Title>
                  <div className="flex items-center gap-1.5">
                    <Card.Location>{location}</Card.Location>
                    <Card.DateTime>{datetime}</Card.DateTime>
                  </div>
                </div>
                <div className="w-full">
                  {!isPast ? (
                    <Button
                      text="모임 취소하기"
                      size="modal"
                      fillType="lightSolid"
                      themeColor="gray-dark-01"
                      lightColor="gray-normal-01"
                      onClick={(e) => {
                        e.stopPropagation();
                        onCancel();
                      }}
                      className="w-full"
                    />
                  ) : (
                    <div className="pt-3 font-semibold">
                      {reviewScore ? (
                        <div className="flex items-center gap-1">
                          <span className="text-gray-darker">
                            북코들의 평점
                          </span>
                          <div className="flex items-center gap-1">
                            <RatingIcon checked={true} />
                            <span className="text-gray-darker">
                              {reviewScore}
                            </span>
                            <span className="text-gray-dark-01">/ 5</span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-dark-01">
                          아직 리뷰가 달리지 않았습니다
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card.Box>
            {isCanceled && <Card.Overlay onDelete={onDelete} />}
          </div>
        );
      }

      case 'hostedClub':
        return null; // 추후 구현
    }
  };

  return (
    <CardContext.Provider value={{ isCanceled: props.isCanceled }}>
      <article
        className={twMerge(
          'relative flex h-full w-full min-w-[336px] flex-col',
        )}
      >
        {renderCardContent()}
      </article>
    </CardContext.Provider>
  );
}

Card.Box = CardBox;
Card.Image = CardImage;
Card.Title = CardTitle;
Card.Location = CardLocation;
Card.DateTime = CardDateTime;
Card.Overlay = CardOverlay;

/////////////////////////////////////////////////////////////////////// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

Card.Info = CardInfo;
Card.Status = CardStatus;
Card.Host = CardHost;

// Info 컴포넌트 (��임에 관한 정보 - 제목, 위치, 날짜 등)
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

export default Card;

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
