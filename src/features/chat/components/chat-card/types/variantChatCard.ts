export type ChatCardVariant = 'bookClub' | 'chatRoomHeader';

interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  imageUrl?: string;
  isHost?: boolean;
  onClick?: () => void;
}

export interface BookClubProps extends CommonProps {
  memberCount?: number;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  hostId?: number;
  isInactive?: boolean;
}

export interface ChatRoomHeaderProps extends CommonProps {
  location: string;
  datetime: string;
  meetingType: 'ONLINE' | 'OFFLINE';
}

type ChatCardVariantProps = {
  bookClub: BookClubProps;
  chatRoomHeader: ChatRoomHeaderProps;
};

export interface ChatCardComponentProps<T extends ChatCardVariant> {
  variant: T;
  props: ChatCardVariantProps[T];
}
