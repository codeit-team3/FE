'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function HeaderBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-orange-500 px-4 text-white md:px-7">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className={`hover:scale-105 md:text-base ${
              pathname === '/' ? 'font-bold text-black' : ''
            }`}
          >
            홈
          </Link>
          <Link
            href="/bookclub"
            className={`hover:scale-105 md:text-base ${
              pathname === '/bookclub' ? 'font-bold text-black' : ''
            }`}
          >
            책 모임
          </Link>
          <Link
            href="/exchange"
            className={`hover:scale-105 md:text-base ${
              pathname === '/exchange' ? 'font-bold text-black' : ''
            }`}
          >
            책 교환
          </Link>
          <Link
            href="/wish"
            className={`hover:scale-105 md:text-base ${
              pathname === '/wish' ? 'font-bold text-black' : ''
            }`}
          >
            찜 목록
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className={`hover:scale-105 md:text-base ${
              pathname === '/login' ? 'font-bold text-black' : ''
            }`}
          >
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
