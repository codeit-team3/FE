interface ClubCard {
  // 이미지 정보
  imageUrl: string;
  imageAlt?: string;

  // 모임 정보
  title: string;
  location: string;
  datetime: string;
  meetingType: 'FREE' | 'FIXED';

  // 개설 현황
  status: 'completed' | 'scheduled' | 'pending' | 'confirmed' | 'closed';

  // 액션
  onClick: () => void;
}

interface DefaultClubCard extends ClubCard {
  // 찜 정보
  isLiked: boolean;
  onLikeClick: () => void;

  // 참가자 현황
  current: number;
  max: number;

  // 상태 정보
  isPast: boolean;
  isCanceled: boolean;

  // 블러에서 취소 액션
  onDelete: () => void;
}

interface ParticipatedClubCard extends ClubCard {
  // 찜 정보
  isLiked: boolean;
  onLikeClick: () => void;

  // 상태 정보
  isPast: boolean;
  isCanceled: boolean;

  // 블러에서 취소 액션
  onDelete: () => void;

  // 모임 취소 액션
  onCancel: () => void;

  // 리뷰 정보
  reviewScore?: number;
}

export type { ClubCard, DefaultClubCard, ParticipatedClubCard };
