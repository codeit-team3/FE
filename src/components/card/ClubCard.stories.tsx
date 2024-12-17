// 모임 카드 스토리
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Components/Card/Club',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    bookClubType: {
      control: 'select',
      options: ['FREE', 'FIXED'],
    },
    status: {
      control: 'select',
      options: ['completed', 'scheduled', 'pending', 'confirmed', 'closed'],
    },
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
  bookClubType: 'FREE' as const,
  isPast: false,
  status: 'confirmed' as const,
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

const detailedArgs = {
  ...baseArgs,
  variant: 'detailedClub',
  isLiked: false,
  onLikeClick: () => alert('좋아요 클릭!'),
  current: 5,
  max: 10,
  participants: [
    {
      id: '1',
      name: '참여자1',
      profileImage: 'https://picsum.photos/200/200?random=1',
      profileImageAlt: '참여자1 프로필 이미지',
    },
    {
      id: '2',
      name: '참여자2',
      profileImage: 'https://picsum.photos/200/200?random=2',
      profileImageAlt: '참여자2 프로필 이미지',
    },
    {
      id: '3',
      name: '참여자3',
      profileImage: 'https://picsum.photos/200/200?random=3',
      profileImageAlt: '참여자3 프로필 이미지',
    },
    {
      id: '4',
      name: '참여자4',
      profileImage: 'https://picsum.photos/200/200?random=4',
      profileImageAlt: '참여자4 프로필 이미지',
    },
    {
      id: '5',
      name: '참여자5',
      profileImage: 'https://picsum.photos/200/200?random=5',
      profileImageAlt: '참여자5 프로필 이미지',
    },
  ],
  host: {
    id: 'host1',
    name: '호스트',
    profileImage: 'https://picsum.photos/200/200?random=host',
  },
  isHost: false,
  isParticipant: true,
  hasWrittenReview: false,
  onCancel: () => alert('모임 취소하기 클릭!'),
  onParticipate: () => alert('모임 참여하기 클릭!'),
  onCancelParticipation: () => alert('참여 취소하기 클릭!'),
  onWriteReview: () => alert('리뷰 작성하기 클릭!'),
} as const;

// 책모임, 찜
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

// 내가 만든 모임
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

// 나의 모임 (내가 참여한 모임)
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

// 상세 모임
export const DetailedMobile: Story = {
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
  args: detailedArgs,
};

export const DetailedTablet: Story = {
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
  args: detailedArgs,
};

export const DetailedDesktop: Story = {
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
  args: detailedArgs,
};
