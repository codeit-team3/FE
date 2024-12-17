export interface UserProfileProps {
  profileImage?: string;
  userName?: string;
  createdAt: string;
  className?: string;
}

export interface ClubImageProps {
  src: string;
  alt?: string;
}

export interface ClubInfoProps {
  clubName: string;
  location: string;
}

export interface CommentProps {
  text: string;
}

export interface RatingProps {
  ratingCount: number;
}
