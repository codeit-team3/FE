import { twMerge } from 'tailwind-merge';

import {
  ChatBubbleBoxProps,
  ChatBubbleTimeProps,
  ChatBubbleProfileProps,
  ChatBubbleComponentProps,
  OpponentProps,
  SystemProps,
} from './types';
import Avatar from '@/components/avatar/Avatar';

function ChatBubbleBox({
  children,
  variant,
  className,
  ...props
}: ChatBubbleBoxProps) {
  return (
    <div
      className={twMerge(
        'flex rounded-xl px-4 py-[10px]',
        variant === 'ME' && [
          'flex-row-reverse',
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
  imageUrl,
  name,
  isHost,
  className,
  ...props
}: ChatBubbleProfileProps) {
  return (
    <div
      className={twMerge('flex flex-col items-center gap-2.5', className)}
      {...props}
    >
      <Avatar src={imageUrl} alt={name} size={'mdLg'} />
      <div className="flex flex-col items-center gap-0.5">
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

function ChatBubbleSystem({ username, action }: SystemProps) {
  return (
    <div className="flex justify-center py-2">
      <span className="text-gray-darker">
        {`${username}님이 ${
          action === 'JOIN' ? '들어오셨습니다.' : '나가셨습니다.'
        }`}
      </span>
    </div>
  );
}

function ChatBubble({ variant, props }: ChatBubbleComponentProps) {
  const renderContent = () => {
    switch (variant) {
      case 'ME': {
        const { content, time, className } = props;
        return (
          <ChatBubbleBox variant="ME" className={className}>
            {content}
            {time && <ChatBubbleTime>{time}</ChatBubbleTime>}
          </ChatBubbleBox>
        );
      }

      case 'OPPONENT': {
        const { content, time, profileImage, name, className } =
          props as OpponentProps;
        return (
          <ChatBubbleBox variant="OPPONENT" className={className}>
            <ChatBubbleProfile imageUrl={profileImage} name={name} />
            <div className="flex flex-col gap-1">
              {content}

              {time && <ChatBubbleTime>{time}</ChatBubbleTime>}
            </div>
          </ChatBubbleBox>
        );
      }

      case 'SYSTEM': {
        const { username, action } = props as SystemProps;
        return <ChatBubbleSystem username={username} action={action} />;
      }

      default:
        return null;
    }
  };

  return renderContent();
}

ChatBubble.Box = ChatBubbleBox;
ChatBubble.Time = ChatBubbleTime;
ChatBubble.Profile = ChatBubbleProfile;
ChatBubble.System = ChatBubbleSystem;

export default ChatBubble;
