import BorderedBox from '@/components/bordered-box/BorderedBox';
import Image from 'next/image';

function BookClubDetailPage({}) {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      {/* 이미지 영역 */}
      <BorderedBox nonePadding>
        <div className="relative h-[180px] w-full">
          <Image
            src="https://picsum.photos/200/300?random=1"
            alt="북클럽 이미지"
            fill
            className="rounded-3xl object-cover"
          />
        </div>
      </BorderedBox>

      {/* 모임 정보 */}
      <div className="flex flex-col bg-white p-4 shadow-md">
        <div>모임 정보 영역</div>
      </div>

      {/* 모임 상세 설명 */}
      <div className="flex flex-col bg-white p-4 shadow-md">
        <div>모임 상세 설명 영역</div>
      </div>

      {/* 사용자 리뷰 */}
      <div className="flex flex-col bg-white p-4 shadow-md">
        <div>사용자 리뷰 영역</div>
      </div>

      {/* 참여하기 버튼 */}
      <div className="flex justify-center bg-white p-4 shadow-md">
        <button className="rounded bg-orange-500 px-4 py-2 text-white">
          참여하기
        </button>
      </div>
    </div>
  );
}

export default BookClubDetailPage;
