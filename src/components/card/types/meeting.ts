export interface MeetingInfo {
  title: string;
  category: string;
  location: string;
  datetime: string;
}

export interface HostInfo {
  nickname: string;
  onHostClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  avatar?: {
    src?: string;
    alt?: string;
  };
}

export interface ParticipantInfo {
  src: string;
  alt: string;
}

export interface ParticipationStatus {
  currentParticipants: number;
  maxParticipants: number;
  isConfirmed: boolean;
  participants: ParticipantInfo[];
}

export interface ImageInfo {
  url: string;
  alt?: string;
  isLiked: boolean;
  onLikeClick: () => void;
}
