import type { Meta, StoryObj } from '@storybook/react';
import ChatCard from './ChatCard';

const meta = {
  title: 'Components/ChatCard/Atoms',
  component: ChatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatCard>;

export default meta;
type Story = StoryObj<typeof ChatCard>;

export const Box: Story = {
  args: {
    children: '기본 박스',
  },
  render: () => (
    <div className="flex gap-4">
      <ChatCard.Box>기본 박스</ChatCard.Box>
      <ChatCard.Box isHost>호스트 박스</ChatCard.Box>
    </div>
  ),
};

export const Title: Story = {
  args: {
    children: '채팅방 제목',
  },
  render: () => <ChatCard.Title>채팅방 제목</ChatCard.Title>,
};

export const Image: Story = {
  args: {},
  render: () => (
    <div className="flex gap-4">
      <ChatCard.Image url="https://picsum.photos/200" alt="채팅방 이미지" />
      <ChatCard.Image
        url="https://picsum.photos/200"
        alt="호스트 채팅방 이미지"
        isHost
      />
    </div>
  ),
};

export const Location: Story = {
  args: {
    children: '서울 강남구',
  },
  render: () => <ChatCard.Location>서울 강남구</ChatCard.Location>,
};

export const DateTime: Story = {
  args: {
    children: '2024.03.15 토요일 15:00',
  },
  render: () => <ChatCard.DateTime>2024.03.15 토요일 15:00</ChatCard.DateTime>,
};

export const LastMessage: Story = {
  args: {
    children: '안녕하세요! 반갑습니다.',
  },
  render: () => (
    <ChatCard.LastMessage>안녕하세요! 반갑습니다.</ChatCard.LastMessage>
  ),
};

export const LastMessageTime: Story = {
  args: {
    children: '1시간 전',
  },
  render: () => <ChatCard.LastMessageTime>1시간 전</ChatCard.LastMessageTime>,
};
