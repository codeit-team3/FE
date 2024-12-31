import { ProfilePage } from '@/features/profile/container';
import { mockUser } from '@/mocks/mockDatas';
import React from 'react';

export default function Profile() {
  const user = mockUser;

  return <ProfilePage user={user} isMyPage={false} />;
}
