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
    title: '모임 제목 예시',
    location: '서울특별시 강남구',
    datetime: '2024.03.15 (금) 19:00',
    meetingType: 'FREE',
    status: 'confirmed',
    isLiked: false,
    onLikeClick: () => alert('좋아요 클릭!'),
    current: 5,
    max: 10,
    participants: [
      { src: 'https://picsum.photos/200/200?random=1', alt: '참가자1' },
      { src: 'https://picsum.photos/200/200?random=2', alt: '참가자2' },
      { src: 'https://picsum.photos/200/200?random=3', alt: '참가자3' },
    ],
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
