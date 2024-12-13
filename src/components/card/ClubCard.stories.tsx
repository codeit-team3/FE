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
  variant: 'defaultClub',
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
  reviewScore: 4.5,
} as const;

const participatedArgs = {
  ...defaultArgs,
  variant: 'participatedClub',
  onCancel: () => alert('모임 취소하기 클릭!'),
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

// Completed Participated Club Card Stories
export const CompletedParticipatedMobile: Story = {
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
  args: {
    ...participatedArgs,
    isPast: true,
  },
};

export const CompletedParticipatedTablet: Story = {
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
  args: {
    ...participatedArgs,
    isPast: true,
  },
};

export const CompletedParticipatedDesktop: Story = {
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
  args: {
    ...participatedArgs,
    isPast: true,
  },
};
