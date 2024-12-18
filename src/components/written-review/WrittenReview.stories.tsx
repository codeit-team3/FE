import type { Meta, StoryObj } from '@storybook/react';
import WrittenReview from './WrittenReview';

// 컴파운드 컴포넌트의 모든 props를 포함하는 타입 정의
interface StoryProps {
  ratingCount: number;
  comment: string;
  profileImage: string;
  userName: string;
  createdAt: string;
  clubImage: string;
  clubName: string;
  clubImageAlt: string;
  location: string;
}

const meta = {
  title: 'Components/WrittenReview/Base',
  component: WrittenReview,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'WrittenReview 컴포넌트는 컴파운드 패턴으로 구성된 리뷰를 렌더링하는 데 사용됩니다. 하위 컴포넌트는 독립적으로도 활용할 수 있습니다.',
      },
    },
  },
} satisfies Meta<typeof WrittenReview>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Rating: Story = {
  render: (args) => <WrittenReview.Rating ratingCount={args.ratingCount} />,
  args: {
    ratingCount: 4,
  },
};

export const Comment: Story = {
  render: (args) => <WrittenReview.Comment text={args.comment} />,
  args: {
    comment:
      '아침부터 자기발전을 위한 시간을 가져서 좋았어요. 각자의 길 위에서 달려가는 생생한 순간을 공유해주셔서 감사합니다!',
  },
};

export const UserProfile: Story = {
  render: (args) => (
    <WrittenReview.UserProfile
      profileImage={args.profileImage}
      userName={args.userName}
      createdAt={args.createdAt}
    />
  ),
  args: {
    profileImage:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    userName: '다람쥐',
    createdAt: '2024.01.25',
  },
};

export const ClubImage: Story = {
  render: (args) => (
    <WrittenReview.ClubImage src={args.clubImage} alt={args.clubImageAlt} />
  ),
  args: {
    clubImage:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    clubImageAlt: '모임 이미지',
  },
};

export const MypageReview: Story = {
  render: (args) => (
    <div className="w-[311px] md:w-full">
      <WrittenReview>
        <div className="flex flex-col items-center gap-x-6 sm:items-start sm:gap-y-2 md:flex-row">
          <WrittenReview.ClubImage
            src={args.clubImage}
            alt={args.clubImageAlt}
          />
          <div className="flex flex-col justify-start gap-y-1">
            <WrittenReview.Rating ratingCount={args.ratingCount} />
            <WrittenReview.ClubInfo
              clubName={args.clubName}
              location={args.location}
            />
            <WrittenReview.Comment text={args.comment} />
            <WrittenReview.UserProfile
              createdAt={args.createdAt}
              className="gap-x-0"
            />
          </div>
        </div>
      </WrittenReview>
    </div>
  ),
  args: {
    profileImage:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    userName: '다람쥐',
    ratingCount: 4,
    comment:
      '아침부터 자기발전을 위한 시간을 가져서 좋았어요. 각자의 길 위에서 달려가는 생생한 순간을 공유해주셔서 감사합니다!',
    createdAt: '2024.01.25',
    clubImage:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    clubName: '달램핏 오피스 스트레칭',
    clubImageAlt: '달램핏 이미지',
    location: '을지로 3가',
  },
};
