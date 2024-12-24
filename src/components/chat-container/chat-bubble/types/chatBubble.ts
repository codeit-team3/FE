export interface ChatBubbleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface ChatBubbleBoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant: 'ME' | 'OPPONENT';
}

export interface ChatBubbleContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ChatBubbleTimeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export interface ChatBubbleProfileProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  name: string;
  imageUrl?: string;
  isHost?: boolean;
}
