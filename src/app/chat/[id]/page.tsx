'use client';

import React, { useEffect, useState } from 'react';
import ChatBubbleList from '@/features/chat-room/container/chat-bubble-list/ChatBubbleList';
import { usePathname } from 'next/navigation';
import ChatCard from '@/features/chat/components/chat-card/ChatCard';
import ParticipantCounter from '@/components/participant-counter/ParticipantCounter';
import IconButton from '@/components/icon-button/IconButton';
import GoBackIcon from '../../../../public/icons/GoBackIcon';
import HamburgerMenuIcon from '../../../../public/icons/HamburgerMenuIcon';
import MessageInput from '@/components/input/message-input/MessageInput';
import {
  ChatHistoryResponse,
  ChatMessage,
  getChatHistory,
  sendMessage,
  subscribeToChat,
} from '@/features/chat/utils/socket';
import {
  ChatMessageType,
  GroupedMessage,
  SystemMessageType,
} from '@/features/chat-room/types/chatBubbleList';

function ChatRoomPage() {
  const pathname = usePathname();
  const chatId = pathname?.split('/').pop() || '';
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatHistoryResponse>({
    historyResponses: [],
  });

  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const history = await getChatHistory(Number(chatId));
        setChatHistory(history);
      } catch (error) {
        console.error('채팅 히스토리 로딩 실패:', error);
      }
    };

    const handleNewMessage = (message: ChatMessage) => {
      setChatHistory((prev: any) => {
        if (!prev?.historyResponses?.length) {
          return {
            historyResponses: [
              {
                date: new Date().toISOString(),
                messages: [message],
              },
            ],
          };
        }

        return {
          ...prev,
          historyResponses: [
            ...prev.historyResponses.slice(0, -1),
            {
              ...prev.historyResponses[prev.historyResponses.length - 1],
              messages: [
                ...prev.historyResponses[prev.historyResponses.length - 1]
                  .messages,
                message,
              ],
            },
          ],
        };
      });
    };

    loadChatHistory();
    const subscription = subscribeToChat(Number(chatId), handleNewMessage);

    return () => {
      subscription.unsubscribe();
    };
  }, [chatId]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(Number(chatId), message);
      setMessage('');
    }
  };

  const convertToGroupedMessage = (
    history: ChatHistoryResponse,
  ): GroupedMessage[] => {
    return history.historyResponses.map((response) => ({
      date: response.date,
      messages: response.messages.map((msg) => {
        if (msg.type === 'CHAT') {
          return {
            type: 'CHAT',
            id: msg.id,
            date: msg.date,
            userId: msg.userId,
            userNickname: msg.userNickname,
            content: msg.content,
          } as ChatMessageType;
        } else {
          return {
            type: msg.type,
            id: msg.id,
            date: msg.date,
            user: msg.userNickname,
          } as SystemMessageType;
        }
      }),
    }));
  };

  return (
    <div className="flex w-full flex-1 flex-col pb-10">
      <header className="flex w-full min-w-[336px] items-end bg-gray-light-02 px-[20px] py-[30px] sm:justify-between md:px-[24px] lg:px-[102px]">
        <div className="flex w-full flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconButton
                icon={<GoBackIcon />}
                onClick={() => console.log('채팅 버튼 클릭')}
                className="bg-gray-light-02"
              />
              <h3>채팅</h3>
              <ParticipantCounter current={10} />
            </div>
            <div>
              <IconButton
                icon={<HamburgerMenuIcon width={16} height={12} />}
                onClick={() => console.log('메뉴 열기 버튼 클릭')}
                className="bg-gray-light-02"
              />
            </div>
          </div>
          <ChatCard
            variant="chatRoomHeader"
            props={{
              imageUrl: '/images/defaultBookClub.jpg',
              isHost: false,
              title: '독서모임 제목',
              location: '강남역',
              datetime: '12/25(월) 오후 2:00',
              meetingType: 'OFFLINE',
              onClick: () => console.log('헤더 클릭'),
            }}
          />
        </div>
      </header>
      <div className="flex-1 overflow-hidden">
        <ChatBubbleList
          groupedMessages={convertToGroupedMessage(chatHistory)}
          hostId={chatId}
          onProfileClick={() => {}}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <MessageInput value={message} onChange={handleMessageChange} />
      </form>
    </div>
  );
}

export default ChatRoomPage;
