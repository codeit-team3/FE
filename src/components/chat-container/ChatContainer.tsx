import { format } from 'date-fns';
import ChatBubble from './chat-bubble/ChatBubble';
import { ChatContainerProps, Message } from '@/components/chat-container/types';

function ChatContainer({
  groupedMessages,
  currentUser,
  isHost,
  onProfileClick,
}: ChatContainerProps) {
  const renderMessage = (message: Message) => {
    const time = format(new Date(message.date), 'HH:mm');

    switch (message.type) {
      case 'chat':
        return message.sender === currentUser ? (
          <ChatBubble
            variant="ME"
            props={{
              content: message.content,
              time,
            }}
          />
        ) : (
          <ChatBubble
            variant="OPPONENT"
            props={{
              content: message.content,
              time,
              name: message.sender,
              profileImage: '', // 프로필 이미지 URL 필요
              isHost: isHost,
              onProfileClick: () => onProfileClick?.(message.sender),
            }}
          />
        );

      case 'join':
      case 'leave':
        return (
          <ChatBubble
            variant="SYSTEM"
            props={{
              username: message.sender,
              action: message.type === 'join' ? 'JOIN' : 'LEAVE',
            }}
          />
        );
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {groupedMessages.map((group, groupIndex) => (
        <div key={groupIndex} className="flex w-full flex-col gap-3">
          {/* 날짜 디바이더 */}
          <div className="flex items-center justify-center py-1.5">
            <div className="rounded-full bg-gray-normal-01 px-3.5 py-1.5 text-sm font-medium text-gray-normal-03">
              {group.date}
            </div>
          </div>

          {/* 메시지 목록 */}
          {group.messages.map((message, messageIndex) => (
            <div key={messageIndex}>{renderMessage(message)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ChatContainer;
