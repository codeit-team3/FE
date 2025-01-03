import type { Meta, StoryObj } from '@storybook/react';
import ChatBubbleList from './ChatBubbleList';
import { GroupedMessage } from '@/features/chat-room/types/chatBubbleList';
import { useAuthStore } from '@/store/authStore';
import { User } from '@/features/auth/types/user';
import { useEffect } from 'react';

const mockUser: User = {
  teamId: 'team1',
  id: 2,
  email: 'minsu@example.com',
  name: '이민수',
  nickname: '민수',
  description: null,
  image: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const AuthDecorator = (Story: React.ComponentType) => {
  useEffect(() => {
    useAuthStore.setState({
      user: mockUser,
      isLoggedIn: true,
    });
  }, []);

  return <Story />;
};

const meta: Meta<typeof ChatBubbleList> = {
  title: 'Features/ChatRoom/ChatBubbleList',
  component: ChatBubbleList,
  decorators: [AuthDecorator],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ChatBubbleList>;

const mockGroupedMessages: GroupedMessage[] = [
  {
    date: '2024년 1월 15일 월요일',
    messages: [
      {
        id: 1,
        type: 'CHAT',
        userNickname: '김정호',
        userId: 1,
        content: '안녕하세요',
        date: '2024-01-15T10:00:00',
      },
      {
        id: 2,
        type: 'CHAT',
        userNickname: '김정호',
        userId: 1,
        content: '오늘 회의 자료 공유드립니다',
        date: '2024-01-15T10:00:05',
      },
      {
        id: 3,
        type: 'CHAT',
        userNickname: '박유나',
        userId: 3,
        content: '네, 감사합니다!',
        date: '2024-01-15T10:00:10',
      },
      {
        id: 4,
        type: 'CHAT',
        userNickname: '이민수',
        userId: 2,
        content: '네, 확인했습니다',
        date: '2024-01-15T10:01:00',
      },
      {
        id: 5,
        type: 'CHAT',
        userNickname: '이민수',
        userId: 2,
        content: '수정사항이 있을 것 같아요',
        date: '2024-01-15T10:01:10',
      },
      {
        id: 6,
        type: 'CHAT',
        userNickname: '김정호',
        userId: 1,
        content: '어떤 부분인가요?',
        date: '2024-01-15T10:01:30',
      },
      {
        id: 7,
        type: 'CHAT',
        userNickname: '김정호',
        userId: 1,
        content: '회의 시작하겠습니다',
        date: '2024-01-15T10:10:00',
      },
      {
        id: 8,
        type: 'CHAT',
        userNickname: '김정호',
        userId: 1,
        content: '자료 화면에 공유하겠습니다',
        date: '2024-01-15T10:10:05',
      },
    ],
  },
  {
    date: '2024년 1월 16일 화요일',
    messages: [
      {
        id: 9,
        type: 'CHAT',
        userNickname: '김정호',
        userId: 1,
        content: '오늘 회의 시작하겠습니다',
        date: '2024-01-16T09:00:00',
      },
      {
        id: 10,
        type: 'CHAT',
        userNickname: '이민수',
        userId: 2,
        content: '네 알겠습니다',
        date: '2024-01-16T09:01:00',
      },
      {
        id: 11,
        type: 'LEAVE',
        user: '박유나',
        date: '2024-01-16T09:30:00',
      },
    ],
  },
];

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
  args: {
    groupedMessages: mockGroupedMessages,
    hostId: '1',
    onProfileClick: (userId: string | number) => {
      console.log(`프로필 클릭: ${userId}`);
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[700px]">
        <Story />
      </div>
    ),
  ],
  args: {
    groupedMessages: mockGroupedMessages,
    hostId: '1',
    onProfileClick: (userId: string | number) => {
      console.log(`프로필 클릭: ${userId}`);
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[340px]">
        <Story />
      </div>
    ),
  ],
  args: {
    groupedMessages: mockGroupedMessages,
    hostId: '1',
    onProfileClick: (userId: string | number) => {
      console.log(`프로필 클릭: ${userId}`);
    },
  },
};
