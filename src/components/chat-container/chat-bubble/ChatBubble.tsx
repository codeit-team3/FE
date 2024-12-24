import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import {
  ChatBubbleBoxProps,
  ChatBubbleTimeProps,
  ChatBubbleProfileProps,
  ChatBubbleComponentProps,
  OpponentProps,
} from './types';

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
      className={twMerge('text-xs text-gray-normal-03', className)}
      {...props}
    >
      {children}
    </span>
  );
}

function ChatBubbleProfile({
  imageUrl,
  name,
  className,
  ...props
}: ChatBubbleProfileProps) {
  return (
    <div
      className={twMerge('flex flex-col items-center gap-1', className)}
      {...props}
    >
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <Image
          src={imageUrl || '/default-profile.png'}
          alt={name}
          width={40}
          height={40}
        />
      </div>
      <span className="text-xs">{name}</span>
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
        return <div>hi</div>;
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

export default ChatBubble;
