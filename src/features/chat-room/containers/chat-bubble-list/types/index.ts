interface BaseMessage {
  type: 'chat' | 'join' | 'leave';
  date: string;
}

export interface ChatMessage extends BaseMessage {
  type: 'chat';
  sender: string;
  senderId: string | number;
  content: string;
  profileImage?: string;
}

interface SystemMessage extends BaseMessage {
  type: 'join' | 'leave';
  user: string;
}

export type Message = ChatMessage | SystemMessage;

export interface GroupedMessage {
  date: string;
  messages: Message[];
}

export interface ChatContainerProps {
  groupedMessages: GroupedMessage[];
  hostId: string | number;
  onProfileClick?: (userId: string | number) => void;
}
