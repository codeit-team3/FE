import WrittenReview from '@/components/written-review/WrittenReview';
import { Review, User } from '../../types';
import { formatDateSimple } from '@/lib/utils/dateUtils';
// import { useRouter } from 'next/navigation';

interface MyReviewListProps {
  user: User | null;
  sortBy: string | undefined;
}

const mockReviews: Review[] = [
  {
    reviewId: 1,
    userId: 101,
    bookClubId: 201,
    rating: 4,
    content: '정말 유익한 시간이었어요!',
    clubImgUrl: '/images/defaultBookClub.jpg',
    clubImgAlt: '문학의 밤 독서 모임',
    clubName: '문학의 밤',
    bookClubType: 'FIXED',
    createdAt: '2023-12-01T14:30:00Z',
  },
  {
    reviewId: 2,
    userId: 102,
    bookClubId: 202,
    rating: 3,
    content:
      '다소 아쉬운 부분도 있었지만 재미있었어요.다소 아쉬운 부분도 있었지만 재미있었어요.다소 아쉬운 부분도 있었지만 재미있었어요.다소 아쉬운 부분도 있었지만 재미있었어요.다소 아쉬운 부분도 있었지만 재미있었어요.다소 아쉬운 부분도 있었지만 재미있었어요.다소 아쉬운 부분도 있었지만 재미있었어요.다소 아쉬운 부분도 있었지만 재미있었어요.',
    clubImgUrl: undefined,
    clubImgAlt: '철학과 삶 독서 모임',
    clubName: '철학과 삶',
    bookClubType: 'FREE',
    createdAt: '2023-11-15T18:45:00Z',
  },
  {
    reviewId: 3,
    userId: 103,
    bookClubId: 203,
    rating: 5,
    content: '추리 소설 애호가로서 정말 만족스러웠습니다.',
    clubImgUrl: '/images/defaultBookClub.jpg',
    clubImgAlt: '추리소설 탐독 독서 모임',
    clubName: '추리소설 탐독',
    bookClubType: 'FIXED',
    createdAt: '2023-12-10T20:00:00Z',
  },
  {
    reviewId: 4,
    userId: 104,
    bookClubId: 204,
    rating: 4,
    content: '과학 소설에 대한 흥미가 더 커졌어요.',
    clubImgUrl: undefined,
    clubImgAlt: 'SF소설의 미래 독서 모임',
    clubName: 'SF소설의 미래',
    bookClubType: 'FREE',
    createdAt: '2023-12-05T16:20:00Z',
  },
  {
    reviewId: 5,
    userId: 105,
    bookClubId: 205,
    rating: 3,
    content: '조금 더 다양한 주제가 다뤄졌으면 좋겠어요.',
    clubImgUrl: '/images/defaultBookClub.jpg',
    clubImgAlt: '시의 세계 독서 모임',
    clubName: '시의 세계',
    bookClubType: 'FREE',
    createdAt: '2023-11-25T19:10:00Z',
  },
  {
    reviewId: 6,
    userId: 106,
    bookClubId: 206,
    rating: 4,
    content: '경제적 주제를 다뤄서 흥미로웠습니다.',
    clubImgUrl: undefined,
    clubImgAlt: '경제와 사회 독서 모임',
    clubName: '경제와 사회',
    bookClubType: 'FIXED',
    createdAt: '2023-12-12T14:50:00Z',
  },
  {
    reviewId: 7,
    userId: 107,
    bookClubId: 207,
    rating: 5,
    content: '청소년 문학에 대한 새로운 시각을 얻었어요.',
    clubImgUrl: '/images/defaultBookClub.jpg',
    clubImgAlt: '청소년 문학 클럽',
    clubName: '청소년 문학 클럽',
    bookClubType: 'FIXED',
    createdAt: '2023-11-30T17:00:00Z',
  },
  {
    reviewId: 8,
    userId: 108,
    bookClubId: 208,
    rating: 4,
    content: '문학과 미술의 접점을 새롭게 느꼈어요.',
    clubImgUrl: undefined,
    clubImgAlt: '현대 미술과 문학 독서 모임',
    clubName: '현대 미술과 문학',
    bookClubType: 'FREE',
    createdAt: '2023-12-15T13:40:00Z',
  },
  {
    reviewId: 9,
    userId: 109,
    bookClubId: 209,
    rating: 5,
    content: '원작과 영화 비교가 정말 재미있었어요!',
    clubImgUrl: '/images/defaultBookClub.jpg',
    clubImgAlt: '영화와 책 독서 모임',
    clubName: '영화와 책',
    bookClubType: 'FIXED',
    createdAt: '2023-11-20T18:30:00Z',
  },
  {
    reviewId: 10,
    userId: 110,
    bookClubId: 210,
    rating: 4,
    content: '환상적인 경험이었습니다!',
    clubImgUrl: undefined,
    clubImgAlt: '환상 문학의 향연 독서 모임',
    clubName: '환상 문학의 향연',
    bookClubType: 'FREE',
    createdAt: '2023-12-18T12:00:00Z',
  },
];

export default function MyReviewList({ user, sortBy }: MyReviewListProps) {
  console.log(user);
  console.log(sortBy);

  // const router = useRouter();
  const reviewList = mockReviews;
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[26px]">
      {reviewList.length === 0 ? (
        <div className="flex h-full pt-[255px] text-center text-gray-normal-03">
          <span className="whitespace-pre-wrap">{}</span>
        </div>
      ) : (
        reviewList.map((review, index) => (
          <div key={index} className="md:w-full">
            <WrittenReview>
              <div className="flex items-center gap-x-6 sm:flex-col sm:items-start sm:gap-y-6 md:flex-row">
                <WrittenReview.ClubImage
                  src={review.clubImgUrl || '/images/defaultBookClub.jpg'}
                  alt={review.clubImgAlt}
                />
                <div className="relative flex min-h-[180px] w-[336px] flex-1 flex-col gap-y-1.5 text-sm font-medium text-gray-darker md:w-full">
                  <WrittenReview.Rating ratingCount={review.rating} />
                  <div className="flex flex-col gap-y-2">
                    <WrittenReview.ClubInfo
                      clubName={review.clubName}
                      bookClubType={review.bookClubType}
                    />
                    <WrittenReview.Comment text={review.content} />
                    <WrittenReview.UserProfile
                      createdAt={formatDateSimple(review.createdAt)}
                      className="gap-x-0"
                    />
                  </div>
                </div>
              </div>
            </WrittenReview>
          </div>
        ))
      )}
    </div>
  );
}
