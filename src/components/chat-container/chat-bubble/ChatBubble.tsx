import { twMerge } from 'tailwind-merge';
import {
  ChatBubbleBoxProps,
  ChatBubbleTimeProps,
  ChatBubbleProfileProps,
  ChatBubbleComponentProps,
  OpponentProps,
  ChatBubbleSystemProps,
  ChatBubbleContainerProps,
  MeProps,
  SystemProps,
} from './types';
import Avatar from '@/components/avatar/Avatar';
import { HostIcon } from '../../../../public/icons';

function ChatBubbleContainer({
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

function ChatBubbleBox({
  variant,
  children,
  className,
  ...props
}: ChatBubbleBoxProps) {
  return (
    <div
      className={twMerge(
        'rounded-xl px-4 py-[10px]',
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

function ChatBubbleTime({
  children,
  className,
  ...props
}: ChatBubbleTimeProps) {
  return (
    <span
      className={twMerge('text-xs font-light text-gray-normal-03', className)}
      {...props}
    >
      {children}
    </span>
  );
}

function ChatBubbleProfile({
  name,
  imageUrl,
  isHost,
  className,
  ...props
}: ChatBubbleProfileProps) {
  return (
    <div className={twMerge('flex items-center gap-2.5', className)} {...props}>
      <div className="relative">
        <Avatar src={imageUrl} alt={name} size={'mdLg'} />
        {isHost && (
          <div className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-gray-normal-01 bg-green-normal-01">
            <HostIcon width={9} height={9} data-testid="host-icon" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        {isHost && (
          <span className="text-[10px] font-semibold text-gray-dark-01">
            호스트
          </span>
        )}
        <span className="font-semibold">{name}</span>
      </div>
    </div>
  );
}

function ChatBubbleSystem({
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

ChatBubble.Container = ChatBubbleContainer;
ChatBubble.Box = ChatBubbleBox;
ChatBubble.Time = ChatBubbleTime;
ChatBubble.Profile = ChatBubbleProfile;
ChatBubble.System = ChatBubbleSystem;

function ChatBubble({ variant, props }: ChatBubbleComponentProps) {
  const renderContent = () => {
    switch (variant) {
      case 'ME': {
        const { content, time } = props as MeProps;
        return (
          <ChatBubbleContainer variant="ME">
            <div className="flex gap-[14px]">
              {time && (
                <div className="flex items-end">
                  <ChatBubbleTime>{time}</ChatBubbleTime>
                </div>
              )}
              <ChatBubbleBox variant="ME">{content}</ChatBubbleBox>
            </div>
          </ChatBubbleContainer>
        );
      }

      case 'OPPONENT': {
        const { content, time, name, profileImage, isHost } =
          props as OpponentProps;
        return (
          <ChatBubbleContainer variant="OPPONENT">
            <div className="flex flex-col">
              <ChatBubbleProfile
                name={name}
                imageUrl={profileImage}
                isHost={isHost}
              />
              <div className="flex gap-[14px] pl-16">
                <ChatBubbleBox variant="OPPONENT">{content}</ChatBubbleBox>
                {time && (
                  <div className="flex items-end">
                    <ChatBubbleTime>{time}</ChatBubbleTime>
                  </div>
                )}
              </div>
            </div>
          </ChatBubbleContainer>
        );
      }

      case 'SYSTEM': {
        const { username, action } = props as SystemProps;
        return (
          <ChatBubbleContainer variant="SYSTEM">
            <ChatBubbleSystem username={username} action={action} />
          </ChatBubbleContainer>
        );
      }

      default:
        return null;
    }
  };

  return renderContent();
}

export default ChatBubble;
