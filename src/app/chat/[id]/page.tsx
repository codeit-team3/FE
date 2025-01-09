'use client';

import React, { useEffect, useState } from 'react';
import ChatBubbleList from '@/features/chat-room/container/chat-bubble-list/ChatBubbleList';
import { usePathname, useRouter } from 'next/navigation';
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
import { useQuery } from '@tanstack/react-query';
import { bookClubs } from '@/api/book-club/react-query';
import { formatDateForUI } from '@/lib/utils/formatDateForUI';
import { getCookie } from '@/features/auth/utils/cookies';
import { initializeSocket } from '@/features/chat/utils/socket';
import MessageIcon from '../../../../public/icons/MessageIcon';

function ChatRoomPage() {
  const pathname = usePathname();
  const chatId = pathname?.split('/').pop() || '';
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatHistoryResponse>({
    historyResponses: [],
  });

  const [isConnected, setIsConnected] = useState(false);

  const { data } = useQuery(
    bookClubs.my()._ctx.joined({ order: 'DESC', page: 1, size: 100 }),
  );

  const bookClubDetail = data?.bookClubs?.find(
    (club: any) => club.id === Number(chatId),
  );

  const router = useRouter();

  const handleGoBack = () => {
    router.push('/chat');
  };

  useEffect(() => {
    const connectSocket = async () => {
      const token = getCookie('auth_token');
      if (token) {
        try {
          const client = await initializeSocket(token);

          let attempts = 0;
          const maxAttempts = 50;

          await new Promise((resolve, reject) => {
            const checkConnection = setInterval(() => {
              if (client?.connected) {
                clearInterval(checkConnection);
                resolve(true);
              }

              attempts++;
              if (attempts >= maxAttempts) {
                clearInterval(checkConnection);
                reject(new Error('소켓 연결 타임아웃'));
              }
            }, 100);
          });

          setIsConnected(true);
        } catch (error) {
          console.error('소켓 연결 실패:', error);
        }
      }
    };

    connectSocket();
  }, []);

  useEffect(() => {
    if (!isConnected) return;

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
      subscription?.unsubscribe();
    };
  }, [chatId, isConnected]);

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
            image: msg.image,
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
    <div className="absolute bottom-0 left-0 right-0 top-[60px] flex justify-center">
      <div className="flex h-full w-full max-w-[996px] flex-col">
        <header className="w-full bg-gray-light-02 px-[20px] py-[30px] sm:justify-between md:px-[24px] lg:px-[102px]">
          <div className="flex w-full flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconButton
                  icon={<GoBackIcon />}
                  onClick={handleGoBack}
                  className="bg-gray-light-02"
                />
                <h3>채팅</h3>
                <ParticipantCounter current={bookClubDetail?.memberCount} />
              </div>
              <div>
                <IconButton
                  icon={<HamburgerMenuIcon width={16} height={12} />}
                  onClick={() => {}}
                  className="bg-gray-light-02"
                />
              </div>
            </div>
            <ChatCard
              variant="chatRoomHeader"
              props={{
                imageUrl:
                  bookClubDetail?.imageUrl || '/images/defaultBookClub.jpg',
                isHost: bookClubDetail?.isHost || false,
                title: bookClubDetail?.title || '',
                location: bookClubDetail?.town || '',
                datetime: bookClubDetail?.targetDate
                  ? formatDateForUI(bookClubDetail.targetDate, 'KOREAN')
                  : '',
                meetingType: bookClubDetail?.meetingType || 'OFFLINE',
                onClick: () => router.push(`/bookclub/${chatId}`),
              }}
            />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <ChatBubbleList
            groupedMessages={convertToGroupedMessage(chatHistory)}
            hostId={chatId}
            onProfileClick={() => {}}
          />
        </div>

        <div className="w-full bg-white p-4">
          <form
            className="flex w-full items-center gap-3"
            onSubmit={handleSubmit}
          >
            <div className="flex-1">
              <MessageInput value={message} onChange={handleMessageChange} />
            </div>
            <IconButton
              icon={<MessageIcon />}
              aria-label="메시지 전송"
              className="h-[52px] w-[52px] bg-green-light-01"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatRoomPage;
