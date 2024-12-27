'use client';

import { ReactNode } from 'react';

interface HeaderSectionProps {
  title: ReactNode;
  actionElement?: ReactNode;
}

function HeaderSection({ title, actionElement }: HeaderSectionProps) {
  return (
    <header className="flex h-[120px] w-full min-w-[336px] items-end bg-green-light-01 px-[20px] py-[30px] sm:justify-between md:px-[24px] lg:px-[102px]">
      <h1
        className="flex-nowrap text-[20px] font-bold leading-[30px] tracking-tighter text-black md:text-2xl"
        aria-labelledby="header-title"
      >
        {title}
      </h1>
      {actionElement}
    </header>
  );
}

export default HeaderSection;
