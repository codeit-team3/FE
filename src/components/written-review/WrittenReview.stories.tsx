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
  title: 'Components/WrittenReview',
  component: WrittenReview,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof WrittenReview>;

export default meta;
type Story = StoryObj<StoryProps>;

export const FindClubReview: Story = {
  render: (args) => (
    <WrittenReview>
      <div className="flex flex-col gap-y-2">
        <WrittenReview.Rating ratingCount={args.ratingCount} />
        <WrittenReview.Comment text={args.comment} />
        <WrittenReview.UserProfile
          profileImage={args.profileImage}
          userName={args.userName}
          createdAt={args.createdAt}
        />
      </div>
    </WrittenReview>
  ),
  args: {
    ratingCount: 4,
    comment:
      '아침부터 자기발전을 위한 시간을 가져서 좋았어요. 각자의 길 위에서 달려가는 생생한 순간을 공유해주셔서 감사합니다!',
    profileImage:
      'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
    userName: '다람쥐',
    createdAt: '2024.01.25',
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
