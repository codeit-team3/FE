type ChatCardVariant = 'bookClub' | 'chatRoomHeader';

export interface BookClubProps {
  imageUrl?: string;
  isHost?: boolean;
  title: string;
  currentParticipants: number;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  className?: string;
}

export interface ChatRoomHeaderProps {
  imageUrl?: string;
  isHost?: boolean;
  title: string;
  location: string;
  datetime: string;
  className?: string;
}

export interface ChatCardComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant: ChatCardVariant;
  props: BookClubProps | ChatRoomHeaderProps;
}
