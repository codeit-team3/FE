export type ChatBubbleVariant = 'ME' | 'OPPONENT' | 'SYSTEM';

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
  time?: never;
}

export type ChatBubbleVariantProps = {
  ME: MeProps;
  OPPONENT: OpponentProps;
  SYSTEM: SystemProps;
};

export interface ChatBubbleComponentProps {
  variant: ChatBubbleVariant;
  props: ChatBubbleVariantProps[ChatBubbleVariant];
}
