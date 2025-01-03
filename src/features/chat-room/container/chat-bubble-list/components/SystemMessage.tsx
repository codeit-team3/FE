import ChatBubble from '@/features/chat-room/components/chat-bubble/ChatBubble';
import { SystemMessageType } from '../../../types/chatBubbleList';

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
        action: type === 'JOIN' ? 'JOIN' : 'LEAVE',
      }}
    />
  );
}

export default SystemMessage;
