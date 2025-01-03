import { format } from 'date-fns';
import { useAuthStore } from '@/store/authStore';
import {
  Message,
  ChatMessageType,
  SystemMessageType,
} from '../types/chatBubbleList';

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
    if (!prevMessage || prevMessage.type !== 'CHAT') return false;

    const timeDiff =
      new Date(currentMessage.date).getTime() -
      new Date(prevMessage.date).getTime();

    return (
      prevMessage.userId === currentMessage.userId && timeDiff < 10 * 60 * 1000
    );
  };

  const getChatMessageProps = (
    message: ChatMessageType,
    messages: Message[],
    index: number,
  ) => ({
    message,
    isMyMessage: user?.id == message.userId,
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
