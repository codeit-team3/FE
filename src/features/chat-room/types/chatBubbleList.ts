export interface BaseMessage {
  type: 'chat' | 'join' | 'leave';
  date: string;
}

export interface ChatMessageType extends BaseMessage {
  type: 'chat';
  sender: string;
  senderId: string | number;
  content: string;
  profileImage?: string;
}

export interface SystemMessageType extends BaseMessage {
  type: 'join' | 'leave';
  user: string;
}

export type Message = ChatMessageType | SystemMessageType;

export interface GroupedMessage {
  date: string;
  messages: Message[];
}
