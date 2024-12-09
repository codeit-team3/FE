import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface CardContextType {
  isEnded?: boolean;
}

export interface CardProps extends ComponentPropsWithoutRef<'article'> {
  children?: ReactNode;
  isEnded?: boolean;
}

export interface CardBoxProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
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
