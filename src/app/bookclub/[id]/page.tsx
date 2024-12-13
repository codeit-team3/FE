import ProgressBar from '@/components/progress-bar/ProgressBar';
import RatingDisplay from '@/components/rating-display/RatingDisplay';
// import WrittenReview from '@/components/written-review/WrittenReview';
import Image from 'next/image';

// const MOCK_REVIEWS = [
//   {
//     id: '1',
//     ratingCount: 4,
//     comment: '두번째 이용이에요! 만족합니다.',
//     userName: '동글동글이',
//     createdAt: '2024.01.25',
//     profileImage: '/images/profile.png',
//   },
//   {
//     id: '2',
//     ratingCount: 4,
//     comment: '두번째 이용이에요! 만족합니다.',
//     userName: '동글동글이',
//     createdAt: '2024.01.25',
//     profileImage: '/images/profile.png',
//   },
//   {
//     id: '3',
//     ratingCount: 3,
//     comment:
//       '강사분도 하시고 ~ ^^ 너무 좋은 공간에서 긴장과 스트레스 모두 잘 풀고 가요 ~ ^^',
//     userName: '모닝러너',
//     createdAt: '2024.01.25',
//     profileImage: '/images/profile.png',
//   },
//   {
//     id: '4',
//     ratingCount: 3,
//     comment: '수업이 단조로워요.',
//     userName: '해보자고',
//     createdAt: '2024.01.25',
//     profileImage: '/images/profile.png',
//   },
// ];

function BookClubDetailPage({}) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-[340px] flex-col items-center justify-center gap-4 pb-[120px] pt-6 md:w-full md:max-w-none md:px-6 lg:pt-10">
        {/* 전체 컨테이너를 md 기준으로 가로 배치 */}
        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
          {/* 이미지 영역 컨테이너 - 고정 너비 유지 */}
          <div className="w-[340px] flex-shrink-0">
            <div className="relative h-[180px] w-full md:h-full">
              <Image
                src="/images/profile.png"
                alt="북클럽 이미지"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* 우측 정보 영역 - 남은 공간 모두 차지 */}
          <div className="flex flex-col gap-3 md:flex-1">
            {/* ~님의 모임 */}
            {/* 모임 카드드 */}
          </div>
        </div>

        {/* 모임 상세 설명 */}
        <div className="flex flex-col px-6">
          <h2 className="text-lg font-semibold text-gray-900">
            모임 상세 설명
          </h2>
          <p className="text-sm font-medium text-gray-700">
            따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데
            이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면
            좋겠어요.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2.5 border-y-2 border-gray-200 bg-white p-6">
          <div className="flex items-center justify-center gap-5 md:gap-[120px] lg:gap-[180px]">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-xl font-semibold">
                <span className="text-gray-900">4.0</span>
                <span className="text-gray-400"> /5</span>
              </div>
              <RatingDisplay ratingCount={4} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="text-gray-700">5점</span>
                <div className="min-w-20 md:min-w-[240px]">
                  <ProgressBar percentage={5} />
                </div>
                <span className="text-gray-400">27</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="text-gray-700">4점</span>
                <div className="min-w-20 md:min-w-[240px]">
                  <ProgressBar percentage={5} />
                </div>
                <span className="text-gray-400">19</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="text-gray-700">3점</span>
                <div className="min-w-20 md:min-w-[240px]">
                  <ProgressBar percentage={5} />
                </div>
                <span className="text-gray-400">2</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="text-gray-700">2점</span>
                <div className="min-w-20 md:min-w-[240px]">
                  <ProgressBar percentage={5} />
                </div>
                <span className="text-gray-400">0</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="text-gray-700">1점</span>
                <div className="min-w-20 md:min-w-[240px]">
                  <ProgressBar percentage={5} />
                </div>
                <span className="text-gray-400">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* 사용자 리뷰 */}
        <div className="flex w-full flex-col gap-2.5 border-t-2 border-gray-200 bg-white p-6">
          <h2 className="text-base font-semibold text-gray-900 md:text-lg">
            이용자들은 이 프로그램을 이렇게 느꼈어요!
          </h2>
          <div className="flex flex-col gap-6">{/* 리뷰 컴포넌트트 */}</div>
        </div>
      </div>
    </div>
  );
}

export default BookClubDetailPage;
