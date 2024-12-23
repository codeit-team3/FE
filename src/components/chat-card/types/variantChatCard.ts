type ChatCardVariant = 'bookClub' | 'default';

interface BookClubProps {
  imageUrl?: string;
  isHost?: boolean;
  title: string;
  currentParticipants: number;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  className?: string;
}

export interface ChatCardComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant: ChatCardVariant;
  props: BookClubProps; // 추후 다른 variant props를 union type으로 추가
}
