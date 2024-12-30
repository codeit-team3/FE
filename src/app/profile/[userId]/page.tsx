import { mockUser } from '@/features/profile/constants/mock';
import { ProfilePage } from '@/features/profile/container';
import React from 'react';

export default function Profile() {
  const user = mockUser;

  return <ProfilePage user={user} isMyPage={false} />;
}
