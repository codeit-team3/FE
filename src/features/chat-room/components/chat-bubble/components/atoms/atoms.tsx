import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { HostIcon } from '../../../../../../../public/icons';
import Avatar from '@/components/avatar/Avatar';

interface ChatBubbleContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'ME' | 'OPPONENT' | 'SYSTEM';
}

export function ChatBubbleContainer({
  variant,
  className,
  children,
  ...props
}: ChatBubbleContainerProps) {
  return (
    <div
      className={twMerge(
        'flex w-full',
        variant === 'ME' && 'justify-end',
        variant === 'OPPONENT' && 'justify-start',
        variant === 'SYSTEM' && 'justify-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface ChatBubbleBoxProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'ME' | 'OPPONENT';
}

export function ChatBubbleBox({
  variant,
  children,
  className,
  ...props
}: ChatBubbleBoxProps) {
  return (
    <div
      className={twMerge(
        'whitespace-pre-wrap rounded-xl px-4 py-[10px]',
        variant === 'ME' && [
          'rounded-tr-none bg-green-light-01 font-medium text-green-dark-03',
        ],
        variant === 'OPPONENT' && [
          'rounded-tl-none bg-gray-normal-01 text-gray-darker',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface ChatBubbleTimeProps extends HTMLAttributes<HTMLSpanElement> {}

export function ChatBubbleTime({
  children,
  className,
  ...props
}: ChatBubbleTimeProps) {
  return (
    <span
      className={twMerge(
        'whitespace-nowrap text-xs font-light text-gray-normal-03',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

interface ChatBubbleProfileProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  imageUrl: string;
  isHost?: boolean;
}

export function ChatBubbleProfile({
  name,
  imageUrl,
  isHost,
  className,
  onClick,
  ...props
}: ChatBubbleProfileProps) {
  return (
    <div className={twMerge('flex items-start gap-3', className)} {...props}>
      <div
        className={twMerge('relative', onClick && 'cursor-pointer')}
        onClick={onClick}
        data-testid="profile-image"
      >
        <Avatar src={imageUrl} alt={name} size={'mdLg'} />
        {isHost && (
          <div className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-gray-normal-01 bg-green-normal-01">
            <HostIcon width={9} height={9} data-testid="host-icon" />
          </div>
        )}
      </div>
      <div className="flex flex-col py-1.5">
        {isHost && (
          <span className="text-[10px] font-semibold leading-[10px] text-gray-dark-01">
            호스트
          </span>
        )}
        <span className={'font-semibold'}>{name}</span>
      </div>
    </div>
  );
}

interface ChatBubbleSystemProps extends HTMLAttributes<HTMLSpanElement> {
  username: string;
  action: 'JOIN' | 'LEAVE';
}

export function ChatBubbleSystem({
  username,
  action,
  className,
  ...props
}: ChatBubbleSystemProps) {
  return (
    <span className={twMerge('text-gray-darker', className)} {...props}>
      {`${username}님이 ${
        action === 'JOIN' ? '들어오셨습니다.' : '나가셨습니다.'
      }`}
    </span>
  );
}
