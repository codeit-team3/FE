'use client';

import React from 'react';
import NavButton from './NavButton';
import { NAV_ITEMS } from '@/constants/navigation';
import { usePathname } from 'next/navigation';

function HeaderBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-green-normal-01 px-4 text-white md:px-7">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          {NAV_ITEMS.map((item) => (
            <NavButton
              key={item.id}
              href={item.href}
              isActive={item.id === 'bookco' || pathname === item.href}
            >
              {item.label}
            </NavButton>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <NavButton href="/login">로그인</NavButton>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
