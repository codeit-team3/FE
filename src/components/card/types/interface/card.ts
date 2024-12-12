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

export type {
  CardBoxProps,
  CardTitleProps,
  CardLocationProps,
  CardDateTimeProps,
};
