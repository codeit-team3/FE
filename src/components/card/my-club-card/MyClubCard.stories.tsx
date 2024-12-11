import type { Meta, StoryObj } from '@storybook/react';
import MyClubCard from './MyClubCard';

const meta = {
  title: 'Components/Card/MyClubCard',
  component: MyClubCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MyClubCard>;

export default meta;
type Story = StoryObj<typeof MyClubCard>;

const mockClubMeeting = {
  meetingInfo: {
    title: '을지로에서 만나는 독서 모임',
    location: '을지로 3가',
    datetime: '12/14(토) 오전 10:00',
    category: '자유책',
  },
  imageInfo: {
    url: 'https://picsum.photos/seed/bookclub/800/450',
    isLiked: true,
    onLikeClick: () => alert('좋아요를 눌렀습니다!'),
  },
  clubStatus: {
    isCompleted: false,
    isConfirmed: true,
  },
  actions: {
    onClick: () => alert('카드를 클릭했습니다!'),
    onDelete: () => alert('모임을 삭제했습니다!'),
  },
};

export const Default: Story = {
  args: {
    meeting: mockClubMeeting,
  },
  render: (args) => (
    <div className="w-[344px]">
      <MyClubCard {...args} />
    </div>
  ),
};

export const Completed: Story = {
  args: {
    meeting: {
      ...mockClubMeeting,
      clubStatus: {
        ...mockClubMeeting.clubStatus,
        isCompleted: true,
      },
    },
  },
};

export const Pending: Story = {
  args: {
    meeting: {
      ...mockClubMeeting,
      clubStatus: {
        ...mockClubMeeting.clubStatus,
        isConfirmed: false,
      },
    },
  },
};

export const Canceled: Story = {
  args: {
    meeting: {
      ...mockClubMeeting,
      isCanceled: true,
    },
  },
};
