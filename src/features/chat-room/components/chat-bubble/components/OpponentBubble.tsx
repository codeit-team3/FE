import ChatBubble from '../ChatBubble';

export interface OpponentProps {
  content: string;
  time?: string;
  name: string;
  image?: string;
  isHost?: boolean;
  onProfileClick?: () => void;
  isConsecutive?: boolean;
}

function OpponentBubble({
  content,
  time,
  name,
  image,
  isHost,
  onProfileClick,
  isConsecutive,
}: OpponentProps) {
  return (
    <ChatBubble.Container variant="OPPONENT">
      <div className="flex flex-col">
        {!isConsecutive && (
          <ChatBubble.Profile
            name={name}
            image={image || ''}
            isHost={isHost}
            onClick={onProfileClick}
          />
        )}
        <div className="flex gap-[14px] pl-16">
          <ChatBubble.Box variant="OPPONENT">{content}</ChatBubble.Box>
          {time && (
            <div className="flex items-end">
              <ChatBubble.Time>{time}</ChatBubble.Time>
            </div>
          )}
        </div>
      </div>
    </ChatBubble.Container>
  );
}

export default OpponentBubble;
