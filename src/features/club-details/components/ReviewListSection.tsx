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

function ReviewListSection() {
  return (
    <section className="flex w-full flex-col gap-2.5 border-t-2 border-gray-200 bg-white p-6">
      <h2 className="text-base font-semibold text-gray-900 md:text-lg">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h2>
      <div className="flex flex-col gap-6">{/* 리뷰 컴포넌트트 */}</div>
    </section>
  );
}
export default ReviewListSection;
