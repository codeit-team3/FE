import ChatBubble from '../ChatBubble';

export interface SystemProps {
  username: string;
  action: 'JOIN' | 'LEAVE';
}

function SystemBubble({ username, action }: SystemProps) {
  return (
    <ChatBubble.Container variant="SYSTEM">
      <ChatBubble.System username={username} action={action} />
    </ChatBubble.Container>
  );
}

export default SystemBubble;
