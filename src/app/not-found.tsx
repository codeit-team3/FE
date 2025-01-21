import Button from '@/components/button/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-4">
      <Image
        src="/images/errorImage.png"
        alt="에러 이미지"
        width={300}
        height={200}
        priority
      />

      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-xl font-bold">페이지를 찾을 수 없습니다</h2>
        <p className="text-gray-600">요청하신 페이지가 존재하지 않습니다</p>
      </div>

      <Link href="/">
        <Button
          text="홈으로 돌아가기"
          size="small"
          fillType="solid"
          themeColor="green-normal-01"
          className="hover-dim"
        />
      </Link>
    </div>
  );
}
