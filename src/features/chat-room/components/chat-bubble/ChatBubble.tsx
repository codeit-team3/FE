import MeBubble, { MeProps } from './components/MeBubble';
import OpponentBubble, { OpponentProps } from './components/OpponentBubble';
import SystemBubble, { SystemProps } from './components/SystemBubble';
import {
  ChatBubbleContainer,
  ChatBubbleBox,
  ChatBubbleTime,
  ChatBubbleProfile,
  ChatBubbleSystem,
} from './components/atoms/atoms';

// TODO: 제네릭 처리
interface ChatBubbleComponentProps {
  variant: 'ME' | 'OPPONENT' | 'SYSTEM';
  props: MeProps | OpponentProps | SystemProps;
}

function ChatBubble({ variant, props }: ChatBubbleComponentProps) {
  switch (variant) {
    case 'ME':
      return <MeBubble {...(props as MeProps)} />;
    case 'OPPONENT':
      return <OpponentBubble {...(props as OpponentProps)} />;
    case 'SYSTEM':
      return <SystemBubble {...(props as SystemProps)} />;
    default:
      return (
        // TODO: 어떤식으로 처리하면 좋을지
        <div className="flex w-full items-center justify-center text-gray-normal-03">
          지원하지 않는 메시지 형식입니다
        </div>
      );
  }
}

ChatBubble.Container = ChatBubbleContainer;
ChatBubble.Box = ChatBubbleBox;
ChatBubble.Time = ChatBubbleTime;
ChatBubble.Profile = ChatBubbleProfile;
ChatBubble.System = ChatBubbleSystem;

export default ChatBubble;
