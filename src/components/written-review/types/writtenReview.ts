export interface WrittenReviewProps {
  children: React.ReactNode;
  onClickReview?: () => void;
}

export interface UserProfileProps {
  profileImage?: string;
  userName?: string;
  createdAt: string;
  className?: string;
}

export interface ClubImageProps {
  src: string | undefined;
  alt?: string;
}

export interface ClubInfoProps {
  clubName: string;
  bookClubType: 'FREE' | 'FIXED';
}

export interface CommentProps {
  text: string;
}

export interface RatingProps {
  ratingCount: number;
}
