'use client';

import React from 'react';
import NavButton from './NavButton';

function HeaderBar() {
  const navItems = [
    { href: '/', label: '홈' },
    { href: '/bookclub', label: '책 모임' },
    { href: '/exchange', label: '책 교환' },
    { href: '/wish', label: '찜 목록' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-orange-500 px-4 text-white md:px-7">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <NavButton key={item.href} href={item.href}>
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
