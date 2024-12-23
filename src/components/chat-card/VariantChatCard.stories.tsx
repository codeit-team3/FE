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

const chatRoomHeaderArgs = {
  variant: 'chatRoomHeader' as const,
  props: {
    title: '을지로에서 만나는 독서 모임',
    imageUrl: 'https://picsum.photos/200',
    isHost: false,
    location: '을지로 3가',
    datetime: '12/14(토) 오전 10:00',
  },
};

export const ChatRoomHeaderMobile: Story = {
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
  args: chatRoomHeaderArgs,
};

export const ChatRoomHeaderTablet: Story = {
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
  args: chatRoomHeaderArgs,
};

export const ChatRoomHeaderDesktop: Story = {
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
  args: chatRoomHeaderArgs,
};

export const BookClubMobile: Story = {
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

export const BookClubTablet: Story = {
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

export const BookClubDesktop: Story = {
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
