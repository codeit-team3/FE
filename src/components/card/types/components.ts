import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BaseProps } from './base';
import { MeetingInfo, ParticipationStatus, ImageInfo } from './meeting';

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

export interface CardImageProps
  extends ComponentPropsWithoutRef<'div'>,
    ImageInfo {}

export interface CardEndedOverlayProps extends ComponentPropsWithoutRef<'div'> {
  onDelete?: () => void;
}
