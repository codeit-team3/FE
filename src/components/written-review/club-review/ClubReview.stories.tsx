import type { Meta, StoryObj } from '@storybook/react';
import ClubReview from './ClubReview';

const meta = {
  title: 'Components/WrittenReview/ClubReview',
  component: ClubReview,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ClubReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratingCount: 4,
    comment:
      '아침부터 자기발전을 위한 시간을 가져서 좋았어요. 각자의 길 위에서 달려가는 생생한 순간을 공유해주셔서 감사합니다!',
    userProfile: {
      profileImage:
        'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
      userName: '다람쥐',
      createdAt: '2024.01.25',
    },
  },
};
