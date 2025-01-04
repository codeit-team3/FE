import type { Meta, StoryObj } from '@storybook/react';
import WrittenReview from './WrittenReview';

// 컴파운드 컴포넌트의 모든 props를 포함하는 타입 정의
interface StoryProps {
  reviewId: number;
  userId: number;
  bookClubId: number;
  rating: number;
  comment: string;
  clubImgUrl: string | undefined;
  clubImgAlt: string | undefined;
  profileImg: string;
  userName: string;
  createdAt: string;
  clubName: string;
  bookClubType: 'FREE' | 'FIXED';
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
  render: (args) => <WrittenReview.Rating ratingCount={args.rating} />,
  args: {
    rating: 4,
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
      profileImage={args.profileImg}
      userName={args.userName}
      createdAt={args.createdAt}
    />
  ),
  args: {
    profileImg:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    userName: '다람쥐',
    createdAt: '2024.01.25',
  },
};

export const ClubImage: Story = {
  render: (args) => (
    <WrittenReview.ClubImage src={args.clubImgUrl} alt={args.clubImgAlt} />
  ),
  args: {
    clubImgUrl:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    clubImgAlt: '모임 이미지',
  },
};

export const MypageReview: Story = {
  render: (args) => (
    <div className="w-[311px] md:w-full">
      <WrittenReview onClickReview={() => alert('리뷰 클릭')}>
        <div className="flex items-center gap-x-6 sm:flex-col sm:items-start sm:gap-y-6 md:flex-row">
          <WrittenReview.ClubImage
            src={args.clubImgUrl}
            alt={args.clubImgAlt}
          />
          <div className="relative flex min-h-[180px] w-[336px] flex-1 flex-col gap-y-1.5 text-sm font-medium text-gray-darker md:w-full">
            <WrittenReview.Rating ratingCount={args.rating} />
            <div className="flex flex-col gap-y-2">
              <WrittenReview.ClubInfo
                clubName={args.clubName}
                bookClubType={args.bookClubType}
              />
              <WrittenReview.Comment text={args.comment} />
              <WrittenReview.UserProfile
                createdAt={args.createdAt}
                className="gap-x-0"
              />
            </div>
          </div>
        </div>
      </WrittenReview>
    </div>
  ),
  args: {
    profileImg:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    userName: '다람쥐',
    rating: 4,
    comment:
      '아침부터 자기발전을 위한 시간을 가져서 좋았어요. 각자의 길 위에서 달려가는 생생한 순간을 공유해주셔서 감사합니다!',
    createdAt: '2024.01.25',
    clubImgUrl:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    clubName: '달램핏 오피스 스트레칭',
    clubImgAlt: '달램핏 이미지',
    bookClubType: 'FIXED',
  },
};
