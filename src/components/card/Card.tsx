'use client';

import { createContext, useContext } from 'react';
import ParticipantCounter from '../participant-counter/ParticipantCounter';
import ProgressBar from '../progress-bar/ProgressBar';
import Avatar from '../avatar/Avatar';
import {
  LocationIcon,
  HostIcon,
  // HeartIcon,
  RatingIcon,
  OnlineIcon,
} from '../../../public/icons';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import {
  CardBoxProps,
  CardTitleProps,
  CardLocationProps,
  CardDateTimeProps,
  CardOverlayProps,
  CardImageProps,
  CardProps,
  DefaultClubCard,
  HostedClubCard,
  ParticipatedClubCard,
  DetailedClubCard,
  CardHostInfo,
  CardContextType,
} from './types';
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
  // isLiked,
  // onLikeClick,
  className,
  isPast,
  // isHost,
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
      <Image
        src={url}
        alt={alt}
        fill
        className={twMerge('object-cover', isPast && 'grayscale')}
      />
      {/* {isLiked !== undefined && !isHost && (
        <div className="absolute right-5 top-[15px] z-10">
          <HeartIcon isLiked={isLiked} onClick={onLikeClick} />
        </div>
      )} */}
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
  meetingType,
  isPast,
  ...props
}: CardLocationProps) {
  const displayText =
    meetingType === 'ONLINE' ? '온라인' : children || '위치 정보 없음';

  return (
    <div className={twMerge('flex items-center', className)} {...props}>
      {meetingType === 'ONLINE' ? (
        <OnlineIcon isPast={isPast} />
      ) : (
        <LocationIcon isPast={isPast} />
      )}
      <span
        className={twMerge(
          'text-sm font-semibold',
          isPast ? 'text-gray-dark-03' : 'text-green-normal-02',
          textClassName,
        )}
      >
        {displayText}
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

// Host 컴포넌트 (호스트 정보)
function CardHost({
  nickname,
  avatar,
  className,
  isHost,
  onHostClick,
  ...props
}: CardHostInfo) {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`} {...props}>
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-normal-01">
          <Avatar
            size="md"
            src={avatar?.src || '/images/profile.png'}
            alt={avatar?.alt || `${nickname}님의 프로필`}
            onClick={onHostClick}
          />
        </div>
        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-normal-01 bg-green-normal-01">
          <HostIcon />
        </div>
      </div>
      <span className="text-xl font-semibold">
        <span className="text-green-normal-01">
          {isHost ? '나' : `${nickname}님`}
        </span>
        <span className="text-gray-darker">의 모임</span>
      </span>
    </div>
  );
}

function Card(props: CardProps) {
  const renderCardContent = () => {
    switch (props.variant) {
      case 'defaultClub':
      default: {
        const {
          clubId,
          imageUrl,
          imageAlt,
          title,
          location,
          datetime,
          isLiked,
          current,
          max,
          isPast,
          isCanceled,
          isHost,
          // meetingType,
          bookClubType,
          clubStatus,
          onLikeClick,
          onClick,
          onDelete,
          meetingType,
        } = props as DefaultClubCard & { variant: 'defaultClub' };

        return (
          <div className="flex flex-col gap-6 md:flex-row">
            <Card.Image
              url={imageUrl}
              alt={imageAlt}
              isLiked={isLiked}
              isPast={isPast}
              isHost={isHost}
              onLikeClick={onLikeClick}
            />

            <Card.Box
              onClick={() => onClick?.(clubId)}
              className="justify-between"
            >
              <div className="flex flex-col gap-0.5">
                <div className="flex justify-between">
                  <Card.Title>{title}</Card.Title>
                  <ClubChip variant={bookClubType} isPast={isPast} />
                </div>
                <div className="flex items-center gap-1.5">
                  <Card.Location meetingType={meetingType} isPast={isPast}>
                    {location}
                  </Card.Location>
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
                  <ClubChip variant={clubStatus} isPast={isPast} />
                </div>
                <ProgressBar
                  percentage={(current / max) * 100}
                  isPast={isPast}
                />
              </div>
            </Card.Box>
            {isCanceled && <Card.Overlay onDelete={() => onDelete?.()} />}
          </div>
        );
      }

      case 'participatedClub': {
        const {
          clubId,
          imageUrl,
          imageAlt,
          isCanceled,
          onClick,
          onDelete,
          clubStatus,
          meetingType,
          bookClubType,
          title,
          location,
          datetime,
          isPast,
          onWriteReview,
          onCancel,
        } = props as ParticipatedClubCard & { variant: 'participatedClub' };

        return (
          <div className="flex flex-col gap-6 md:flex-row">
            <Card.Image url={imageUrl} alt={imageAlt} />
            <Card.Box
              onClick={() => onClick?.(clubId)}
              className="justify-between"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <ClubChip variant={isPast ? 'completed' : 'scheduled'} />
                    <ClubChip variant={clubStatus} />
                  </div>
                  <ClubChip variant={bookClubType} />
                </div>
                <div className="flex flex-col">
                  <Card.Title>{title}</Card.Title>
                  <div className="flex items-center gap-1.5">
                    <Card.Location meetingType={meetingType} isPast={isPast}>
                      {location}
                    </Card.Location>
                    <Card.DateTime>{datetime}</Card.DateTime>
                  </div>
                </div>
                <div className="w-full">
                  {isPast ? (
                    <Button
                      text="리뷰 작성하기"
                      size="modal"
                      fillType="solid"
                      themeColor="green-normal-01"
                      onClick={(e) => {
                        e.stopPropagation();
                        onWriteReview(clubId);
                      }}
                      className="w-full"
                    />
                  ) : (
                    <Button
                      text="참여 취소하기"
                      size="modal"
                      fillType="lightSolid"
                      themeColor="gray-dark-01"
                      lightColor="gray-normal-01"
                      onClick={(e) => {
                        e.stopPropagation();
                        onCancel(clubId);
                      }}
                      className="w-full"
                    />
                  )}
                </div>
              </div>
            </Card.Box>
            {isCanceled && <Card.Overlay onDelete={() => onDelete(clubId)} />}
          </div>
        );
      }

      case 'hostedClub': {
        const {
          clubId,
          imageUrl,
          imageAlt,
          onClick,
          clubStatus,
          meetingType,
          bookClubType,
          isPast,
          title,
          location,
          datetime,
          onCancel,
          reviewScore,
        } = props as HostedClubCard & { variant: 'hostedClub' };

        return (
          <div className="flex flex-col gap-6 md:flex-row">
            <Card.Image url={imageUrl} alt={imageAlt} />
            <Card.Box
              onClick={() => onClick?.(clubId)}
              className="justify-between"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between">
                  <ClubChip variant={isPast ? 'completed' : clubStatus} />
                  <ClubChip variant={bookClubType} />
                </div>
                <div className="flex flex-col">
                  <Card.Title>{title}</Card.Title>
                  <div className="flex items-center gap-1.5">
                    <Card.Location meetingType={meetingType} isPast={isPast}>
                      {location}
                    </Card.Location>
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
                        onCancel(clubId);
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
                          아직 작성된 리뷰가 없습니다
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card.Box>
          </div>
        );
      }

      case 'detailedClub': {
        const {
          clubId,
          imageUrl,
          imageAlt,
          title,
          location,
          datetime,
          isLiked,
          onLikeClick,
          bookClubType,
          meetingType,
          current,
          max,
          isPast,
          host,
          clubStatus,
          onClick,
          onHostClick,
          isHost,
          isParticipant,
          hasWrittenReview,
          onCancel,
          onParticipate,
          onCancelParticipation,
          onWriteReview,
        } = props as DetailedClubCard & { variant: 'detailedClub' };

        const renderButton = () => {
          if (isHost) {
            return (
              <Button
                text="취소하기"
                size="modal"
                fillType="lightSolid"
                themeColor="gray-dark-01"
                lightColor="gray-normal-01"
                disabled={isPast}
                onClick={(e) => {
                  e.stopPropagation();
                  onCancel?.();
                }}
                className="w-full"
              />
            );
          }

          if (isPast) {
            if (!isParticipant) {
              return (
                <Button
                  text="이미 지난 모임입니다"
                  size="modal"
                  fillType="lightSolid"
                  themeColor="gray-dark-01"
                  lightColor="gray-normal-01"
                  disabled={true}
                  className="w-full"
                />
              );
            }

            return (
              <Button
                text="리뷰 작성하기"
                size="modal"
                fillType="solid"
                themeColor="green-normal-01"
                disabled={hasWrittenReview}
                onClick={(e) => {
                  e.stopPropagation();
                  onWriteReview?.();
                }}
                className="w-full"
              />
            );
          }

          if (isParticipant) {
            return (
              <Button
                text="참여 취소하기"
                size="modal"
                fillType="lightSolid"
                themeColor="gray-dark-01"
                lightColor="gray-normal-01"
                onClick={(e) => {
                  e.stopPropagation();
                  onCancelParticipation?.();
                }}
                className="w-full"
              />
            );
          }

          return (
            <Button
              text="참여하기"
              size="modal"
              fillType="solid"
              themeColor="green-normal-01"
              onClick={(e) => {
                e.stopPropagation();
                onParticipate?.();
              }}
              className="w-full"
            />
          );
        };

        return (
          <div className="flex flex-col gap-6 md:flex-row">
            <Card.Image
              url={imageUrl}
              alt={imageAlt}
              isLiked={isLiked}
              onLikeClick={onLikeClick}
              isPast={isPast}
              className="md:h-100%"
            />

            <div className="flex flex-1 flex-col gap-[14px]">
              <div className="flex flex-col gap-2">
                <Card.Host
                  nickname={host.name}
                  avatar={{
                    src: host.profileImage,
                    alt: `${host.name}님의 프로필`,
                  }}
                  isHost={isHost}
                  onClick={onHostClick}
                />

                <Card.Box
                  onClick={() => onClick?.(clubId)}
                  className="justify-between"
                >
                  <div className="flex flex-col gap-0.5">
                    <div className="flex justify-between">
                      <Card.Title>{title}</Card.Title>
                      <ClubChip variant={bookClubType} isPast={isPast} />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Card.Location meetingType={meetingType} isPast={isPast}>
                        {location}
                      </Card.Location>
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
                      <ClubChip variant={clubStatus} isPast={isPast} />
                    </div>
                    <ProgressBar
                      percentage={(current / max) * 100}
                      isPast={isPast}
                    />
                  </div>
                </Card.Box>
              </div>

              <div className="w-[336px] md:w-full">{renderButton()}</div>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <CardContext.Provider
      value={{ isCanceled: 'isCanceled' in props ? props.isCanceled : false }}
    >
      <article
        className={twMerge(
          'relative flex h-full min-w-[336px] flex-col md:w-full',
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
Card.Host = CardHost;

export default Card;
