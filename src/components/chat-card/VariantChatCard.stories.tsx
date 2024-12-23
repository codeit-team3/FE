import type { Meta, StoryObj } from '@storybook/react';
import ChatCard from './ChatCard';

const meta = {
  title: 'Components/ChatCard/Variants',
  component: ChatCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    props: {
      isHost: {
        control: 'boolean',
        description: '호스트 여부',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatCard>;

export default meta;
type Story = StoryObj<typeof ChatCard>;

const baseArgs = {
  variant: 'bookClub' as const,
  props: {
    title: '을지로에서 만나는 독서 모임',
    imageUrl: 'https://picsum.photos/200',
    isHost: true,
    currentParticipants: 17,
    lastMessage: '반갑습니다~!',
    lastMessageTime: '10:29',
    unreadCount: 3,
  },
};

// 모바일 버전
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[342px]">
        <Story />
      </div>
    ),
  ],
  args: baseArgs,
};

// 태블릿 버전
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
  args: baseArgs,
};

// 데스크톱 버전
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
  args: baseArgs,
};
