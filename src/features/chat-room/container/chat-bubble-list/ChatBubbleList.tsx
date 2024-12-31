import ChatMessage from './components/ChatMessage';
import SystemMessage from './components/SystemMessage';
import { useMessageRenderer } from '../../hooks/useMessageRenderer';
import { Message, GroupedMessage } from '../../types/chatBubbleList';

export interface ChatBubbleListProps {
  groupedMessages: GroupedMessage[];
  hostId: string | number;
  onProfileClick?: (userId: string | number) => void;
}

function ChatBubbleList({
  groupedMessages,
  hostId,
  onProfileClick,
}: ChatBubbleListProps) {
  const { getChatMessageProps, getSystemMessageProps } = useMessageRenderer({
    hostId,
    onProfileClick,
  });

  const renderMessage = (
    message: Message,
    messages: Message[],
    index: number,
  ) => {
    switch (message.type) {
      case 'chat':
        return (
          <ChatMessage {...getChatMessageProps(message, messages, index)} />
        );
      case 'join':
      case 'leave':
        return <SystemMessage {...getSystemMessageProps(message)} />;
    }
  };

  return (
    <div className="flex w-full flex-col gap-3 px-5">
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

export default ChatBubbleList;
