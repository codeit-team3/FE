'use client';

import React from 'react';
import NavButton from './NavButton';
import { NAV_ITEMS } from '@/constants/navigation';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import DropDown from '../drop-down/DropDown';
import { logout } from '@/features/auth/api/auth';
import { showToast } from '../toast/toast';

function HeaderBar() {
  const pathname = usePathname();
  const { isLoggedIn, user } = useAuthStore();
  const router = useRouter();

  const handleDropDownChange = async (value: string | undefined) => {
    if (value === 'LOGOUT') {
      try {
        await logout();
        showToast({ message: '로그아웃 되었습니다 ', type: 'success' });
        router.replace('/bookclub');
      } catch (error) {
        console.error('로그아웃 실패:', error);
      }
    } else if (value === 'MY_PAGE') {
      router.push('/profile');
    }
  };

  return (
    <nav className="w-full bg-green-normal-01 px-4 text-white md:px-7">
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
          {isLoggedIn ? (
            <DropDown
              variant="navbar"
              onChangeSelection={handleDropDownChange}
              imgSrc={user?.image ?? undefined}
            />
          ) : (
            <NavButton href="/login">로그인</NavButton>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
