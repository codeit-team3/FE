import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { HostIcon } from '../../../public/icons';
import {
  ChatCardProps,
  ChatCardBoxProps,
  ChatCardTitleProps,
  ChatCardImageProps,
  ChatCardLocationProps,
  ChatCardDateTimeProps,
  ChatCardLastMessageProps,
  ChatCardLastMessageTimeProps,
} from './types';
import { LocationIcon } from '../../../public/icons';

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
    <div
      className={twMerge(
        'relative h-[50px] w-[50px] overflow-hidden rounded-[20px] md:h-[100px] md:w-[100px]',
        className,
      )}
      {...props}
    >
      <Image src={url} alt={alt} fill className="object-cover" />
      {isHost && (
        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-normal-01 bg-green-normal-01">
          <HostIcon />
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
        'text-xs font-medium text-gray-dark-01 md:text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

function ChatCard({ children, className, ...props }: ChatCardProps) {
  return (
    <article
      className={twMerge('relative flex flex-col', className)}
      {...props}
    >
      {children}
    </article>
  );
}

ChatCard.Box = ChatCardBox;
ChatCard.Title = ChatCardTitle;
ChatCard.Image = ChatCardImage;
ChatCard.Location = ChatCardLocation;
ChatCard.DateTime = ChatCardDateTime;
ChatCard.LastMessage = ChatCardLastMessage;
ChatCard.LastMessageTime = ChatCardLastMessageTime;

export default ChatCard;
