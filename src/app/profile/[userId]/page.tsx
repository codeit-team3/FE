'use client';

import { usePathname } from 'next/navigation';
import { ProfilePage } from '@/features/profile/container';
import { auths } from '@/api/auth/react-query/queries';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Profile() {
  const pathname = usePathname();
  const userId = Number(pathname?.split('/')[2]);

  const { queryKey, queryFn } = auths.userInfo(userId);
  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  const user = data?.data;
  console.log('user 출력', user);

  return <ProfilePage user={user} isMyPage={false} />;
}
