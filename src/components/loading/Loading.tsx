import Image from 'next/image';
import Spinner from '../../../public/assets/Spinner.gif';
import { twMerge } from 'tailwind-merge';

interface LoadingProps {
  fullHeight?: boolean;
  className?: string;
}

function Loading({ fullHeight = true, className }: LoadingProps) {
  return (
    <div
      className={twMerge(
        'relative flex h-[100px] w-[100px] items-center justify-center',
        fullHeight ? 'h-full' : '',
        className,
      )}
    >
      <Image src={Spinner} alt="로딩 중..." fill className="object-contain" />
    </div>
  );
}

export default Loading;
