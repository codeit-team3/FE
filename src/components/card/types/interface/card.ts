import {
  DefaultClubCard,
  DetailedClubCard,
  HostedClubCard,
  ParticipatedClubCard,
} from '@/components/card/types/interface/clubCard';
import { ComponentPropsWithoutRef } from 'react';

interface CardBoxProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps extends ComponentPropsWithoutRef<'h3'> {
  children: React.ReactNode;
  className?: string;
}

interface CardLocationProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
}

interface CardDateTimeProps extends ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode;
  className?: string;
}

interface CardImageProps extends ComponentPropsWithoutRef<'div'> {
  url: string;
  alt?: string;
  isLiked?: boolean;
  isPast?: boolean;
  onLikeClick?: () => void;
}

interface CardOverlayProps extends ComponentPropsWithoutRef<'div'> {
  onDelete?: () => void;
}

interface CardHostInfo extends ComponentPropsWithoutRef<'div'> {
  nickname: string;
  onHostClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isHost: boolean;
  avatar?: {
    src?: string;
    alt?: string;
  };
}

type CardProps = {
  variant?: 'defaultClub' | 'participatedClub' | 'hostedClub' | 'detailedClub';
} & (
  | (DefaultClubCard & { variant?: 'defaultClub' })
  | (HostedClubCard & { variant?: 'hostedClub' })
  | (ParticipatedClubCard & { variant?: 'participatedClub' })
  | (DetailedClubCard & { variant?: 'detailedClub' })
);

export type {
  CardBoxProps,
  CardTitleProps,
  CardLocationProps,
  CardDateTimeProps,
  CardImageProps,
  CardOverlayProps,
  CardHostInfo,
  CardProps,
};
