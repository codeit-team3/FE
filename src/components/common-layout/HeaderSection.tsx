'use client';

import Button from '@/components/button/Button';
import { useRouter } from 'next/navigation';

interface HeaderSectionProps {
  children: React.ReactNode;
  showButton?: boolean;
}

function HeaderSection({ children, showButton = false }: HeaderSectionProps) {
  const router = useRouter();

  return (
    <header className="flex h-[120px] w-full min-w-[336px] items-end bg-green-light-01 px-[20px] py-[30px] sm:justify-between md:px-[24px] lg:px-[102px]">
      <h1
        className="flex-nowrap text-[20px] font-bold leading-[30px] tracking-tighter text-black md:text-2xl"
        aria-labelledby="header-title"
      >
        {children}
      </h1>
      {showButton && (
        <Button
          text="모임 만들기"
          size="small"
          fillType="solid"
          themeColor="green-normal-01"
          onClick={() => router.push('/bookclub/create')}
        />
      )}
    </header>
  );
}

export default HeaderSection;
