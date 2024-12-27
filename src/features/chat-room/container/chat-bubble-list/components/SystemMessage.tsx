import ChatBubble from '@/features/chat-room/components/chat-bubble/ChatBubble';

interface BaseMessage {
  type: 'chat' | 'join' | 'leave';
  date: string;
}

export interface SystemMessageType extends BaseMessage {
  type: 'join' | 'leave';
  user: string;
}

interface SystemMessageProps {
  message: SystemMessageType;
}

function SystemMessage({ message }: SystemMessageProps) {
  const { user, type } = message;

  return (
    <ChatBubble
      variant="SYSTEM"
      props={{
        username: user,
        action: type === 'join' ? 'JOIN' : 'LEAVE',
      }}
    />
  );
}

export default SystemMessage;
