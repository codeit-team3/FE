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
  render: () => (
    <ChatCard.Box isHost>
      <p>ChatCard Box Content</p>
    </ChatCard.Box>
  ),
};

export const Title: Story = {
  render: () => <ChatCard.Title>채팅방 제목</ChatCard.Title>,
};

export const Image: Story = {
  render: () => (
    <ChatCard.Image
      url="https://picsum.photos/200"
      isHost={true}
      alt="채팅방 이미지"
    />
  ),
};

export const Location: Story = {
  render: () => <ChatCard.Location>서울특별시 강남구</ChatCard.Location>,
};

export const DateTime: Story = {
  render: () => <ChatCard.DateTime>2024.03.15 (금) 19:00</ChatCard.DateTime>,
};

export const LastMessage: Story = {
  render: () => <ChatCard.LastMessage>반갑습니다~!</ChatCard.LastMessage>,
};

export const LastMessageTime: Story = {
  render: () => <ChatCard.LastMessageTime>10:29</ChatCard.LastMessageTime>,
};
