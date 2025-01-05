import ChatBubble from '@/features/chat-room/components/chat-bubble/ChatBubble';
import { ChatMessageType } from '../../../types/chatBubbleList';
import PopUp from '@/components/pop-up/PopUp';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ChatMessageProps {
  message: ChatMessageType;
  isMyMessage: boolean;
  isConsecutive: boolean;
  hostId: string | number;
  time: string;
  image?: string;
  onProfileClick?: (userId: string | number) => void;
}

function ChatMessage({
  message,
  isMyMessage,
  isConsecutive,
  hostId,
  time,
  // onProfileClick,
}: ChatMessageProps) {
  const { userId, content, userNickname, image } = message;
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {isMyMessage ? (
        <ChatBubble variant="ME" props={{ content, time }} />
      ) : (
        <ChatBubble
          variant="OPPONENT"
          props={{
            content,
            time,
            name: userNickname,
            image: image,
            isHost: userId === hostId,
            onProfileClick: () => setIsPopUpOpen(true),
            isConsecutive,
          }}
        />
      )}
      <PopUp
        isOpen={isPopUpOpen}
        isLarge={true}
        isTwoButton={true}
        label={`${userNickname}님의 프로필 페이지로 이동하시겠어요?`}
        handlePopUpClose={() => setIsPopUpOpen(false)}
        handlePopUpConfirm={() => {
          setIsPopUpOpen(false);
          router.push(`/profile/${userId}`);
        }}
      />
    </>
  );
}

export default ChatMessage;
