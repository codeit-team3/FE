import { format } from 'date-fns';
import ChatBubble from '../../components/chat-bubble/ChatBubble';
import {
  ChatContainerProps,
  ChatMessage,
  Message,
} from '@/features/chat-room/container/chat-bubble-list/types';
import { useAuthStore } from '@/store/authStore';

function ChatContainer({
  groupedMessages,
  hostId,
  onProfileClick,
}: ChatContainerProps) {
  const { user } = useAuthStore();

  const renderMessage = (
    message: Message,
    messages: Message[],
    index: number,
  ) => {
    const time = format(new Date(message.date), 'HH:mm');

    switch (message.type) {
      case 'chat': {
        const { senderId, content, sender, profileImage } = message;
        const isMyMessage = user!.id == senderId;

        const prevMessage = messages[index - 1];
        const isConsecutive =
          index > 0 &&
          prevMessage.type === 'chat' &&
          message.type === 'chat' &&
          (prevMessage as ChatMessage).senderId === senderId &&
          new Date(message.date).getTime() -
            new Date(prevMessage.date).getTime() <
            5 * 60 * 1000;

        return isMyMessage ? (
          <ChatBubble
            variant="ME"
            props={{
              content,
              time,
            }}
          />
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

      case 'join':
      case 'leave': {
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
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {groupedMessages.map((group, groupIndex) => (
        <div key={groupIndex} className="flex w-full flex-col gap-3">
          <div className="flex items-center justify-center py-1.5">
            <div className="rounded-full bg-gray-normal-01 px-3.5 py-1.5 text-sm font-medium text-gray-normal-03">
              {group.date}
            </div>
          </div>

          {group.messages.map((message, messageIndex) => (
            <div key={messageIndex}>
              {renderMessage(message, group.messages, messageIndex)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ChatContainer;
