export type ChatCardVariant = 'bookClub' | 'chatRoomHeader';

interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  imageUrl?: string;
  isHost?: boolean;
}

export interface BookClubProps extends CommonProps {
  currentParticipants: number;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
}

export interface ChatRoomHeaderProps extends CommonProps {
  location: string;
  datetime: string;
}

type ChatCardVariantProps = {
  bookClub: BookClubProps;
  chatRoomHeader: ChatRoomHeaderProps;
};

export interface ChatCardComponentProps<T extends ChatCardVariant> {
  variant: T;
  props: ChatCardVariantProps[T];
}
