// 모임 카드 스토리
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card/Club',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// 기본 모임 카드 스토리
export const DefaultCard: Story = {
  args: {
    variant: 'default',
    imageUrl: 'https://picsum.photos/400/300',
    imageAlt: '모임 이미지',
    title: '을지로에서 만나는 독서 모임',
    location: '을지로 3가',
    datetime: '12/14(토) 오전 10:00',
    meetingType: 'FREE',
    status: 'confirmed',
    isLiked: false,
    onLikeClick: () => alert('좋아요 클릭!'),
    current: 5,
    max: 10,
    isPast: false,
    isCanceled: false,
    onClick: () => alert('카드 클릭!'),
    onDelete: () => alert('삭제 버튼 클릭!'),
  },
};

// 취소된 모임 카드 스토리
export const CanceledCard: Story = {
  args: {
    ...DefaultCard.args,
    isCanceled: true,
  },
};

// 지난 모임 카드 스토리
export const PastCard: Story = {
  args: {
    ...DefaultCard.args,
    isPast: true,
  },
};

// 확정된 모임 카드 스토리
export const ConfirmedCard: Story = {
  args: {
    ...DefaultCard.args,
    status: 'confirmed',
  },
};
