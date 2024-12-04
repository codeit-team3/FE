import BorderedBox from '@/components/bordered-box/BorderedBox';
import { TextChip } from '@/components/text-chip/TextChip';
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
      <BorderedBox>
        <div className="flex w-full flex-col">
          {/* 상단 정보 영역 */}
          <div className="flex justify-between px-6 pb-6">
            {/* 왼쪽: 모임 정보 */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <h1 className="text-lg font-semibold text-gray-900">
                  달램핏 오피스 스트레칭
                </h1>
                <p className="text-sm font-medium text-gray-700">
                  을지로 3가 서울시 중구 청계천로 100
                </p>
              </div>
              <div className="flex gap-2">
                <TextChip text="1월 7일" />
                <TextChip text="17:30" isDueSoon />
              </div>
            </div>

            {/* 오른쪽: 하트 아이콘 */}
            <div className="text-gray-300">♡</div>
          </div>

          {/* 구분선 */}
          <hr className="mx-1 border-t-2 border-dashed border-gray-200" />

          {/* 하단 정보 영역 */}
          <div className="flex w-full flex-col gap-2 px-6 pt-3">
            <div className="flex flex-col gap-3">
              <div>정원 + 아바타</div>
              <div>프로그레스바</div>
            </div>
            <div className="flex w-full items-center justify-between">
              <span>최소 인원</span>
              <span>최대 인원</span>
            </div>
          </div>
        </div>
      </BorderedBox>

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
