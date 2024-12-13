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

const defaultArgs = {
  variant: 'default',
  imageUrl: 'https://picsum.photos/400/300',
  imageAlt: '모임 이미지',
  title: '을지로 독서 모임',
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
} as const;

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
  args: defaultArgs,
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
  args: defaultArgs,
};

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
  args: defaultArgs,
};
