import { format } from 'date-fns';
import { useAuthStore } from '@/store/authStore';
import { Message } from '../container/chat-bubble-list/ChatBubbleList';
import { ChatMessageType } from '../container/chat-bubble-list/components/ChatMessage';
import { SystemMessageType } from '../container/chat-bubble-list/components/SystemMessage';

interface UseMessageRendererProps {
  hostId: string | number;
  onProfileClick?: (userId: string | number) => void;
}

export const useMessageRenderer = ({
  hostId,
  onProfileClick,
}: UseMessageRendererProps) => {
  const { user } = useAuthStore();

  const isConsecutiveMessage = (
    currentMessage: ChatMessageType,
    prevMessage?: Message,
  ) => {
    if (!prevMessage || prevMessage.type !== 'chat') return false;

    const timeDiff =
      new Date(currentMessage.date).getTime() -
      new Date(prevMessage.date).getTime();
    return (
      prevMessage.senderId === currentMessage.senderId &&
      timeDiff < 5 * 60 * 1000
    );
  };

  const getChatMessageProps = (
    message: ChatMessageType,
    messages: Message[],
    index: number,
  ) => ({
    message,
    isMyMessage: user!.id == message.senderId,
    isConsecutive: isConsecutiveMessage(message, messages[index - 1]),
    hostId,
    time: format(new Date(message.date), 'HH:mm'),
    onProfileClick,
  });

  const getSystemMessageProps = (message: SystemMessageType) => ({
    message,
  });

  return { getChatMessageProps, getSystemMessageProps };
};
