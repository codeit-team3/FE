import { ComponentPropsWithoutRef, ReactNode } from 'react';

// 기본 공통 타입들
interface BaseProps {
  isPast?: boolean;
  isCanceled?: boolean;
}

// 모임 정보 관련 타입들
export interface MeetingInfo {
  title: string;
  category: string;
  location: string;
  datetime: string;
}

export interface HostInfo {
  nickname: string;
}

// 참여 관련 타입들
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

// 이미지 관련 타입
export interface ImageInfo {
  url: string;
  alt?: string;
  isLiked: boolean;
  onLikeClick: () => void;
}

// 액션 관련 타입들
interface SimpleActions {
  onClick: () => void;
  onDelete: () => void;
}

interface FullActions {
  onJoinClick?: () => void;
}

// 통합된 모임 타입들
export interface Meeting extends BaseProps {
  meetingInfo: MeetingInfo;
  participationStatus: ParticipationStatus;
  imageInfo: ImageInfo;
  actions: SimpleActions;
}

export interface FullMeeting extends Omit<Meeting, 'actions'> {
  hostInfo: HostInfo;
  actions: FullActions;
}

// 컴포넌트 Props 타입들
export interface CardContextType {
  isCanceled: boolean;
}

export interface CardProps
  extends ComponentPropsWithoutRef<'article'>,
    BaseProps {
  children?: ReactNode;
}

export interface CardBoxProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  onClick?: () => void;
}

export interface CardInfoProps
  extends Omit<ComponentPropsWithoutRef<'div'>, keyof MeetingInfo>,
    MeetingInfo,
    BaseProps {}

export interface CardStatusProps
  extends ComponentPropsWithoutRef<'div'>,
    ParticipationStatus,
    BaseProps {}

export interface CardHostProps
  extends ComponentPropsWithoutRef<'div'>,
    HostInfo {}

export interface CardImageProps
  extends ComponentPropsWithoutRef<'div'>,
    ImageInfo {}

export interface SimpleCardProps extends ComponentPropsWithoutRef<'article'> {
  meeting: Meeting;
}
