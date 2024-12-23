export interface ChatCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface ChatCardBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isHost?: boolean;
}

export interface ChatCardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export interface ChatCardImageProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  url?: string | undefined;
  alt?: string;
  isHost?: boolean;
}

export interface ChatCardLocationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  textClassName?: string;
}

export interface ChatCardDateTimeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export interface ChatCardLastMessageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ChatCardLastMessageTimeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}
