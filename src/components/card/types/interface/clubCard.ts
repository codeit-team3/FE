interface ClubCard {
  // 이미지 정보
  imageUrl: string;
  imageAlt?: string;

  // 모임 정보
  title: string;
  location: string;
  datetime: string;
  meetingType: 'FREE' | 'FIXED';
  isPast: boolean; // 지난 모임인지 아닌지
  status: 'completed' | 'scheduled' | 'pending' | 'confirmed' | 'closed'; // 개설 현황

  // 액션 (카드 클릭시 라우터 처리 등)
  onClick: () => void;
}

interface DefaultClubCard extends ClubCard {
  // 찜 정보
  isLiked: boolean;
  onLikeClick: () => void;

  // 취소 정보 (블러)
  isCanceled: boolean;
  onDelete: () => void;

  // 참가자 현황
  current: number;
  max: number;
}

interface ParticipatedClubCard extends ClubCard {
  // 찜 정보
  isLiked: boolean;
  onLikeClick: () => void;

  // 취소 정보 (블러)
  isCanceled: boolean;
  onDelete: () => void;

  // 버튼 액션
  onWriteReview: () => void; // 리뷰 작성
  onCancel: () => void; // 모임 취소
}

interface HostedClubCard extends ClubCard {
  // 모임 취소 액션
  onCancel: () => void;

  // 리뷰 정보
  reviewScore?: number;
}

interface DetailedClubCard extends ClubCard {
  // 찜 정보
  isLiked: boolean;
  onLikeClick: () => void;

  // 참가자 정보
  current: number;
  max: number;
  participants: ReadonlyArray<{
    readonly id?: string;
    readonly name: string;
    readonly profileImage?: string;
    readonly profileImageAlt?: string;
  }>;

  // 호스트 정보
  host: {
    id?: string;
    name: string;
    profileImage?: string;
  };

  // 호스트 여부
  isHost: boolean;
}

export type {
  ClubCard,
  DefaultClubCard,
  HostedClubCard,
  ParticipatedClubCard,
  DetailedClubCard,
};
