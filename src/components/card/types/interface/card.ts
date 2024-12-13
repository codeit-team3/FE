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
  onLikeClick?: () => void;
}

interface CardOverlayProps extends ComponentPropsWithoutRef<'div'> {
  onDelete?: () => void;
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
  CardProps,
};
