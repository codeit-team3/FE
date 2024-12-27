import { ChatBubbleSystemProps } from '@/components/chat-container/chat-bubble/types/chatBubble';

export type ChatBubbleVariant = 'ME' | 'OPPONENT' | 'SYSTEM';

interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  time?: string;
}

export interface MeProps extends CommonProps {}

export interface OpponentProps extends CommonProps {
  name: string;
  profileImage?: string;
  isHost?: boolean;
  onProfileClick?: () => void;
}

export interface SystemProps extends ChatBubbleSystemProps {}

export type ChatBubbleVariantProps = {
  ME: MeProps;
  OPPONENT: OpponentProps;
  SYSTEM: SystemProps;
};

export interface ChatBubbleComponentProps<
  T extends ChatBubbleVariant = ChatBubbleVariant,
> {
  variant: T;
  props: ChatBubbleVariantProps[T];
}
