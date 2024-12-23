import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { HostIcon } from '../../../public/icons';
import {
  ChatCardBoxProps,
  ChatCardTitleProps,
  ChatCardImageProps,
  ChatCardLocationProps,
  ChatCardDateTimeProps,
  ChatCardLastMessageProps,
  ChatCardLastMessageTimeProps,
  ChatCardComponentProps,
} from './types';
import { LocationIcon } from '../../../public/icons';
import defaultBookClub from '../../../public/images/defaultBookClub.jpg';
import ParticipantCounter from '../participant-counter/ParticipantCounter';
import Badge from '../badge/Badge';

function ChatCardBox({
  children,
  className,
  isHost,
  ...props
}: ChatCardBoxProps) {
  return (
    <div
      className={twMerge(
        'relative flex min-h-[74px] w-[336px] flex-col rounded-[20px] border-2',
        isHost ? 'border-green-normal-01' : 'border-gray-normal-01',
        'p-3 md:min-h-[155px] md:w-full md:p-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ChatCardTitle({ children, className, ...props }: ChatCardTitleProps) {
  return (
    <h3
      className={twMerge('font-semibold text-gray-black md:text-xl', className)}
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
          <HostIcon width={8} height={8} className="md:h-[13px] md:w-[13px]" />
        </div>
      )}
    </div>
  );
}

function ChatCardLocation({
  children,
  className,
  textClassName,
  ...props
}: ChatCardLocationProps) {
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

function ChatCardDateTime({
  children,
  className,
  ...props
}: ChatCardDateTimeProps) {
  return (
    <span
      className={twMerge('text-sm font-medium text-gray-dark-03', className)}
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
        'text-sm font-medium text-gray-dark-01 md:text-base',
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
        'text-xs font-medium text-gray-normal-03 md:text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function ChatCard({ variant, props }: ChatCardComponentProps) {
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
        } = props;

        return (
          <ChatCardBox isHost={isHost} className={className}>
            <div className="flex items-center gap-3 md:gap-6">
              <ChatCardImage url={imageUrl} isHost={isHost} />

              <div className="flex flex-1 flex-col gap-[10px] md:gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <ChatCardTitle>{title}</ChatCardTitle>
                    <ParticipantCounter current={currentParticipants} />
                  </div>
                  {unreadCount && unreadCount > 0 && (
                    <Badge count={unreadCount} size="md" />
                  )}
                </div>

                <div className="flex items-center justify-between">
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

      case 'default':
        return null; // 기본 케이스 처리

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
