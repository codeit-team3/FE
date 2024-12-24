export type ChatBubbleVariant = 'me' | 'opponent' | 'system';

interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  time?: string;
}

export interface MeProps extends CommonProps {}

export interface OpponentProps extends CommonProps {
  profileImage?: string;
  name: string;
}

export interface SystemProps extends CommonProps {
  time?: never; // 시스템 메시지는 시간 표시 없음
}

export type ChatBubbleVariantProps = {
  me: MeProps;
  opponent: OpponentProps;
  system: SystemProps;
};

export interface ChatBubbleComponentProps<T extends ChatBubbleVariant> {
  variant: T;
  props: ChatBubbleVariantProps[T];
}
