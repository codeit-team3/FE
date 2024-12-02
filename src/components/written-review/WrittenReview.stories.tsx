import type { Meta, StoryObj } from '@storybook/react';
import WrittenReview from './WrittenReview';

const meta = {
  title: 'Components/WrittenReview',
  component: WrittenReview,
} satisfies Meta<typeof WrittenReview>;

export default meta;
type Story = StoryObj<typeof WrittenReview>;

export const CreatedReview: Story = {
  args: {
    ratingCount: 4,
    comment:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    profileImage:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    userName: '럽윈즈올',
    createdAt: '2024.01.25',
  },
};
