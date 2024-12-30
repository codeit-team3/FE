import ChatBubble from '../ChatBubble';

export interface MeProps {
  content: string;
  time?: string;
}

function MeBubble({ content, time }: MeProps) {
  return (
    <ChatBubble.Container variant="ME">
      <div className="flex gap-[14px]">
        {time && (
          <div className="flex items-end">
            <ChatBubble.Time>{time}</ChatBubble.Time>
          </div>
        )}
        <ChatBubble.Box variant="ME">{content}</ChatBubble.Box>
      </div>
    </ChatBubble.Container>
  );
}

export default MeBubble;
