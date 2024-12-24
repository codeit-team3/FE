import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import {
  ChatBubbleBoxProps,
  ChatBubbleContentProps,
  ChatBubbleTimeProps,
  ChatBubbleProfileProps,
  ChatBubbleComponentProps,
  ChatBubbleVariant,
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
        'flex gap-2',
        variant === 'me' && 'flex-row-reverse',
        variant === 'system' && 'justify-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ChatBubbleContent({
  children,
  className,
  ...props
}: ChatBubbleContentProps) {
  return (
    <div className={twMerge('rounded-[20px] px-4 py-2', className)} {...props}>
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

function ChatBubble<T extends ChatBubbleVariant>({
  variant,
  props,
}: ChatBubbleComponentProps<T>) {
  const renderContent = () => {
    switch (variant) {
      case 'me': {
        const { content, time, className } = props;
        return (
          <ChatBubbleBox variant="me" className={className}>
            <div className="flex flex-col gap-1">
              <ChatBubbleContent className="bg-green-normal-01 text-white">
                {content}
              </ChatBubbleContent>
              {time && <ChatBubbleTime>{time}</ChatBubbleTime>}
            </div>
          </ChatBubbleBox>
        );
      }

      case 'opponent': {
        const { content, time, profileImage, name, className } =
          props as OpponentProps;
        return (
          <ChatBubbleBox variant="opponent" className={className}>
            <ChatBubbleProfile imageUrl={profileImage} name={name} />
            <div className="flex flex-col gap-1">
              <ChatBubbleContent className="bg-gray-light-01">
                {content}
              </ChatBubbleContent>
              {time && <ChatBubbleTime>{time}</ChatBubbleTime>}
            </div>
          </ChatBubbleBox>
        );
      }

      case 'system': {
        const { content, className } = props;
        return (
          <ChatBubbleBox variant="system" className={className}>
            <ChatBubbleContent className="rounded-full bg-gray-light-02 text-gray-dark-01">
              {content}
            </ChatBubbleContent>
          </ChatBubbleBox>
        );
      }

      default:
        return null;
    }
  };

  return renderContent();
}

ChatBubble.Box = ChatBubbleBox;
ChatBubble.Content = ChatBubbleContent;
ChatBubble.Time = ChatBubbleTime;
ChatBubble.Profile = ChatBubbleProfile;

export default ChatBubble;
