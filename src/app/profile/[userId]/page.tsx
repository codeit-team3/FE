'use client';

import { ProfilePage } from '@/features/profile/container';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useUserIdFromPath } from '@/lib/hooks/useUserIdFromPath';
import { users } from '@/api/user/react-query/queries';

export default function Profile() {
  const userId = useUserIdFromPath();

  const { queryKey, queryFn } = users.userInfo(userId);
  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  const user = data?.data;

  return <ProfilePage user={user} isMyPage={false} />;
}
