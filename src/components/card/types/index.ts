import { ComponentPropsWithoutRef, ReactNode } from 'react';

// 모임 기본 정보 인터페이스
export interface MeetingInfo {
  title: string;
  category: string;
  location: string;
  datetime: string;
}

// 참여자 정보 인터페이스
export interface ParticipantInfo {
  src: string;
  alt: string;
}

// 참여 현황 정보 인터페이스
export interface ParticipationStatus {
  currentParticipants: number;
  maxParticipants: number;
  isConfirmed?: boolean;
  participants: ParticipantInfo[];
}

// 이미지 정보 인터페이스
export interface ImageInfo {
  url: string;
  alt?: string;
  isLiked: boolean;
  onLikeClick: () => void;
}

// 통합된 모임 정보 인터페이스
export interface Meeting {
  meetingInfo: MeetingInfo;
  participationStatus: ParticipationStatus;
  imageInfo: ImageInfo;
  isPast: boolean;
  isCanceled: boolean;
  actions: {
    onClick: () => void;
    onDelete: () => void;
  };
}

export interface CardContextType {
  isCanceled: boolean;
}

export interface CardProps extends ComponentPropsWithoutRef<'article'> {
  children?: ReactNode;
  isCanceled?: boolean;
}

export interface CardBoxProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  onClick?: () => void;
}

export interface CardInfoProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  category: string;
  location: string;
  datetime: string;
  isPast?: boolean;
}

export interface CardStatusProps extends ComponentPropsWithoutRef<'div'> {
  currentParticipants: number;
  maxParticipants: number;
  isConfirmed?: boolean;
  isPast?: boolean;
  participants: Array<{
    src: string;
    alt: string;
  }>;
}

export interface CardHostProps extends ComponentPropsWithoutRef<'div'> {
  nickname: string;
}

export interface CardImageProps extends ComponentPropsWithoutRef<'div'> {
  url: string;
  alt?: string;
  isLiked?: boolean;
  onLikeClick?: () => void;
}

// SimpleCard용 인터페이스
export interface SimpleCardProps extends ComponentPropsWithoutRef<'article'> {
  meeting: Meeting;
}

// FullCard용 인터페이스 추가
export interface FullMeeting extends Omit<Meeting, 'actions'> {
  hostInfo: {
    nickname: string;
  };
  actions: {
    onJoinClick?: () => void;
  };
}
