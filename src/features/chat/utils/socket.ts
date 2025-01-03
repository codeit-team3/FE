import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { BookClub } from '@/types/bookclubs';
import apiClient from '@/lib/utils/apiClient';

let stompClient: Client | null = null;

export interface ChatMessage {
  id: number;
  bookClubId: number;
  date: string;
  userId: number;
  userNickname: string;
  type: 'CHAT' | 'JOIN' | 'LEAVE';
  content: string;
  user?: string;
}

export interface HistoryResponse {
  date: string;
  messages: ChatMessage[];
}

export interface ChatHistoryResponse {
  historyResponses: HistoryResponse[];
}

export const initializeSocket = async (token: string) => {
  if (stompClient?.connected) {
    console.log('이미 연결된 소켓이 있습니다.');
    return stompClient;
  }

  try {
    const response = await apiClient.get('/book-clubs/my-joined', {
      params: {
        order: 'DESC',
        size: 10,
        page: 1,
      },
    });

    const { bookClubs } = response.data;

    const client = new Client({
      webSocketFactory: () =>
        new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws?token=${token}`),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      console.log('소켓 연결 성공');

      bookClubs.forEach((club: BookClub) => {
        console.log('구독 시도:', club.id);
        client.subscribe(`/topic/group-chat/${club.id}`, (message) => {
          const chatMessage: ChatMessage = JSON.parse(message.body);
          console.log(`모임 ${club.title}의 새 메시지 수신:`, chatMessage);
        });
      });
    };

    client.onDisconnect = () => {
      console.log('소켓 연결 끊김');
    };

    client.onStompError = (frame) => {
      console.error('Stomp 에러:', frame);
    };

    client.activate();
    stompClient = client;

    return client;
  } catch (error) {
    console.error('모임 정보 조회 실패:', error);
    throw error;
  }
};

export const disconnectSocket = () => {
  if (stompClient) {
    stompClient.deactivate();
    stompClient = null;
  }
};

export const getStompClient = () => {
  if (!stompClient) {
    throw new Error('소켓이 초기화되지 않았습니다.');
  }
  return stompClient;
};

export const sendMessage = (roomId: number, content: string) => {
  const client = getStompClient();

  if (content === '') {
    return;
  }

  console.log(`메시지 전송 시도: roomId=${roomId}, content=${content}`);

  client.publish({
    destination: `/app/group-chat/${roomId}/sendMessage`,
    body: JSON.stringify({ content }),
  });
  console.log('메시지 전송 성공');
};

export const getChatHistory = (roomId: number) => {
  const client = getStompClient();

  return new Promise<ChatHistoryResponse>((resolve, reject) => {
    const subscription = client.subscribe(
      '/user/queue/chatHistory',
      (message) => {
        try {
          const historyData: ChatHistoryResponse = JSON.parse(message.body);
          console.log('채팅 히스토리 수신:', historyData);
          resolve(historyData);
          subscription.unsubscribe();
        } catch (error) {
          console.error('채팅 히스토리 파싱 실패:', error);
          reject(error);
          subscription.unsubscribe();
        }
      },
    );

    try {
      client.publish({
        destination: `/app/group-chat/history/${roomId}`,
        body: JSON.stringify({}),
      });
      console.log('채팅 히스토리 요청 전송');
    } catch (error) {
      console.error('채팅 히스토리 요청 실패:', error);
      subscription.unsubscribe();
      reject(error);
    }
  });
};

export const getRecentChats = () => {
  const client = getStompClient();
  console.log('getRecentChats - 클라이언트 상태:', {
    connected: client.connected,
    active: client.active,
  });

  return new Promise<ChatMessage[]>((resolve, reject) => {
    const subscription = client.subscribe('/user/queue/recent', (message) => {
      console.log('구독 콜백 실행됨');
      try {
        const recentData: ChatMessage[] = JSON.parse(message.body);
        console.log('최신 채팅 데이터:', recentData);
        resolve(recentData);
        subscription.unsubscribe();
      } catch (error) {
        console.error('최신 채팅 파싱 실패:', error);
        reject(error);
        subscription.unsubscribe();
      }
    });

    try {
      console.log('서버로 요청 전송 시도');
      client.publish({
        destination: '/app/group-chat/recent',
        body: JSON.stringify({}),
      });
      console.log('서버로 요청 전송 완료');
    } catch (error) {
      console.error('최신 채팅 요청 실패:', error);
      subscription.unsubscribe();
      reject(error);
    }
  });
};

export const subscribeToChat = (
  roomId: number,
  callback: (message: ChatMessage) => void,
) => {
  const client = getStompClient();
  return client.subscribe(`/topic/group-chat/${roomId}`, (message) => {
    const chatMessage: ChatMessage = JSON.parse(message.body);
    callback(chatMessage);
  });
};

export const isSocketConnected = () => {
  return stompClient?.connected ?? false;
};
