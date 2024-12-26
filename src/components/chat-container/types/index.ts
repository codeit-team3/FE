export interface Message {
  type: 'chat' | 'join' | 'leave';
  sender: string;
  content: string;
  date: string;
}

export interface GroupedMessage {
  date: string;
  messages: Message[];
}

export interface ChatContainerProps {
  groupedMessages: GroupedMessage[];
  currentUser: string; // 현재 로그인한 사용자 ID
  isHost?: boolean;
  onProfileClick?: (userId: string) => void;
}
