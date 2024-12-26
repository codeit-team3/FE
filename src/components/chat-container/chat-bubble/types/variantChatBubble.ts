export type ChatBubbleVariant = 'ME' | 'OPPONENT' | 'SYSTEM';
export type SystemAction = 'JOIN' | 'LEAVE';

interface CommonProps extends React.HTMLAttributes<HTMLDivElement> {
  content?: string;
  time?: string;
}

export interface MeProps extends CommonProps {}

export interface OpponentProps extends CommonProps {
  profileImage?: string;
  name: string;
  isHost?: boolean;
}

export interface SystemProps extends React.HTMLAttributes<HTMLDivElement> {
  username: string;
  action: SystemAction;
  content?: never;
  time?: never;
}

export type ChatBubbleVariantProps = {
  ME: MeProps;
  OPPONENT: OpponentProps;
  SYSTEM: SystemProps;
};

export interface ChatBubbleComponentProps {
  variant: ChatBubbleVariant;
  props: MeProps | OpponentProps | SystemProps;
}
