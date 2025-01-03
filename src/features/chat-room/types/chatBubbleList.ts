export interface BaseMessage {
  type: 'CHAT' | 'JOIN' | 'LEAVE';
  date: string;
  id: number;
}

export interface ChatMessageType extends BaseMessage {
  type: 'CHAT';
  userNickname: string;
  userId: number;
  content: string;
}

export interface SystemMessageType extends BaseMessage {
  type: 'JOIN' | 'LEAVE';
  user: string;
}

export type Message = ChatMessageType | SystemMessageType;

export interface GroupedMessage {
  date: string;
  messages: Message[];
}
