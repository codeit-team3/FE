import type { Meta, StoryObj } from '@storybook/react';
import ChatContainer from './ChatContainer';
import { GroupedMessage } from '@/components/chat-container/types';
import { useAuthStore } from '@/store/authStore';
import { User } from '@/features/auth/types/user';
import { jest } from '@storybook/jest';

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

jest.spyOn(useAuthStore, 'getState').mockImplementation(() => ({
  user: mockUser,
  isLoggedIn: true,
  setIsLoggedIn: () => {},
  setUser: () => {},
  checkLoginStatus: () => {},
}));

const meta: Meta<typeof ChatContainer> = {
  title: 'Components/ChatContainer',
  component: ChatContainer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ChatContainer>;

const mockGroupedMessages: GroupedMessage[] = [
  {
    date: '2024년 1월 15일 월요일',
    messages: [
      {
        type: 'chat',
        sender: '김정호',
        senderId: '1',
        content: '안녕하세요',
        date: '2024-01-15T10:00:00',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'chat',
        sender: '김정호',
        senderId: '1',
        content: '오늘 회의 자료 공유드립니다',
        date: '2024-01-15T10:00:05',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'chat',
        sender: '박유나',
        senderId: '3',
        content: '네, 감사합니다!',
        date: '2024-01-15T10:00:10',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'chat',
        sender: '이민수',
        senderId: '2',
        content: '네, 확인했습니다',
        date: '2024-01-15T10:01:00',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'chat',
        sender: '이민수',
        senderId: '2',
        content: '수정사항이 있을 것 같아요',
        date: '2024-01-15T10:01:10',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'chat',
        sender: '김정호',
        senderId: '1',
        content: '어떤 부분인가요?',
        date: '2024-01-15T10:01:30',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'chat',
        sender: '김정호',
        senderId: '1',
        content: '회의 시작하겠습니다',
        date: '2024-01-15T10:10:00',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'chat',
        sender: '김정호',
        senderId: '1',
        content: '자료 화면에 공유하겠습니다',
        date: '2024-01-15T10:10:05',
        profileImage: 'https://picsum.photos/200',
      },
    ],
  },
  {
    date: '2024년 1월 16일 화요일',
    messages: [
      {
        type: 'chat',
        sender: '김정호',
        senderId: '1',
        content: '오늘 회의 시작하겠습니다',
        date: '2024-01-16T09:00:00',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'chat',
        sender: '이민수',
        senderId: '2',
        content: '네 알겠습니다',
        date: '2024-01-16T09:01:00',
        profileImage: 'https://picsum.photos/200',
      },
      {
        type: 'leave',
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
