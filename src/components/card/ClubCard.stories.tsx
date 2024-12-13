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

const baseArgs = {
  // ClubCard 기본 인터페이스의 속성들
  imageUrl: 'https://picsum.photos/400/300',
  imageAlt: '모임 이미지',
  title: '을지로 독서 모임',
  location: '을지로 3가',
  datetime: '12/14(토) 오전 10:00',
  meetingType: 'FREE',
  isPast: false,
  status: 'confirmed',
  onClick: () => alert('카드 클릭!'),
} as const;

const defaultArgs = {
  ...baseArgs,
  variant: 'defaultClub',
  isLiked: false,
  onLikeClick: () => alert('좋아요 클릭!'),
  isCanceled: false,
  onDelete: () => alert('삭제 버튼 클릭!'),
  current: 5,
  max: 10,
} as const;

const hostedArgs = {
  ...baseArgs,
  variant: 'hostedClub',
  onCancel: () => alert('모임 취소하기 클릭!'),
  reviewScore: 4.5,
} as const;

const participatedArgs = {
  ...baseArgs,
  variant: 'participatedClub',
  isLiked: false,
  onLikeClick: () => alert('좋아요 클릭!'),
  isCanceled: false,
  onDelete: () => alert('삭제 버튼 클릭!'),
  onWriteReview: () => alert('리뷰 작성하기 클릭!'),
  onCancel: () => alert('참여 취소하기 클릭!'),
} as const;

// Default Club Card Stories
export const DefaultMobile: Story = {
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

export const DefaultTablet: Story = {
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

export const DefaultDesktop: Story = {
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

// Hosted Club Card Stories
export const HostedMobile: Story = {
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
  args: hostedArgs,
};

export const HostedTablet: Story = {
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
  args: hostedArgs,
};

export const HostedDesktop: Story = {
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
  args: hostedArgs,
};

// Participated Club Card Stories
export const ParticipatedMobile: Story = {
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
  args: participatedArgs,
};

export const ParticipatedTablet: Story = {
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
  args: participatedArgs,
};

export const ParticipatedDesktop: Story = {
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
  args: participatedArgs,
};
