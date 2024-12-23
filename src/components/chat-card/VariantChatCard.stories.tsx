import type { Meta, StoryObj } from '@storybook/react';
import ChatCard from './ChatCard';

const meta = {
  title: 'Components/ChatCard/Variants',
  component: ChatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatCard>;

export default meta;
type Story = StoryObj<typeof ChatCard>;

export const BookClub: Story = {
  args: {
    variant: 'bookClub',
    props: {
      title: '을지로에서 만나는 독서 모임',
      imageUrl: 'https://picsum.photos/200',
      isHost: true,
      currentParticipants: 17,
      maxParticipants: 20,
      lastMessage: '반갑습니다~!',
      lastMessageTime: '10:29',
      unreadCount: 3,
    },
  },
};

export const BookClubWithoutHost: Story = {
  args: {
    variant: 'bookClub',
    props: {
      title: '강남 독서 모임',
      imageUrl: 'https://picsum.photos/200',
      isHost: false,
      currentParticipants: 8,
      maxParticipants: 10,
      lastMessage: '안녕하세요!',
      lastMessageTime: '방금 전',
      unreadCount: 1,
    },
  },
};
