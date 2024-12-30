import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { getMyJoined } from '@/features/profile/api/myJoinedApi';
import { BookClub } from '@/types/bookclubs';

let stompClient: Client | null = null;

export interface ChatMessage {
  id: string;
  bookClubId: string;
  date: string;
  userId: string;
  userNickname: string;
  type: 'CHAT' | 'JOIN' | 'EXIT';
  content: string;
}

export const initializeSocket = async (token: string) => {
  try {
    const { bookClubs } = await getMyJoined({
      order: 'DESC',
      size: 10,
      page: 1,
    });

    const client = new Client({
      webSocketFactory: () =>
        new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws?token=${token}`),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: function (str) {
        console.log('STOMP: ' + str);
      },
    });

    client.onConnect = () => {
      bookClubs.forEach((club: BookClub) => {
        const subscription = client.subscribe(
          `/topic/group-chat/${club.id}`,
          (message) => {
            const chatMessage: ChatMessage = JSON.parse(message.body);
            console.log(`모임 ${club.title}의 새 메시지 수신:`, chatMessage);
          },
        );
        console.log(`모임 ${club.id} 구독 완료:`, subscription.id);
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

  const message = {
    content,
  };

  console.log(`메시지 전송 시도: roomId=${roomId}, content=${content}`);

  try {
    client.publish({
      destination: `/app/group-chat/${roomId}/sendMessage`,
      body: JSON.stringify(message),
    });
    console.log('메시지 전송 성공');
  } catch (error) {
    console.error('메시지 전송 실패:', error);
  }
};
