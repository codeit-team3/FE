export type SystemAction = 'JOIN' | 'LEAVE';

export interface ChatBubbleContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'ME' | 'OPPONENT' | 'SYSTEM';
  children: React.ReactNode;
}

export interface ChatBubbleBoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'ME' | 'OPPONENT';
  children: React.ReactNode;
}
export interface ChatBubbleTimeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export interface ChatBubbleProfileProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  imageUrl?: string;
  isHost?: boolean;
}

export interface ChatBubbleSystemProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  username: string;
  action: SystemAction;
}
