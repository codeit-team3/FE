import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import {
  HostIcon,
  OnlineIcon,
  LocationIcon,
} from '../../../../../public/icons';
import {
  ChatCardBoxProps,
  ChatCardTitleProps,
  ChatCardImageProps,
  ChatCardLocationProps,
  ChatCardDateTimeProps,
  ChatCardLastMessageProps,
  ChatCardLastMessageTimeProps,
  ChatCardComponentProps,
  ChatRoomHeaderProps,
  BookClubProps,
  ChatCardVariant,
} from './types';
import defaultBookClub from '../../../../../public/images/defaultBookClub.jpg';
import ParticipantCounter from '@/components/participant-counter/ParticipantCounter';
import Badge from '@/components/badge/Badge';

function ChatCardBox({
  children,
  className,
  isHost,
  onClick,
  ...props
}: ChatCardBoxProps) {
  return (
    <div
      className={twMerge(
        'relative flex min-h-[74px] w-full min-w-[336px] flex-col rounded-[20px] border-2 bg-gray-light-01 p-3 md:min-h-[155px] md:p-6',
        isHost ? 'border-green-normal-01' : 'border-gray-normal-01',
        onClick && 'cursor-pointer',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

function ChatCardTitle({ children, className, ...props }: ChatCardTitleProps) {
  return (
    <h3
      className={twMerge(
        'truncate font-semibold text-gray-black md:text-xl',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function ChatCardImage({
  url,
  alt = '채팅방 이미지',
  isHost,
  className,
  ...props
}: ChatCardImageProps) {
  return (
    <div className="relative" {...props}>
      <div
        className={twMerge(
          'relative h-[50px] w-[50px] overflow-hidden rounded-[10px] md:h-[100px] md:w-[100px] md:rounded-[20px]',
          className,
        )}
      >
        <Image
          src={url || defaultBookClub}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {isHost && (
        <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-gray-normal-01 bg-green-normal-01 md:-right-2 md:h-6 md:w-6">
          <HostIcon
            width={8}
            height={8}
            className="md:h-[13px] md:w-[13px]"
            data-testid="host-icon"
          />
        </div>
      )}
    </div>
  );
}

function ChatCardLocation({
  meetingType,
  children,
  className,
  textClassName,
  ...props
}: ChatCardLocationProps) {
  const displayText =
    meetingType === 'ONLINE' ? '온라인' : children || '위치 정보 없음';

  return (
    <div className={twMerge('flex items-center', className)} {...props}>
      {meetingType === 'ONLINE' ? <OnlineIcon /> : <LocationIcon />}
      <span
        className={twMerge(
          'text-xs font-semibold text-green-normal-02 md:text-sm',
          textClassName,
        )}
      >
        {displayText}
      </span>
    </div>
  );
}

function ChatCardDateTime({
  children,
  className,
  ...props
}: ChatCardDateTimeProps) {
  return (
    <span
      className={twMerge(
        'text-xs font-medium text-gray-dark-03 md:text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function ChatCardLastMessage({
  children,
  className,
  ...props
}: ChatCardLastMessageProps) {
  return (
    <div
      className={twMerge(
        'min-w-0 flex-1 truncate text-sm font-medium text-gray-dark-01 md:text-base',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ChatCardLastMessageTime({
  children,
  className,
  ...props
}: ChatCardLastMessageTimeProps) {
  return (
    <span
      className={twMerge(
        'shrink-0 text-xs font-medium text-gray-normal-03 md:text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function ChatCard<T extends ChatCardVariant>({
  variant,
  props,
}: ChatCardComponentProps<T>) {
  const renderContent = () => {
    switch (variant) {
      case 'bookClub': {
        const {
          imageUrl,
          isHost,
          title,
          currentParticipants,
          lastMessage,
          lastMessageTime,
          unreadCount,
          className,
          onClick,
        } = props as BookClubProps;

        return (
          <ChatCardBox isHost={isHost} className={className} onClick={onClick}>
            <div className="flex w-full items-center gap-3 md:gap-6">
              <ChatCardImage url={imageUrl} isHost={isHost} />

              <div className="flex min-w-0 flex-1 flex-col gap-[10px] md:gap-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-1">
                    <ChatCardTitle>{title}</ChatCardTitle>
                    <ParticipantCounter current={currentParticipants} />
                  </div>
                  {unreadCount && unreadCount > 0 && (
                    <>
                      <Badge
                        count={unreadCount}
                        size="sm"
                        className="md:hidden"
                      />
                      <Badge
                        count={unreadCount}
                        size="md"
                        className="hidden md:flex"
                      />
                    </>
                  )}
                </div>

                <div className="flex min-w-0 items-center justify-between gap-2">
                  <ChatCardLastMessage>{lastMessage}</ChatCardLastMessage>
                  <ChatCardLastMessageTime>
                    {lastMessageTime}
                  </ChatCardLastMessageTime>
                </div>
              </div>
            </div>
          </ChatCardBox>
        );
      }

      case 'chatRoomHeader': {
        const {
          imageUrl,
          isHost,
          title,
          location,
          datetime,
          meetingType,
          className,
          onClick,
        } = props as ChatRoomHeaderProps;

        return (
          <ChatCardBox isHost={isHost} className={className} onClick={onClick}>
            <div className="flex w-full items-center gap-3 md:gap-6">
              <ChatCardImage url={imageUrl} isHost={isHost} />

              <div className="flex min-w-0 flex-1 flex-col">
                <ChatCardTitle>{title}</ChatCardTitle>
                <div className="flex min-w-0 items-center gap-1 md:gap-1.5">
                  <ChatCardLocation meetingType={meetingType}>
                    {location}
                  </ChatCardLocation>
                  <ChatCardDateTime>{datetime}</ChatCardDateTime>
                </div>
              </div>
            </div>
          </ChatCardBox>
        );
      }

      default:
        return null;
    }
  };

  return renderContent();
}

ChatCard.Box = ChatCardBox;
ChatCard.Title = ChatCardTitle;
ChatCard.Image = ChatCardImage;
ChatCard.Location = ChatCardLocation;
ChatCard.DateTime = ChatCardDateTime;
ChatCard.LastMessage = ChatCardLastMessage;
ChatCard.LastMessageTime = ChatCardLastMessageTime;

export default ChatCard;
