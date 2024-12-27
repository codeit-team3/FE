import ChatBubble from '@/features/chat-room/components/chat-bubble/ChatBubble';
import { ChatMessageType } from '../../../types/chatBubbleList';

interface ChatMessageProps {
  message: ChatMessageType;
  isMyMessage: boolean;
  isConsecutive: boolean;
  hostId: string | number;
  time: string;
  onProfileClick?: (userId: string | number) => void;
}

function ChatMessage({
  message,
  isMyMessage,
  isConsecutive,
  hostId,
  time,
  onProfileClick,
}: ChatMessageProps) {
  const { senderId, content, sender, profileImage } = message;

  return isMyMessage ? (
    <ChatBubble variant="ME" props={{ content, time }} />
  ) : (
    <ChatBubble
      variant="OPPONENT"
      props={{
        content,
        time,
        name: sender,
        profileImage: profileImage || '',
        isHost: senderId === hostId,
        onProfileClick: () => onProfileClick?.(senderId),
        isConsecutive,
      }}
    />
  );
}

export default ChatMessage;
